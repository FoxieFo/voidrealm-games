//960px — tablet version breakpoint

import s from './styles.module.scss';

import GameButton from '../ui/GameButton/GameButton';
import instagram from './../../assets/img/icons/instagram.svg';
import tiktok from './../../assets/img/icons/tiktok.svg';
import youtube from './../../assets/img/icons/youtube.svg';

//dummy data
import aboutImg from './../../assets/img/dummy/aboutus.png';
import team from './../../assets/img/dummy/team.jpg';

export default function AboutUs() {
  return (
    <section className={s.aboutus}>
      <div className={s.aboutusInfo}>
        <div className={s.aboutusInfoContent}>
          <h1 className={`${s.aboutusInfoContentHeading} horroroid`}>
            About Us
          </h1>
          <p className={s.aboutusInfoContentParagraph}>
            We are a game development agency crafting immersive horror
            experiences. Our goal is to create terrifying worlds, unforgettable
            stories, and spine-chilling gameplay. Whether it's psychological
            horror or intense survival challenges, we bring fear to life.
          </p>
        </div>
        <img className={s.aboutusInfoImg} src={team} alt="our team" />
      </div>
      <div className={s.aboutusClickable}>
        <GameButton
          text="Read more"
          scheme="schemeTwo"
          className={s.aboutusClickableButton}
        />
        <ul className={s.aboutusClickableLinksList}>
          <li className={s.aboutusClickableLinksListItem}>
            <a
              href="https://www.instagram.com/ajb_studio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="instagram" />
            </a>
          </li>
          <li className={s.aboutusClickableLinksListItem}>
            <a
              href="https://www.tiktok.com/@ajbgamesstudio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tiktok} alt="tiktok" />
            </a>
          </li>
          <li className={s.aboutusClickableLinksListItem}>
            <a
              href="https://www.youtube.com/@ajbgamesstudio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} alt="youtube" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
