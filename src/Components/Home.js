import react from 'react'
import './css/Home.css'
import Header from './Header'
import Carrossel from './Carrossel'
import Posts from './Posts'

function Home()
{
    return(
        <div id="home">
            <Header/>
            <Carrossel/>
            <Posts/>
        </div>
    )
}
export default Home
