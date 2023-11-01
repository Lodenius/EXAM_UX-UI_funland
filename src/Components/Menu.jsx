import { useState } from 'react';
import style from './Menu.module.scss';

function Menu() {

    const [burgerMenu, setBurgerMenu] = useState('bar unclicked');
    const [menuClass, setMenuClass] = useState('menu hidden');
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerMenu('bar clicked');
            setMenuClass('menu visible');
        } else {
            setBurgerMenu('bar unclicked')
            setMenuClass('menu hidden')
        }
    }

    return ( 
        <>
            <section className={style.menu}>
                <nav className={style.menu__nav}>
                    <article className={style.menu__burger}>
                        <section className={style.menu__burgerLine} onClick={updateMenu}></section>
                        <section className={style.menu__burgerLine} onClick={updateMenu}></section>
                        <section className={style.menu__burgerLine} onClick={updateMenu}></section>
                    </article>
                </nav>

                <section className={style.menu__class}></section>

            </section>
        </> 










    // <>
    //     <label className={style.menu}>
    //         <input type="checkbox"/>
    //     </label>
    //     <aside className={style.menu__sidebar}>
    //         <nav>
    //             <section>Home</section>
    //             <section>Rides</section>
    //             <section>Games</section>
    //             <section>Tickets</section>
    //         </nav>
    //     </aside>
    // </> 
    );
}

export default Menu;