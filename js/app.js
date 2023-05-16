// Hero section

const hero = document.querySelector(".hero");

const heroDiv = hero.appendChild(document.createElement("div"));
heroDiv.classList.add("container", "flex-center-center");
const heroTitle = heroDiv.appendChild(document.createElement("h1"));
heroTitle.innerHTML = "Welcome";

// Catalog section

const catalog = document.querySelector(".catalog");

const catalogTitle = catalog.appendChild(document.createElement("h2"));
catalogTitle.innerHTML = "Catalog";

// --- render cards ---

const cardContainer = document.getElementById("card-container");
cardsData.forEach((cardData) => {
  const card = createCard(cardData);
  cardContainer.appendChild(card);
});

// order elements

catalog.insertBefore(catalogTitle, cardContainer);

// About section

const about = document.querySelector(".about");

const aboutTitle = about.appendChild(document.createElement("h2"));
aboutTitle.innerHTML = "About";

const aboutText = about.appendChild(document.createElement("p"));
aboutText.innerHTML =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare vestibulum lorem, in congue leo viverra vitae. Pellentesque lacinia ligula nec volutpat venenatis. Nunc sit amet luctus metus. Pellentesque tempus ex id posuere bibendum. Curabitur quis tincidunt ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam semper ligula tellus, quis blandit arcu fermentum sed. Maecenas tincidunt iaculis pharetra. Praesent a varius urna. In nec laoreet diam. Nulla quam tortor, scelerisque eu enim nec, molestie tristique nibh. Integer sem lectus, fringilla vitae est vitae, hendrerit varius dui. Nunc lobortis diam at vestibulum aliquam. Donec cursus eget libero non faucibus. Donec sollicitudin turpis ut tortor tempor commodo. Donec luctus molestie augue, id scelerisque urna rutrum in. Curabitur at convallis arcu. Vivamus mollis, ante non vestibulum auctor, tellus dolor suscipit magna, rhoncus mollis mauris leo eu nisi. In vitae ex felis.";


// Gallery section

const reviews = document.querySelector(".reviews");

const reviewsTitle = reviews.appendChild(document.createElement("h2"));
reviewsTitle.innerHTML = "Reviews";

const reviewsText = reviews.appendChild(document.createElement("p"));
reviewsText.innerHTML =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum tincidunt magna, eleifend fringilla nulla dapibus semper. Phasellus mollis malesuada erat et pellentesque. Phasellus hendrerit libero urna, eu dictum orci efficitur a. In aliquet mi nec sapien gravida convallis. Duis maximus mattis commodo. Proin hendrerit tempor nibh, ac accumsan felis commodo in. Phasellus consequat sollicitudin metus, eget vulputate urna tristique eget. Duis pellentesque tempor varius. In sodales vulputate rutrum. Nulla commodo lorem at augue finibus, eget mollis magna malesuada. Maecenas eleifend felis ut magna varius finibus. ";

// Contact section

const contact = document.querySelector(".contact");

const contactTitle = contact.appendChild(document.createElement("h2"));
contactTitle.innerHTML = "Contact";

const contactText = contact.appendChild(document.createElement("p"));
contactText.innerHTML =
  " Feel free to reach out to us if you have any questions or concerns. Our customer support team is here to assist you.";

const contactInfo = contact
  .appendChild(document.createElement("ul"))
  .appendChild(document.createElement("li"));
contactInfo.innerHTML = "Email: bcarolina.pe@gmail.com";

const contactAddress = contact
  .appendChild(document.createElement("ul"))
  .appendChild(document.createElement("li"));
contactAddress.innerHTML = "Mérida, Yucatán";

// Footer

const footer = document.querySelector("footer");

const footerTitle = footer.appendChild(document.createElement("p"));
footerTitle.innerHTML = "Modoki craft 2023";

// Animations

const options = {
  root: null,
  threshold: 0,
  rootMargin: "-88px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const catalog = document.querySelector(".catalog");
      catalog.classList.add("animate");
    }
  });
}, options);

const secondObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const catalog = document.querySelector(".about");
      catalog.classList.add("animate");
    }
  });
}, options);

const thirdObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const catalog = document.querySelector(".contact");
      catalog.classList.add("animate");
    }
  });
}, options);

const fourthObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const catalog = document.querySelector(".reviews");
      catalog.classList.add("animate");
    }
  });
}, options);

observer.observe(catalog);
secondObserver.observe(about);
thirdObserver.observe(contact);
fourthObserver.observe(reviews);

