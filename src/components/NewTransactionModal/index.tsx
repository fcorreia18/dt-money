import React from 'react';
import ReactModal from 'react-modal';
import { Container } from './styles';
interface HandleModalActions {
    isOpen: boolean,
    onRequestClose: () => void;
}

export const NewTransactionModal: React.FC<HandleModalActions> = ({ isOpen, onRequestClose }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName={"react-modal-overlay"}
            className={"react-modal-content"}
        >
            <Container>
                <h2>Cadastrar Transação</h2>
                <input type="text" placeholder='Titulo'/>
                <input type="text" placeholder='Valor'/>
                <input type="text" placeholder='Categoria'/>
                <button type="submit"> Cadastrar </button>
            </Container>

        </ReactModal>
    );
}
