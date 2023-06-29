import FooterItem from "./FooterItem/FooterItem"

function Footer({ dataFooter }) {
    const { weather, visited, mapOfGermany, tvProgram, ether } = dataFooter;
    return (
        <div className="page__footer footer">
            <ul className="footer__list">
                <FooterItem title="Погода" href="#">
                    <a href={weather.href}>
                        <div className="ooter__item-content weather">
                            <div className="footer__item-img">
                                <img src={weather.src} alt="..." />
                            </div>
                            <div className="footer__item-numb">{weather.temp}&deg;</div>
                            <div className="footer__item-descript">
                                <div className="footer__item-text row1">
                                    <span className="text">Утром</span><span className="num">{weather.morningTemp}</span>
                                    <span className="text">Днём</span><span className="num">{weather.daytimeTemp}</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </FooterItem>
                <FooterItem title="Посещаемое" href="#">
                    <div className="footer__item-content">
                        <ul className="footer__item-list">
                            {visited.map((el, idx) =>
                                <li key={idx} className="list__item">
                                    <a href={el.href}><strong>{el.boldText}</strong>{el.text}</a>
                                </li>
                            )}
                        </ul>
                    </div>
                </FooterItem>
                <FooterItem title="Карта Германии" href="#">
                    <a href={mapOfGermany.href}>
                        <div className="footer__item-content">{mapOfGermany.text}</div>
                    </a>
                </FooterItem>
                <FooterItem title="Телепрограмма" href="#">
                    <div className="footer__item-content">
                        <ul className="footer__item-list">
                            {tvProgram.map((el, idx) =>
                                <li key={idx} className="list__item">
                                    <a href={el.href}>
                                        {el.text}<span className="gray_text">{el.grayText}</span>
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </FooterItem>
                <FooterItem title="Эфир" href="#">
                    <div className="footer__item-content">
                        <ul className="footer__item-list">
                            {ether.map((el, idx) =>
                                <li key={idx} className="list__item">
                                    <a href={el.href}>
                                        <img src={el.src} alt="" />
                                        {el.text}
                                        <span className="gray_text">{el.grayText}</span>
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </FooterItem>
            </ul>
        </div>
    )
}

export default Footer