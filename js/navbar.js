

const menuItems = [
  {
    text: "Catalog",
    url: "#catalog",
    class: "nav-link",
  },
  {
    text: "About",
    url: "#about",
    class: "nav-link",
  },
  {
    text: "Contact",
    url: "#contact",
    class: "nav-link",
  },
];

// Loop to create each link and append.
const navBarMarkup = `
${menuItems
  .map(
    (menu) =>
      `<li class="nav-item"><a href=${menu.url} class="${menu.class}">${menu.text}</a>`
  )
  .join(" ")}</li>
`;

document.querySelector("ul").innerHTML = navBarMarkup;

// Fix scrolling when anchor is clicked

document.querySelectorAll(".nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove active class from all menu items
    document.querySelectorAll(".nav-link").forEach((item) => {
      item.classList.remove("active");
    });

    // Add active class to the clicked menu item
    this.classList.add("active");

    const targetElement = document.querySelector(this.getAttribute("href"));
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });
});


