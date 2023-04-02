import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "./services/api";
import { TransactionsTable } from "./components/TransactionsTable";


interface Transactions {
  id: number,
  title: string,
  amount: number,
  category: string,
  type: string,
  createdAt: string,
}
interface TransactionProps{
  children:ReactNode
}

export const TransactionContext = createContext<Transactions[]>([]);

export const TransactionsProvider: React.FC<TransactionProps> = ({children}) => {
  const [transactions, setTransactions] = useState<Transactions[]>([]);
  
  useEffect(() => {
    api.get("transactions").then(response => setTransactions(response.data.transactions))
    console.log(transactions)
  }, [])
  

  return <TransactionContext.Provider value={transactions}>
        {children}
  </ TransactionContext.Provider>;
}
