function sendEmail() { 
    Email.send({ 
      SecurityToken:"a5639d4b-9814-4c5a-9395-55dfabff39d0",
      To: "bhattasawon17@gmail.com",
      Name: document.getElementById('contactName').value,
      From: document.getElementById('contactEmail').value,
      Subject:document.getElementById('contactSubject').value,
      Body: document.getElementById('contactMessage').value
    }) 
    .then(function (message) { 
      alert("mail sent successfully") 
    }); 
 }