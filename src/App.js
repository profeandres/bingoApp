import "./App.css";
import { Rules } from "./components/Rules";
import { Route, Routes} from "react-router-dom";
import { MainLayOut } from "./layouts/MainLayOut";
import { Start } from "./components/Start";
import { AudioPage } from "./components/AudioPage";
import { Game } from "./components/Game";

function App() {
  

  return (
    <div className="App">
      <h1 className="app-h1">BINGO APP</h1>
      <Routes>
        <Route path="/" element={<MainLayOut/>}>
          <Route index element={<Start/>}/>
          <Route path="rules" element={<Rules/>}/>
          <Route path="game" element={<Game/>}/>
        </Route>
      </Routes>
      <AudioPage/>
    </div>
  );
}

export default App;
