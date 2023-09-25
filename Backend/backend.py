import os
import sys

from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.text_splitter import CharacterTextSplitter
from langchain.llms import OpenAI
from langchain.chains import ConversationalRetrievalChain
from langchain.document_loaders import UnstructuredMarkdownLoader
'''
from langchain.document_loaders import TextLoader
from langchain.document_loaders import DirectoryLoader
from langchain.text_splitter import NLTKTextSplitter
from langchain.memory import ConversationBufferMemory
from langchain.chat_models import ChatOpenAI
from langchain.prompts.prompt import PromptTemplate
import nltk
nltk.download('punkt')
'''

from dotenv import load_dotenv
#create openai key
load_dotenv()
# Now you can access the environment variables using os.environ
os.environ["OPENAI_API_KEY"] = os.environ.get('SECRET_KEY')

#load in documents
dataPath = "C:\\Users\\tejush badal\\Documents\\GitHub\\CopGPT\\Backend\\data\\police_handbook.md"
loader = UnstructuredMarkdownLoader(dataPath)
documents = loader.load()

#split the documents, create embeddings for them, put them in vectorstore. this allows semantic search over them
text_splitter = CharacterTextSplitter(chunk_size=500, chunk_overlap=100)
documents = text_splitter.split_documents(documents)

embeddings = OpenAIEmbeddings()
vectorstore = Chroma.from_documents(documents, embeddings)
qa = ConversationalRetrievalChain.from_llm(OpenAI(temperature=0.5,), vectorstore.as_retriever())

#this takes the user input and creates the chat history
chat_history = []
query = None
while True:
  if not query:
    query = input("Prompt:")
  if query in ['quit', 'q', 'exit']:
    sys.exit()
  result = qa({"question": query, "chat_history": chat_history})
  
  print(result['answer'])

  chat_history += [(query, result['answer'])]

  query = None

