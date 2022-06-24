import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
align-items: flex-start;`;

export const WrapperStatus = styled.div`
display: flex;
align-items: center;
div{
    margin: 8px;
    text-items: center;
}`;

export const WrapperUser = styled.div`
display: flex;
align-items: center;
h3{
    margin-right: 8px;
}
a{
    color: blue;
    font-weight: bold;
 
}`;

export const WrapperInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
margin-left: 8px;
height: 200px;
h1{
    font-size: 32px;
    font-weight: bold;
}
h3{
    font-size: 18px;
    font-weight: bold;
}
`;

export const WrapperImg = styled.img`
border-radius: 50%;
witdth: 100px;
margin: 8px;
`