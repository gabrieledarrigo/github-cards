import isEmpty from '.';

describe('isEmpty', () => {
  describe('case string', () => {
    it('it should return true', () => {
      expect(isEmpty('')).toBe(true);
    });

    it('it should return false', () => {
      expect(isEmpty('test')).toBe(false);
    });
  });

  describe('case array', () => {
    it('it should return true', () => {
      expect(isEmpty([])).toBe(true);
    });

    it('it should return false', () => {
      expect(isEmpty([0])).toBe(false);
    });
  });

  describe('case object', () => {
    it('it should return true', () => {
      expect(isEmpty({})).toBe(true);
    });

    it('it should return false', () => {
      expect(isEmpty({ value: 0 })).toBe(false);
    });
  });

  describe('case error', () => {
    it('it should trown and error', () => {
      expect(isEmpty).toThrowError('Entry not type obect or array');
    });
  });
});
