import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'
import Footer from './Components/Footer/Footer'
import dataFooter from './Data/dataFooter'
import dataHeader from './Data/dataHeader'
import dataBody from './Data/dataBody'


function App() {
  return (
    <>
    <Header dataHeader={dataHeader}/>
    <Body dataBody={dataBody}/>
    <Footer dataFooter={dataFooter}/>
    </>
  )
}

export default App
