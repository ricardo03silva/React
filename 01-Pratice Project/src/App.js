import React, { Fragment, useState } from 'react';

import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

const App = () => {
    const [userList, setUser] = useState([]);
    const [maxID, setMaxID] = useState(0);

    const addUserHandler = (item) => {
        const data = {
            id: maxID + 1,
            ...item,
        };
        setMaxID(data.id);

        setUser((prev) => {
            return [...prev, data];
        });
    };

    const deleteUserHandler = (id) => {
        setUser(userList.filter((el) => el.id !== id));
    };

    return (
        <Fragment>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={userList} onDeleteUser={deleteUserHandler} />
        </Fragment>
    );
};

export default App;
