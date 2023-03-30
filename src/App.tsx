import { useState } from "react";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Header } from "./components/Header/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";
import ReactModal from "react-modal";

ReactModal.setAppElement('#root');
export function App() {
  const [isNewTransactionModal, setIsNewTransactionModal ] = useState(false);


  function handleOpenNewTransactionModal(){
    setIsNewTransactionModal(true);
  }
  
  function handleCloseNewTransactionModal(){
    setIsNewTransactionModal(false);
  }
  return (
   <>
   <Header onModalOpen={handleOpenNewTransactionModal}/>
   <NewTransactionModal isOpen={isNewTransactionModal} onRequestClose={handleCloseNewTransactionModal} />
   <Dashboard/>
   <GlobalStyle/>
   </>
  )
}

