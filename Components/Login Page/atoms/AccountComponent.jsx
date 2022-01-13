import React from 'react'

function AccountComponent([children, componentClass]) {
    return (
        <div className={componentClass}>
           <img style={{'borderRadius': 'inherit'}} src="https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-1/p160x160/270117435_110903798126827_6497480457192556658_n.jpg?_nc_cat=103&amp;ccb=1-5&amp;_nc_sid=dbb9e7&amp;_nc_ohc=7_iQJWe1X4EAX8ktoZL&amp;_nc_ht=scontent-lhr8-1.xx&amp;oh=00_AT_mV_nnXeH9RgNWGjzWErCmzVWkKS1HWQhjcGFWdQiGIQ&amp;oe=61D9C301"/>
            <p>{children}</p>
        </div>
    )
}

export default AccountComponent
