import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = ({ users, onDeleteUser }) => {
    // ({ users, onDeleteUser }) : destructuring the props element
    // the same as (props) and then props.users...
    return (
        <Card className={classes.users}>
            <ul>
                {users.map((el) => (
                    <li key={el.id} onClick={() => onDeleteUser(el.id)}>
                        {el.name} ({el.age} years)
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UsersList;
