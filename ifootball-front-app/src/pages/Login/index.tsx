import React, { useState, ChangeEvent, FormEvent } from 'react';
import './style.scss';

const Login = () => {
    const [form, setForm] = useState({
        email: '',
        senha: ''
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log('Formulário enviado:', form);
    };

    return (
        <div>
            <h1>IFootball</h1>
            <form onSubmit={handleSubmit}>
                <div></div>
                
                <label>Email</label>
                <input type="email" name="email" onChange={handleChange} required/>
                
                <label>Senha</label>
                <input type="password" name="senha" onChange={handleChange} required/>
                
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
};

export default Login;
