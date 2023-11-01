import style from './Styling/InfoCard.module.scss'

function InfoCard({title, infoText, isReversed, url }) {
  return (
    <article className={style.info}>
      {isReversed ? (
        <>
          <section className={style.info__text}>
            <h2>{title}</h2>
            <p>{infoText}</p>
          </section>
          <section className={style.info__image}>{url}</section>
        </>
      ) : (
        <>
          <section className={style.info__image}>{url}</section>
          <section className={style.info__text}>
            <h2>{title}</h2>
            <p>{infoText}</p>
          </section>
        </>

      )}
    </article>
  );
};

export default InfoCard;

