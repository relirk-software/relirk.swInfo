import config from "../util/config";

const findObject = (array, endPoint, obj) => {
  let findObj;
  for (let i = 0; i < array.length; i++) {
    if (endPoint === "films") {
      if (array[i].title === obj.title) {
        findObj = array[i];
        break;
      }
    } else {
      if (array[i].name === obj.name) {
        findObj = array[i];
        break;
      }
    }
  }
  return findObj;
};

// Modela o retorno com os atributos customizados do json
const setNewAttributes = (endPoint, swResultObj, resultData, swAllResults) => {
  const formattedSwObject = swResultObj.map(obj => {
    if (resultData.names.indexOf(obj.name) >= 0) {
      const findObj = findObject(resultData.jsonData, endPoint, obj);
      obj = setCustomAttr(endPoint, obj, findObj);
      return obj;
    } else {
      obj.image = config.placeholder;
      obj.landscape = config.placeholder;
      obj.description =
        "Descrição indisponívelDescrição indisponívelDescrição indisponívelDescrição indisponívelDescrição indisponívelDescrição indisponívelDescrição indisponívelDescrição indisponívelDescrição indisponívelDescrição indisponívelDescrição indisponívelDescrição indisponívelDescrição indisponívelDescrição indisponívelDescrição indisponívelDescrição indisponívelDescrição indisponívelDescrição indisponívelDescrição indisponível";
      return obj;
    }
  });

  const { previous, next, count } = swAllResults;
  return {
    [endPoint]: formattedSwObject,
    previous: previous,
    next: next,
    count: count
  };
};

const setCustomAttr = (endPoint, obj, findObj) => {
  const { image, description, landscape } = findObj;
  obj = { ...obj, image, description };

  switch (endPoint) {
    case "people":
      break;
    case "films":
      break;
    case "starships":
      break;
    case "vehicles":
      break;

    case "species":
      break;
    case "planets":
      obj = { ...obj, landscape };
      break;
    default:
      throw Error(`Sorry, we are out of ${endPoint}.`);
  }

  return obj;
};

module.exports = {
  setNewAttributes,
  setCustomAttr
};
