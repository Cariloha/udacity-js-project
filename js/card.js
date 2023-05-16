const cardsData = [
  {
    image: "./img/hamster.jpg",
    title: "Fabric cover for mangas",
    price: "$115 MXN",
  },
  {
    image: "./img/flowers.jpg",
    title: "Small tote bag",
    price: "$105 MXN",
  },

  {
    image: "./img/dogs.jpg",
    title: "Tote bag",
    price: "$220 MXN",
  },

  {
    image: "./img/daschund.jpg",
    title: "Small purse",
    price: "$80 MXN",
  },

  {
    image: "./img/cats.jpg",
    title: "Bucket hat",
    price: "$350 MXN",
  },

  {
    image: "./img/cats-halloween.jpg",
    title: "Fabric iPad cover",
    price: "$300 MXN",
  },
];

// Function to create card
function createCard(cardData) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  const imageElement = document.createElement("img");
  imageElement.src = cardData.image;
  cardElement.appendChild(imageElement);

  const titleElement = document.createElement("div");
  titleElement.classList.add("card-title");
  titleElement.textContent = cardData.title;
  cardElement.appendChild(titleElement);

  const priceElement = document.createElement("div");
  priceElement.classList.add("card-price");
  priceElement.textContent = cardData.price;
  cardElement.appendChild(priceElement);

  const buttonElement = document.createElement("button");
  buttonElement.classList.add("card-button");
  buttonElement.textContent = "Buy now";
  cardElement.appendChild(buttonElement);

  return cardElement;
}
