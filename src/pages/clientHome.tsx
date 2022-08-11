import * as React from 'react'
import Article from '../../components/article'
import Promo from '../../components/promo'
import NavBar from '../../components/NavBar'
import Tags from '../../components/filter'
function clientHome() {
    return (
    <><NavBar /><Tags/><div className=' p-2 inline-grid gap-2 grid-cols-2 mx-64'>
            <div><Article /></div>
            <div><Promo /></div>
        </div></>)
  }
  
  export default clientHome
  