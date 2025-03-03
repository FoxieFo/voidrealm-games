import s from './styles.module.scss';
import React from 'react';
import GameButtton from '../ui/GameButton/GameButton';

import picOne from './../../assets/img/pictures/intro-one.jpg';
import picTwo from './../../assets/img/pictures/intro-two.jpg';
import picThree from './../../assets/img/pictures/intro-three.jpg';

export default function DeadboundHome() {
  return (
    <section className={s.DeadboundHome}>
      <h1 className={`${s.DeadboundHomeWelcome} horroroid`}>welcome to</h1>
      <h1 className={`${s.DeadboundHomeDeadbound} horroroid`}>
        <span className={s.DeadboundHomeDeadboundRed}>dead</span>bound
      </h1>
      <p className={s.DeadboundHomeText}>
        After venturing into the deep woods, you awaken to an eerie silence-your
        camp abandoned, the trees whispering secrets, and something monstrous
        watching from the darkness. The deeper you go, the less human the forest
        becomes. Will you escape the nightmare, or will the beast make you part
        of its legend?
      </p>
      <div className={s.DeadboundHomeButtons}>
        <GameButtton text="Play Now" />
        <GameButtton text="Steam" scheme="schemeTwo" />
      </div>
      <div className={s.DeadboundHomePictures}>
        <img src={picOne} alt="game room" />
        <img src={picTwo} alt="game room" />
        <img src={picThree} alt="game room" />
      </div>
    </section>
  );
}
