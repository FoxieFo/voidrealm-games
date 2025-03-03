import s from './styles.module.scss';
import React from 'react';
import GameButtton from './../ui/GameButton/GameButton';

import picOne from './../../assets/img/pictures/intro-one.jpg';
import picTwo from './../../assets/img/pictures/intro-two.jpg';
import picThree from './../../assets/img/pictures/intro-three.jpg';

export default function UncursedHome() {
  return (
    <section className={s.UncursedHome}>
      <h1 className={`${s.UncursedHomeWelcome} horroroid`}>welcome to</h1>
      <h1 className={`${s.UncursedHomeUncursed} horroroid`}>
        <span className={s.UncursedHomeUncursedRed}>un</span>cursed
      </h1>
      <p className={s.UncursedHomeText}>
        After months of silence, Alex returns to his grandmother’s house-only to
        wake up in a blood-stained, abandoned home where something sinister
        lurks in the shadows. Will you uncover the truth or become part of the
        horror?
      </p>
      <div className={s.UncursedHomeButtons}>
        <GameButtton text="Play Now" />
        <GameButtton text="Steam" scheme="schemeTwo" />
      </div>
      <div className={s.UncursedHomePictures}>
        <img src={picOne} alt="game room" />
        <img src={picTwo} alt="game room" />
        <img src={picThree} alt="game room" />
      </div>
    </section>
  );
}
