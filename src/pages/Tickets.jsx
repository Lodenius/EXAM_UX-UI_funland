import Header from '../Components/Header';
import TicketCard from '../Components/TicketCard';
import style from './Styling/Tickets.module.scss';

// Imgs
import oneD from '../assets/tickets/one-day.jpg'
import twoD from '../assets/tickets/two-day.jpg'
import threeD from '../assets/tickets/three-day.jpg'
import Group4 from '../assets/tickets/four-peeps.jpg'
import Group5 from '../assets/tickets/five-peeps.jpg'
import Group6 from '../assets/tickets/six-peeps.jpg'
import Game2 from '../assets/tickets/two-game.jpg'
import Game4 from '../assets/tickets/four-game.jpg'
import Game6 from '../assets/tickets/six-game.jpg'

function Tickets() {
    return ( 
        <>
            <Header />
            <h2>Buy tickets!</h2>
            <section className={style.container}>
                <div></div>
                <p>Day passes</p>
                <section className={style.container__tix}>
                    <TicketCard 
                        Title="Single-day pass"
                        img={<img className={style.container__image} src={oneD}></img>}
                        price="299 sek"/>
                    <TicketCard                 
                        Title="Two-day pass"
                        img={<img className={style.container__image} src={twoD}></img>}
                        price="499 sek"/>
                    <TicketCard                 
                        Title="Three-day pass"
                        img={<img className={style.container__image} src={threeD}></img>}
                        price="699 sek"/>
                </section>
                <div></div>
                <p>Group passes</p>
                <section className={style.container__tix}>
                    <TicketCard 
                        Title="Group-of-4 pass"
                        img={<img className={style.container__image} src={Group4}></img>}
                        price="699 sek"/>
                    <TicketCard                 
                        Title="Group-of-5 pass"
                        img={<img className={style.container__image} src={Group5}></img>}
                        price="899 sek"/>
                    <TicketCard                 
                        Title="Group-of-6 pass"
                        img={<img className={style.container__image} src={Group6}></img>}
                        price="1099 sek"/>
                </section>
                <div></div>
                <p>Game passes</p>
                <section className={style.container__tix}>
                    <TicketCard 
                        Title="Game-for-2 pass"
                        img={<img className={style.container__image} src={Game2}></img>}
                        price="199 sek"/>
                    <TicketCard                 
                        Title="Game-for-4 pass"
                        img={<img className={style.container__image} src={Game4}></img>}
                        price="399 sek"/>
                    <TicketCard                 
                        Title="Game-for-6 pass"
                        img={<img className={style.container__image} src={Game6}></img>}
                        price="599 sek"/>
                </section>
            </section>
        </>
     );
}

export default Tickets;