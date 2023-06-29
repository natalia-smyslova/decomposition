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
          <Moment format="HH:mm" interval={1000}/>
        </div>
      </div>
    )
  }

export default NewsCategories