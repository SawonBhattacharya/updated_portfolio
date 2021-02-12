function sendEmail() { 
    Email.send({ 
      SecurityToken:"a5639d4b-9814-4c5a-9395-55dfabff39d0",
      To: "bhattasawon17@gmail.com",
      Name: 'Sawon',//document.getElementById('contactName').value,
      From: 'sawon17081997@gmail.com',//document.getElementById('contactEmail').value,
      Subject:'Work',//document.getElementById('contactSubject').value,
      Body: 'Lets do this',//document.getElementById('contactMessage').value
    }) 
    .then(function (message) { 
      alert("mail sent successfully") 
    }); 
 }