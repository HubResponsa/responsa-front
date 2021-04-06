import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/QuemSomos.css'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'

function Header()
{
    return(
        <Accordion>
            <Card id="QuemSomos">
                <Card.Header id="textQuemSomos">
                Quem Somos
                </Card.Header>
                <Card.Body id="textBody">O Responsa é um projeto/movimento que se manifesta na forma de um cursinho popular pré-técnico, formado por alunes/ex-alunes de escolas técnicas, que atua desde 2013 na região metropolitana de Campinas, a primeira unidade era localizada no Centro e vinculada com a rede Emancipa, em 2014 uma nova unidade foi aberta na região do Ouro Verde, que foram mantidas em conjunto até 2016, quando nós resolvemos concentrar nossos esforços em somente uma unidade, localizada na EMEF Oziel Alves Pereira; Desde então o Responsa funciona em apenas uma unidade, que de 2018 até os dias de hoje é situada na EMEF Padre Leão Vallerié, vale ressaltar que todos os espaços utilizados para ministrar as aulas do cursinho foram cedidas pela comunidade, e isso não poderia ser diferente tendo em vista os nossos objetivos e ideologia, ao longo dos anos nós ouvimos muito ‘’O Responsa é um projeto caridoso porque leva educação para pessoas que não têm muito acesso’’, e sim, nosso objetivo é construir conhecimento com pessoas que tiveram o acesso ao mesmo negado, mas não fazemos isso por caridade, também não fazemos para ‘’libertar’’ alguém, as pessoas se libertam em comunhão, e fazemos porque alguém tem que fazê-lo, fazemos porque educação deveria ser mercadoria, e por isso fazemos uma educação que não é paga. Em 2017 uma dúvida interessante foi levantada numa reunião: ‘’Somos um movimento de educação popular ou movimento de popularização da educação?’’, até hoje esta duvida se mantem, porque como disse Paulo Freire,  “Gosto de ser gente porque, inacabado, sei que sou um ser condicionado, mas, consciente do inacabamento, sei que posso ir mais além dele.”, e no Responsa, ousamos dizer que somos mais ‘’gente’’ do que qualquer coisa.</Card.Body>
            </Card>
        </Accordion>
    )
}
export default Header