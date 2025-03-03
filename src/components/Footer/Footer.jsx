import s from './styles.module.scss';

import instagram from '../../assets/img/icons/instagram-footer.svg';
import tiktok from '../../assets/img/icons/tiktok-footer.svg';
import youtube from '../../assets/img/icons/youtube-footer.svg';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footerWrapper}>
        <div className={s.footerTry}>
          <h1 className={s.footerTryHeading}>Have you tried the game yet?</h1>
          <div className={s.footerTryLinks}>
            <ul className={s.footerTryLinksList}>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Support</a>
              </li>
              <li>
                <a href="">Contacts</a>
              </li>
            </ul>
            <ul className={s.footerTryLinksList}>
              <li>
                <a href="">Games</a>
              </li>
              <li>
                <a href="">Steam</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={s.footerJoin}>
          <div className={s.block}>
            <h1 className={s.blockHeading}>Join us</h1>
            <ul className={s.blockList}>
              <li className={s.blockListItem}>New Game</li>
              <li className={s.blockListItem}>Games</li>
              <li className={s.blockListItem}>Games</li>
            </ul>
          </div>
          <a
            className={s.instagram}
            href="https://www.instagram.com/ajb_studio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="instagram" />
          </a>
          <a
            className={s.tiktok}
            href="https://www.tiktok.com/@ajbgamesstudio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={tiktok} alt="tiktok" />
          </a>
          <a
            className={s.youtube}
            href="https://www.youtube.com/@ajbgamesstudio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} alt="youtube" />
          </a>
        </div>
      </div>
      <p className={s.footerRights}>© AJB GAMES STUDIO. All right resarved</p>
    </footer>
  );
}
