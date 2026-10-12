const button = document.querySelector("button");
const kontakt = document.querySelector("#kontakt");

button.addEventListener("click", function () {
  kontakt.scrollIntoView({
    behavior: "smooth"
  });
});

