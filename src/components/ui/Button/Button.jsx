import s from './styles.module.scss';

export default function Button({ onClick, text, link = '#', id }) {
  return (
    <a
      href={link}
      className={s.button}
      id={id}
      onClick={onClick}
    >
      {text}
    </a>
  );
}
