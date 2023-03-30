import React from 'react';
import ReactModal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
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
            <button className='close-button' onClick={onRequestClose} >
                <X width={20} height={20} cursor={"pointer"} />
            </button>
            <Container>
                <h2>Cadastrar Transação</h2>
                <input type="text" placeholder='Titulo' />
                <input type="number" placeholder='Valor' />
                <TransactionTypeContainer>
                    <span>
                        <ArrowCircleUp width={30} height={30} style={{ color: "green" }} />
                        Entrada
                    </span>
                    <span>
                        <ArrowCircleDown width={30} height={30} style={{ color: "red" }} />
                        Saída
                    </span>
                </TransactionTypeContainer>
                <input type="text" placeholder='Categoria' />
                <button type="submit"> Cadastrar </button>
            </Container>

        </ReactModal>
    );
}
