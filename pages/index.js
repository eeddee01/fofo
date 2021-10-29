import {useQuery,gql} from '@apollo/client'
import Main from '../components/main'
import Auth from '../components/main/auth'

const GET_USER = gql`

query($uid: ID!){
  User(uid: $uid) {
    username
    eps {
      cid
      learned
    }
  }
}

`

export default function Home({uid}){

  const {loading,error,data} = useQuery(GET_USER,{variables:{uid}})
  console.log(data)
  return <>
  {
    data 
    ?
    <Main username={data.User.username} eps={data.User.eps}/>
    :
    error 
    ?
    <Auth />
    :
    loading && <h1 style={{
      textAlign:"center",
      color:"#eee"
    }}>loading...</h1>

  }

</>


}