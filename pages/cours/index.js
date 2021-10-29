import {useState} from 'react'
import Style from '../../styles/Cours.module.css'
import List from '../../components/cours/list'
import {useQuery,gql} from '@apollo/client'
import Srch from './srch'

const GET_COURSES = gql`

  query{
    Courses {
      id
    }
  }

`

export default function Home() {

  const {data} = useQuery(GET_COURSES)
  const [result,setResult] = useState('')
  console.log(data)
  console.log(result)
  return (
    <>
      <section>
        
        <Srch result={result} setResult={setResult} />
        <ul dir="rtl" className={Style.List}>
          {

          data && data.Courses.map((e,i)=>
              <List result={result} key={i} mod={e.id} />  
            )
          }
        
        </ul>
      </section>
    </>
  )
}
