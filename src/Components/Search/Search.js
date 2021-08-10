import React from 'react'
import "../../CSS/search.css"
export const Search= ({placeholder, OnChangeHandler})=>{
    return(
     <input className="search" type="text" placeholder={placeholder} onChange={OnChangeHandler}></input>
    )
}
