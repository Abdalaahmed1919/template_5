
  const toggleButton = document.querySelector('.navbar-toggler');
  const navbar = document.querySelector('.navbar');

  toggleButton.addEventListener('click', function() {
    const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
  
    if (expanded) {
       navbar.style.cssText = "height: 250px"
    } 
    else {
        navbar.style.cssText = "height: 100px"
    }
  });
