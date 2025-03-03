import s from './styles.module.scss';

import GameButton from './../ui/GameButton/GameButton';

export default function Videos() {
  return (
    <section className={s.videos}>
      <h1 className={`${s.videosHeading} horroroid`}>
        Ready to test your nerves?
      </h1>
      <div className={s.videosContainer}>
        <iframe
          className={s.videosContainerVideo}
          src="https://www.youtube.com/embed/ae97QwsHiwQ?start=2"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className={s.videosDescriptionParagraphMobile}>
          Step into the darkness and feel the fear unfold. Watch our game
          trailers and experience the horror coming to life… Click and watch-if
          you dare.
        </p>
        <iframe
          className={s.videosContainerVideo}
          src="https://www.youtube.com/embed/uXc2JAwrFYo"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
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
          link="https://www.youtube.com/channel/UClETMGdn-gOyL-iQtpqD0sQ"
        />
      </div>
    </section>
  );
}
