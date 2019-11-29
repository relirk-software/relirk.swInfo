// const Tool = require("../models/Tool");
import axios from "axios";
import api from "../util/api";
import config from "../util/config";
import responseFormatter from "../util/responseFormatter";

module.exports = {
  async index(req, res) {
    let result;
    if (req.query.endPoint && config.categories.includes(req.query.endPoint)) {
      if (req.query.url === "") {
        result = (await api.get(`/${req.query.endPoint}`)).data;
      } else if (req.query.url !== "") {
        result = (await axios.get(req.query.url)).data;
      }
    } else {
      throw Error(`Sorry, we are out of ${req.query.endPoint}.`);
    }

    // Busca o arquivo JSON complementar de acordo com o nome do endPoint
    const jsonData = (
      await axios.get(
        `${process.env.FIREBASE_JSON_CUSTOM_URL}${
          config.storageJSON[req.query.endPoint]
        }`
      )
    ).data;

    // Monta um array com os nomes ou títulos presentes no JSON
    const names = jsonData.map(obj => {
      if (req.query.endPoint === "films") {
        return obj.title;
      } else {
        return obj.name;
      }
    });

    const customData = responseFormatter.setNewAttributes(
      req.query.endPoint,
      result.results,
      { names, jsonData },
      result
    );

    res.json(customData);
  }
};
