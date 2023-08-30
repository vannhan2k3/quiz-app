import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/img/logo.jpg'
import './style.css'
import { useNavigate } from 'react-router-dom';

StartPage.propTypes = {
    
};

function StartPage(props) {
    const navigation = useNavigate()

    const handleOnClick = ()=>{
       navigation("/question")
    }
    return (
        <div className='Wrap-Home'>
            <div className='container'>
                <img src={logo} alt="logorobot" className='logo'/>
                <button className='quiz'onClick={()=> handleOnClick()}>Quiz strar</button>
            </div> 
        </div>
    );
}

export default StartPage;