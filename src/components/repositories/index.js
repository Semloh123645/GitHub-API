import React from "react";
import RepositoriesItem from "../repositoriesItem";
import * as S from './styled'

const Repositories = () => {
    return(
        <S.WrapperTabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected">
            <S.WrapperTabList>
                <S.WrapperTab> Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>

            <S.WrapperTabPanel>
                 <RepositoriesItem name='app/ideas'
                 linkRepo='https://github.com/benits/app-ideas'
                 fullName='benits/app-ideas'/>
            </S.WrapperTabPanel>

            <S.WrapperTabPanel>
                 <RepositoriesItem name='benits'
                 linkRepo='https://github.com/benits/benits'
                 fullName='benits/benits'/>
            </S.WrapperTabPanel>
        </S.WrapperTabs>

    )
}
export default Repositories