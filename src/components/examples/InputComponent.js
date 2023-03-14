import { useState } from 'react';
import Child from './Child';
import RegisterForm from './RegisterForm';
import TextInputWithFocusButton from './TextInputWithFocusButton';

function InputComponent() { 
  const date = new Date();
  const formName = 'Example Input Form';
  const [inputText, setText] = useState('Wag Wan'); 

  function handleChange(e) { 
    setText(e.target.value); 
  } 

  return ( 
    <> 
        <Child message={date.toLocaleDateString()}/>

      <input value={inputText} onChange={handleChange} /> 
      <p>You typed: {inputText}</p> 
      <button onClick={() => setText('Text was reset.')}> 
        Reset 
      </button> 

      <RegisterForm formName={formName}/>

      <TextInputWithFocusButton />
    </> 
  ); 
} 

export default InputComponent