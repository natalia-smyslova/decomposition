function NewsListItem(props){
    return (
        <li className="header__news-item">
          {props.children}
          <a href={props.url}>{props.title}</a>
        </li>
      )
}

export default NewsListItem