import styled, { css } from "styled-components";

const Home = (props) => {
    return (
        <HomeContainer $open={props.open}>
            i'm home
        </HomeContainer>);
}

export default Home;

const HomeContainer = styled.div`
    ${(props) => {
        console.log("i'm inside Gomevontainer", props.$open)
        if(props.$open){
            return css`margin-right: 20vw;`
        } else{
            return css`margin-right: 10vw;`
        }
    }}
    transition: margin-right 300ms ease-out;
`