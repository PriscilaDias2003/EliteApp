import React from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/logo-purple.png';
import '../../pages/SignUp/style.css';

export default function SocialMedia(props){
    const history = useHistory();

    function handleSubmit(){
        
    }
    const back = e => {
        e.preventDefault();
        props.prevStep();
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
                    name='instagram'
                    placeholder='Instagram(Opcional)'
                    //onChange={inputChange('name')} 
                    //value={values.name}
                />
                </div>
                <div className='form-inputs'>

                <input
                    className='form-input'
                    type='text'
                    name='facebook'
                    placeholder='Facebook(Opcional)'
                    //onChange={inputChange('name')} 
                    //value={values.companyName}
                />
                
                </div>
                <div className='form-inputs'>
                <textarea 
                    className='textArea'
                    name='description'
                    placeholder='Breve descrição sobre sua empresa'
                    //onChange={inputChange('name')} 
                    //value={values.cnpj}
                    >

                </textarea>
                
                </div>
                <div className='form-inputs'>
                
                    <input className='file' id="file" class="pg-2" type="file" accept="image/*"/>
                    <label for="file">
                        Escolha uma foto
                    </label>
                       
                    
                        
                </div>
                
                <div className="buttonsForm">
                    <button onClick={back}>
                        Voltar
                    </button>
                    <button onClick={handleSubmit}>
                        Cadastrar
                    </button>
               </div>
            </form>
            </div>

        )
}

