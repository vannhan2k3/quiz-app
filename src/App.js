import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";

import StartPage from "./components/StartPage";
import QuestionQuiPage from "./features/QuestionQuizPage";
import Modal from "./features/Modal";


function App() {
  return (
    <div className="App">
      
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="/question" element={<QuestionQuiPage/>}/>
       
        {/* <Route path="/todo"element = {<Todo/>}/>
        <Route path="/news" element = {<News/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/timer" element = {< Timer/>}/> */}
      </Routes>

    </div>
  );
}

export default App;
