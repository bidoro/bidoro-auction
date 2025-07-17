const grid = document.querySelector(".auction-grid");

function renderAuctions(list) {
  grid.innerHTML = "";

  list.forEach((item) => {
    const box = document.createElement("div");
    box.className = "auction-box";
    box.innerHTML = `
      <img src="${item.image}" alt="${item.make} ${item.model}" />
      <h3>${item.make} ${item.model}</h3>
      <p>€${item.price.toLocaleString()}</p>
      <p>${item.timeLeft} left</p>
      ${item.verified ? '<span class="verified">Verified Seller</span>' : ""}
    `;
    grid.appendChild(box);
  });
}

renderAuctions(auctions);
