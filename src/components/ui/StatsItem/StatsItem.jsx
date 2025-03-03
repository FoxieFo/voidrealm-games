import s from './styles.module.scss';

export default function StatsItem({number, text}) {
  return (
    <div className={s.statsitem}>
      <h1 className={s.statsitemNumber}>{number}</h1>
      <p className={s.statsitemText}>{text}</p>
    </div>
  );
}
