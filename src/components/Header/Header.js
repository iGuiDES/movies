import css from './style.module.css';

const Header = () => {
    
    return (
        <header className={css.header}>
            <div className={css.headerWrapper}>
                <div className={css.headerRow}>
                    <div className={css.headerLogo}>
                        <a href="/" className={css.logo}>
                            <h3>Best Films</h3>
                        </a>
                    </div>
                    <div className={css.headerMenu}>
                        <ul className={css.menuLinks}>
                            <li className={css.menuLink}>Home</li>
                            <li className={css.menuLink}>Movies</li>
                            <li className={css.menuLink}>Genres</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export {
    Header
}