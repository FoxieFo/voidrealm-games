import s from './styles.module.scss';

import room from './../../assets/img/pictures/newgame-room.png';
import table from './../../assets/img/pictures/newgame-table.png';
import roomLarge from './../../assets/img/pictures/newgame-room-large.png';
import tableLarge from './../../assets/img/pictures/newgame-table-large.png';

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
              scheme='schemeTwo'
            />
          </div>
        </div>
        <div className={s.newgameSectionInfo}>
          <p className={s.newgameSectionInfoText}>
            After months of silence, Alex returns to his grandmother’s house-but
            something is wrong. An eerie stillness, blood-streaked walls, and a
            lurking presence in the shadows.
            <br />
            <br />
            One night changes everything. His grandmother is gone, and something
            sinister has taken her place. The deeper Alex digs, the darker the
            truth becomes.
            <br />
            <br />
            UNCURSED delivers intense horror, a chilling atmosphere, and
            spine-tingling revelations. Dare to step inside?
          </p>
          <div className={s.newgameSectionInfoButtons}>
            <GameButton
              text="Play now"
              className={s.newgameSectionInfoButtonsItem}
            />
            <GameButton
              text="Steam"
              className={s.newgameSectionInfoButtonsItem}
              scheme='schemeTwo'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
