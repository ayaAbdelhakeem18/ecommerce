import React from 'react';
import { useFormContext,Controller } from 'react-hook-form';


function FormInput(props) {
    const {control}=useFormContext();
  return (
    <div>
      <Controller
      render = {()=> (
        <input type={props.type}  name={props.name} required={props.required}    className={props.className} id={props.id}/>
    )}
      control={control}
      name={props.name} 
      defaultValue={props.value}
      />
    </div>
  )
}

export default FormInput
