import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import UserCard from './UserCard';

describe('UserCard', () => {
  const props = {
    name: 'Gabriele D\'Arrigo',
    login: 'gabrieledarrigo',
    company: 'MotorK / @ripliveit ',
    avatarUrl: 'https://avatars1.githubusercontent.com/u/1985555?v=4',
    bio: 'I\'m a guy (:robot:) with a strong passion for programming and cutting-edge web technologies!',
    followers: 26,
    publicGists: 12,
    publicRepos: 30,
  };

  beforeEach(() => {
    jest.spyOn(window.location, 'assign').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = renderer.create(
      <UserCard {...props} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should open the related profile page on GitHub', () => {
    const wrapper = shallow(
      <UserCard {...props} />,
    );

    wrapper.simulate('click');

    expect(window.location.assign).toHaveBeenCalledWith(`https://www.github.com/${props.login}`);
  });
});
