import News from "./News/News"
import Advertising from "./Advertising/Advertising"

function Header({ dataHeader }) {
    return (
        <header className="header">
            <News data={dataHeader}/>
            <Advertising data={dataHeader}>
            <img className="advertising__img" src={dataHeader.advertising.src} alt="..." />
            </Advertising>
        </header> 
    )
}

export default Header