import { useState } from 'react';
import './style.scss';

const Login = () => {
    const [form, setForm0] = useState({
        user: 'marcelo', 
        senha: ''
    })
    console.log(form.user)
    return (
        <div><h1>Grêmio</h1></div>
    )
}

export default Login;