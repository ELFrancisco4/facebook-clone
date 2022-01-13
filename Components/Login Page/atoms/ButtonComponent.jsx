import React from 'react'

function ButtonComponent({children, buttonClass}) {
    return (
        <button className={buttonClass}>
               {children}
        </button>
    )
}

export default ButtonComponent
