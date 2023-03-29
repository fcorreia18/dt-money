import React from 'react';
import { Container } from './styles';


export const TransactionsTable: React.FC = () => {
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
                        <td>200.000.00kz</td>
                        <td>Desenvolvimento</td>
                        <td>18/10/2022</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td>200.000.00kz</td>
                        <td>Desenvolvimento</td>
                        <td>18/10/2022</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td>200.000.00kz</td>
                        <td>Desenvolvimento</td>
                        <td>18/10/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}
