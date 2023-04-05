import { useState } from 'react';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';

const AddUser = ({ onAddUser }) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');

    const nameChangeHandler = (event) => {
        setUserName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setUserAge(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const userData = {
            name: userName,
            age: userAge,
        };
        onAddUser(userData);

        setUserName('');
        setUserAge('');
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="username">First Name</label>
                    <input id="username" type="text" value={userName} onChange={nameChangeHandler} />
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" value={userAge} onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </div>
            </form>
        </Card>
    );
};

export default AddUser;
