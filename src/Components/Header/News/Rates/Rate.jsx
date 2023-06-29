function Rate({ text, num }) {
    return (
        <li className="rate__item">
            <span className="rate__item-text">{text} ;</span>
            <span className="rate__item-num">{num}</span>
        </li>
    )
}

export default Rate