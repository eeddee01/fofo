import Style from '../../styles/Main.module.css'
import List from './List'
import User from './user'
export default function Main({username,eps}){
    
    return <>

        <section  dir="rtl" className={Style.Main}>
            <User user={username} />
            <ul>
                {
                    eps.map(e=><List cid={e.cid} learned={e.learned.length}/>)
                }
            </ul>
        </section>

    </>

}