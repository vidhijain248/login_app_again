import React from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import { useState } from 'react';
import ErrorModel from '../UI/ErrorModel';
// import Wrapper from '../Helpers/Wrapper';


const AddUser = (props)=>{
  const [enteredUsername,setEnteredUsername]=useState('');
  const [enteredAge,setEnteredAge]=useState('');
  const [error, seterror] = useState();

    const addUserHandler=(event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
          seterror({
            title:"Invalid input",
            messages:'please enter a valid name(non-empty values)'
          });
          return;
        }
        if(+enteredAge<1){
          seterror({
            title:"Invalid age",
            messages:'please enter a valid age(> 0)'
          });
          return;
        }
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };
    const usernameChangeHandler = (event)=>{
      setEnteredUsername(event.target.value);
    };
    const ageChangeHandler= (event)=>{
      setEnteredAge(event.target.value);
    };
    const errorHandler =()=>{
      seterror(null);
    }
  return (
  <>
   {error && <ErrorModel title={error.title} message={error.messages} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor='username'>UserName</label>
        <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
        <label htmlFor='age'>Age</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
        <Button type="submit">AddUser</Button>
    </form>
    </Card>
    </>
  );
}
export default AddUser;