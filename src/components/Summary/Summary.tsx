import { Card } from './styles';
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react"
import {useTransaction } from '../../hooks/useTransaction';

export const Summary: React.FC = () => {
  const { transactions } = useTransaction()
  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === "deposit") {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  });

  return (
    <Card>
      <div>
        <header>
          <p>entradas</p>
          <ArrowCircleUp width={30} height={30} style={{ color: "green" }} />
        </header>
        <strong>{Intl.NumberFormat("pt-AO", {
          style: "currency",
          currency: "AOA",
          minimumFractionDigits: 2
        }).format(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <ArrowCircleDown width={30} height={30} style={{ color: "red" }} />
        </header>
        <strong>-{Intl.NumberFormat("pt-AO", {
          style: "currency",
          currency: "AOA",
          minimumFractionDigits: 2
        }).format(summary.withdraws)}</strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <CurrencyDollar width={30} height={30} style={{ color: "#fff" }} />
        </header>
        <strong>{Intl.NumberFormat("pt-AO", {
          style: "currency",
          currency: "AOA",
          minimumFractionDigits: 2
        }).format(summary.total)}</strong>
      </div>
    </Card>
  );
}
