import "./App.css";
import AmazonSettlements from "./Components/AmazonSettlements/AmazonSettlements";
import Home from "./Components/Home/Home";
import OnboardingUpdate from "./Components/OnboardingUpdate/OnboardingUpdate";
// import ContentComponent from "./Components/AmazonSettlements/ContentComponent";

function App() {
  return (
    <div className="app">
      <Home />
      <OnboardingUpdate />
      <AmazonSettlements />
      {/* <ContentComponent/> */}
    </div>
  );
}

export default App;
