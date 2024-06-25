import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    //este metodo permite  escribir en el imput
    const onInputChange = ({target}) => {              
        setInputValue(target.value);
    }


    //este metodo permire actualizar el estado del input y obtener su informacion
    const onSubmit = ( event ) => {

        //preventDefault() evita que el formulario se actualice o recargue por defecto
        // sin el se recargaria al precionar "enter"
        event.preventDefault();

        if( inputValue.trim().length <= 1 ) return;

        //setCategories((categories)=>[...categories, inputValue ]);     
        onNewCategory(inputValue.trim() ); 
        setInputValue('');   
    }


    return (    
        <form onSubmit={ (event) => onSubmit(event) }>
            <input 
            type="text"
            placeholder="Buscar gift"
            value={inputValue}
            onChange={  onInputChange }
        />
        </form>
        
    
  )
}
