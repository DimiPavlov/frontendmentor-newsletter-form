import { FC } from 'react';

interface SuccessPopupProps {
    onDismiss?: () => void;
}

const heading = 'Thanks for subscribing!';
const email = 'ash@loremcompany.com';
const buttonText = 'Dismiss message';
const text = <p> A confirmation email has been sent to <span style={{ fontWeight: 'bold' }}>{email}</span>. Please open it and click the button inside to confirm your subscription.</p>;



const SuccessPopup: FC<SuccessPopupProps> = ({ onDismiss }) => {

    return (
        <div className='popup__container'>
            <div className='popup__content'>
                <img src={'/images/icon-list.svg'} alt="icon" />
                <h1 className='heading'>{heading}</h1>
                <p>{text}</p>
            </div>
            <div className='popup__button'>
                <button className='button' onClick={onDismiss}>{buttonText}</button>
            </div>
        </div >
    );
};

export default SuccessPopup;