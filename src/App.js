const Pet = ({ name, animal, breed }) =>
  React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("p", {}, animal),
    React.createElement("p", {}, breed),
  ]);

const App = () =>
  React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Mixed",
    }),
  ]);

ReactDOM.render(React.createElement(App), document.getElementById("root"));
