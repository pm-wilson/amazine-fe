import React from 'react';
import styles from '../app/styles.css';
import aboutstyles from '../../components/about/About.css';
export default function JoshDetail() {
  return (
    <div className={`${styles.headerSpace} ${styles.bottomSpace}`}>
      <hr />
      <article className={styles.bannerArticle}>
        <img src={'/assets/josh-picture.jpeg'} alt="portrait of Josh" className={aboutstyles.bioPic} />
        <h1 className={styles.normalGap}>
        I'm Josh Olloqui, a software developer based in Portland, OR. Ask Me Anything!
          <a href="https://github.com/josholloqui" ><div className={aboutstyles.ghIcon}></div></a>
        
          <a href="https://www.linkedin.com/in/josholloqui/" ><div className={aboutstyles.liIcon}></div></a>
        </h1>

      </article>
      <hr />

      <div className={`${styles.questionDiv} ${styles.questionBox}`}>
        <h2>What inanimate object would be the most annoying if it played loud, upbeat music while being used?</h2>
      </div>
      <div className={`${styles.answerDiv} ${styles.answerBox}`}>
        <p>Answer: I would have to say the pillow that I sleep with. Can you just imagine trying to go to sleep and your pillow is playing this upbeat music? I just couldn't. Literally impossible.</p> 
      </div>
      <div className={`${styles.questionDiv} ${styles.questionBox}`}>
        <h2>What's your favorite joke?</h2>
      </div>
      <div className={`${styles.answerDiv} ${styles.answerBox}`}>
        <p>Answer: What kind of car does a sheep drive? Their SuBAHHru.</p> 
      </div>
      <div className={`${styles.questionDiv} ${styles.questionBox}`}>
        <h2>What animal would be cutest if scaled to the size of a cat?</h2>
      </div>
      <div className={`${styles.answerDiv} ${styles.answerBox}`}>
        <p>Answer: Easy, a panda. Just think about it! A panda the size of a cat! It would be like having a permanent baby panda and who wouldn't want one of those!</p> 
      </div>

    </div>
  );
}
