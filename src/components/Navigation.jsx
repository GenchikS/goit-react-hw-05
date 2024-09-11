import {NavLink} from "react-router-dom"
import clsx from 'clsx'
import css from "./Navigation.module.css"

//  ф-ція css для навігації
const navi = (props)=> {
  return clsx(css.link, props.isActive && css.active)
}


export default function Navigation(){
    return (
        <div>
            <ul className={css.containerNavi}>
              <li className={css.list}><NavLink to="/" className={navi}>Home</NavLink></li>
              <li className={css.list}><NavLink to="/movies" className={navi}>Movies</NavLink></li>
            </ul>
          </div>
        
    )
} 