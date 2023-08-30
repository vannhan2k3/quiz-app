import React, { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import TextQuestion from "./components/TextQuestion";
import TextAnswer from "./components/TextAnswer";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";
import questionApi from "../../api/questionApi";
QuestionQuiPage.propTypes = {};

function QuestionQuiPage(props) {
  const [showModal, setShowModal] = useState(false);
  const [listQuestion, setListQuestion] = useState();
  const [number, setNumber] = useState(0);
  const [ openButtonNext , setOpenButtonNext ] = useState(false)
  const [totalCorrectAnswer , setTotalCorrectAnswer] = useState(0)
  const [countTime, setCountTime] = useState(0)
  const [checkLock, setCheckLock ] = useState(false)
  const [modalStatus , setModalStatus] = useState("")
  const navigation = useNavigate();
  const IdTimer = useRef()

  const handleOnClick = () => {
    navigation("/");
  };

  const handleNext = () => {
    if (number < 9) {
      setNumber(number + 1 );
      
    } else {
      setShowModal(!showModal);
      clearTimer()
      
    }
  };


  useEffect(() => {
    async function fetch() {
      let res = await questionApi.getQuestion({ amount: 10 });
      setListQuestion(res.data.results);
      
    }
    fetch();
  }, []);

  const mergeAnswer = (item) => {
    const answer = item && [...item.incorrect_answers, item.correct_answer];
    const answerOject = answer && answer.map((item) => {
        return {
          id: item,
          value: item,
        };
      });
    
    return answerOject;
  };

  const shuffleArray = (arr) => {
    if (!arr) return [];
    for (let i = arr.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i
      const j = Math.floor(Math.random() * (i + 1));

      // Swap the current element with the randomly selected element
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  };

  const newAnswer = useMemo(()=>{
    return shuffleArray(
      mergeAnswer(listQuestion && listQuestion[number])
    )
  },[number,listQuestion])
   
  const handleCheckToShowButtonNext = ()=>{
    setOpenButtonNext(true)
  }

  useEffect(()=>{
    setOpenButtonNext(false)

  },[number])

//hiển thị hết quả, thời gian và số đáp án
  const handleDataToMoDal = ()=>{
    setNumber(0)
    setShowModal(false)
    setTotalCorrectAnswer(0)
     setCountTime(0)
     setCheckLock(!checkLock)
  }

  const handleTotal = ( )=>{
   setTotalCorrectAnswer(totalCorrectAnswer + 1)
  }

///setTimout
  useEffect(()=>{
   IdTimer.current = setInterval(() => {
      setCountTime(prev=> prev + 1 )
    }, 1000);
  
  },[checkLock])

 const clearTimer = ()=>{
  clearInterval(IdTimer.current)
 }


  const lengthQuestion = listQuestion && listQuestion.length
  return (
    <div className="Wrap-question">
      <div className="container">
        <div onClick={handleOnClick} className="cancel"></div>
        <TextQuestion number={number} question={listQuestion && listQuestion[number]}/>
        <TextAnswer answer={newAnswer}   correct={listQuestion && listQuestion[number].correct_answer}
                    openButtonNext={handleCheckToShowButtonNext} totalCorrectAnswer={handleTotal} />
        {/* // onchangeAnswer={handleOnchangeAnswer} */}
        <button className={openButtonNext === true ? "" : "disabled"}  onClick={() => handleNext()}>{number ===  lengthQuestion - 1 ?"Done" : "Next"}</button>

        <p>Number of correct Answer {totalCorrectAnswer} </p>
        <p>thời gian đang chạy {countTime} </p>
        
       </div>
      
      {showModal && <Modal OnDataToMoDal={handleDataToMoDal} totalCorrectAnswer={totalCorrectAnswer} countTime={countTime} clearTimer={clearTimer}/>}
    </div>
  );
}

export default QuestionQuiPage;
