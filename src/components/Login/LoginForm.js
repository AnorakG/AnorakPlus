import React,{ useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';


function LoginForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
      e.preventDefault()

      try{
          setError('')
          setLoading(true)
          console.log("funcionou")
          await login(emailRef.current.value, passwordRef.current.value)
          history.push("/")
      } catch{
          setError('Falha ao logar, Cheque sua senha e email ou cadastre-se')
      }
      
      setLoading(false)
  }

  return (
    <div className="login-body">
      <div className="login-body__form">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
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
        <div className="login-body__input">
          <input
            type="password"
            placeholder="Senha"
            required
            ref={passwordRef}
            id='password'
          />
        </div>
        <button type = "submit" className="login-body__submit-btn"
        disabled={loading}>
            Login
        </button>
        </form>
        <div className="login-body__options">
          <span>Lembre-se de mim</span>
          <span className="login-body__need-help">Precisa de Ajuda?</span>
        </div>
        <div className="login-body__footer">
          
          <div className="login-body__new-to-nl">
            <span>Não tem conta Anorak+ ? </span>
            <span className="login-body__sign-up"><Link to="/signup"className="text-link">Cadastre-se agora.</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
