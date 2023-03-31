import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { api } from '../../services/api';

interface Transactions {
    id: number,
    title: string,
    amount: number,
    category: string,
    type: string,
    createdAt: string,
}
export const TransactionsTable: React.FC<Transactions> = () => {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const [transactions, setTransactions] = useState<Transactions[]>()

    useEffect(() => {
        api.get("transactions").then(response => setTransactions(response.data.transactions))
        console.log(transactions)
    }, [])
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
                    {transactions?.map(transaction =>
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>{Intl.NumberFormat("pt-AO", {
                                style: "currency",
                                currency: "AOA",
                                minimumFractionDigits: 2
                            }).format(transaction.amount)}</td>
                            <td>{transaction.category}</td>
                            <td>{Intl.DateTimeFormat("pt-AO", {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            }).format(new Date(transaction.createdAt))}</td>
                        </tr>
                    )}



                </tbody>
            </table>
        </Container>
    );
}
