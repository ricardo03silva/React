import { useState } from 'react';
import styles from './AddUser.module.css';

const AddUser = () => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="">
                    <label>Name</label>
                    <input type="text" />
                </div>
                <div className="">
                    <label>Amount</label>
                    <input type="number" />
                </div>
                <button type="submit">Add Expense</button>
            </form>
        </div>
    );
};

export default AddUser;
