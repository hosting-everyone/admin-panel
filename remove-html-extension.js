(function() {
  var path = window.location.pathname;

  // Verwijder de trailing slash, als die er is
  if (path.endsWith('/')) {
    path = path.slice(0, -1);
  }
  
  // Controleer of de URL eindigt op .html
  if (path.endsWith('.html')) {
    // Verwijder .html van de URL
    var newPath = path.slice(0, -5);
    
    // Redirect naar de nieuwe URL zonder .html
    window.location.replace(window.location.origin + newPath);
  }
})();
