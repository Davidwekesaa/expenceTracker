import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const Transaction = (props) => {
    const {transactions} = props
    const { DeleteTransaction} = useContext(GlobalContext)
    const sign = transactions.amount < 0 ? '-':'+'
    return (
        <div>
             <li className={transactions.amount < 0 ? 'minus':'plus' }>
                {transactions.text} <span>{sign}${Math.abs(transactions.amount)}</span><button className="delete-btn" onClick={()=>DeleteTransaction(transactions.id)}>x</button>
                             </li>
        </div>
    )
}

export default Transaction
