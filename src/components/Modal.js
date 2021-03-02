
import React from 'react';
import styled from 'styled-components';

function Modal(props) {
    const { open, setOpen, children } = props;

    const close = () => {
        setOpen(false);
    }

    if (!open) return <></>

    return (
        <ModalDiv onClick={close}>
            {children}
        </ModalDiv>
    );
}

export default Modal;



const ModalDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    max-height: 100%;
    width: 100vw;
    max-width: 100%;
    background-color: hsla(0, 0%, 0%, 0.5);
    z-index: 10;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
`;