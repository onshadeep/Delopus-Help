import React, { Component } from "react";
import DatePicker from "react-date-picker";

const styles = {
  dateField: {
    height: "36px"
  }
};

class DatePickerdob extends Component {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });

  render() {
    return (
      <div>
        <DatePicker
          className="A42Date"
          style={styles.dateField}
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default DatePickerdob;
