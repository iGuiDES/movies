import css from './style.module.css';

const Footer = () => {
    
    return (
        <div className={css.footer}>
            <div className={css.footerWrapper}>
                <div className={css.footerInfo}>
                    <div className={css.footerCopyring}>
                        <h4>Всі права захищені</h4>
                    </div>
                    <ul className={css.footerLinks}>
                        <li className={css.footerLink}>Home</li>
                        <li className={css.footerLink}>Movies</li>
                        <li className={css.footerLink}>Genre</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export {
    Footer
}