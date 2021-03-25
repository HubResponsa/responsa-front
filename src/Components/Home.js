import react from 'react'
import './css/Home.css'
import Header from './Header'
import Carrossel from './Carrossel'
import Posts from './PostsHome'
import QuemSomos from './QuemSomos'
import Funcionamento from './Funcionamento'

function Home()
{
    return(
        <div id="home">
            <Header/>
            <Carrossel/>
            <Posts/>
            <QuemSomos/>
            <Funcionamento/>
        </div>
    )
}
export default Home
