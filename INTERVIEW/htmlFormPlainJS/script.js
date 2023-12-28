function handleSubmit(event) {
  event.preventDefault();

  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;

  let formData = {
    name: name,
    email: email,
  };

  let formDataJson = JSON.stringify(formData);

  localStorage.setItem("formData", formDataJson);
}

document.querySelector("#myForm").addEventListener("submit", handleSubmit);
