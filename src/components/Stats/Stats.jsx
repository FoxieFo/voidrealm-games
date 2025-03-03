import s from './styles.module.scss';
import StatsItem from '../ui/StatsItem/StatsItem';

export default function Stats() {
  const statistics = [
    { number: '5+', text: 'horror games released' },
    { number: '10+', text: 'years in game development' },
    { number: '20+', text: 'talented team members' },
    { number: '1M+', text: 'total downloads' },
  ];

  return (
    <div className={s.stats}>
      <div className={s.statsHeadingWhite}>
        <p className={s.statsHeadingWhiteTop}> Our goal is to create unforgettable</p>
        <p className={s.statsHeadingWhiteBottom}>horror experiences</p>
      </div>
      <p className={s.statsHeadingGrey}>that push the boundaries of fear</p>
      <div>
        <ul className={s.statsBlocks}>
          {statistics.map((item, index) => (
            <StatsItem key={index} number={item.number} text={item.text} />
          ))}
        </ul>
      </div>
    </div>
  );
}
