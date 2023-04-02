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
interface TransactionProviderProps{
  children:ReactNode,
}

interface TransactionContextData{
  transactions:Transactions[],
  createTransaction:(transaction:TransactionInput)=>Promise<void>

}
type TransactionInput = Omit<Transactions, "id"|"createdAt">

export const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData);

export const TransactionsProvider: React.FC<TransactionProviderProps> = ({children}) => {
  const [transactions, setTransactions] = useState<Transactions[]>([]);
  
  useEffect(() => {
    api.get("transactions").then(response => setTransactions(response.data.transactions))
    console.log(transactions)
  }, [])
  
  async function createTransaction(transactionInput:TransactionInput){
   const {data} = await api.post("/transactions",{
    ...transactionInput,
    createdAt:new Date()
   })
   const {transactions:transaction} = data;

   setTransactions([...transactions, transaction])
  }


  return <TransactionContext.Provider value={{transactions,createTransaction}}>
        {children}
  </ TransactionContext.Provider>;
}
