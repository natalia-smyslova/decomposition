import Rate from "./Rate"

function Rates({rates}) {
    return (
      <ul className="header__rate rate">
        {rates.map((rate, index) => <Rate key={index} text={rate.text} num={rate.num}/>)}
      </ul>
    )
  }

export default Rates