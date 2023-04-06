import { useState } from 'react';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

const AddUser = ({ onAddUser }) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [error, setError] = useState();

    const nameChangeHandler = (event) => {
        setUserName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setUserAge(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (no empty values)',
            });
            return;
        } else if (userAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0)',
            });
            return;
        }

        const userData = {
            name: userName,
            age: Number(userAge),
        };
        onAddUser(userData);

        setUserName('');
        setUserAge('');
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onHideError={errorHandler} />}
            {/*
             {true/false && ...} 
             if true show the following element
            */}
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="username">First Name</label>
                        <input id="username" type="text" value={userName} onChange={nameChangeHandler} />
                        <label htmlFor="age">Age</label>
                        <input id="age" type="number" value={userAge} onChange={ageChangeHandler} />
                        {/* value={userAge} reflects the current state of that variable */}
                        <Button type="submit">Add User</Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
