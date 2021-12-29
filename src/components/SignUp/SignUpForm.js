import React, { useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'




function SignUpForm() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !==passwordConfirmRef.current.value){
            return setError('Senhas não combinam')
        }

        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/login")
        } catch{
            setError('Falha em criar conta')
        }
        
        setLoading(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='login-body'>
                <div className="login-body__form">
                <h1>Cadastro</h1>
                {error && alert(error)}
            <div className="login-body__input mb-16">
            <input
                type="text"
                placeholder="Email"
                required
                ref={emailRef}
                id = 'email'
            />
            </div>
            <div className="login-body__input mb-16">
            <input
                type="password"
                placeholder="Senha"
                required
                ref={passwordRef}
                id='password'
            />
            </div>
            <div className="login-body__input">
            <input
                type="password"
                placeholder="Confirme sua senha"
                ref={passwordConfirmRef}
                id='password-confirm'
            />
            </div>
            <button type="submit" disabled={loading} className="login-body__submit-btn">
                Cadastre-se
            </button>
            <div className="login-body__new-to-nl">
            <span>Já tem conta Anorak+ ? </span>
            <span className="login-body__sign-up"><Link to="/login"className="text-link">Faça Login agora.</Link></span>
            </div>
            </div>
            </div>
        </form>
    )
}

export default SignUpForm
