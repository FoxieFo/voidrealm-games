import s from './styles.module.scss';
import GameButton from '../GameButton/GameButton';

export default function SliderItem({ image, title, buttonText }) {
  return (
    <div className={s.slideritem}>
      <img className={s.slideritemImg} src={image} alt={title} />
      <GameButton className={s.slideritemButton} text={buttonText} scheme="schemeThree" />
    </div>
  );
}