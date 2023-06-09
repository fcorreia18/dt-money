import { Container } from './styles';
import {  useTransaction } from '../../hooks/useTransaction';


export const TransactionsTable: React.FC = () => {

    const {transactions} = useTransaction()

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
