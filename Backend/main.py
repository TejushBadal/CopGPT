from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from backend import getChat

'''
Author: Tejush Badal, tejushbadal@gmail.com
Summary: This file is a part of my backend and defines all the requests being made to the API
         it is the interface for my API
'''
#this is the post definition for getting user queries
class Query(BaseModel):
    Input: str
    History: list[tuple[str, str]]

app = FastAPI()
# Add CORS middleware, this prevents errors conecting to localhost 8000
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/Query")
async def Query(input: Query): #the input parameter is of type query from the basemodel 

    response = getChat(input.History, input.Input)

    return {"response" : response}


