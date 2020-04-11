const URL = 'https://api.github.com';

export default async function getUser(username) {
  const response = await window.fetch(`${URL}/users/${username}`);

  if (response.status !== 200) {
    const err = new Error(response.statusText);
    err.response = response;
    throw err;
  }

  return response.json();
}
