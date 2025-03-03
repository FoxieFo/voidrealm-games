import s from './styles.module.scss';
import Header from './../Header/Header';
import DeadboundHome from './../DeadboundHome/DeadboundHome';

export default function Intro() {
  return (
    <section className={s.intro}>
      <Header />
      <DeadboundHome />
    </section>
  );
}