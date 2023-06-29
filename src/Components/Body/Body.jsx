import Banner from "./Banner/Banner"
import SearchCategories from "./searchCategoris/SearchCategories"
import SearchForm from "./SearchForm/SearchForm"

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

export default Body