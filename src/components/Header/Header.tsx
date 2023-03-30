import { CurrencyCircleDollar } from 'phosphor-react';
import Modal from 'react-modal'
import React, { useState } from 'react';
import { Container, Content } from './styles';
import ReactModal from 'react-modal';

interface ModalProps {
    onModalOpen:()=>void;
}
export const Header: React.FC<ModalProps> = ({onModalOpen}) => {


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
                <button type='button' onClick={onModalOpen}>nova transação</button>
              
            </Content>
        </Container>

    );
}
