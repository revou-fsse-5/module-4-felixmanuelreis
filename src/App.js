import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import AddressInfo from './components/AddressInfo';
import AccountInfo from './components/AccountInfo';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    dateOfBirth: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    username: '',
    password: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const submitForm = () => alert('Form submitted!');

  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
        {step === 1 && (
          <PersonalInfo formData={formData} setFormData={setFormData} nextStep={nextStep} />
        )}
        {step === 2 && (
          <AddressInfo formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
        )}
        {step === 3 && (
          <AccountInfo formData={formData} setFormData={setFormData} submitForm={submitForm} prevStep={prevStep} />
        )}
      </div>
    </div>
  );
}

export default App;
