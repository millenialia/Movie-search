import styled from 'styled-components';

export const Overlay = styled.div`

    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 100000000000000000000000000000000;

`;



export const Modal = styled.div`
    overflow:auto;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    padding: 50px 80px 50px 50px;
    background-color: rgba(0, 0, 0, 0.8);
    margin: 0;
`;
