import React, { useState } from 'react';
import AccountSetup from './AccountSetup';
import SocialProfiles from './SocialProfiles';
import SocialMedia from './SocialMedia';
import Confirm from './Confirm';
import Success from './Success';


export default function Form(){
    const [state, setState ] = useState(
    {
        step: 1,

        name: '',
        companyName: '',
        cnpj: '',
        adress: '',

        email: '',
        phone: '',
        whatsapp: '',
        site: '',

        instagram: '',
        facebook: '',
        description: '',
        password: '',
    });

    const nextStep = () => {
        const { step } = state;
        setState({ step: step + 1 });
    };

    const prevStep = () => {
        const { step } = state;
        setState({ step: step - 1 });
    };

    const inputChange = input => e => {
        setState({
            [input]: e.target.value
        });
    };
    const { step } = state;
    const { 
        name, 
        companyName, 
        cnpj, 
        adress, 
        email, 
        phone, 
        whatsapp, 
        site, 
        instagram, 
        facebook,
        description,
        password

    } = state;
    const values = { 
        name, 
        companyName, 
        cnpj, 
        adress, 
        email, 
        phone, 
        whatsapp, 
        site, 
        instagram, 
        facebook,
        description,
        password 
    };

    switch (step) {
        case 1:
            return (
                <AccountSetup
                    nextStep={nextStep}
                    inputChange={inputChange}
                    values={values}
                />
            );
        case 2:
            return (
                <SocialProfiles
                    nextStep={nextStep}
                    prevStep={prevStep}
                    inputChange={inputChange}
                    values={values}
                />
            );
        case 3:
            return (
                <SocialMedia
                    nextStep={nextStep}
                    prevStep={prevStep}
                    inputChange={inputChange}
                    values={values}
                />
            );
        /*case 4:
            return (
                <Confirm
                    nextStep={nextStep}
                    prevStep={prevStep}
                    values={values}
                />
            );
        case 5:
            return (
                <Success />
            );*/
    }
}

