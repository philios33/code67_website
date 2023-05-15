import { Link } from "react-router-dom";
import EmploymentHistoryItem from "./EmploymentHistoryItem";
import ProjectsBox from "./ProjectsBox";
import { Project } from "./Project";


export default function() {
    return <div id="content">
        <div id="left_menu">
            <ul>
                <li>
                    <Link to="#PersonalStatement">Personal Statement</Link>
                </li>
                <li>
                    <Link to="#TechnicalStack">Technical Stack</Link>
                </li>
                <li>
                    <Link to="#EmploymentHistory">Employment History</Link>
                </li>
                <li>
                    <Link to="#Education">Education</Link>
                </li>
                <li>
                    <Link to="#TechnicalExpertise">Other</Link>
                </li>
                
                
            </ul>
        </div>
        <div id="right_content">
            <h1>Curriculum vitae</h1>

            <h2 id="PersonalStatement">Personal Statement</h2>
            <p>
                I'm Phil, a Lead Web Developer currently residing in Reading and working remotely.  
                I have over 15 years of commercial experience in the world of web development.  
                Technology has changed a lot and I pride myself on keeping up to date with new and exciting tech.  
                My aim is to build useful web based software solutions that solve real world problems.  
                I have a full spectrum of experience across the full stack of Frontend, Backend and Devops, as well as all parts of the software lifecycle.  
                Although I am primarily a developer (working mostly in Node.js &amp; Typescript), I like to visualise the end product and how it will solve the problem, so I have a real passion for systems design.  
                I work well in a team and have excellent communication skills, but can also take responsibility on my own if necessary.  
                I also have interests in scalable architecture and event based systems.  I enjoy football and poker.
            </p>

            

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
            

            <h2 id="EmploymentHistory">Employment History</h2>

            <EmploymentHistoryItem dates="2016-Now" name="Forsman & Bodenfors Inhouse AB" title="Lead Web Developer">
                Worked on a range of exciting projects at this digital agency. My stack shifted over to Node.js and using build scripts.  
                I became Lead Web Developer in 2021 and have been responsible for putting in place the mechanisms &amp; processes that maximise the productivity of the digital team today.  Such as:
                <ul>
                    <li>Separate frontend & backend <span className="techNote">github repositories</span>.</li>
                    <li>All <span className="techNote">microservices</span> containerized with <span className="techNote">docker</span>.</li>
                    <li>Hosting on <span className="techNote">GCP, AWS and Azure</span> depending on the client.</li>
                    <li><span className="techNote">Kubernetes</span> hosting or <span className="techNote">Cloud native PaaS</span> (Platform as a service) equivalent.</li>
                    <li>Automatic X.509 SSL certificates with <span className="techNote">CertManager</span> on Kubernetes cluster, setup using <span className="techNote">helm charts</span>.</li>
                    <li><span className="techNote">Github Actions CI/Pipelines</span> to automate <span className="techNote">DevOps</span>.</li>
                </ul>
                The following are details of some digital projects that me and my team have completed for our clients.
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
                            <li>VIN <span className="techNote">worker processor</span> written as <span className="techNote">stateless and scalable</span> for recoverability and to control throughput levels.</li>
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
            </EmploymentHistoryItem>

            <EmploymentHistoryItem dates="2013-2016" name="STS - Student Travel Schools AB" title="Web Developer">
                Worked with their existing system (Roxen) that runs their website.  Technology of the times were, responsive design, web 2.0 and introducing NoSQL.
            </EmploymentHistoryItem>

            <EmploymentHistoryItem dates="2010-2013" name="Self Employed" title="Web Developer">
                Implemented web software solutions for clients using LAMP stack. (PHP & MySQL)  My main client was working on a Tax/Accountancy solution in PHP with a Maths heavy focus.  
                <br />
                The software spoke with HMRC APIs, generated PDF files and automatically added semantic tagging to tax documents for electronic submission to Companies House and HMRC.
            </EmploymentHistoryItem>

            <EmploymentHistoryItem dates="2006-2010" name="Fusion Advertising & Design Ltd" title="Junior Web Developer">
                I was trained by a colleague.  We developed web software for Sales & Lettings estate agents using LAMP stack with Postgres.  
                <br />
                The role included using Linux terminal for server admin and various bash scripts for manual deployments.
            </EmploymentHistoryItem>


            


            <h2 id="Education">Education</h2>

            <div>
                <p className="title">The University of Birmingham
                    <span className="date">Autumn 2002 - Summer 2005</span>
                </p>
                
                <span className="hons">BEng (Hons) Computer Science with Software Engineering, 2:1</span>
            </div>




            

            <h2 id="TechnicalExpertise">Other Technical Expertise</h2>

            <ul className="techExpertise">
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