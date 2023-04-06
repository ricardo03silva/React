import { useRef, useState } from 'react';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = ({ onAddUser }) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [error, setError] = useState();

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (no empty values)',
            });
            return;
        } else if (enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0)',
            });
            return;
        }

        const userData = {
            name: enteredName,
            age: Number(enteredAge),
        };
        onAddUser(userData);

        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onHideError={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="username">First Name</label>
                        <input id="username" type="text" ref={nameInputRef} />
                        <label htmlFor="age">Age</label>
                        <input id="age" type="number" ref={ageInputRef} />
                        <Button type="submit">Add User</Button>
                    </div>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;
