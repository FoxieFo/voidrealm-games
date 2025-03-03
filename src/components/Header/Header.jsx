import s from './styles.module.scss';

import logo from './../../assets/img/logo/logo.svg';
import Button from './../ui/Button/Button';
import BurgerMenu from '../ui/BurgerMenu/BurgerMenu';

export default function Header() {
  const links = [
    {
      text: 'Games',
      link: '/',
    },
    {
      text: 'News',
      link: '/',
    },
    {
      text: 'About Us',
      link: '/',
    },
    {
      text: 'Our Story',
      link: '/',
    },
    {
      text: 'Contacts',
      link: '/',
    },
  ];

  return (
    <header className={s.wrapper}>
      <div className={s.header}>
        <div>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <ul className={s.headerList}>
          {links.map((link, index) => (
            <Button key={index} text={link.text} link={link.link} />
          ))}
        </ul>
        <div className={s.headerBurger}>
          <BurgerMenu links={links} />
        </div>
      </div>
    </header>
  );
}
