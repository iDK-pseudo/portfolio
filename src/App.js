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
            Results-driven developer with expertise in <b>React.js, Node.js </b>and full-stack web development. Experienced in building scalable applications using <b>MongoDB and SQL databases</b>, ensuring efficient data management and retrieval. Proficient in <b>JavaScript and Spring Boot</b>, delivering high-quality solutions with strong problem-solving skills. A collaborative team player who excels in agile environments, consistently meeting project deadlines and exceeding client expectations.
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
                        <div class="workex-title">
                            <b>Business Technology Analyst, Deloitte</b> 2021 - Present
                        </div>
                        <ul class="each-ex-list">
                            <li>Developed and maintained responsive user interfaces using <b>React.js and UI5 libraries</b></li>
                            <li>Collaborated with backend developers to design and implement RESTful APIs using <b>Node.js</b></li>
                            <li>Implemented <b>data caching and optimization</b> techniques in React.js applications</li>
                            <li>Integrated third-party libraries and frameworks in projects to enhance functionality such as data visualization libraries (HighCharts) or UI component libraries </li>
                            <li>Worked with version control systems like <b>Git</b> for code management and collaborated effectively with team members using platforms like AzureGIT</li>
                        </ul>
                    </p>
                </li>
                <li>
                    <p>
                        <div class="workex-title">
                            <b>Software Engineering Intern, HighRadius</b> 2020 - 2021
                        </div>
                        <ul class="each-ex-list"> 
                            <li>Developed <b>Java</b>-based web agents and parsers using <b>Spring framework, Hibernate ORM, and SQL,</b> enabling efficient data extraction and processing from various sources.</li>
                            <li>Implemented robust error handling and logging mechanisms in web agents and parsers, ensuring reliable and consistent performance in data retrieval and processing tasks.</li>
                            <li>Optimized SQL queries and database operations improving data retrieval and manipulation efficiency and overall application performance</li>
                            <li>Conducted code reviews and implemented unit tests to maintain code quality</li>
                        </ul>
                    </p>
                </li>
            </ul>
        </section>
        <section class="education-section">
            <Title text="Education"/>
            <div>
                <div class="education-title">
                    <b>B.Tech in Information Technology</b> 2017-2021
                </div>
                <p>Kalinga Institute of Industrial Technology</p>
                <p>CGPA: <b>8.33/10</b></p>
            </div>
        </section>
        <section class="additional-section">
            <Title text="Additional Skills"/>
            <ul>
                <li>Linux</li>
                <li>GIT</li>
                <li>Microsoft Suite</li>
                <li>TypeScript</li>
            </ul>
        </section>
    </div>
  );
}

export default App;
