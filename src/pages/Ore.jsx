import styled, { css } from "styled-components";
import MyBreadcrumbs from "../layout/Breadcrumbs";

const Ore = (props) => {
    return (
        <HomeContainer $open={props.open}>
            <MyBreadcrumbs />
            i'm Core
        </HomeContainer>);
}

export default Ore;

const HomeContainer = styled.div`
    ${(props) => {
        console.log("i'm inside Gomevontainer", props.$open)
        if(props.$open){
            return css`margin-left: 20vw;`
        } else{
            return css`margin-left: 10vw;`
        }
    }}
    transition: margin-left 300ms linear;
`