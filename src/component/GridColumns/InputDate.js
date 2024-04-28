import React, { Component } from "react";

export default class InputDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: "", // День
      month: "", // Месяц
      year: "", // Год
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    // Проверка на вводимые данные: только числа и ограничение на максимальное количество символов
    if (/^\d*$/.test(value) && value.length <= 2) {
      this.setState({ [name]: value });
    }
  };

  render() {
    const { day, month, year } = this.state;
    return (
      <div style={{ display: "flex" }}>
        <input
          type="text"
          name="day"
          value={day}
          onChange={this.handleChange}
          maxLength="2"
          placeholder="ДД"
        />
        /
        <input
          type="text"
          name="month"
          value={month}
          onChange={this.handleChange}
          maxLength="2"
          placeholder="ММ"
        />
        /
        <input
          type="text"
          name="year"
          value={year}
          onChange={this.handleChange}
          maxLength="4"
          placeholder="ГГГГ"
        />
      </div>
    );
  }
}
