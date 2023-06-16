import './App.css';
import { useState, FormEvent, ChangeEvent, FC } from 'react';
import SuccessPopup from './components/success-popup/SuccessPopup';



const App: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      setEmailError('Email is required!');
    } else if (!isValidEmail(email)) {
      setEmailError('Valid Email is required');
    } else {
      setEmailError('');
      setShowSuccessModal(true);
      setEmail('');
    }
  };


  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const dismissModal = () => {
    setShowSuccessModal(false);
  };



  return (
    !showSuccessModal ?
      <form noValidate onSubmit={handleSubmit} className='form__container'>
        <div className='form__left-side'>
          <h1 className='heading'>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <div className='form__description'>
            <div className='form__flex-group'>
              <img src='/images/icon-success.svg' alt='icon' />
              <p>Product discovery and building what matters</p>
            </div>
            <div className='form__flex-group'>
              <img src='/images/icon-success.svg' alt='icon' />
              <p>Measuring to ensure updates are a success</p>
            </div>
            <div className='form__flex-group'>
              <img src='/images/icon-success.svg' alt='icon' />
              <p>And much more!</p>
            </div>
          </div>
          <div className='form__email'>
            <label htmlFor='email'>Email address</label>
            <input type='email' id='email' placeholder='email@company.com' className={emailError ? 'test' : ''} value={email} onChange={handleEmailChange}
              onBlur={() => setEmailError('')} />
            {emailError && <div className="form__error">{emailError}</div>}
          </div>
          <button type='submit' className='button'>Submit to monthly newsletter</button>
        </div>
        <div className='form__right'>
          <img className='form__image' src='/images/illustration-sign-up-desktop.svg' alt='image' />
        </div>
      </form>
      : <SuccessPopup onDismiss={dismissModal} />
  );
};

export default App



