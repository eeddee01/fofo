import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCog,faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Router from 'next/router'
export default function User({user}){

    const logOutHandl = () =>{
        document.cookie="uid=null";
        Router.reload(window.location.pathname);
    }

    return <div>
        <h1>{user}</h1>
        <Link href="/settings"><button><FontAwesomeIcon size="lg" icon={faCog} /></button></Link>
        <button
        onClick={logOutHandl}
        ><FontAwesomeIcon size="lg" icon={faSignOutAlt} /></button>
    </div>

}