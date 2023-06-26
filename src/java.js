function doYouLoveFashion() {
  let opinion = prompt("Do you like fashion?");
  if (opinion === "no") {
    alert("You do not like fashion");
  } else {
    let name = prompt("What is your name?");
    let email = prompt("What is your email address?");
    alert(
      "Hey " + name + "! We will keep you updated with more fashion news🤍"
    );
  }
}
let button = document.querySelector("button");
button.addEventListener("click", doYouLoveFashion);
