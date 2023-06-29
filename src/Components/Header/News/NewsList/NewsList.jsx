import NewsListItem from "./NewsListItem"

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

export default NewsList