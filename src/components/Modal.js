
import React from 'react';
import styled from 'styled-components';



/**
 * Modal is a generalized component that you can use for anything. Needs open and setOpen properties to work correctly.
 * Can be used like this:
 * 
 * <Modal open={modalOpen} setOpen={setModalOpen}>
 *   <p> My thing </p>
 * </Modal>
 */

function Modal(props) {
    const { open, setOpen, children } = props;

    const close = () => {
        setOpen(false);
    }

    if (!open) return <></>

    return (
        <ModalDiv onClick={close}>
            <div className='children-div' onClick={e => e.stopPropagation()}>
                {children}
            </div>
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

    .children-div {
        cursor: default;
        background: white;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 2px 4px 4px 1px hsla(0, 0%, 0%, 0.2);
    }
`;