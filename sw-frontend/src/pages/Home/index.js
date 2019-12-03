/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import api from "../../services/api";

import Header from "../../components/Header";
import Sidenav from "../../components/Sidenav";
import Grid from "../../components/Grid";
import News from "../../components/News";
import Footer from "../../components/Footer";

export default class Home extends Component {
  state = {
    rows: 0,
    count: 0,
    next: "",
    previous: "",
    template: "",
    films: [],
    result: []
  };

  async componentDidMount() {
    const categories = [
      "planets",
      "starships",
      "species",
      "vehicles",
      "people",
      "films"
    ];

    localStorage.clear();
    for (let index = 0; index < categories.length; index++) {
      const category = categories[index];
      const result = await api.getSwData("", category);
      localStorage.setItem(category, JSON.stringify(result));
    }
  }

  render() {
    return (
      <div className="estrutura">
        <Header />
        <Sidenav />
        <Grid
          category={localStorage.getItem("selectedCategoryName")}
          items={localStorage.getItem("selectedCategory")}
        />
        <News />
        <Footer />
      </div>
    );
  }
}
