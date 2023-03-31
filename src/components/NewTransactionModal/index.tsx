import React, { FormEvent, useState } from 'react';
import ReactModal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { api } from '../../services/api';
interface HandleModalActions {
    isOpen: boolean,
    onRequestClose: () => void;
}

export const NewTransactionModal: React.FC<HandleModalActions> = ({ isOpen, onRequestClose }) => {
    const [transactionType, setTransactionType] = useState("deposit");
    const [title, setTitle] = useState<string>("");
    const [value, setValue] = useState<number>(0);
    const [category, setCategory] = useState<string>("");

    function handleCreateNewTransaction(e:FormEvent){
        e.preventDefault();
        const data ={
            title,
            value,
            category,
            transactionType
        }
        api.post("/transactions",{
            data
        })
    }
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
            <Container 
                onSubmit={handleCreateNewTransaction}
            >
                <h2>Cadastrar Transação</h2>
                <input type="text" 
                placeholder='Titulo'
                value={title} 
                onChange={e=>setTitle(e.target.value)}
                />
                <input 
                type="number" 
                placeholder='Valor'
                value={value} 
                onChange={e=>setValue(Number(e.target.value))} 
                />
                <TransactionTypeContainer 
                >
                    <RadioBox 
                        isActive={ transactionType === "deposit"}
                        activeColor="green" 
                        onClick={()=>setTransactionType("deposit")}
                        type='button'
                    >
                        <ArrowCircleUp width={30} height={30} style={{ color: "green" }} />
                        Entrada
                    </RadioBox >
                    <RadioBox 
                        isActive={transactionType === "withdraw"} 
                        activeColor="red"
                        onClick={()=>setTransactionType("withdraw")}
                        type='button'
                    >
                        <ArrowCircleDown width={30} height={30} style={{ color: "red" }} />
                        Saída
                    </RadioBox >
                </TransactionTypeContainer>
                <input 
                type="text" 
                placeholder='Categoria'
                value={category} 
                onChange={e=>setCategory(e.target.value)} 
                />
                <button 
                type="submit"
                > Cadastrar </button>
            </Container>

        </ReactModal>
    );
}
