

const menuItems = [
  {
    Text: "Catalog",
    Url: "catalog.html",
    Class: "nav-link",
  },
  {
    Text: "About",
    Url: "about.html",
    Class: "nav-link",
  },
  {
    Text: "Contact",
    Url: "contact.html",
    Class: "nav-link",
  },
];


// Loop to create each link and append. 
const navBarMarkup = `
${menuItems.map(menu => `<li class="nav-item"><a href=${menu.Url} class="${menu.Class}" alt="${menu.Alt}">${menu.Text}</a>`).join(' ')}</li>
`;


document.querySelector("ul").innerHTML = navBarMarkup;

