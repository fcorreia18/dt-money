import { Atom, CurrencyCircleDollar } from 'phosphor-react';
import React from 'react';
import { Container, Content } from './styles';


export const Header: React.FC = () => {
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
            </Content>

        </Container>

    );
}
