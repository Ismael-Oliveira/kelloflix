import React from 'react'

function FormField({type, name, value, onChange}) {

    if(name==='descricao') {
        return (
            <div>
                <textarea
                name={name}
                value={value}
                onChange={onChange} 
                >
                </textarea>
            </div>
        )
    }

    return (
        <div>
            <input 
            type={type}
            name={name}
            value={value}
            onChange={onChange} 
            />
        </div>
    )
}

export default FormField;

 