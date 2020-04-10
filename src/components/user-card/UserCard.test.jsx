import React from 'react';
import renderer from 'react-test-renderer';
import UserCard from './UserCard';

describe('UserCard', () => {
  const props = {
    name: 'Gabriele D\'Arrigo',
    login: 'gabrieledarrigo',
    company: 'MotorK / @ripliveit ',
    avatarUrl: 'https://avatars1.githubusercontent.com/u/1985555?v=4',
    bio: 'I\'m a guy (:robot:) with a strong passion for programming and cutting-edge web technologies! I :heart: comics, cinema, sports, video games and my little Debby!',
    followers: 26,
    publicGists: 12,
    publicRepos: 30,
  };

  it('should render correctly', () => {
    const tree = renderer.create(
      <UserCard {...props} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
