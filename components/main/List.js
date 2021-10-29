import Style from '../../styles/Main.module.css'
import Link from 'next/link'
import {useQuery,gql} from '@apollo/client'

const GET_COURS = gql`

query($mod: String!){
  Cours(mod: $mod) {
    module
    img
    eps {
      __typename
    }
  }
}

`

export default function List({cid,learned}){

    const {loading,data} = useQuery(GET_COURS,{variables:{mod:cid}})

    return <>
        { data ?
        <Link href={`/cours/${data.Cours.module}`}><li>
            <div 
            style={{
                background:`url(${data.Cours.img}) no-repeat`,
                backgroundSize:"cover",
                backgroundPosition:"center"
            }}
            className={Style.Img}></div>
            <div className={Style.Contnt}>
                <h1>{data.Cours.module}</h1>
                <div className={Style.Progress}>
                    <p>{ learned * 100 / data.Cours.eps.length }%</p>
                    <div style={{
                        width:`${ learned * 100 / data.Cours.eps.length }%`
                    }}></div>
                </div>
            </div>
        </li></Link>
        : loading &&
        <li>
            <div 
            style={{
                background:"#1a1a1a"
            }}
            className={Style.Img}></div>
            <div 
            style={{height:"6em",borderRadius:".5em",
            margin:"1em 0",
            background:"#1a1a1a"}}
            className={Style.Contnt}>
            </div>
        </li>
        }
    </>

}