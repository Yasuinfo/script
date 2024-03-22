fetch('https://script.google.com/macros/s/AKfycbzcouRaX0l4uWAHFeFqtfrWFusD_8EJtB1_PUWuKs58_F3YjhrlJKACRPE1_0dlfsxP/exec')
  .then(response => response.json())
  .then(data => {
    console.log(data); // You can do whatever you want with the JSON data
  })
  .catch(error => console.error('Error:', error));
