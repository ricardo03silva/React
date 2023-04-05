import React, { useState } from 'react';

import AddUser from './Components/Users/AddUser';
import Card from './Components/UI/Card';
import UsersList from './Components/Users/UsersList';

const users = [
    {
        key: 1,
        name: 'Ricardo',
        age: 22,
    },
    {
        key: 2,
        name: 'Pedro',
        age: 20,
    },
    {
        key: 3,
        name: 'Duarte',
        age: 21,
    },
];

const App = () => {
    const [user, setUser] = useState(users);
    const [maxKey, setMaxKey] = useState(3);

    const addUserHandler = (item) => {
        const data = {
            key: maxKey + 1,
            ...item,
        };

        setUser((prev) => {
            return [data, ...prev];
        });

        setMaxKey(data.key);
    };

    const deleteUserHandler = (key) => {
        setUser(user.filter((el) => el.key !== key));
    };

    return (
        <div>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={user} onDeleteUser={deleteUserHandler} />
        </div>
    );
};

export default App;
