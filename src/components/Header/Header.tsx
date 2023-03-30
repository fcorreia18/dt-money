import { CurrencyCircleDollar } from 'phosphor-react';
import Modal from 'react-modal'
import React, { useState } from 'react';
import { Container, Content } from './styles';
import ReactModal from 'react-modal';


export const Header: React.FC = () => {
    const [isNewTransactionModal, setIsNewTransactionModal ] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModal(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModal(false);
    }
    return (
        <Container>
            <Content>
                <span>
                    <CurrencyCircleDollar 
                        width={30} 
                        height={30} 
                        alt='dt money logo' 
                        style={{ color: "white", borderRadius: "50%"}} />
                    dt money
                </span>
                <button type='button'>nova transação</button>
                <ReactModal 
                isOpen={isNewTransactionModal}
                onRequestClose={handleCloseNewTransactionModal}
                >

                </ReactModal>
            </Content>
        </Container>

    );
}
