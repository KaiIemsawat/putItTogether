// import './App.css';

import PutTogether from "./components/PutTogether";

function App() {
  return (
   <>
    <PutTogether
      lastName = { "Doe" }
      firstName = { "Jane" }
      initAge = {45}
      hairColor = { "Black" }
    />
    <PutTogether
      lastName = { "Smith" }
      firstName = { "John" }
      initAge = {88}
      hairColor = { "Brown" }
    />
   </>
  );
}

export default App;
