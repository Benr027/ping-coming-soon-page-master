var button = document.querySelector("button"),
  input = document.querySelector("input"),
  diserro = document.querySelector(".warn");
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zAZ\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function visi() {
    diserro.style.visibility = "visible";
    diserro.style.marginBottom = 20 + 'px';
    input.style.border = "2px solid hsl(354, 100%, 66%)";
  }
  function hidden() {
    diserro.style.visibility = "hidden";
    diserro.style.marginBottom = "0";
    input.style.border = "1px solid hsl(0, 0%, 59%)";
  }
  input.addEventListener("input", () => {
    input = document.querySelector("input");
    if (!validateEmail(input.value)) {
      visi();
    } else {
      hidden();
    }});

  button.addEventListener("click", (e) => {
    if (!validateEmail(input.value)) {
      visi();
      e.preventDefault();
    } else if (input.value == "") {
      e.preventDefault();
    }});

  input.addEventListener("blur", () => {
    hidden();
  });