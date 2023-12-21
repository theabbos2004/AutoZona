import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'
import {
    Link
} from 'react-router-dom'
import {
    dropData
} from '../../store/store'

function DropDown({id}) {
    const [display,setDisplay]=useState(false)
    const data = dropData.find((el) => el.id == id)
    
     function handleClose(id) {
         dropData.forEach(element => {
            if (element.id == id) {
              element.focus = !element.focus
              setDisplay(!display)
            }
          });
     }

    return (
        <>
        <ul onMouseLeave={()=>handleClose(data.id)}  style={data.focus?{display:'block'}:{display:'none'}} className={styles.dropdown__list}>
            {data.data?.map(data=>
            <li key={data.id} className={styles.dropdown__item}>
              {<Link  className={styles.dropdown__link} to={data.to} children={data.text}/>}
            </li>)}
        </ul>
        </>
    )



}

export default DropDown