import '../styles/globals.css'
import Layout from '../components/layout'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import {useState,useEffect} from 'react'

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          Cours: {
            merge: true,
          },
          Ep:{
            merge: true,
          }
        },
      },
    },
  })
});


function MyApp({ Component, pageProps }) {

  const [uid,setUid] = useState(false)
  useEffect(() => {

    const cookie = document.cookie
  .split(';')
  .map(e=>e.split('='))
  .reduce((acc,[key,value])=>
    ({...acc,[key.trim()]:decodeURIComponent(value)})
  ,{})

  setUid(cookie.uid)

  }, [])


  return <>
    <ApolloProvider client={client}>
      <Layout uid={uid || undefined }>
        <Component uid={uid || undefined } {...pageProps} />
      </Layout>
    </ApolloProvider>
  </>
}

export default MyApp
