import { Routes, Route } from "react-router-dom";
import App_01 from './App_01';
import App_02 from './App_02';
import Counter from "./Counter";
import Hello from "./Hello";
import InputSample from "./InputSample";

function Router(){
return(
    <Routes>
        <Route path="/" element={<App_01/>} />
        <Route path="/app2" element={<App_02/>} />
        <Route path="/counter" element={<Counter/>} />
        <Route path="/hello" element={<Hello/>} />
        <Route path="/inputsample" element={<InputSample/>} />
    </Routes>
)
}
export default Router