import s from './styles.module.scss';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import GameButton from './../ui/GameButton/GameButton';

export default function Videos() {
  return (
    <section className={s.videos}>
      <h1 className={`${s.videosHeading} horroroid`}>
        Ready to test your nerves?
      </h1>
      <div className={s.videosContainer}>
        <p className={s.videosDescriptionParagraphMobile}>
          Step into the darkness and feel the fear unfold. Watch our game
          trailers and experience the horror coming to life… Click and watch-if
          you dare.
        </p>
        <LiteYouTubeEmbed
          id="r6WqezmOMc4"
          title="YouTube video player"
          poster="maxresdefault"
        />
      </div>
      <div className={s.videosDescription}>
        <p className={s.videosDescriptionParagraph}>
          Step into the darkness and feel the fear unfold. Watch our game
          trailers and experience the horror coming to life… Click and watch-if
          you dare.
        </p>
        <GameButton
          className={s.videosDescriptionButton}
          text={'Watch more'}
          scheme="schemeTwo"
          link="https://www.youtube.com"
        />
      </div>
    </section>
  );
}