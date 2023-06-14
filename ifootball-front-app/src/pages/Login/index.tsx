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
                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Senha
                    <input
                        type="password"
                        name="senha"
                        value={form.senha}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
};

export default Login;
