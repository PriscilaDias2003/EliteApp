import React from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/logo-purple.png';
import '../../pages/SignUp/style.css';

export default function AccountSetup(props){
    const go = e => {
        e.preventDefault();
        props.nextStep();
    };

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
                    name='username'
                    placeholder='Nome'
                    //onChange={inputChange('name')} 
                    //value={values.name}
                />
                </div>
                <div className='form-inputs'>

                <input
                    className='form-input'
                    type='text'
                    name='empresa_nome'
                    placeholder='Nome da empresa'
                    //onChange={inputChange('companyName')} 
                    //value={values.companyName}
                />
                
                </div>
                <div className='form-inputs'>
                <input
                    className='form-input'
                    type='text'
                    name='cnpj'
                    placeholder='CNPJ'
                    //onChange={inputChange('cnpj')} 
                    //value={values.cnpj}
                />
                
                </div>
                <div className='form-inputs'>
                <input
                    className='form-input'
                    type='text'
                    name='endereco'
                    placeholder='Endereço'
                    //onChange={inputChange('adress')} 
                    //value={values.adress}
                />
                </div>
                <button className='form-input-btn' onClick={go}>
                Próximo
                </button>
                <span className='form-input-login'>
                Já tem uma conta? Login <a onClick={handleLogin}>aqui</a>
                </span>
            </form>
            </div>

        )
}
