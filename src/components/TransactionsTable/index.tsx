import React from 'react';
import { Container } from './styles';
import { api } from '../../services/api';


export const TransactionsTable: React.FC = () => {
    const data = api.get("transactions").then(response => response.data)
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                    <th>Titulo </th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className='deposit'>200.000.00kz</td>
                        <td>Desenvolvimento</td>
                        <td>18/10/2022</td>
                    </tr>
                    <tr>
                        <td>Arrendamento</td>
                        <td className='withdraw'> -89.000.00kz</td>
                        <td>despesas</td>
                        <td>03/10/2022</td>
                    </tr>
                   
                </tbody>
            </table>
        </Container>
    );
}
