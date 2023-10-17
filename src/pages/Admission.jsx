import styled, { css } from "styled-components";

const Admission = (props) => {
    return (
        <Container $open={props.open}>
            i'm Admission
        </Container>);
}

export default Admission;

const Container = styled.div`
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