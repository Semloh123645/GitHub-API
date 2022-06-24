import React from "react";
import * as S from './styled'
import Header from "../header/index";

export default function Layout({children}){

    return(
        <S.WrapperLayout>
            <Header/>
            {children}
        </S.WrapperLayout>
    )
}