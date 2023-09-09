import openai
import PyPDF2
#pdf reader or langchain?
#from PyPDF2 import PdfReader
import os

from dotenv import load_dotenv
# Load the .env file
load_dotenv()

# Now you can access the environment variables using os.environ
openai.api_key = os.environ.get('SECRET_KEY')

# Load PDF file
with open('Police_rules.pdf', 'rb') as f:
    pdf_reader = PyPDF2.PdfFileReader(f)
    text = ''
    for page_num in range(pdf_reader.numPages):
        page = pdf_reader.getPage(page_num)
        text += page.extractText()

# Define prompt

prompt = (f"Train a language model to understand and generate text based on the Ontario Police Services Act, "
          f"specifically in the context of police interactions with the public. Provide examples of common scenarios "
          f"and situations that police officers may encounter during their duties, and how the police and the public "
          f"should respond in accordance with the guidelines outlined in the Act. The text is:\n\n{text}")

# Set hyperparameters for training
temperature = 0.6
max_tokens = 1024
batch_size = 2
learning_rate = 0.00005
num_epochs = 3
model_name = "curie"

# Train model
model_engine = "davinci" if model_name == "curie" else model_name
model = openai.Model.create(engine=model_engine, model=model_name)
model.fine_tune(prompt=prompt,
                temperature=temperature,
                max_tokens=max_tokens,
                batch_size=batch_size,
                learning_rate=learning_rate,
                num_epochs=num_epochs)

# Test model
prompt = "The police is telling me i have to identify myself to him if he asks me to. Is this true?"
completions = model.generate(prompt=prompt, max_tokens=50)
message = completions.choices[0].text.strip()
print(message)
