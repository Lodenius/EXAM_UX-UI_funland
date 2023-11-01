import { NavLink } from 'react-router-dom';
import Bounce from './Bounce';
import style from './LargeCategory.module.scss'
import Ride from './Ride';

function LargeCategory() {
    return ( 
        <>
            <main className={style.category}>
                <article className={style.category__container}>
                    <h2>Rides!</h2>
                    <section className={style.category__animation}>
                        <Ride />
                    </section>
                    <NavLink to='/rides'>
                        <button>See all rides</button>
                    </NavLink> 
                </article>
                <article className={style.category__container}>
                    <h2>Games!</h2>
                    <section className={style.category__animation}>
                        <Bounce />
                    </section>
                    <NavLink to='/games'>
                        <button>See all games</button>
                    </NavLink>
                </article>
                
            </main>
        </>
     );
}

export default LargeCategory;