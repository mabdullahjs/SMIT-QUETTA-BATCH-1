import React from 'react'
import "./list.css"

const List = ({ expense }) => {
    return (
        <>
            <div className='body'>
                <div className="expense-card">
                    <div className="amount" style={{ color: expense.option === "out" ? "red" : "green" }}>Rs {expense.transaction}</div>
                    <div className="remarks">{expense.remarks}</div>
                    <div className="type" style={{
                        background: expense.option === "out" ? "#fdecea" : "#defdecff",
                        color: expense.option === "out" ? "red" : "green"
                    }}>Cash Out</div>
                </div>
            </div>
        </>
    )
}

export default List