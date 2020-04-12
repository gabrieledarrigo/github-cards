import { getUser, getTrendingDevelopers } from './github';

describe('github', () => {
  beforeEach(() => {
    jest.spyOn(window, 'fetch').mockResolvedValue({
      status: 200,
      json() {},
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getUser', () => {
    it('should fetch a user given its username', async () => {
      await getUser('foo');

      expect(window.fetch).toHaveBeenCalledWith('https://api.github.com/users/foo');
    });

    it('should throw an error on a response with status code different from 200', async () => {
      window.fetch.mockResolvedValue({
        status: 404,
        statusText: 'Not Found',
      });

      await expect(getUser('foo')).rejects.toThrow('Not Found');
    });
  });

  describe('getTrendingDevelopers', () => {
    it('should fetch a list of trending developers', async () => {
      await getTrendingDevelopers();

      expect(window.fetch).toHaveBeenCalledWith('https://github-trending-api.now.sh/developers');
    });

    it('should throw an error on a response with status code different from 200', async () => {
      window.fetch.mockResolvedValue({
        status: 400,
        statusText: 'Bad Requests',
      });

      await expect(getTrendingDevelopers()).rejects.toThrow('Bad Requests');
    });
  });
});
