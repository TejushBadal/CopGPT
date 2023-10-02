import { useState, useEffect, useRef } from "react";
import '../App.css';
import {postQuery } from "../requests";
import { getHistory, addToHistory, clearHistory } from "../storage";
import HeaderBar from './HeaderBar';

const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [Response, setResponse] = useState("");
    
    // Handle Keyboard "ENTER" on search bar
    const handleInputKeyPress = (e) => {
      if (e.key === 'Enter') {
        postQueryWrapper();
        }
    }
    //
    const postQueryWrapper = () => {  // this function calls the query post and clears the input line on enter
      setResponse(<>
      <div class="load"></div>
      <br/> Asking about: {inputValue}
      </>)
      
      postQuery({
        "Input": inputValue,
        "History": getHistory()}, renderAll)//(body, callback function)
  
        setInputValue('')
    } 
  
    const renderAll = () => { //this functions renders whatever is in the history as JSX
      
      let dump = [];
      
      const historyobj = getHistory();
  
      if(!historyobj.length) {
  
        setResponse(
          <h4>You don't have any questions yet... Ask away (Dont ask cops, ask software engineers ! :D )</h4>
        );
        return;
      }
  
        for(const obj of historyobj){
          dump.push(
            
            <>
            Question:<br/>
            {obj[0]}
            <br/>
            Answer:<br/>
            {obj[1]}
            <br/><br/>
            </>
          )
        }
  
        setResponse(dump);
    }
  
    useEffect( () => {
      renderAll();
    }, [])
  
    return (
      <>
       <HeaderBar />
      <div style={{backgroundColor: 'purple', 
                  height: '100vh', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', 
                          color: 'white',
                          marginBottom: '50px'}}>
              <h1>Welcome to CopGPT</h1>
              <button style={{padding: '10px 20px',
                                        fontSize: '18px',
                                        borderRadius: '5px', 
                                        backgroundColor: 'white', 
                                        color: 'purple', 
                                        border: '1px solid white' }}
                     onClick={() => {clearHistory(); setResponse('')}}>New Chat</button>
            </div><br/> <br/><br/>
  
              <h1>
                {Response}
  
              </h1>
  
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <input
                      style={{padding: '10px', 
                              fontSize: '18px', 
                              borderRadius: '5px', 
                              marginRight: '10px' }}
                      type="text"
                      placeholder="Ask a Question"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleInputKeyPress}/>
                        <button style={{padding: '10px 20px',
                                        fontSize: '18px',
                                        borderRadius: '5px', 
                                        backgroundColor: 'white', 
                                        color: 'purple', 
                                        border: '1px solid white' }}
                                onClick={ () => {postQueryWrapper()}} 
                        >Enter</button>
          </div>
        </div>
    </>
    );
}

export default Home