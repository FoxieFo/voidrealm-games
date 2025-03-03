import s from './styles.module.scss';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Button from '../ui/Button/Button';
import SliderItem from '../ui/SliderItem/SliderItem';

import first from './../../assets/img/pictures/slider/1-uncursed.png';
import second from './../../assets/img/pictures/slider/2-marthasdolls.png';
import third from './../../assets/img/pictures/slider/3-bookie.png';
import fourth from './../../assets/img/pictures/slider/4-escape.png';
import fifth from './../../assets/img/pictures/slider/5-regretting.png';
import sixth from './../../assets/img/pictures/slider/6-tmc1.png';
import seventh from './../../assets/img/pictures/slider/7-tmc2.png';
import eighth from './../../assets/img/pictures/slider/8-error.png';

export default function GameSlider() {
  const games = [
    {
      id: 1,
      title: 'Uncursed',
      img: first,
    },
    {
      id: 2,
      title: "Martha's Dolls",
      img: second,
    },
    {
      id: 3,
      title: 'Bookie',
      img: third,
    },
    {
      id: 4,
      title: 'Escape',
      img: fourth,
    },
    {
      id: 5,
      title: 'Regretting',
      img: fifth,
    },
    {
      id: 6,
      title: 'The Moroccan Castle II',
      img: sixth,
    },
    {
      id: 7,
      title: 'The Moroccan Castle',
      img: seventh,
    },
    {
      id: 8,
      title: 'Error',
      img: eighth,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 2500,
    autoplay: true,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          variableWidth: true,
        },
      },
      {
        breakpoint: 624,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
        },
      },
    ],
  };

  const handleScrollToAnchor = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        window.history.replaceState({}, '', window.location.pathname);
      }, 1000);
    }
  };

  return (
    <section className={s.slider}>
      <div className={s.sliderSection}>
        <h1 className={`${s.sliderSectionHeading} horroroid`}>Choose game</h1>
        <div className={s.sliderSectionButtons}>
          <Button
            text={'New game'}
            link="#anchor"
            id="anchor-button"
            onClick={handleScrollToAnchor}
          />
          <Button text={'See all'} />
        </div>
      </div>
      <div className={s.sliderSlider}>
        <Slider {...settings}>
          {games.map((game) => (
            <div key={game.id} className={s.sliderItem}>
              <SliderItem
                image={game.img}
                title={game.title}
                buttonText={game.title}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
