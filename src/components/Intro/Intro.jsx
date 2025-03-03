import s from './styles.module.scss';
import Header from './../Header/Header';
import UncursedHome from './../UncursedHome/UncursedHome';

export default function Intro() {
  return (
    <section className={s.intro}>
      <Header />
      <UncursedHome />
    </section>
  );
}