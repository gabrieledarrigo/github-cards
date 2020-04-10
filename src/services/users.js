const URL = 'https://api.github.com';

export default async function getUser(username) {
  const response = await window.fetch(`${URL}/users/${username}`);
  return response.json();
}
