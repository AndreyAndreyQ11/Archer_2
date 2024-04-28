import React, { Component } from "react";

export default class ColomnSpaun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "", // Стартовое значение поля ввода
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    // Проверка на число, чтобы разрешить вводить только числовые значения
    if (!isNaN(value)) {
      this.setState({ value });
    }
  };

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        placeholder="Введите число"
      />
    );
  }
}
