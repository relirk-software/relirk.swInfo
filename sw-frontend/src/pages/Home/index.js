/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import api from "../../services/api";

import Header from "../../components/Header";
import Sidenav from "../../components/Sidenav";

export default class Home extends Component {
  state = {
    rows: 0,
    count: 0,
    next: "",
    previous: "",
    template: "",
    films: []
  };

  async componentDidMount() {
    const result = await api.getSwData("", "films");
    console.log(result);
  }

  render() {
    return (
      <div className="estrutura">
        <Header />
        <Sidenav />
      </div>
    );
  }
}
