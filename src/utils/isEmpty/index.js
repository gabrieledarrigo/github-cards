export default function isEmpty(entry) {
  if (Array.isArray(entry) || typeof entry === 'string') {
    return entry.length === 0;
  }

  if (typeof entry === 'object') {
    return Object.keys(entry).length === 0;
  }

  throw new Error('Entry not type obect or array');
}
