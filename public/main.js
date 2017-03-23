
fetch('https://content.jwplatform.com/feeds/f49AJ8N4.json').then(function(response) { 
  return response.json();
}).then(function(j) {
  console.log(j); 
});

