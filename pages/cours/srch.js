import {useState,useEffect} from 'react'
import Style from '../../styles/Cours.module.css'

export default function Srch({result,setResult}){

    
    return <form className={Style.Homeform}>
      <input 
      value={result}
      onChange={e=>setResult(e.target.value)}
      type="text" placeholder="ابحث عن درس..."/>
    </form>
}