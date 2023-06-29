import SearchCategory from "./SearchCategory"

function SearchCategories(props) {
    const { categories } = props;
    return (
        <nav className="search__header">
            {categories
                .map((category, idx) => <SearchCategory key={idx} href={category.href} title={category.title} />)}
        </nav>
    )
}

export default SearchCategories