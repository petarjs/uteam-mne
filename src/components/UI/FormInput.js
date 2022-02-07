import React, { forwardRef } from 'react'
import styles from './FormInput.module.css'

const FormInput = forwardRef(
   ({ type, placeholder, id, label, required }, ref) => {
      return (
         <div>
            <label htmlFor={id}>{label}</label>
            <input
               type={type}
               placeholder={placeholder}
               className={styles.input}
               ref={ref}
               autoComplete='current-password'
               required={required}
            />
         </div>
      )
   }
)

export default FormInput
