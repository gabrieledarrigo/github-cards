import React from 'react';
import UserCard from './UserCard';
import renderer from 'react-test-renderer';

describe('UserCard', () => {
  const props = {
    avatar_url: 'https://avatars1.githubusercontent.com/u/1985555?v=4',
    bio: 'I\'m a guy (:robot:) with a strong passion for programming and cutting-edge web technologies! I :heart: comics, cinema, sports, video games and my little Debby!',
    blog: 'http://www.acirdesign.com',
    company: 'MotorK / @ripliveit ',
    created_at: '2012-07-16T16:36:03Z',
    email: null,
    events_url: 'https://api.github.com/users/gabrieledarrigo/events{/privacy}',
    followers: 26,
    followers_url: 'https://api.github.com/users/gabrieledarrigo/followers',
    following: 21,
    following_url: 'https://api.github.com/users/gabrieledarrigo/following{/other_user}',
    gists_url: 'https://api.github.com/users/gabrieledarrigo/gists{/gist_id}',
    gravatar_id: '',
    hireable: true,
    html_url: 'https://github.com/gabrieledarrigo',
    id: 1985555,
    location: 'Rho (Milano)',
    login: 'gabrieledarrigo',
    name: 'Gabriele D\'Arrigo',
    node_id: 'MDQ6VXNlcjE5ODU1NTU=',
    organizations_url: 'https://api.github.com/users/gabrieledarrigo/orgs',
    public_gists: 12,
    public_repos: 30,
    received_events_url: 'https://api.github.com/users/gabrieledarrigo/received_events',
    repos_url: 'https://api.github.com/users/gabrieledarrigo/repos',
    site_admin: false,
    starred_url: 'https://api.github.com/users/gabrieledarrigo/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/gabrieledarrigo/subscriptions',
    type: 'User',
    updated_at: '2019-06-10T14:33:40Z',
    url: 'https://api.github.com/users/gabrieledarrigo',
  };

  it('should render correctly', () => {
    const tree = renderer.create(
      <UserCard {...props} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});