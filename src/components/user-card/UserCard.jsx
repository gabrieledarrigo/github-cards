/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './UserCard.module.css';

export default function UserCard({
  name,
  login,
  company,
  avatarUrl,
  bio,
  followers,
  publicGists,
  publicRepos,
}) {
  const goToProfilePage = useCallback(() => {
    window.location.assign(`https://www.github.com/${login}`);
  }, [login]);

  return (
    <article
      className={styles.userCard}
      onClick={goToProfilePage}
    >
      <header className={styles.header}>
        <figure className={styles.figure}>
          <img
            src={avatarUrl}
            title={`${name} avatar`}
            alt={`${name} avatar`}
          />
        </figure>

        <div className={styles.headerContent}>
          <h2 className={styles.name}>
            {name}
          </h2>
          <h3 className={styles.login}>
            {login}
          </h3>
          {company && (
            <h4 className={styles.company}>
              {company}
            </h4>
          )}
        </div>
      </header>

      {bio && (
        <div className={styles.content}>
          <p className={styles.bio}>
            {bio}
          </p>
        </div>
      )}

      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <strong className={styles.statsValue}>
            {followers}
          </strong>
          <div className={styles.statsName}>
            Followers
          </div>
        </li>
        <li className={styles.statsItem}>
          <strong className={styles.statsValue}>
            {publicGists}
          </strong>
          <div className={styles.statsName}>
            Gists
          </div>
        </li>
        <li className={styles.statsItem}>
          <strong className={styles.statsValue}>
            {publicRepos}
          </strong>
          <div className={styles.statsName}>
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
  avatarUrl: PropTypes.string.isRequired,
  bio: PropTypes.string,
  followers: PropTypes.number.isRequired,
  publicGists: PropTypes.number.isRequired,
  publicRepos: PropTypes.number.isRequired,
};

UserCard.defaultProps = {
  company: null,
  bio: null,
};
