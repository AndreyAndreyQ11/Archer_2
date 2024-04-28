import { Component } from "react";
import s from './App.module.css';


import GridColumns from "./GridColumns/GridColumns"




export default class App extends Component {
  state = {
    columns: [
      [1, 2, 3, 4, 5, 6, 7, 8],
      [1, 2, 3, 4, 5, 6, 7, 8],
    ],
  }

  render() {

    return (
      <div className={s.wrapper}>
        <div className={s.content}>
          <h1>тук-тук</h1>
          <GridColumns
            date={this.state.columns} />


        </div>
      </div>
    );
  };
};