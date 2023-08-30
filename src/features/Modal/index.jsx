import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
import victory from '../../assets/img/victory.jpg'
import votay from '../../assets/img/votay.png'
import { useNavigate } from 'react-router-dom';

Modal.propTypes = {
    
};

function Modal({OnDataToMoDal ,totalCorrectAnswer,countTime,clearTimer,modalStatus }) {
    const navigation = useNavigate()
    const handleOnClick = ()=>{
        OnDataToMoDal()
        clearTimer()
       
    }
  
    return (
        <div className='modal'>
            <div className='modal-overlay'></div>

            {totalCorrectAnswer >5 &&
                <div className='modal-body than'>
                <img src={victory} alt="victory" className='victory' />
                <div className='modal-body-header'>
                    <h2> Congratulation </h2>
            </div>
            <div className='content'>
                    <span className='you'>you are mazing !!!</span>
                    <span className='correts'>correts answer {totalCorrectAnswer} in {countTime}s seconds</span>
                </div>
            <div className='content-button'><button className='play'onClick={()=> handleOnClick()}>Play Again</button></div>
            </div>            
            }

            {totalCorrectAnswer <=5 && 
                <div className='modal-body less'>
                <img src= {votay} alt="votay" className='votay' />
                <div className= 'modal-body-header'>
                    <h2> Congratulation </h2>
               </div>
               <div className='content'>
                    <span className='you'>you are mazing !!!</span>
                    <span className='correts'>correts answer {totalCorrectAnswer} in {countTime}s seconds</span>
                </div>
               <div className='content-button'><button className='play'onClick={()=> handleOnClick()}>Play Again</button></div>
             </div>            }
             
        </div>
    );
}

export default Modal;