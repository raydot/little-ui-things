import Toggle from "./components/Toggle";
import RudimentaryToggle from "./components/RudimentaryToggle";
import CheckboxCheck from "./components/Checkbox";
import BigGuy from "./components/BigGuy";
import UEButtonToggle from "./components/UEButtonToggle";

function App() {
  return (
    <div className="App">
      <h3>Toggle:</h3>
      <Toggle nameProp="testName" />

      <h3>RudimentaryToggle (button):</h3>
      <RudimentaryToggle />
      <h3>CheckboxCheck</h3>
      <CheckboxCheck />
      <h3>Big Guy (Checkbox):</h3>
      <BigGuy />
      <h3>UEButtonToggle (Button):</h3>
      <UEButtonToggle />
    </div>
  );
}

export default App;
