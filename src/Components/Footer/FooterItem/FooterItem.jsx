function FooterItem(props) {
    const { href, title, children } = props;
    return (
        <li className="footer__item">
            <a href={href}>
                <h3 className="footer__item-title widget__title">{title}</h3>
            </a>
            {children}
        </li>
    );
}

export default FooterItem