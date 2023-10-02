import { addToHistory } from "./storage";
//this file creates the wrapper for the post request that takes and gives the chat history 


//create endpoint constants
const endpoint = "http://localhost:8000/"; //this is the main root endpoint. need to specify location in function use (i.e., /.....)



export async function postQuery(body, callback) {

//export async function SchoolTermRequest() {
    const RESPONSE = await fetch(endpoint + 'Query',{method: 'POST',
                                                     headers: {'Content-Type': 'application/json'},
                                                     body: JSON.stringify(body)
                                                    });
    const ResponseJSON = await RESPONSE.json();
    //callback(ResponseJSON['response']); // the callback is a function you pass to another function as a parameter to be called when that other function is complete
    addToHistory(body['Input'], ResponseJSON['response']);
    callback()

    
    return;
}