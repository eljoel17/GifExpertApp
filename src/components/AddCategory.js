
import React, { useState } from 'react'

export const AddCategory = ({setcategories}) => {

    const [inputValue, setInputValue] = useState('Hola');
    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
       

    }
    
    const handleSumbit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2){
            setcategories(categ=>[...categ, inputValue]);
        }
     }
    return (
        
        <form onSubmit={handleSumbit}>
        <input
        type="text"
        value = {inputValue}
        onChange={handleInputChange}
        />
 
        </form>
       
    )
}
