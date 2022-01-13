import React from 'react'
function LinksComponent({children, linkClass}) {
    return (
            <a href='#' className={linkClass}>
                {children}
            </a>
    )
}

export default LinksComponent
