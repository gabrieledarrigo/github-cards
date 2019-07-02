import React from 'react';
import PropTypes from 'prop-types';

export default function UserCard({
  name,
  login,
  company,
  avatar_url,
  bio,
  followers,
  public_gists,
  public_repos,
}) {
  return (
    <article>
      <header>
        <figure>
          <img src={avatar_url} title={`${name} avatar`} alt={`${name} avatar`} />
        </figure>
        <h2>
          {name}
        </h2>
        <h3>
          {login}
        </h3>
        {
          company && (
            <h4>
              {company}
            </h4>
          )
        }
      </header>

      <div>
        <p>
          {bio}
        </p>
        <ul>
          <li>
            Followers: {followers}
          </li>
          <li>
            Gists: {public_gists}
          </li>
          <li>
            Repository: {public_repos}
          </li>
        </ul>
      </div>
    </article>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  public_gists: PropTypes.number.isRequired,
  public_repos: PropTypes.number.isRequired,
};
