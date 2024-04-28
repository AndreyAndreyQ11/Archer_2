import { Component } from "react";
import s from "./GridColumns.module.css";

import ColomnSpaun from "./ColomnSpaun";

export default class GridColumns extends Component {
  render() {
    return (
      <div className={s.grid_body}>
        <div className={s.grid_item}>Дата</div>
        <div className={s.grid_item}>Кол-во сетов</div>
        <div className={s.grid_item}>Кол-во стрел</div>
        <div className={s.grid_item}>М1</div>
        <div className={s.grid_item}>М2</div>
        <div className={s.grid_item}>М3</div>
        <div className={s.grid_item}>Удалить</div>
        <div className={s.grid_item}>Добавит</div>

        <ColomnSpaun />
        <ColomnSpaun />
      </div>
    );
  }
}
