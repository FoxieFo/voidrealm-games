import s from './styles.module.scss';

import GameSlider from '../GameSlider/GameSlider';
import AboutUs from '../AboutUs/AboutUs';
import Videos from '../Videos/Videos';
import NewGame from '../NewGame/NewGame';
import Stats from '../Stats/Stats';

export default function MainSection() {
  return (
    <section className={s.mainsection}>
      <GameSlider />
      <AboutUs />
      <Videos />
      <NewGame />
      <Stats />
    </section>
  );
}
