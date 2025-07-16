import { Routes, Route } from "react-router-dom";
import App_01 from './App_01';
import App_02 from './App_02';
import Counter from "./Counter";
import Hello from "./Hello";
import InputSample from "./InputSample";
import InputTest from "./InputTest";
import InputSamples from "./InputSamples";

function Router(){
return(
    <Routes>
        <Route path="/" element={<App_01/>} />
        <Route path="/app2" element={<App_02/>} />
        <Route path="/counter" element={<Counter/>} />
        <Route path="/hello" element={<Hello/>} />
        <Route path="/inputsample" element={<InputSample/>} />
        <Route path="/inputtest" element={<InputTest/>} />
        <Route path="/inputsamples" element={<InputSamples/>}/>
    </Routes>
)
}
export default Router