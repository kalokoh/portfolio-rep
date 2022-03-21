import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom'
import { Context } from "./ContextContainer/Context";

ReactDOM.render(
  <Context>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Context>,
  document.getElementById("root")
);
