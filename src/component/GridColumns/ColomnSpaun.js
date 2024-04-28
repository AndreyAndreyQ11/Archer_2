import React, { Component } from "react";
import s from "./GridColumns.module.css";

import InputNumber from "./InputNumber";
import InputDate from "./InputDate";

export default class ColomnSpaun extends Component {
  render() {
    return (
      <>
        <div className={s.grid_item}>
          <InputDate />
        </div>
        <div className={s.grid_item}>
          <InputNumber />
        </div>
        <div className={s.grid_item}>
          <InputNumber />
        </div>
        <div className={s.grid_item}>
          <InputNumber />
        </div>
        <div className={s.grid_item}>
          <InputNumber />
        </div>
        <div className={s.grid_item}>
          <InputNumber />
        </div>
        <div className={`${s.grid_item} ${s.grid_delete}`}></div>
        <div className={`${s.grid_item} ${s.grid_add}`}></div>
      </>
    );
  }
}
