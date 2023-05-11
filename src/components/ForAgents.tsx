
import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import personal from '../../personal.json';


export default function() {

    const [params] = useSearchParams();

    const password = personal.password;
    const dateExpiry = new Date(personal.expiryDate);
    const dateExpiryText = dateExpiry.toDateString();
    const now = new Date();
    const currentDateText = personal.currentDate;
    const salaryText = personal.salaryText;
    const mobileNumberText = personal.mobileNumberText;
    const mobileNumberValue = personal.mobileNumberValue;

    if (params.get("pw") !== password || now > dateExpiry) {
        return <div id="content">
            <div id="right_content">
                <h1>For Agents</h1>
                <p>Sorry, this page has expired!</p>
            </div>
        </div>
    }

    return <div id="content">
        <div id="right_content">
            <h1>For Agents</h1>
            <p className="forAgents">
                This is a private page containing my personal information for agents.  
                <br />
                Feel free to send this URL on to any other agents you think would be able to help me.
                <br />
                <em>Please Note: This URL will expire on: {dateExpiryText}</em>
            </p>

            <h2>Current situation <span className="date">{currentDateText}</span></h2>
            <p>
                I am currently employed full time at a Swedish company.  
                I have recently relocated back to the UK and I am working 100% remotely but with regular online meetings in Slack &amp; Teams.  
                I am paid a UK salary through a subsidiary company with UK taxes and NI.
            </p>

            <ul className="tech">
                <li><span>Status</span>Employed, Full Time (40 hrs/week)</li>
                <li><span>Job title</span>Lead Web Developer</li>
                <li><span>Location</span>100% Remote</li>
                <li><span>UK salary</span>{salaryText}</li>
                <li><span>Paid holiday</span>40 days / year</li>
                <li><span>Notice period</span>4 months</li>
                <li><span>Other benefits</span>Sick leave, Flexible hours, 5% matched pension plan</li>
            </ul>

            <h2>What I am looking for</h2>
            <p>
                I would like to quit my current job and start up my own UK company working on contracts <strong>outside of IR35</strong>.  
                I am looking for short term web/systems development contracts in the areas that match my CV.
                I would be willing to travel to clients for startup meetings, 
                but would expect the bulk of my workload to be completed remotely.
            </p>

            <h2>What if I can't find any contracts?</h2>
            <p>
                My backup plan is to apply for employed work at consultancy firms.  
                My role would still involve completing contracts for clients, 
                but through a consultancy firm paying me a fixed salary.  
                The particulars would need to compete with what I have now (listed above).
                I am not interested in Lead Web Developer roles at agencies.
            </p>

            <p>
                Any advice from agents such as yourselves is welcomed.
                If you would like to call me to discuss a job/contract offer, 
                please email me the particulars in good time before calling me.
            </p>

            <p>
                Please note: I am still working during office hours and you may not get through.  
                Please drop me an email instead and I will get back to you as soon as possible.
            </p>

            <ul className="tech">
                <li><span>Email</span><a href="mailto:phil@code67.com">phil@code67.com</a></li>
                <li><span>Mobile</span><a href={"tel:" + mobileNumberValue}>{mobileNumberText}</a></li>
            </ul>

            <p>
                Thanks for reading.
            </p>

            <p>
                Philip Nicholls
            </p>
            
        </div>
    </div>
}