import React, { useState } from "react";
import * as S from './styled'
import useGithub from '../../hooks/GithubHooks'

const Header = () => {
    const {getUser} = useGithub()
    const [userName, setuserName] = useState()

    const submitGetUser = () => {
        if (!userName) return 
        return getUser(userName)
    }

    return(
        <S.Wrapper>
            <input type='text' placeholder="Digite o UserName..." onChange={(e) => {setuserName(e.target.value)}}/>
            <button type='submit' onClick={submitGetUser}>
                Buscar
            </button>
        </S.Wrapper>
    )
}
export default Header