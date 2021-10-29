import {gql,useLazyQuery} from '@apollo/client'
import Router from 'next/router'
import {useState} from 'react'

const GET_USER = gql`

query($un:String!,$pwd:String!){
  User(un: $un , pwd: $pwd) {
    username
    id
  }
}
`
export default function Log(){
    const [User,{loading,data}] = useLazyQuery(GET_USER)
    const [val,setVal] = useState({
        un:'',
        pwd:''
    })

    const sumbitHandl = () => {
        User({variables :{un:val.un,pwd:val.pwd}})
    }  
    if(data){
        console.log(data)
        document.cookie = `uid=${data.User.id}`;
        Router.reload(window.location.pathname);
    } 
    return <>
        <form onSubmit={e=>{
            e.preventDefault()
            if(!loading) sumbitHandl()
            }}>
            <h1>login</h1>
            <input
            value={val.un}
            onChange={e=>setVal({...val,un:e.target.value})}
            type="text" placeholder="username or email..." />
            <br/>
            <input 
            value={val.pwd}
            onChange={e=>setVal({...val,pwd:e.target.value})}
            type="password" placeholder="password..."/>
            <br/>
            <button type={loading ? "button" : "submit"}>{loading ? "loading..." : "login" }</button>
        </form>

    </>

}