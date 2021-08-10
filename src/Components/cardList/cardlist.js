import React from 'react'
import '../../CSS/cardlist.css'
import Card from '../card/Card'
export const Cardlist =(props)=>{
 return(
     <div className="card-list">        
     {props.monsters.map(monster=><Card monster={monster}/>)}
     </div>
 )
}