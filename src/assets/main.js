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
