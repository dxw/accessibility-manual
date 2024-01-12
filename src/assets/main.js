function toggleAriaExpanded(e) {
  const button = e.target
  const isExpanded = button.getAttribute('aria-expanded') === 'false' ? true : false
  
  button.setAttribute('aria-expanded', isExpanded)
  button.children[0].innerText = isExpanded ? 'Hide' : 'Show'
}
