import { Card } from './styles';
import {ArrowCircleUp,ArrowCircleDown,CurrencyDollar} from "phosphor-react"

export const Summary: React.FC = () => {
  return (
    <Card>
      <div>
        <header>
          <p>entradas</p>
          <ArrowCircleUp width={30} height={30} style={{color:"green"}}/>
        </header>
        <strong>10000 KZ</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <ArrowCircleDown width={30} height={30} style={{color:"red"}}/>
        </header>
        <strong>-3000 KZ</strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <CurrencyDollar  width={30} height={30} style={{color:"#fff"}}/>
        </header>
        <strong>24500 KZ</strong>
      </div>
    </Card>
  );
}
