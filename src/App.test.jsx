import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { getUser } from './services/github';
import App from './App';
import UserForm from './components/user-form/UserForm';
import UserCard from './components/user-card/UserCard';

jest.mock('./services/github');

describe('App', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    const div = window.document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should fetch a GitHub profile when a user searches for a specific username', () => {
    const wrapper = shallow(
      <App />,
    );

    wrapper.find(UserForm).prop('onSubmit')({
      username: 'foo',
    });

    expect(getUser).toHaveBeenCalledWith('foo');
  });

  it('renders a UserCard when a user is found', async () => {
    getUser.mockResolvedValue({
      name: 'Gabriele D\'Arrigo',
      login: 'gabrieledarrigo',
      company: 'MotorK / @ripliveit ',
      avatar_url: 'https://avatars1.githubusercontent.com/u/1985555?v=4',
      bio: 'I\'m a guy (:robot:) with a strong passion for programming and cutting-edge web technologies!',
      followers: 26,
      public_gists: 12,
      public_repos: 30,
    });

    const wrapper = shallow(
      <App />,
    );

    await wrapper.find(UserForm).prop('onSubmit')({
      username: 'foo',
    });

    expect(wrapper.find(UserCard)).toHaveLength(1);
  });

  it('renders an error message when a user cannot be found', async () => {
    getUser.mockRejectedValue(new Error('Not Found'));

    const wrapper = shallow(
      <App />,
    );

    await wrapper.find(UserForm).prop('onSubmit')({
      username: 'bar',
    });

    const error = wrapper
      .findWhere((node) => node
        .text()
        .includes('Your user cannot be found. Please retry'))
      .first();

    expect(error).toHaveLength(1);
  });
});
