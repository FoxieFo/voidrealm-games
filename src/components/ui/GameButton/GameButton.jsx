import s from './styles.module.scss';
import arrow from './../../../assets/img/icons/button-arrow.svg';

export default function CustomGameButton({
  text,
  scheme = 'schemeOne',
  className = '',
  link = '#',
  target = '_blank',
}) {
  return (
    <a
      href={link}
      target={target}
      rel="noopener noreferrer"
      className={`${s.customGameButton} ${s[scheme]} ${className}`}
    >
      {text}
      <img className={s.customGameButtonIcon} src={arrow} alt="Arrow icon" />
    </a>
  );
}
