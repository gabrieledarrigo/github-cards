const URL = "https://api.github.com";

export async function getUser(username) {
    return await (await fetch(`${URL}/users/${username}`)).json()
}
