
import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setcategories}) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
       

    }
    
    const handleSumbit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2){
            setcategories(categ=> [inputValue, ...categ]);
            setInputValue('');
        }
     }
    return (
        
        <form onSubmit={handleSumbit}>
        <input
        placeholder="Ingrese..."
        type="text"
        value = {inputValue}
        onChange={handleInputChange}
        />
 
        </form>
       
    )
}

AddCategory.protoTypes = {
    setcategories: PropTypes.func.isRequired
}