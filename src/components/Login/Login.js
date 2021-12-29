import React from 'react'
import Nav from '../Nav/Nav'
import LoginForm from './LoginForm'
import { AuthProvider } from '../../contexts/AuthContext'

function Login() {
    return (
        <AuthProvider>
        <div className="main">
            <Nav />
            <LoginForm />            
        </div>
        </AuthProvider>
    )
}

export default Login
