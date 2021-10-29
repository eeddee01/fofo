import Nav from './nav'
export default function Layout({children,uid}){
    return <>
        <Nav uid={uid}/>
        <main>
            {children}
        </main>
    </>
}