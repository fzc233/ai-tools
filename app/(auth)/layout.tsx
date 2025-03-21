import React from 'react'
//sign in and sign up page
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="auth">{children}</main>

    )
}

export default Layout