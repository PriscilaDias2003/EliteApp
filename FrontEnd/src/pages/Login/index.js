import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import Menu from '../../components/Menu/index';

import './styles.css';

import logoImg from '../../assets/elite_logo.png';
import loginImg from '../../assets/loginImg.png';

export default function Logon(){
    /*const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('session', {id});

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        }catch(err){
            alert('Falha no login, tente novamente.');

        }    

    }*/

    async function handleLogin(e){

    }

    return(
        <div className="container">
            <div className="header">
                    <img src= {logoImg} alt="Elite" />
                    <Menu/>
                </div>
            <div className="logon-conteiner">
                <img className="loginImg" src = {loginImg} alt="Login"/>

                <section className="form">
                    <form onSubmit={handleLogin}>
                        <h1>Login</h1>

                        <p className="labelInfo">Cnpj</p>
                        <input 
                            type = "text" placeholder="Seu ID"
                            //value = {id}
                            //onChange = {} //pega o valor do campo
                        />

                        <p className="labelInfo">Senha</p>
                        <input type = "text" placeholder="Digite sua senha"/>
                        <button className="button " type = "submit">Entrar</button>

                        <Link className = "back-link" to="/signup">    
                            Não tenho cadastro
                        </Link>
                    </form>
                </section>

                
            </div>
        </div>
    );
}