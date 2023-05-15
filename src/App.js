import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import Title from './components/Title.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import data from "./static/projects.json";

function App() {
  return (
     <div class="App">
        <Header/>
        <section class="about-section">
            <Title text="About"/>
            <p>
                Software Developer having experience in making web applications from scratch. 
                Built multiple responsive websites using React library.
            </p>
        </section>
        <section class="project-section">
            <Title text="Projects"/>
            {
                data.projects.map(project => <ProjectCard project={project}/>)
            }
        </section>
        <section class="workex-section">
            <Title text="Work Experience"/>
            <ul class="workex-list">
                <li>
                    <p>
                        <b>2019 - 2021</b>: Front End Developer and Graphic Designer , 
                        Octav Bancila Highschool, designed and built the magazine website 
                        claritatea.ro, designed two volumes of the Claritatea magazine and 
                        one volume of the ArtEast magazine.
                    </p>
                </li>
                <li>
                    <p>
                        <b>2019 - 2021</b>: Front End Developer and Graphic Designer , 
                        Octav Bancila Highschool, designed and built the magazine website 
                        claritatea.ro, designed two volumes of the Claritatea magazine and 
                        one volume of the ArtEast magazine.
                    </p>
                </li>
            </ul>
        </section>
        <section class="education-section">
            <Title text="Education"/>
            <div>
                <p><b>2017-2021: B.Tech in Information Technology</b></p>
            </div>
        </section>
        <section class="additional-section">
            <Title text="Additional Skills"/>
            <ul>
                <li>Linux</li>
                <li>GIT</li>
            </ul>
        </section>
    </div>
  );
}

export default App;
