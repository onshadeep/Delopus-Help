import React from "react";
import "./assets/css/SiteAgora.css";
import PrimaryHeader from "./components/Header/PrimaryHeader";
import SecondaryFooter from "./components/Footer/SecondaryFooter";
import HelpLanding from "./components/AgoraHelp/HelpLanding";

class App extends React.Component {
  render() {
    return (
      <div>
        <PrimaryHeader />
        <HelpLanding/>
        <SecondaryFooter />
      </div>
    );
  }
}
export default App;