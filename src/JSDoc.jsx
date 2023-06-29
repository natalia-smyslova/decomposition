

/**
 * Компонент App - главный компонент страницы, в котором отрисовываются Header, Body и Footer. 
 * Header, Body и Footer получают в качестве props данные из директории data
 */

function App() {
    return (
        <>
            <Header dataHeader={dataHeader} />
            <Body dataBody={dataBody} />
            <Footer dataFooter={dataFooter} />
        </>
    )
}

/**
 * Комонент Header ("шапка" страницы) - в нем отображаются новости и рекламный блок, 
 * в который пробрасываются данные из директории dataHeader
 */

function Header({ dataHeader }) {
    return (
        <header className="header">
            <News data={dataHeader} />
            <Advertising data={dataHeader}>
                <img className="advertising__img" src={dataHeader.advertising.src} alt="..." />
            </Advertising>
        </header>
    )
}

/**
 * Комонент News содержит в себе компоненты NewsCategory, NewsList и Rates, в которые пробласываются данные (Object) в props
 */

function News(props) {
    const { data } = props;
    return (
        <div className="header__news-box">
            <NewsCategories titles={data.titles} />
            <NewsList news={data.news} />
            <Rates rates={data.rates} />
        </div>
    )

}

/**
 * Комонент NewsCategory получается в качестве props массив, отрисовывает заголовки из актуальной новостной строки с датой
 */

function NewsCategories(props) {
    const { titles } = props
    return (
        <div className="header__news-category_box">
            <nav className="header__news-category">
                <a href={titles[0].url}>
                    <h4 className="widget__title">{titles[0].title}</h4>
                </a>
                <a href={titles[1].url}>
                    <h4 className="widget__title inactive">{titles[1].title}</h4>
                </a>
                <a href={titles[2].url}>
                    <h4 className="widget__title inactive">{titles[2].title}</h4>
                </a>
            </nav>
            <div className="header__news-date">
                {[new Date().getDate(), ' ', getMonth(), ',', ' ', getWeekDay(), ' ']}
                <Moment format="HH:mm" interval={1000} />
            </div>
        </div>
    )
}

/**
 * Комонент NewsList принимает в качестве параметра массив и выводит список новостей
 */

function NewsList({ news }) {
    return (
        <ul className="header__news-list">
            {news.map((news, index) =>
                <NewsListItem key={index} url={news.url} title={news.title}>
                    <img src={news.src} alt="..." />
                </NewsListItem>)}
        </ul>
    )
}


/**
 * Комонент NewsListItem - элемент списка NewsList, принимает Object
 */

function NewsListItem(props) {
    return (
        <li className="header__news-item">
            {props.children}
            <a href={props.url}>{props.title}</a>
        </li>
    )
}

/**
 * Комонент Rates принимает Array, отрисовывает блок курса валют
 */

function Rates({ rates }) {
    return (
        <ul className="header__rate rate">
            {rates.map((rate, index) => <Rate key={index} text={rate.text} num={rate.num} />)}
        </ul>
    )
}

/**
 * Комонент Rate принимает Object, выводит элемент списка Rates (блок валют)
 */


function Rate({ text, num }) {
    return (
        <li className="rate__item">
            <span className="rate__item-text">{text} ;</span>
            <span className="rate__item-num">{num}</span>
        </li>
    )
}

/**
 * Комонент Advertising получает в качестве props такие параметры, как текст, заголовок, ссылка 
 * и иные параметры в виде children
 * Отрисовывает рекламный блок
 */

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


/**
 * Комонент Body (основная часть страницы) содержит в себе компоненты SearchCategories, SearchForm и Banner, 
 * Отрисовывает поисковую строку
 * Принимает Object 
 */

function Body(props) {
    const { dataBody } = props;
    return (
        <div className="page__body body">
            <div className="body__search search">
                <SearchCategories categories={dataBody.categories} />
                <SearchForm><span className="gray_text"> фаза луны сегодня</span></SearchForm>
                <SearchBanner href={dataBody.banner.href} src={dataBody.banner.src} />
            </div>
        </div>
    )
}

/**
 * Комонент SearchCategories принимает Array, отображает элемент навигации по категориям
 */

function SearchCategories(props) {
    const { categories } = props;
    return (
        <nav className="search__header">
            {categories
                .map((category, idx) => <SearchCategory key={idx} href={category.href} title={category.title} />)}
        </nav>
    )
}


/**
 * Комонент SearchCategory отрисовывает категорию поиска в навигации SeacrCategory
 * В качестве props принимает Object
 */

function SearchCategory(props) {
    return (
        <a className="search__header-item widget__title" href={props.href}>{props.title}</a>
    )
}

/**
 * Комонент SearchForm отвечвет за строку поиска,выводит логотип, форму поиска и пример запроса
 * Принимает children
 */

function SearchForm(props) {
    return (
        <div className="search__body">
            <form className="search__body-row" action="">
                <div className="search__body-logo"><span>Я</span>ндекс</div>
                <input type="text" className="search__body-input" />
                <button className="search__body-btn">Найти</button>
            </form>
            <div className="search__body-example">
                Найдётся всё. Например,
                {props.children}
            </div>
        </div>
    )
}

/**
 * Комонент Banner отрисовывает рекламный баннер, 
 * получает на вход такие props, как
 * ссылка на изображение (тип - строка) 
 * и ссылка, по которой пользователь будет осуществлять переход (тип - строка)
 */

function Banner(props) {
    return (
        <a href={props.href} className="search__footer">
            <img className="search__footer-img" src={props.src} alt="..." />
        </a>
    )
}


/**
 * Комонент Footer отвечвет за "подвал" страницы 
 * и содержит в себе список со множеством компонентов (элементов списка) типа FooterItem (Погода, Посещаемое, Телепрограмма и тд)
Принимает Object 
*/


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

/**
 * Комонент FooterItem отвечает за один из элементов списка в Footer,
 * Принимает Object 
 */

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