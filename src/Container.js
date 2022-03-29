import styled from "styled-components";


const Container = styled.div`
    margin: auto;
    background-color: hsl(217, 19%, 24%);
    width: 50%;
    margin-top: 15%;
    border-radius: 10px;
    padding: 15px 45px 68px 45px;
    overflow: hidden;

    @media only screen and (max-width: 375px) {
        width: 80%;
        padding: 15px 20px 50px 20px;
    }
`

export default Container