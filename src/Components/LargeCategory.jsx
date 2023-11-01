import Bounce from './Bounce';
import style from './LargeCategory.module.scss'
import Ride from './Ride';

function LargeCategory() {
    return ( 
        <>
            <main className={style.category}>
                <article className={style.category__container}>
                    <h2>Rides</h2>
                    <section className={style.category__animation}>
                        <Ride />
                    </section>
                    <button>See all rides</button>
                </article>
                <article className={style.category__container}>
                    <h2>Games</h2>
                    <section className={style.category__animation}>
                        <Bounce />
                    </section>
                    <button>See all games</button>
                </article>
                
            </main>
        </>
     );
}

export default LargeCategory;