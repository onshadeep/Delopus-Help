import React from "react";
import "./assets/css/SiteAgora.css";
import PrimaryHeader from "./components/Header/PrimaryHeader";
import SecondaryFooter from "./components/Footer/SecondaryFooter";
import HelpLanding from "./components/AgoraHelp/HelpLanding";
import Manages from "./components/ManageAccount/ManageAcc";
import Troubles from "./components/Troubleshoot/Troubleshootlogin";
import Safety from "./components/Privacy/PrivacySafety";

class App extends React.Component {
  render() {
    return (
      <div>
        <PrimaryHeader />
        {/* <HelpLanding/> */}
        {/* <Manages/> */}
        {/* <Troubles/> */}
        <Safety/>
        <SecondaryFooter />
      </div>
    );
  }
}
export default App;