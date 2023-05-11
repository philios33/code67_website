
import covidScannerImg from '../images/covid_scanner.jpg';
import covidScannerImgThumb from '../images/covid_scanner_thumb.jpg';

import predictorImg from '../images/predictor.jpg';
import predictorImgThumb from '../images/predictor_thumb.jpg';

import pokernowImg from '../images/pokernow.jpg';
import pokernowImgThumb from '../images/pokernow_thumb.jpg';

export default function() {
    return <div id="content">
        <div id="right_content">

            <h1 id="SideProjects">Side Projects</h1>

            <p>Please review <a target="_blank" href="https://github.com/philios33">my github</a> for more projects.</p>

            <hr />

            <div className="project">
                <a className="imageLink" href={covidScannerImg}>
                    <img alt="Covid Passport Scanner" src={covidScannerImgThumb} width="200" height="158" />
                </a>
                <h2 className="h3 name">Covid Passport Scanner <span className="code"><a target="_blank" href="https://github.com/philios33/covid-passport-scanner">View source</a></span></h2>
                <div className="url"><a target="_blank" href="https://covidpassportscanner.net/">covidpassportscanner.net</a></div>
                <p>
                    The use case is for a doorman to be able to continuously scan EU/UK covid passport/certificates and validate that the cryptographic signatures are valid in a 100% offline environment.  
                    It uses native browser camera video streaming and a 3rd party QR code reader.  
                    A sound is played on a successful scan so the doorman can allow entry.  
                    The system also periodically refreshes the public security keys to keep the validator up to date.
                </p>
            </div>

            <hr />

            <div className="project">
                <a className="imageLink" href={predictorImg}>
                    <img alt="Predictor League" src={predictorImgThumb} width="200" height="106" />
                </a>
                <h2 className="h3 name">Premier League Predictor <span className="code"><a target="_blank" href="https://github.com/philios33/predictor-league">View source</a></span></h2>
                <div className="url"><a target="_blank" href="https://predictor.30yardsniper.co.uk/">predictor.30yardsniper.co.uk</a></div>
                <p>
                    My friends and I enter our premier league predictions, and throughout the season the results are scraped and the scores are tabulated.  
                    It uses a Google Sheet for data storage and rebuilds the results, stats and tables on every deploy so that loading the pages is super fast.  
                    It is currently not open or scalable and I am currently writing an event based framework to address these issues.
                </p>
            </div>

            <hr />

            <div className="project">
                <a className="imageLink" href={pokernowImg}>
                    <img alt="Poker Now Multi Table Tournament" src={pokernowImgThumb} width="200" height="159" />
                </a>
                <h2 className="h3 name">Poker Now Tournament Rebalancer <span className="code"><a target="_blank" href="https://github.com/philios33/Poker-Now-Tournament-Rebalancer">View source</a></span></h2>
                <div className="url"><a target="_blank" href="https://www.pokernow.club/mtt">www.pokernow.club/mtt</a></div>
                
                <p>
                    I wrote a JS/TS algorithm for my friend Samuel Simões (developer of the popular free Poker website PokerNow.club) to decide what player movements to make when re-balancing a multi-table tournament.  
                    It uses a points based iterative model that tries to find the best solution.  
                    It ultimately instructs the tournament brains which players to move and which tables to add/remove.
                </p>
            </div>

        </div>
    </div>
}