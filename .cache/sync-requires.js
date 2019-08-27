const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-about-js": hot(preferDefault(require("/Users/ellinorstenhaug/Desktop/Utbildning/Nackademin/Javascript 3/Gatsby/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/ellinorstenhaug/Desktop/Utbildning/Nackademin/Javascript 3/Gatsby/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ellinorstenhaug/Desktop/Utbildning/Nackademin/Javascript 3/Gatsby/src/pages/index.js")))
}

