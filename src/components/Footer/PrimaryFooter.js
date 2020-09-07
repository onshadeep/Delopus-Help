import React, { Component } from "react";

class PrimaryFooter extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="d-flex align-items-end flex-column mr-5">
          <small>www.agora42.com &copy; {new Date().getFullYear()}</small>
          </div>
        </footer>
      </div>
    );
  }
}

export default PrimaryFooter;
