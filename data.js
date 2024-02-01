document.addEventListener("DOMContentLoaded", (event) => {
  const button = document.getElementById("add");
  let currentColor = 0;
  let selected = [];
  let colors = [
    "red",
    "blue",
    "green",
    "black",
    "grey",
    "orange",
    "purple",
    "pink",
    "white",
  ];

  button.addEventListener("click", (event) => {
    event.preventDefault();
    const field = document.getElementById("name");
    if (field.value) {
      const newLi = document.createElement("li");

      const type = document.getElementById("type").value;

      if (
        !selected.some((thing) => {
          return thing.type === type;
        })
      ) {
        selected.push({
          type: type,
          color: colors[currentColor],
        });
        currentColor++;
      }

      newLi.style.backgroundColor = colors[currentColor - 1];

      newLi.innerHTML = type + ": " + field.value;
      field.value = "";
      document.getElementById("shopping-list").appendChild(newLi);
    }
  });
});
