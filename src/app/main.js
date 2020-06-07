class Main { }

export const main = new Main()

// SOURCE: https://stackoverflow.com/questions/524696/how-to-create-a-style-tag-with-javascript
var css = `
    .ualert-button:hover { background-color: #ebf5ff; text-decoration: none;}
    .ualert-button {
        display: inline-block;
        border-radius: 3;
        border: solid 1px black;
        width: 100%;
        padding: 11px;
        background-color: white;
        border-radius: 4px;
        text-align:center;
        text-decoration: none;
        font-size: 18px;
        border-color: #005eb8;
    }
    `,
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
head.appendChild(style);

style.type = 'text/css';
if (style.styleSheet){
  // This is required for IE8 and below.
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

var divButton = document.querySelector("div.product-highlight.product-page-actions.js-product-page-actions");
var ualertLink = document.createElement("a");
// var ualertButton = document.createElement("button")
var linkText = document.createTextNode("Verifica pe uAlert");

// ualertLink.appendChild(ualertButton)
ualertLink.appendChild(linkText);
divButton.appendChild(ualertLink);

var current_page_url = new URLSearchParams({link: window.location.href}).toString()

ualertLink.setAttribute("class", "ualert-button")
ualertLink.setAttribute('href', 'https://www.ualert.xyz/product/?'.concat(current_page_url))
ualertLink.setAttribute('target', '_blank')
ualertLink.setAttribute('type', 'button')
