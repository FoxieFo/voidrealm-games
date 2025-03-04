import { useState } from "react";
import s from "./styles.module.scss";
import GameButton from "./../ui/GameButton/GameButton";

const videos = [
  {
    id: 1,
    thumbnail: "https://img.youtube.com/vi/tvTsUs0n9zw/hqdefault.jpg",
    url: "https://www.youtube.com/embed/tvTsUs0n9zw?si=Q6Sd9tHMU6jwle1V",
  },
  {
    id: 2,
    thumbnail: "https://img.youtube.com/vi/r6WqezmOMc4/hqdefault.jpg",
    url: "https://www.youtube.com/embed/r6WqezmOMc4?si=CI9wa_01Vpq5EYNQ",
  },
];

export default function Videos() {
  const [loadedVideos, setLoadedVideos] = useState({});

  const handleLoadVideo = (id) => {
    setLoadedVideos((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className={s.videos}>
      <h1 className={`${s.videosHeading} horroroid`}>
        Ready to test your nerves?
      </h1>
      <div className={s.videosContainer}>
        {videos.map((video) => (
          <div key={video.id} className={s.videoWrapper}>
            {loadedVideos[video.id] ? (
              <iframe
                className={s.videosContainerVideo}
                src={video.url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div
                className={s.videoPlaceholder}
                onClick={() => handleLoadVideo(video.id)}
              >
                <img src={video.thumbnail} alt="Video thumbnail" />
                <button className={s.playButton}>▶ Play</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <p className={s.videosDescriptionParagraphMobile}>
        Step into the darkness and feel the fear unfold. Watch our game trailers
        and experience the horror coming to life… Click and watch-if you dare.
      </p>
      <div className={s.videosDescription}>
        <p className={s.videosDescriptionParagraph}>
          Step into the darkness and feel the fear unfold. Watch our game
          trailers and experience the horror coming to life… Click and watch-if
          you dare.
        </p>
        <GameButton
          className={s.videosDescriptionButton}
          text={"Watch more"}
          scheme="schemeTwo"
          link="https://www.youtube.com/channel/UClETMGdn-gOyL-iQtpqD0sQ"
        />
      </div>
    </section>
  );
}
