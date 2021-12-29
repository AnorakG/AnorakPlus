import React from 'react';
import Nav from '../Nav/Nav';
import SignUpForm from './SignUpForm'
import { AuthProvider } from '../../contexts/AuthContext'

function SignUp() {
    return (
        <AuthProvider>
        <div className='main'>
            <Nav/>
            <SignUpForm/>
        </div>
        </AuthProvider>
    )
}

export default SignUp
