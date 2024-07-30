import "./App.css";
import AmazonSettlements from "./Components/AmazonSettlements/AmazonSettlements";
import Home from "./Components/Home/Home";
import AccountCard from "./Components/OnboardingUpdate/AccountCard";
import Dashboard from "./Components/Dashboard/Dashboard";
// import OnboardingUpdate from "./Components/OnboardingUpdate/OnboardingUpdate";
// import ContentComponent from "./Components/AmazonSettlements/ContentComponent";


function App() {
  return (
    <div className="app">
      <Home />
      {/* <OnboardingUpdate /> */}
      <AccountCard/>
      <AmazonSettlements />
      <Dashboard/>
      {/* <ContentComponent/> */}
    </div>
  );
}

export default App;
