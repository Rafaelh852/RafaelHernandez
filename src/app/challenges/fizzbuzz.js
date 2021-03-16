import React, {useState} from 'react';
import {Formik,Field,Form} from "formik";

const Fizzbuzz = () => {

var  [fz,setfz] = useState("");

const fb = (input) => {
  return (
    <ul>
      {((n=0)=>{
        var arr = [];
        var word = "";
    
         for(var i = 1 ; i < n+1; i++){
          if(i%3 === 0){word =" Fizz"}
          if(i%7 === 0){word =" Buzz"}
          if(i%15 === 0){word =" Fizz Buzz"}
          arr.push(<li> {i}: {word} </li>)
          
          word = "";
    
        }
        return arr;
      })(input)}
    </ul>
  )
}

  return (
    <div >
      <h2>Welcome to Fizz Buzz!</h2>
      <Formik 
      initialValues={{input:""}}
      onSubmit = {(values)=>{
        setfz(fb(values.input/10)); 
      // for some reason its adding a 0 at the end of the number. so we divide by 10 to fix
      }}
      >
        <Form>
          <label htmlFor="input">Type in any number</label>
          <Field id="input" name="input" />
          <button type="submit" >FizzBuzz</button>
        </Form>
      </Formik>
      <div id="fzbz">{fz}</div>
    </div>
  )
}





export default Fizzbuzz;
