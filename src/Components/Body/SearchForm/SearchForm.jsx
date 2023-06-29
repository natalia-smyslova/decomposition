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

export default SearchForm