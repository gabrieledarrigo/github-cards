import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import TrendingDevelopers from './TrendingDevelopers';
import { getTrendingDevelopers } from '../../services/github';

jest.mock('../../services/github', () => ({
  getTrendingDevelopers: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

const data = [
  {
    username: 'rmosolgo',
    name: 'Robert Mosolgo',
    url: 'https://github.com/rmosolgo',
    avatar: 'https://avatars2.githubusercontent.com/u/2231765',
    repo: {
      name: 'graphql-ruby',
      description: 'Ruby implementation of GraphQL',
      url: 'https://github.com/rmosolgo/graphql-ruby',
    },
  },
  {
    username: 'lauragift21',
    name: 'Egwuenu Gift',
    url: 'https://github.com/lauragift21',
    avatar: 'https://avatars0.githubusercontent.com/u/17781315',
    repo: {
      name: 'awesome-learning-resources',
      description: '🔥Awesome list of resources on Web Development.',
      url: 'https://github.com/lauragift21/awesome-learning-resources',
    },
  },
];

describe('TrendingDevelopers', () => {
  beforeEach(() => {
    getTrendingDevelopers.mockResolvedValue(data);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', async () => {
    let wrapper;
    await act(async () => {
      wrapper = await mount(
        <TrendingDevelopers />,
      );
    });

    wrapper.unmount();
  });

  it('should fetch all trending developers when it mounts', async () => {
    await act(async () => {
      await mount(
        <TrendingDevelopers />,
      );
    });

    expect(getTrendingDevelopers).toHaveBeenCalled();
  });

  it('should render a link for each trending developer', async () => {
    let wrapper;
    await act(async () => {
      wrapper = await mount(
        <TrendingDevelopers />,
      );
    });

    wrapper.update();
    const links = wrapper.find('a[data-ref="trending-developer-link"]');

    expect(links).toHaveLength(data.length);
    links.forEach((link) => {
      expect(data.find(({ username }) => link.text() === username).username).toEqual(link.text());
    });
  });

  it('should render an error message when trending developers array is empty', async () => {
    getTrendingDevelopers.mockResolvedValue([]);

    let wrapper;
    await act(async () => {
      wrapper = await mount(
        <TrendingDevelopers />,
      );
    });

    wrapper.update();
    const error = wrapper
      .findWhere((node) => node
        .text()
        .includes('Trending developer list is empty'))
      .first();

    expect(error).toHaveLength(1);
  });
});
