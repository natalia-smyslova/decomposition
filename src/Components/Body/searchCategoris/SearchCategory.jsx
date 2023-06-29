function SearchCategory(props) {
    return (
        <a className="search__header-item widget__title" href={props.href}>{props.title}</a>
    )
}

export default SearchCategory