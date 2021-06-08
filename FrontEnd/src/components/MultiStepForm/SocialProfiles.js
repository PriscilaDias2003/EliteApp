import React from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/logo-purple.png';
import '../../pages/SignUp/style.css';

export default function SocialProfiles(props){
    const go = e => {
        e.preventDefault();
        props.nextStep();
    }

    const back = e => {
        e.preventDefault();
        props.prevStep();
    }

    const history = useHistory();

    function handleSubmit(){
        
    }

    function handleLogin(){
        history.push('/login');
    }

   
        const { values, inputChange } = props;

        return (
        <div className='form-content-right'>
            
            <form onSubmit={handleSubmit} className='form-signup '>
            
                <div className="header-logo-img">
                <img src={Logo} />
                    <h1 className="title-form">
                    ELITE
                    </h1>
                </div>
                <div className='form-inputs'>
                <input
                    className='form-input'
                    type='text'
                    name='phone'
                    placeholder='Telefone'
                    //onChange={inputChange('name')} 
                    //value={values.name}
                />
                </div>
                <div className='form-inputs'>

                <input
                    className='form-input'
                    type='email'
                    name='email'
                    placeholder='Email'
                    //onChange={inputChange('name')} 
                    //value={values.companyName}
                />
                
                </div>
                <div className='form-inputs'>
                <input
                    className='form-input'
                    type='text'
                    name='whatsapp'
                    placeholder='WhatApp'
                    //onChange={inputChange('name')} 
                    //value={values.cnpj}
                />
                
                </div>
                <div className='form-inputs'>
                <input
                    className='form-input'
                    type='text'
                    name='site'
                    placeholder='Site(Opcional)'
                    //onChange={inputChange('name')} 
                    //value={values.adress}
                />
                </div>
               <div className="buttonsForm">
                    <button onClick={back}>
                        Voltar
                    </button>
                    <button onClick={go}>
                        Próximo
                    </button>
               </div>
                
            </form>
            </div>

        )
}

