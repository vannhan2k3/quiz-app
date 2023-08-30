import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import checked from "../../../../assets/img/checked.png";
import close from "../../../../assets/img/close.png";
import classNames from "classnames";

TextAnswer.propTypes = {

};

function TextAnswer({ answer, correct, openButtonNext, totalCorrectAnswer }) {
    const [checkIndex, setCheckIndex] = useState(-1);
    const [checkCorrect, setCheckCorrect] = useState(false);
    const [showCorrect, setShowCorrect] = useState(false);
    
    const [ disabled , setDisabled] = useState(false)
    
    useEffect(()=>{
        setCheckIndex(-1)
        setCheckCorrect(false)
        setShowCorrect(false )
        setDisabled (false)
    },[answer , correct])

    const handleOnClick = (index, item) => {
        openButtonNext()
        setDisabled(true)
        if(!showCorrect){
            setCheckIndex(index);
            setCheckCorrect(item.value === correct);
            setShowCorrect(true);

            if(item.value === correct){
                totalCorrectAnswer()
                setCheckCorrect(true)
            }
            
        }
        
       
    
    

        if (item.value === correct) {
            setCheckCorrect(true);
            
        } else {
            setShowCorrect(true)
        }

    };
    //wrap-answer answer-checked

    return (
        <>
            
            {answer && answer.map((item, index) => {
             
                    return (
                        <div
                            className={classNames(
                                
                                checkIndex === index? "wrap-answer answer-checked": "wrap-answer",
                                checkIndex === index && checkCorrect === true ? " correct" : "",
                                disabled === true ?"disabled": ""
                                )}
                            onClick={() =>  handleOnClick(index, item)}>
                                
                            <span className="title">{item.value}</span>
                            {checkIndex === index && checkCorrect ? (<img src={checked} alt="check" />) : ("")}
                            {checkIndex === index && !checkCorrect ? (<img src={close} alt="close" />) : ("" )}
                        </div>
                    );
                })}
            {showCorrect === true && (<span className="answercorrets">AnswerCorrets is: {correct} </span> )}
        </>
    );
}

export default TextAnswer;
