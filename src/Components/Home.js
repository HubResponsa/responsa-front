import Header from './Header'
import Carrossel from './Carrossel'
import QuemSomos from './QuemSomos'
import Funcionamento from './Funcionamento'
import Voluntarios from './Voluntarios'
import Colabore from './Colabore'
import Participe from './Participe'
import Contato from './Contato'

function Home()
{
    return(
        <div id="home">
            <Header/>
            <Carrossel/>
            {/* <Posts/> */}
            <QuemSomos/>
            <Funcionamento/>
            <Voluntarios/>
            <Colabore/>
            <Participe/>
            <Contato/>
        </div>
    )
}
export default Home
