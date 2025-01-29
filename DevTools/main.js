let button = document.getElementsByTagName("button")[0];

button.addEventListener("click", (ev) => {
  ev.preventDefault();
  let contents = document.getElementsByTagName("input")[0].value;
  let heading = document.getElementsByTagName("h2")[0];

  let string = heading.textContent;
  let split = string.split(" ");
  heading.textContent = split[0] +" " + contents;

  console.log(`heading has been updated with ${contents}`);
});
