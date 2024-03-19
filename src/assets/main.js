function toggleAriaExpanded(e, closeText, showText, controlledElementId = undefined) {
  const button = e.target
  const isExpanded = button.getAttribute('aria-expanded') === 'false' ? true : false

  // toggle class name for unrelated elements as we cannot use the aria-expanded state
  const element = document.getElementById(controlledElementId)
  if (element) {
    element.classList.toggle("expanded");
  }

  
  button.setAttribute('aria-expanded', isExpanded)
  button.children[0].innerText = isExpanded ? closeText : showText
}

// --- Scroll to top function ---
// (https://css-tricks.com/how-to-make-an-unobtrusive-scroll-to-top-button/#top-of-site)
// select the element to target
var target = document.querySelector(".back-to-top");

var scrollToTopBtn = document.querySelector(".js-back-to-top__link");
var rootElement = document.documentElement;

// create a function that will be called when that element is intersected
function handleScroll() {
  // do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 0.30 ) {
    // show button
    document.body.classList.add("show-btn")
  } else {
    // hide button
    document.body.classList.remove("show-btn")
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);
