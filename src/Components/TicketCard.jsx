import style from './Styling/TicketCard.module.scss';

function TicketCard( {Title, price, img} ) {

    return ( 
            <article className={style.ticket}>
                <h2>{Title}</h2>
                <section className={style.ticket__category}>
                    {img}
                </section>
                <h3>{price}</h3>
                <button>Buy ticket!</button>
            </article>
     );
}

export default TicketCard;