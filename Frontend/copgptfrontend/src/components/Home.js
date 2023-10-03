import { useState, useEffect, useRef} from "react";
import '../App.css';
import {postQuery } from "../requests";
import { getHistory, addToHistory, clearHistory } from "../storage";
import HeaderBar from './HeaderBar';
import ScrollBox from "./scrollBox";

window.alert("This is a personal project and NOT LEGAL ADVICE and should not be considered as such. For any legal questions please contact a qualified lawyer. (dont sue me im broke)")
const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [Response, setResponse] = useState("");
    
    // Handle Keyboard "ENTER" on search bar
    const handleInputKeyPress = (e) => {
      if (e.key === 'Enter') {
        postQueryWrapper();
        }
    }
    //keep the scroll bar at the bottom of the chat
    function ChatBox() {
      const chatBoxRef = useRef(null);
    
      useEffect(() => {
        // Scroll to the bottom of the chat box when it updates
        if (chatBoxRef.current) {
          chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;}}, [Response]);}
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
      
      const fetchHistory = getHistory();

      const historyobj = []

      for (const object of fetchHistory){
        historyobj.push({Source: 'User', text: object[0]}, {Source: 'CopGPT', text: object[1]})
      }
  
      if(!historyobj.length) {
  
        setResponse(
          <h2 style={{color: 'purple', fontSize: '40px'}}><strong>Ask any question about a police interaction in Canada, the more specific the better!</strong></h2>
        );
        return;
      }
  
        for(const obj of historyobj){
          dump.push(
            // to choose left or right it uses inline if statement; if object source is User, right, else left
            <>
            <div className="chat-container">
                <div className={`chat-message ${obj.Source === 'User' ? 'chat-message-right' : 'chat-message-left'}`}> 
                    {obj.text}
                </div>
            </div>
            </>
          )
        }
  
        setResponse(dump);
    }
  
    useEffect( () => {
      renderAll();
    }, [])
                                                        // START OF HTML TREE
    return (
      <>
    {/* the beginning of the header */}
    <header style={{ backgroundColor: '#e8a87c', color: 'white', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button
        style={{padding: '10px 20px',
                fontSize: '20px',
                borderRadius: '5px',
                backgroundColor: '#85dcba',
                color: 'purple',
                border: 'none',
                marginRight: '650px',
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
                marginLeft: '650px',
                fontFamily: 'Fantasy'}}>About Tejush</button></a>
    </header>

    {/* this is the start of the scroll box */}
    <div style={{ backgroundColor: '#85dcba', height: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

        {/* Chat Box */}
        <div style={{ width: '600px', maxHeight: '400px', overflowY: 'scroll', border: 'none', padding: '10px' }}>
            <p>{Response}</p>
        </div>

        {/* Input and Enter Button */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '80px' }}>
        <input
          style={{padding: '10px',
                 fontSize: '18px',
                 borderRadius: '5px',
                 border: 'none',
                 marginRight: '10px'}}
          type="text"
          placeholder="Ask a Question"
          size={50}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleInputKeyPress}/>

        <button
          style={{padding: '10px 20px',
                 fontSize: '18px',
                 borderRadius: '5px',
                 backgroundColor: '#e8a87c',
                 color: 'purple',
                 fontFamily: 'Fantasy',
                 border: 'none'}}
          onClick={() => postQueryWrapper()}>Enter</button>
      </div>
    </div>
    </>
    ); // end return 
}

export default Home