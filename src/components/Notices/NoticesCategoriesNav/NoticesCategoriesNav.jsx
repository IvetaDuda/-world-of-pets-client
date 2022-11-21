import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './NoticesCategoriesNav.module.scss';
import { useLocation } from 'react-router-dom/dist';
import sprite from '../../../images/symbol-defs.svg';

const link = [
  { to: '/notices/lost-found', text: 'Lost/Found' },
  { to: '/notices/for-free', text: 'In good hands' },
  { to: '/notices/sell', text: 'Sell' }
];

const linkAuth = [
  { to: '/notices/favorite', text: 'Favorite ads' },
  { to: '/notices/own', text: 'My ads' }
];

const NoticesCategoriesNav = () => {
  const isLogged = useSelector((state) => state.users.isLogged);
  let location = useLocation();

  return (
    <div className={styles.NoticesCategoriesNav__Container}>
      <ul className={styles.NoticesCategoriesNav__List}>
        {link.map((el) => {
          return (
            <li key={Math.random()} className={styles.NoticesCategoriesNav__Item}>
              <NavLink
                to={el.to}
                className={
                  location.pathname === el.to ? `${styles.NoticesCategoriesNav__Button} ${styles.active}` : styles.NoticesCategoriesNav__Button
                }
              >
                <span>{el.text}</span>
              </NavLink>
            </li>
          );
        })}
        {isLogged ? (
          <>
            {linkAuth.map((el) => {
              return (
                <li key={Math.random()} className={styles.NoticesCategoriesNav__Item}>
                  <NavLink
                    to={el.to}
                    className={
                      location.pathname === el.to ? `${styles.NoticesCategoriesNav__Button} ${styles.active}` : styles.NoticesCategoriesNav__Button
                    }
                  >
                    <span>{el.text}</span>
                  </NavLink>
                </li>
              );
            })}
          </>
        ) : null}
      </ul>
    </div>
  );
};

export default NoticesCategoriesNav;
