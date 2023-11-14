document.addEventListener('DOMContentLoaded', function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading the navbar:', error));
});

document.querySelectorAll('.location').forEach(item => {
    item.addEventListener('mouseover', function() {
      document.getElementById(this.getAttribute('data-target')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  