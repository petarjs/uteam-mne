import React, { forwardRef } from 'react'
import styles from './FormInput.module.css'

const FormInput = forwardRef(
  (
    { name, type, placeholder, id, label, required, autoComplete, register = () => {}, accept },
    ref
  ) => {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className={styles.input}
          ref={ref}
          autoComplete={autoComplete}
          required={required}
          {...register(name)}
          accept={accept}
        />
      </div>
    )
  }
)

FormInput.displayName = 'FormInput'

export default FormInput
