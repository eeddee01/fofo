import Style from '../../styles/Cours.module.css'
import Link from 'next/link'
import {useQuery,gql} from '@apollo/client'

const GET_COURS = gql`

query($mod: String!){
    FindCours(mod: $mod) {
    img
      module
      eps{
        __typename
      }
  }
}
`

export default function List({mod,result}){


    const {loading,error,data} = useQuery(GET_COURS,{variables:{mod:result || mod}})

    return <>
        { data 
        ?
        <Link href={`/cours/${data.FindCours.module}`}><li>
            <div 
            style={{
                background:`url(${data.FindCours.img}) no-repeat`,
                backgroundPosition:"center",
                backgroundSize:"cover"
            }}
            className={Style.Listimg}></div>
            <div className={Style.ListContent}>
                <h2>{data.FindCours.module}</h2>
                <p>
                    عدد الحلقات : <span>{data.FindCours.eps.length}</span>
                </p>
            </div>
        </li></Link>
        : loading &&
        <li style={{
            width:"15em",
            height:"15em",
            background:"#1a1a1a"
        }}></li>    
        }
    </>
}