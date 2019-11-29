/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

import Header from "../../components/Header";
import Sidenav from "../../components/Sidenav";
import Info from "../../components/Info";

export default class Details extends Component {
  async componentDidMount() {}

  render() {
    return (
      <div className="estrutura">
        <Header />
        <Sidenav />
        <Info />
      </div>
    );
  }
}
