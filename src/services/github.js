function checkResponse(response) {
  if (response.status !== 200) {
    const err = new Error(response.statusText);
    err.response = response;
    throw err;
  }
}

export async function getUser(username) {
  const URL = 'https://api.github.com';

  const response = await window.fetch(`${URL}/users/${username}`);
  checkResponse(response);

  return response.json();
}

export async function getTrendingDevelopers() {
  const URL = 'https://github-trending-api.now.sh/developers';

  const response = await window.fetch(URL);
  checkResponse(response);

  return response.json();
}
