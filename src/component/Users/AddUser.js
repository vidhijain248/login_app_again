import React from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import { useState , useRef} from 'react';
import ErrorModel from '../UI/ErrorModel';
// import Wrapper from '../Helpers/Wrapper';


const AddUser = (props)=>{
  const nameInputRef=useRef();
  const ageInputRef=useRef();
  // const [enteredUsername,setEnteredUsername]=useState('');
  // const [enteredAge,setEnteredAge]=useState('');
  const [error, seterror] = useState();

    const addUserHandler=(event)=>{
        event.preventDefault();
        const enteredName=nameInputRef.current.value;
        const enteredUserAge=ageInputRef.current.value;
        if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0){
          seterror({
            title:"Invalid input",
            messages:'please enter a valid name(non-empty values)'
          });
          return;
        }
        if(+enteredUserAge<1){
          seterror({
            title:"Invalid age",
            messages:'please enter a valid age(> 0)'
          });
          return;
        }
        props.onAddUser(enteredName,enteredUserAge);
        nameInputRef.current.value='';
        ageInputRef.current.value='';
        // setEnteredUsername('');
        // setEnteredAge('');
    };
    // const usernameChangeHandler = (event)=>{
    //   setEnteredUsername(event.target.value);
    // };
    // const ageChangeHandler= (event)=>{
    //   setEnteredAge(event.target.value);
    // };
    const errorHandler =()=>{
      seterror(null);
    }
  return (
  <>
   {error && <ErrorModel title={error.title} message={error.messages} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor='username'>UserName</label>
        <input id="username" type="text" 
        // value={enteredUsername} 
        // onChange={usernameChangeHandler} 
        ref={nameInputRef}/>
        <label htmlFor='age'>Age</label>
        <input id="age" type="number" 
        // value={enteredAge} 
        // onChange={ageChangeHandler}
         ref={ageInputRef}/>
        <Button type="submit">AddUser</Button>
    </form>
    </Card>
    </>
  );
}
export default AddUser;