import { Link } from "react-router-dom";
import EmploymentHistoryItem from "./EmploymentHistoryItem";
import ProjectsBox from "./ProjectsBox";
import { Project } from "./Project";
import { MouseEvent, useRef, useState } from "react";
import { scrollTo } from "../utils/scrollTo";


export default function() {

    const [showingMoreSkills, setShowingMoreSkills] = useState(false);
    
    const toggleMoreSkills = (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();
        setShowingMoreSkills(!showingMoreSkills);
    }

    const scrollToId = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>, id: string) => {
        e.preventDefault();
        e.stopPropagation();
        scrollTo(id);
    }

    return <div id="content">
        <div id="left_menu">
            <ul>
                <li onClick={(e) => scrollToId(e, "PersonalStatement")}>
                    <Link to="#PersonalStatement">Personal Statement</Link>
                </li>
                <li onClick={(e) => scrollToId(e, "TechnicalStack")}>
                    <Link to="#TechnicalStack">Technical Stack</Link>
                </li>
                <li onClick={(e) => scrollToId(e, "EmploymentHistory")}>
                    <Link to="#EmploymentHistory">Employment History</Link>
                </li>
                <li onClick={(e) => scrollToId(e, "CommercialProjects")}>
                    <Link to="#CommercialProjects">Commercial Experience</Link>
                </li>
                <li onClick={(e) => scrollToId(e, "Education")}>
                    <Link to="#Education">Education</Link>
                </li>
                <li>
                    <Link to="/projects">Side Projects</Link>
                </li>

            </ul>
        </div>
        <div id="right_content">
            <h1>Curriculum vitae</h1>

            <h2 id="PersonalStatement">Personal Statement</h2>
            <p>
                I'm Phil, a Senior Full-Stack Web Developer currently residing in Reading and working remotely. 
                I have over 15 years of commercial experience in the world of web development. 
                Technology has changed a lot and I pride myself on keeping up to date with new and exciting tech. 
                My aim is to build useful web-based software solutions that solve real world problems. 
                I have a full spectrum of experience across the full stack of Frontend, Backend and DevOps, as well as all parts of the software lifecycle. 
                Although I am primarily a developer (working mostly in Node.js &amp; Typescript), I like to visualise the end-product and how it will solve the problem, so I have a real passion for systems design. 
                I work well in a team and have excellent communication skills but can also take responsibility on my own if necessary. 
                I also have interests in scalable architecture and event-based systems. I enjoy football and poker.
            </p>

            <p>Please continue reading below for my professional experience.  You can also view <Link to="/projects">my side projects</Link>, and the code for them on <a target="_blank" href="https://github.com/philios33">my personal github</a>.</p>

            <h2 id="TechnicalStack">Technical Skills</h2>

            <ul className="tech first">
                <li><span>Main Tech</span>
                    <ul className="mainTech">
                        <li>Node.js</li>
                        <li>Typescript</li>
                        <li>React.js</li>
                        <li>MongoDB</li>
                        <li>Redis</li>
                        <li>Docker</li>
                        <li>Express, Middleware</li>
                        <li>Webpack</li>
                        <li>Kubernetes</li>
                        <li>Google Cloud Platform</li>
                        <li>Git, GitHub Actions</li>
                        <li>Linux/Shell</li>
                        <li className="showMore">
                            <a href="#seeMoreSkills" onClick={(e) => toggleMoreSkills(e)}>{showingMoreSkills ? "Show less" : "Show more"}</a>
                        </li>
                    </ul>
                </li>
                
                <li><span>Key Skills</span>
                    <ul className="mainTech">
                        <li>Excellent Communication</li>
                        <li>Understanding Technical Requirements</li>
                        <li>Problem solving</li>
                        <li>Solution design</li>
                        <li>Analysis of data</li>
                        <li>Database design</li>
                        <li>Hitting the ground running</li>
                        <li>Time management</li>
                        <li>Seeing the big picture</li>
                    </ul>
                </li>
            </ul>
            <br/>
            {showingMoreSkills && (

            <ul id="seeMoreSkills" className="tech second">
                <li><span>DevOps</span>
                    <ul>
                        <li>CI Pipelines</li>
                        <li>GitHub Actions</li>
                        <li>Bash scripting</li>
                        <li>Grunt</li>
                    </ul>
                </li>
                <li><span>Frameworks</span>
                    <ul>
                        <li>React.js</li>
                        <li>Next.js</li>
                        <li>Vue.js</li>
                        <li>Handlebars</li>
                    </ul>
                </li>
                <li><span>Cloud</span>
                    <ul>
                        <li>Google (GCP)</li>
                        <li>Amazon (AWS)</li>
                        <li>Microsoft (Azure)</li>
                        <li>Cloud native hosting</li>
                        <li>Containerized hosting</li>
                        <li>Unmanaged hosting</li>
                    </ul>
                </li>
                <li><span>Kubernetes</span>
                    <ul>
                        <li>CertManager</li>
                        <li>Sealed Secrets</li>
                        <li>Helm</li>
                        <li>Nginx ingress</li>
                        <li>kubectl CLI</li>
                    </ul>
                </li>
                <li><span>Concepts</span>
                    <ul>
                        <li>Progressive Web Apps (PWA)</li>
                        <li>Authentication</li>
                        <li>Authorization</li>
                        <li>Microservices</li>
                        <li>REST APIs</li>
                        <li>GraphQL APIs</li>
                        <li>GraphQL Federation</li>
                        <li>Encryption/Decryption</li>
                        <li>Public Key Cryptography</li>
                        <li>Access Control</li>
                        <li>Digital Signatures</li>
                        <li>Timezones</li>
                        <li>Promises/Async</li>
                        <li>ES5 vs ES6</li>
                        <li>OSI model</li>
                        <li>Stateless design</li>
                        <li>Event sourcing</li>
                        <li>Transpiling, Babel</li>
                        <li>Package management</li>
                        <li>Image/Artifact registry</li>
                    </ul>
                </li>
                <li><span>Protocols & Formats</span>
                    <ul>
                        <li>ACME / Let's Encrypt</li>
                        <li>IDP / SP / SAML</li>
                        <li>HTML, JS, CSS</li>
                        <li>Web 2.0, Responsive Design</li>
                        <li>HTML 5</li>
                        <li>SASS/SCSS</li>
                        <li>Oauth 2.0</li>
                        <li>JSON, YAML, XML</li>
                        <li>HTTP</li>
                        <li>SMTP</li>
                        <li>FTP</li>
                        <li>SSL Equivalents</li>
                        <li>IBM MQ</li>
                    </ul>
                </li>
                <li><span>Other Tech</span>
                    <ul>
                        <li>JSON Web Tokens</li>
                        <li>PDF Generation</li>
                        <li>Node Streams</li>
                        <li>Image resizing</li>
                        <li>File/Data processing</li>
                        <li>UI/UX Design</li>
                        <li>RabbitMQ</li>
                        <li>Web Sockets</li>
                        <li>Auth Zero</li>
                        <li>Sendgrid / Mailchimp</li>
                        <li>Apollo</li>
                    </ul>
                </li>
            </ul>
            )}

            <h2 id="EmploymentHistory">Employment History</h2>

            <EmploymentHistoryItem dates="April 2016 - Now" name="Forsman & Bodenfors Inhouse AB" title="Lead Web Developer">
                Worked on a range of exciting projects at this digital agency for 7 years.  
                Most of the above skills I have learnt and applied in this role.  
                I became Lead Web Developer in 2021 and have been responsible for putting in place the mechanisms &amp; processes that maximise the productivity of the digital team today.  
                Today my workload is split between mentoring, systems design & systems development.
                <br />
                <a href="#CommercialProjects">More details</a>
            </EmploymentHistoryItem>

            <EmploymentHistoryItem dates="2013 - April 2016" name="STS - Student Travel Schools AB" title="Web Developer">
                My main role was to extend the existing Web CMS solution with useful web-based features which the marketing team could utilise.  
                We focussed on responsive design, user experience and web 2.0.  
                I also developed a PHP/MySQL system from the ground up to calculate complex package deals for one of the products.
            </EmploymentHistoryItem>

            <EmploymentHistoryItem dates="2010 - 2013" name="Self Employed" title="Web Developer">
                Implemented web software solutions for clients using LAMP stack (PHP & MySQL).
                My main client was working on a Tax/Accountancy solution in PHP with a Maths heavy focus.
                The software spoke with HMRC APIs, generated PDF files and automatically added semantic tagging to tax documents for electronic submission to Companies House and HMRC.
            </EmploymentHistoryItem>

            <EmploymentHistoryItem dates="2006 - 2010" name="Fusion Advertising & Design Ltd" title="Junior Web Developer">
                I was trained by a colleague.  
                We developed web software for Sales & Lettings estate agents using LAMP stack with Postgres.  
                The role included using Linux terminal for server admin and various bash scripts for manual deployments.
            </EmploymentHistoryItem>


            <h2 id="CommercialProjects">Commercial Experience</h2>

            <div>
                Brief details about some of the digital projects we have completed recently.
                <ProjectsBox projects={[
                    <Project projectName="Vehicles Recalls System">
                        <ul>
                            <li>Automatic bulk sendout of vehicle recalls when a safety defect is found.</li>
                            <li>System is supplied a list of Vehicle Identification Numbers (VINs) which need to be looked up and grouped in to lists using complex <span className="techNote">business logic</span>.</li>
                            <li>Collection of 10 <span className="techNote">microservices</span> to separate the different concerns of importing, processing, sorting, sending out, generating PDFs and various frontends.</li>
                            <li>Backends using <span className="techNote">Node.js, Typescript & Mongo DB</span></li>
                            <li>Frontends using <span className="techNote">React</span> &amp; <span className="techNote">Next.js</span></li>
                            <li>File received via <span className="techNote">IBM MQ</span> queue using an official Node.js connector <span className="techNote">npm package</span>.</li>
                            <li>DVLA equivalent <span className="techNote">API integration</span> for vehicle data fetching.</li>
                            <li>Some vehicle data services exposed using federated <span className="techNote">GraphQL</span></li>
                            <li>VIN <span className="techNote">worker processor</span> written as <span className="techNote">stateless and scalable</span> for <span className="techNote">asynchronous execution</span>, recoverability and to control throughput levels.</li>
                            <li>Individual sendouts via a print mailing <span className="techNote"> API</span> or electronic mailbox API where supported.</li>
                            <li><span className="techNote">PDF generation</span> of recall notice using <span className="techNote">npm libraries</span>.</li>
                            <li>Sensitive social security number <span className="techNote">encryption &amp; decryption</span> system integration.</li>
                        </ul>
                    </Project>,

                    <Project projectName="Shuffleticket">
                        <ul>
                            <li>A <span className="techNote">ticket website</span> where you can purchase a random ticket to an upcoming but unknown event in one of Sweden's three largest cities.</li>
                            <li>A physical ticket is sent with a <span className="techNote">secret code</span> (underneath a scratchable area) that gives access to the ticket.</li>
                            <li>Countdown to next ticket drop on the frontend to cause surges in demand.</li>
                            <li><span className="techNote">Resource allocation</span>; <span className="techNote">database design</span> will not allow duplicate booking of a ticket.</li>
                            <li>Asset <span className="techNote">import scripts</span> to store raw ticket PDF files in <span className="techNote">Google Storage Buckets</span> for automatic access.</li>
                            <li><span className="techNote">Payment gateway integration</span> with <span className="techNote">asynchronous callback</span> mechanism once payment is accepted.</li>
                        </ul>
                    </Project>,

                    <Project projectName="QA Checklists">
                        <ul>
                            <li>Mechanics (in different markets) needed a printable checklist of quality assurance items that they can tick off during quality checks of vehicles leaving the factory.</li>
                            <li>Base checklists are made in English and each item must be translated in to a target language for the document to be generated in that language.</li>
                            <li>Tracking changes in base templates and auto sending <span className="techNote">email notifications</span> to translators.</li>
                            <li>Browser <span className="techNote">Web Sockets</span> signal live document changes to avoid the need for row level locking or <span className="techNote">document locking</span> between users.</li>
                            <li><span className="techNote">PDF Generation</span> using <span className="techNote">Puppeteer</span> &amp; Headless Chrome.</li>
                            <li>Authentication via <span className="techNote">OAuth 2.0</span> SSO (single sign-on) <span className="techNote">identity provider</span>.</li>
                            <li>Local <span className="techNote">timezone</span> used to render dates stored in the database in UTC.</li>
                            <li><span className="techNote">JWT</span>s used to assert login claims to the backend.</li>
                        </ul>
                    </Project>,

                    <Project projectName="Soft Toy Competition">
                        <ul>
                            <li>A campaign, targetted at children, to receive photo subissions of designs for the next soft toy to be mass produced.</li>
                            <li>User login via <span className="techNote">RESTful API integration</span>.</li>
                            <li><span className="techNote">Mongo DB</span> collection of submissions with star rating for sorting.</li>
                            <li>Integration with <span className="techNote">AWS Simple Storage Service</span> (S3) API.</li>
                            <li><span className="techNote">PDF generation</span> of a certificate after upload using <span className="techNote">3rd party npm libraries</span>.</li>
                            <li>Client side <span className="techNote">image resizing</span> before upload using native browser.</li>
                        </ul>
                    </Project>

                ]} />
            </div>


            <h2 id="Education">Education</h2>

            <div>
                <p className="title">The University of Birmingham
                    <span className="date">Autumn 2002 - Summer 2005</span>
                </p>
                
                <span className="hons">BEng (Hons) Computer Science with Software Engineering, 2:1</span>
            </div>


            <h2>Side Projects</h2>

            <p>Please review <Link to="/projects">my side projects.</Link></p>

        </div>
    </div>
}