import './Groups.css'
import {useState} from "react";

export const Groups = ({getNodes}) => {

    const[active, setActive] = useState()

    const clickHandler = (e) => {
        setActive(e.currentTarget.textContent)
        getNodes(e.currentTarget.textContent)
    }

    return (
        <div className='groups'>
            <div onClick={clickHandler} className={active === 'Санкт-Петербург' ? 'group active' : 'group'}>Санкт-Петербург</div>
            <div onClick={clickHandler} className={active === 'Москва' ? 'group active' : 'group'}>Москва</div>
            <div onClick={clickHandler} className={active === 'Красноярск' ? 'group active' : 'group'}>Красноярск</div>
            <div onClick={clickHandler} className={active === 'Новосибирск' ? 'group active' : 'group'}>Новосибирск</div>
        </div>
    )
}