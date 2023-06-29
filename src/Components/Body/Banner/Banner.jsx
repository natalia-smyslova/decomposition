function Banner(props) {
  return (
    <a href={props.href} className="search__footer">
      <img className="search__footer-img" src={props.src} alt="..." />
    </a>
  )
}

export default Banner