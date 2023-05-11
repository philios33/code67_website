
import './global.scss';
import { BrowserRouter } from "react-router-dom";
import Main from './Main';

export default function() {

    return <BrowserRouter>
        <Main />
    </BrowserRouter>
}