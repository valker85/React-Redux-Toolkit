import React from 'react'

export default function InputField({ text, setText, handleSubmit }) {
  return (
    <label>
        <input value={ text } onChange={ (e)=> setText(e.target.value) } />
        <button onClick={ handleSubmit }>Add Todo</button>
    </label>
  )
}
