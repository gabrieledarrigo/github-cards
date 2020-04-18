import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { getUser } from './services/github';
import App from './App';
import UserForm from './components/user-form/UserForm';
import UserCard from './components/user-card/UserCard';

jest.mock('./services/github');

const history = {
  push: jest.fn(),
};

describe('App', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', async () => {
    await act(async () => {
      await mount(
        <App
          history={history}
          match={{
            params: {
              username: 'foo',
            },
          }}
        />,
      );
    });
  });

  it('should fetch a GitHub profile when the username match params is defined', async () => {
    await act(async () => {
      await mount(
        <App
          history={history}
          match={{
            params: {
              username: 'foo',
            },
          }}
        />,
      );
    });

    expect(getUser).toHaveBeenCalledWith('foo');
  });

  it('should route to /:username when a user submit the UserForm', () => {
    const wrapper = shallow(
      <App
        history={history}
        match={{
          params: {
            username: 'foo',
          },
        }}
      />,
    );

    wrapper.find(UserForm).prop('onSubmit')({
      username: 'foo',
    });

    expect(history.push).toHaveBeenCalledWith('/foo');
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

    let wrapper;
    await act(async () => {
      wrapper = await mount(
        <App
          history={history}
          match={{
            params: {
              username: 'foo',
            },
          }}
        />,
      );
    });

    wrapper.update();
    expect(wrapper.find(UserCard)).toHaveLength(1);
  });

  it('renders an error message when a user cannot be found', async () => {
    getUser.mockRejectedValue(new Error('Not Found'));

    let wrapper;
    await act(async () => {
      wrapper = await mount(
        <App
          history={history}
          match={{
            params: {
              username: 'foo',
            },
          }}
        />,
      );
    });

    wrapper.update();
    const error = wrapper
      .findWhere((node) => node
        .text()
        .includes('Your user cannot be found. Please retry'))
      .first();

    expect(error).toHaveLength(1);
  });
});
