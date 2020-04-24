import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { getTrendingDevelopers } from '../../services/github';
import styles from './TrendingDevelopers.module.css';
import { isEmpty } from '../../utils';

function TrendingDevelopers() {
  const history = useHistory();
  const [trendingDevelopers, setTrendingDevelopers] = useState();

  useEffect(() => {
    async function fetch() {
      try {
        const result = await getTrendingDevelopers();
        setTrendingDevelopers(result);
      } catch (err) {
        // Fail silently
        setTrendingDevelopers([]);
      }
    }

    fetch();
  }, []);

  const goTo = useCallback((username) => (e) => {
    e.preventDefault();
    history.push(`/${username}`);
  }, [history]);

  return (
    <div className={styles.trendingDevelopers}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Discover trending developers
        </h2>
      </header>

      {trendingDevelopers && !isEmpty(trendingDevelopers) && (
        <ul className={styles.list}>
          {trendingDevelopers.map(({ username }) => (
            <li
              key={username}
              className={styles.item}
            >
              <a
                href={`/${username}`}
                title={username}
                data-ref="trending-developer-link"
                className={styles.link}
                onClick={goTo(username)}
              >
                {username}
              </a>
            </li>
          ))}
        </ul>
      )}

      {trendingDevelopers && isEmpty(trendingDevelopers) && (
        <div>
          Trending developer list is empty
          {' '}
          <span
            role="img"
            aria-label="Happy"
          >
            😊
          </span>
          {' '}
          Retry later!
        </div>
      )}
    </div>
  );
}

export default TrendingDevelopers;
