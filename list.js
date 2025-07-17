const form = document.getElementById("carForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const car = {
    make: form.make.value,
    model: form.model.value,
    year: form.year.value,
    startingPrice: form.startingPrice.value,
    image: form.image.value,
    duration: form.duration.value
  };

  console.log("Submitted car:", car);
  alert("Your car has been listed (simulation)");

  form.reset(); // Clear the form
});
