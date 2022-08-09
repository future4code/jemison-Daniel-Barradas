import axios from "axios";
import { useEffect, useState } from "react";
import { ItemUsuario } from "../styled";
import { MatchesContainer, SecaoMatches } from "./Matches"

function ExibirPerfis(props) {

    const [mudaTela, setMudaTela] = useState(false)
    const [perfil, setPerfil] = useState([])

    const onClickMudaTela = () => {
        setMudaTela(!mudaTela)
        if(mudaTela) {
          componenteMatches = <SecaoMatches aoClicar={aoClicarMatches}/>
        }
      }

      const aoClicarMatches = () => {
        setMudaTela(false)
      }

      let componenteMatches

      if(mudaTela) {
        componenteMatches = <SecaoMatches aoClicar={aoClicarMatches}/>
      }



    const perfilChamado = perfil.map((usuario, index) => {
        return(
            <ItemUsuario key={index}>
                {usuario.name}
            </ItemUsuario>
        )
    })



    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person'
    const serviceHeaders = {
        headers: {
            Authorization: 'daniel-barradas-jemison'
        }
    }

    const getProfileToChoose = () => {
        axios.get(url, serviceHeaders)
            .then((response) => setPerfil(response.data.result.list))
                .catch((error) => console.log(error.response.data))
    }

    useEffect(() => {
        getProfileToChoose()
    },)

    return (
        <div>
            <SecaoMatches
            onClickMatches={onClickMudaTela}
            />
            {componenteMatches}
            {perfilChamado}
        </div>

    )
}

export default ExibirPerfis;