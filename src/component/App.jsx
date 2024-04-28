import { Component } from "react";
import s from './App.module.css';






export default class App extends Component {
  state = {
    column: [
      [1, 2, 3, 4, 5, 6, 7, 8],
      [1, 2, 3, 4, 5, 6, 7, 8],
    ],
  }





  render() {

    return (
      <div className={s.wrapper}>
        <div className={s.content}>
          <h1>тук-тук</h1>
          <div className={s.grid_body}>
            <div className={s.grid_item}>1</div>
            <div className={s.grid_item}>2</div>
            <div className={s.grid_item}>3</div>
            <div className={s.grid_item}>4</div>
            <div className={s.grid_item}>5</div>
            <div className={s.grid_item}>6</div>
            <div className={s.grid_item}>7</div>
            <div className={s.grid_item}>8</div>
            <div className={s.grid_item}>1</div>
            <div className={s.grid_item}>2</div>
            <div className={s.grid_item}>3</div>
            <div className={s.grid_item}>4</div>
            <div className={s.grid_item}>5</div>
            <div className={s.grid_item}>6</div>
            <div className={s.grid_item}>7</div>
            <div className={s.grid_item}>8</div>
          </div>
        </div>
      </div>
    );
  };
};