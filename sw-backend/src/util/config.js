const firebaseMediaToken = {
  planets: "40660f30-bdfa-4d97-afa8-6b94ce8584c9",
  starships: "b7093e0f-597f-4c1a-a390-2839390bbdab",
  species: "f5687f40-58b8-404a-84b4-90193316f6d1",
  vehicles: "20ccad09-5358-45fc-b6ca-dd343363203c",
  people: "642e0653-0a34-449d-8153-83e4c6f5d8e4",
  films: "27633735-4fc5-4bde-9990-d9d59e7cb1f6"
};

export default {
  placeholder:
    "https://firebasestorage.googleapis.com/v0/b/swproject-c300c.appspot.com/o/Planets%2Fstar-wars-logo.jpg?alt=media&token=f1599525-b448-44f6-82a8-dc110808146c",
  categories: [
    "planets",
    "starships",
    "species",
    "vehicles",
    "people",
    "films"
  ],
  storageJSON: {
    planets: `Planets.json?alt=media&token=${firebaseMediaToken["planets"]}`,
    starships: `Starships.json?alt=media&token=${firebaseMediaToken["starships"]}`,
    species: `Species.json?alt=media&token=${firebaseMediaToken["species"]}`,
    vehicles: `Vehicles.json?alt=media&token=${firebaseMediaToken["vehicles"]}`,
    people: `People.json?alt=media&token=${firebaseMediaToken["people"]}`,
    films: `Films.json?alt=media&token=${firebaseMediaToken["films"]}`
  }
};
