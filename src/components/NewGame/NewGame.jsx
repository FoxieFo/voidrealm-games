import s from './styles.module.scss';

import roomLarge from './../../assets/img/pictures/newgame-room-large.webp';
import tableLarge from './../../assets/img/pictures/newgame-table-large.webp';

import GameButton from './../ui/GameButton/GameButton';

export default function NewGame() {
  return (
    <section className={s.newgame} id="anchor">
      <h1 className={`${s.newgameHeading} horroroid`}>new game</h1>
      <div className={s.newgameSection}>
        <div className={s.newgameSectionImages}>
          <img
            className={s.newgameSectionImagesItem}
            src={roomLarge}
            alt="game image"
          />
          <img
            className={s.newgameSectionImagesItem}
            src={tableLarge}
            alt="game image"
          />
          <div className={s.newgameSectionImagesButtons}>
            <GameButton
              text="Play now"
              className={s.newgameSectionImagesButtonsItem}
            />
            <GameButton
              text="Steam"
              className={s.newgameSectionImagesButtonsItem}
              scheme="schemeTwo"
            />
          </div>
        </div>
        <div className={s.newgameSectionInfo}>
          <p className={s.newgameSectionInfoText}>
            After venturing into the deep forest, you sense something is wrong.
            An unnatural silence, twisted shadows among the trees, and the
            feeling of being watched. One night changes everything. Your camp is
            abandoned, your companions missing, and a monstrous presence lurks
            just beyond sight. The deeper you go, the more the forest warps into
            something inhuman.
            <br />
            <br />
            This game delivers relentless terror, a haunting atmosphere, and a
            mystery that begs to be uncovered. Dare to face the beast?
          </p>
          <div className={s.newgameSectionInfoButtons}>
            <GameButton
              text="Play now"
              className={s.newgameSectionInfoButtonsItem}
            />
            <GameButton
              text="Steam"
              className={s.newgameSectionInfoButtonsItem}
              scheme="schemeTwo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
