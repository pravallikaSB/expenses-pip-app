import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React from 'react';

const ExpenseItem = (props) => {
    /* useState must be called inside the functions */
    /* setTitle is the function to use later */
    /* first element is the variable that we need change 
    after occurrence of an event */
    /* second element is the function to reassign that 
    variable in the later time */
    /*

    const [title,setTitle] = useState(props.title);
    console.log("Expense Item evaluated by React"); */
  //  const clickHandler=()=>{
        /* it not only assigns the variable with a new value,
        but also, the component function in whihc we call this
        function will be executed again and thus the element's
        content can be changed */
   //     setTitle("Updated!!");
    //    console.log(title);
   // };

    /* have to change that name in the return, inside tags 
    also, then only it works */

    return(
        <li>
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
        </li>
    );
}

export default ExpenseItem;