import { useState, useEffect} from "react";
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
    <header style={{ backgroundColor: '#e8a87c', color: 'white', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button
        style={{padding: '10px 20px',
                fontSize: '20px',
                borderRadius: '5px',
                backgroundColor: '#85dcba',
                color: 'purple',
                border: 'none',
                marginRight: '550px',
                fontFamily: 'Fantasy'}}
        onClick={() => {clearHistory();setResponse('');}}
      >New Chat</button>

      <h1 style={{ textAlign: 'center', margin: '0', fontSize: '50px', color: '#249ea0', fontFamily: 'Fantasy'}}><strong>Cop GPT</strong></h1>

      <a href="/about">  
      <button
        style={{padding: '10px 20px',
                fontSize: '20px',
                borderRadius: '5px',
                backgroundColor: '#85dcba',
                color: 'purple',
                border: 'none',
                marginLeft: '550px',
                fontFamily: 'Fantasy'}}>About Tejush</button></a>
    </header>

      <div style={{backgroundColor: '#85dcba', 
                  height: '100vh', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center' }}>
            <br/> <br/><br/>
              <h1>
                {Response}
              </h1>
  
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <input
                      style={{padding: '10px', 
                              fontSize: '18px', 
                              borderRadius: '5px',
                              border: 'none',
                              marginRight: '10px' }}
                      type="text"
                      placeholder="Ask a Question"
                      size={50}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleInputKeyPress}/>
                        <button style={{padding: '10px 20px',
                                        fontSize: '18px',
                                        borderRadius: '5px', 
                                        backgroundColor: '#e8a87c',
                                        color: 'purple',
                                        fontFamily: 'Fantasy', 
                                        border: 'none' }}
                                onClick={ () => {postQueryWrapper()}} >Enter</button>
          </div>
        </div>
    </>
    ); // end return 
}

export default Home