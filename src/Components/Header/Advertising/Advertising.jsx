function Advertising(props) {
    const { data } = props;
    return (
        <div className="header__advertising">
            <a href={data.advertising.href}>
                {props.children}
                <p className="widget__title">{data.advertising.title}</p>
                <div className="advertising__text">{data.advertising.text}</div>
            </a>
        </div>
    )
}

export default Advertising