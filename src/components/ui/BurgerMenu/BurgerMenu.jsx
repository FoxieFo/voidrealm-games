import s from './styles.module.scss';

import instagram from './../../../assets/img/icons/instagram.svg';
import tiktok from './../../../assets/img/icons/tiktok.svg';
import youtube from './../../../assets/img/icons/youtube.svg';

export default function BurgerMenu({ links }) {
  return (
    <div className={s.menu}>
      <input
        type="checkbox"
        id="burger-checkbox"
        className={s.burgerCheckbox}
      />
      <label htmlFor="burger-checkbox" className={s.burger}></label>
      <ul className={s.menuList}>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.link} className={s.menuItem}>
              {link.text}
            </a>
          </li>
        ))}
        <ul className={s.burgerIcons}>
          <li className={s.burgerIconsItem}>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="instagram" />
            </a>
          </li>
          <li className={s.burgerIconsItem}>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tiktok} alt="tiktok" />
            </a>
          </li>
          <li className={s.burgerIconsItem}>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} alt="youtube" />
            </a>
          </li>
        </ul>
      </ul>
    </div>
  );
}
