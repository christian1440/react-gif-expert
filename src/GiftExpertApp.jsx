import React, { useState } from 'react'
import { AddCategory, GiftGrid } from './components';

//Esta es nuestra aplicacion

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {

        if (categories.includes(newCategory)) return;      
        setCategories([ newCategory ]); 
        
        //setCategories setea las categorias, con la ayuda del operador Spread se crea una copia del arreglo categories y con 
        //la desestructuracion se agrega el elemento nuevo        
        //otra alternativa
        //setCategories( cat => [ ...cat, newCategory ] );         
        }

  return (
    <>
        <h1>GiftExpertApp</h1>
       
        <AddCategory             
            onNewCategory= { event => onAddCategory(event)} 
        />          
        
        {/* .map() permite barrer cada uno de los elementos del arreglo y retornar algo nuevo  */}
        {
            categories.map( (category) =>  ( 
            <GiftGrid 
                key={ category } 
                category={ category } 
            /> 
            )) 
        }            
        
            {/** Gift Item */}
    
    </>
  )
}
