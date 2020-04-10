import React from 'react';
import PropTypes from 'prop-types';
import './UserCard.css';

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
    <article className="UserCard">
      <header className="UserCard-header">
        <figure className="UserCard-figure">
          <img
            src={avatar_url}
            title={`${name} avatar`}
            alt={`${name} avatar`}
          />
        </figure>

        <div className="UserCard-header-content">
          <h2 className="UserCard-name">
            {name}
          </h2>
          <h3 className="UserCard-login">
            {login}
          </h3>
          {
            company && (
              <h4 className="UserCard-company">
                {company}
              </h4>
            )
          }
        </div>
      </header>

      {
        bio && (
          <div className="UserCard-content">
            <p className="UserCard-bio">
              {bio}
            </p>
          </div>
        )
      }

      <ul className="UserCard-stats">
        <li className="UserCard-stats-item">
          <strong>
            {followers}
          </strong>
          <div>
            Followers
          </div>
        </li>
        <li className="UserCard-stats-item">
          <strong>
            {public_gists}
          </strong>
          <div>
            Gists
          </div>
        </li>
        <li className="UserCard-stats-item">
          <strong>
            {public_repos}
          </strong>
          <div>
            Repositories
          </div>
        </li>
      </ul>
    </article>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  company: PropTypes.string,
  avatar_url: PropTypes.string.isRequired,
  bio: PropTypes.string,
  followers: PropTypes.number.isRequired,
  public_gists: PropTypes.number.isRequired,
  public_repos: PropTypes.number.isRequired,
};

UserCard.defaultProps = {
  company: null,
  bio: null,
};

name;
login;
company, optional;
avatar_url;
bio, optional;
followers;
public_gists;
public_repos;
