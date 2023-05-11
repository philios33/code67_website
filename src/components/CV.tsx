import { Link } from "react-router-dom";
import EmploymentHistoryItem from "./EmploymentHistoryItem";


export default function() {
    return <div id="content">
        <div id="left_menu">
            <ul>
                <li>
                    <Link to="#PersonalStatement">Personal Statement</Link>
                </li>
                <li>
                    <Link to="#Education">Education</Link>
                </li>
                <li>
                    <Link to="#EmploymentHistory">Employment History</Link>
                </li>
                <li>
                    <Link to="#TechnicalStack">Technical Stack & Experience</Link>
                </li>
            </ul>
        </div>
        <div id="right_content">
            <h1>Curriculum vitae</h1>

            <h2 id="PersonalStatement">Personal Statement</h2>
            <p>
                I'm Phil, a Web Developer currently residing in Reading and working remotely for a Swedish company.  
                I have over 15 years of commercial experience in the world of web development.  
                Technology has changed a lot and I pride myself on keeping up to date with new and exciting tech.  
                My aim is to build useful web based software solutions that solve real world problems.  
                I have a full spectrum of experience across the full stack of Frontend, Backend and Devops, as well as all parts of the software lifecycle.  
                Although I am primarily a developer (working mostly in Node.js &amp; Typescript), I like to visualise the end product and how it will solve the problem, so I have a real passion for systems design.  
                I work well in a team and have excellent communication skills, but can also take responsibility on my own if necessary.  
                I also have interests in scalable architecture and event based systems.  I enjoy football and poker.
            </p>
            
            <h2 id="Education">Education</h2>

            <div>
                <p className="title">The University of Birmingham
                    <span className="date">Autumn 2002 - Summer 2005</span>
                </p>
                
                <span className="hons">BEng (Hons) Computer Science with Software Engineering, 2:1</span>
            </div>

            <h2 id="EmploymentHistory">Employment History</h2>

            <EmploymentHistoryItem dates="2006-2010" name="Fusion Advertising & Design Ltd" title="Junior Web Developer">
                I was trained by a colleague.  We developed web software for Sales & Lettings estate agents using LAMP stack with Postgres.  
                <br />
                The role included using Linux terminal for server admin and various bash scripts for manual deployments.
            </EmploymentHistoryItem>

            <EmploymentHistoryItem dates="2010-2013" name="Self Employed" title="Web Developer">
                Implemented web software solutions for clients using LAMP stack. (PHP & MySQL)  My main client was working on a Tax/Accountancy solution in PHP with a Maths heavy focus.  
                <br />
                The software spoke with HMRC APIs, generated PDF files and automatically added semantic tagging to tax documents for electronic submission to Companies House and HMRC.
            </EmploymentHistoryItem>

            <EmploymentHistoryItem dates="2013-2016" name="STS - Student Travel Schools AB (Sweden)" title="Web Developer">
                Worked with their existing system (Roxen) that runs their website.  Technology of the times were, responsive design, web 2.0 and introducing NoSQL.
            </EmploymentHistoryItem>

            <EmploymentHistoryItem dates="2016-Now" name="Forsman & Bodenfors Inhouse AB (Sweden)" title="Lead Web Developer">
                Worked on a range of exciting projects at this digital agency.  Main clients were IKEA & Volvo Cars.  My stack shifted over to Node.js and using build scripts.  I became Lead in 2021 and relocated back to the UK in November 2022.
            </EmploymentHistoryItem>

            <h2 id="TechnicalStack">Current Technical Stack</h2>

            <p>
                As a programmer, I have used many languages throughout my career.  However, I do have a preferred stack of languages and tech that I like to use over others.
                This is NOT an exhaustive list of what I have experience using.  The tools I use depend on the job I am doing, and these are subject to change.
            </p>

            <ul className="tech">
                <li><span>Main application language</span>Node.js &amp; TypeScript</li>
                <li><span>Frontend framework</span>React.js</li>
                <li><span>Persistent database</span>MongoDB</li>
                <li><span>Key-Value memory cache</span>Redis</li>
                <li><span>Containerisation</span>Docker</li>
                <li><span>Continuous Integration Pipelines</span>GitHub Actions</li>
                <li><span>Production environment</span>Kubernetes</li>
                <li><span>Cloud platform</span>Google</li>

                <li><span>Backend framework</span>No specific / custom</li>
                <li><span>ORM / Database Layer</span>No specific / custom</li>
            </ul>

            <h2 id="TechnicalExpertice">Other Technical Expertise</h2>

            <ul className="techExpertice">
                <li>HTML</li>
                <li>JS</li>
                <li>ES5/ES6</li>
                <li>Typescript</li>
                <li>CSS</li>
                <li>SASS/SCSS</li>
                <li>Grunt</li>
                <li>Webpack</li>
                <li>Express</li>
                <li>Promises/Async</li>
                <li>Node Streams</li>
                <li>PDF Generation</li>
                <li>Data Processing</li>
                <li>HTTP</li>
                <li>SMTP</li>
                <li>FTP</li>
                <li>REST</li>
                <li>GraphQL</li>
                <li>JSON</li>
                <li>YAML</li>
                <li>JWT</li>
                <li>XML</li>
                <li>XSL</li>
                <li>JSX/TSX</li>
                <li>React.js Class components</li>
                <li>React.js Functional components</li>
                <li>Git</li>
                <li>CI-Pipelines</li>
                <li>Linux/Shell</li>
                <li>Cloud Computing (GCP, AWS, Azure)</li>
            </ul>

            <h2 id="TechnicalInterests">Technical Interests</h2>

            <ul>
                <li>Stateless and scalable design</li>
                <li>Event driven architecture</li>
                <li>Public key cryptography</li>
                <li>Let's encrypt</li>
            </ul>

            <h2>Side Projects</h2>

            <p>Please review <a href="/projects">my side projects.</a></p>

        </div>
    </div>
}