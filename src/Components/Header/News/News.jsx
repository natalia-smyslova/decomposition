import NewsList from "./NewsList/NewsList"
import Rates from "./Rates/Rates"
import NewsCategories from "./NewsCategories/NewsCategories"

function News() {
    const { data } = props;
    return (
        <div className="header__news-box">
            <NewsCategories titles={data.titles} />
            <NewsList news={data.news} />
            <Rates rates={data.rates} />
        </div>
    )

}

export default News