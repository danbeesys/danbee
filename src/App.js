import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Counsel from "./counsel/Counsel"
import Adviser from "./adviser/Adviser"
import Directions from "./direction/Directions";
import Process from "./process/Process";
import Request from "./request/Request";

function App() {
  return (
      <BrowserRouter>
            <Routes>
                <Route path="/request" element={<Request />} />
                <Route path="/process" element={<Process />} />
                <Route path="/directions" element={<Directions />} />
                <Route path="/adviser" element={<Adviser />} />
                <Route path="/danbee" element={<Counsel />} />
            </Routes>
      </BrowserRouter>
  );
}

export default App;
