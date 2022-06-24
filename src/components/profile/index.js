import React, { useEffect } from "react";
import useGithub from "../../hooks/GithubHooks";
import * as S from './styled'

export const Profile = () =>{
    const {githubState} = useGithub()
    // useEffect(()=>{console.log(githubState.user)},[githubState.user])

    return(
        <S.Wrapper>
            <S.WrapperImg 
            src={githubState.user.avatar_url} alt="profile"/>

            <S.WrapperInfo>
                <div>
                    <h1>{githubState.user.name}</h1>
                    <S.WrapperUser>
                        <h3>username:</h3>
                        <a href={githubState.user.html_Url}
                         target='_blank'>{githubState.user.login}</a>
                    </S.WrapperUser>
                    
                </div>
                <S.WrapperStatus>
                    <div>
                        <h3>Followers</h3>
                        <span>{githubState.user.followers}</span>
                    </div>
                    <div>
                        <h3> Followings</h3>
                        <span>{githubState.user.following}</span>
                    </div>
                    <div>
                        <h3>Gists</h3>
                        <span>{githubState.user.public_gists}</span>
                    </div>
                    <div>
                        <h3>Repos</h3>
                        <span>{githubState.user.public_repos}</span>
                    </div>
                </S.WrapperStatus>
            </S.WrapperInfo>
        </S.Wrapper>
    )
}