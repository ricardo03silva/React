import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = ({ users, onDeleteUser }) => {
    return (
        <Card className={classes.users}>
            <ul>
                {users.map((el) => {
                    return (
                        <li key={el.key} onClick={() => onDeleteUser(el.key)}>
                            {el.name} ({el.age} years old)
                        </li>
                    );
                })}
            </ul>
        </Card>
    );
};

export default UsersList;
