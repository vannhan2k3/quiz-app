import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

TextQuestion.propTypes = {
    
};

function TextQuestion({question , number}) {
    
    return (
        <div>
            <h3>Question {number + 1}/10</h3>
            <div className='text-question'><span>{question && question.question}</span></div>
            
        </div>
        
    );
}

export default TextQuestion;