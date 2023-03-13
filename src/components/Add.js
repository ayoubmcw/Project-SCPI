import {createContext, useEffect, useState } from 'react';
import Step from "./Formular/Step";
import MyStepper from "./Formular/MyStepper";


// Components
import Navigation from './Navigation';
import Search from './Search';



export const FormContext = createContext();
function Add() { 
    const [account, setAccount] = useState(null);

    const [activeStepIndex, setActiveStepIndex] = useState(0);
    const [formDataResidence, setFormDataResidence] = useState({});
    const [formDataOwner, setFormDataOwner] = useState({});

    return (
    <div>
      <Navigation account={account} setAccount={setAccount} />
      <Search />

      <div className='cards__section'>

        <h3>Formulaire</h3>

        <hr />
        <FormContext.Provider
          value={{ activeStepIndex, setActiveStepIndex, formDataResidence, setFormDataResidence, formDataOwner,setFormDataOwner }}
        >
          <MyStepper />
          <Step />
        </FormContext.Provider>

      </div>

    </div>
  );
}
export default Add;