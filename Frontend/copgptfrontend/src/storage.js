//this file is my wrapper for storing inputs and chat history 

const HISTORY_STORAGE_NAME = "chat_history";

export function checkLS_store() {
    if(!localStorage.getItem(HISTORY_STORAGE_NAME)){
        localStorage.setItem(HISTORY_STORAGE_NAME, "[]");
    }
}

export function getHistory(){
    checkLS_store(); //Makes sure a variable "history" exists in LS
    return JSON.parse(localStorage.getItem(HISTORY_STORAGE_NAME));
}

export function addToHistory(question, answer){
    checkLS_store(); //Makes sure a variable "history" exists in LS

    const chatHistory = getHistory();
    chatHistory.push([question, answer]);

    localStorage.setItem(HISTORY_STORAGE_NAME, JSON.stringify(chatHistory));
}

export function clearHistory() {
    localStorage.setItem(HISTORY_STORAGE_NAME, "[]");
}

