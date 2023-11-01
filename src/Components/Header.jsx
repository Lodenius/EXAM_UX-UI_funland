import style from './Header.module.scss';
import Menu from './Menu';
import TitleSpan from './TitleSpan';

function Header() {
    const welcome = "FUNLAND".split("");

    return (
        <header className={style.header}>
            <section className={style.header__title}>
                {welcome.map((letter, i) => {
                    return(
                        <TitleSpan key={i}>
                            {letter}
                        </TitleSpan>
                    )
                })}
            </section>
                <Menu />
        </header>
    )
}

export default Header;