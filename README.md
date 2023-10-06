
<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/TejushBadal/CopGPT">
    <img src="images/LinkedinProfileCropped.jpeg" alt="Logo" width="300" height="260">
  </a>

<h3 align="center">CopGPT</h3>

  <p align="center">
    Do you know your rights? Many Canadians are more familiar with US laws than they are Canadian ones! (I was one of them...) This web app is for Canadians to reclaim their agency when it comes to police interactions.
    Anytime you are dealing with the police, you can ask CopGPT if what the police are doing is legal/allowed and what you can do in that specific situation. This is NOT for checking laws but specifically what yours/the polices rights and
    responsibilities are. (for example, ask: "The police are knocking at my door and dont have a warrant, when are they allowed to enter without one?")
    <br />
    <br />
    <a href="https://github.com/TejushBadal/CopGPT"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/TejushBadal/CopGPT">View Demo</a>
    ·
    <a href="https://github.com/TejushBadal/CopGPT/issues">Report Bug</a>
    ·
    <a href="https://github.com/TejushBadal/CopGPT/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project and How it Works!

![Product Name Screen Shot][product-screenshot]
</br>
![pipeline-screenshot]
<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![FastAPI]][FastAPI-url]
* ![Python]
* ![ChatGPT]

<p align="right">(<a href="#readme-top">back to top</a>)</p>
 
  
<!-- GETTING STARTED -->
### Getting Started 

1. Make an account and get a free API Key at [https://openai.com/blog/openai-api](https://openai.com/blog/openai-api) 
2. Clone the repo
   ```sh
   git clone https://github.com/TejushBadal/CopGPT.git
   ```
3. Enter your API key in `.env` that you place in your Backend folder
   ```sh
   SECRET_KEY ="OpenAi Key"
   ```
### Prerequisites

* Node.js >= 14
* Anaconda (conda)


## Installation

I ran this in an anaconda Virtual environment. Please consider doing so to avoid conflicting dependancies now and in the future! 
PLEASE MAKE SURE YOUR ".env" FILE IS INCLUDED IN YOUR .gitignore ---> this will prevent your key from being accessed!!

* First instantiate a venv in conda (i named mine CopGPTDev)
  ```sh
  conda create --name CopGPTDev
  ```
* CD into the root project folder and run:
  ```sh
  pip install -r requirements.txt
  ```
* Head into the terminal in your IDE and CD into the Frontend folder then run:
```sh
  npx create-react-app copgptfrontend  //this creates the new react app 
```
* CD into the Backend folder and run:
  ```sh
  uvicorn main:app --reload //this starts the server that FastAPI uses
  ```
*In your IDE CD into the frontend then CD into copgptfrontend (this is the react app) and run:
 ```sh
  npm install
  ```
then:  
```sh
  npm start
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Anytime you are dealing with the police in Canada and aren't sure if what you or the police are doing is correct consult CopGPT. This is NOT for checking laws and regulations and is ONLY for checking yours and the police's rights and responsibilities when interacting with one another. Typical examples include:

* Under what situations can the police enter my house without a warrant?
* When can I get pulled over?
* What is the difference between being arrested and detained and what can i do in either case?

![demo-screenshot]
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Include example questions for new users
- [ ] Add a page on/portion for use cases and how to use
- [ ] Deploy to a website
    - [ ] Deploy to Google play store/IOS store

See the [open issues](https://github.com/TejushBadal/CopGPT/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Me - [@Tejush Badal](https://www.linkedin.com/in/tejush-badal-3878981aa/) - tejush.badal@ontariotechu.net - 2899232914

Project Link: [https://github.com/github_username/repo_name](https://github.com/TejushBadal/CopGPT)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* A huge shoutout to my friend and de facto tutor Jason Manarroo, for helping me throughout the process and his boundless support. 
  * [https://github.com/jasonmzx](https://github.com/jasonmzx)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
 
[forks-shield]: https://img.shields.io/github/forks/TejushBadal/CopGPT.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/TejushBadal/CopGPT.svg?style=for-the-badge
[stars-url]: https://github.com/TejushBadal/CopGPT/stargazers
[issues-shield]: https://img.shields.io/github/issues/TejushBadal/CopGPT.svg?style=for-the-badge
[issues-url]: https://github.com/TejushBadal/CopGPT/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/tejush-badal-3878981aa/
[product-screenshot]: images/CopGPT_Screenshot.JPG
[pipeline-screenshot]: images/Pipeline.png
[demo-screenshot]: images/demo.JPG
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[FastApi]: https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi
[FastAPI-url]: https://fastapi.tiangolo.com/
[Python]: https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54
[ChatGPT]: https://img.shields.io/badge/chatGPT-74aa9c?logo=openai&logoColor=white
