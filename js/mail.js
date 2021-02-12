function sendEmail() { 
    Email.send({ 
      Host: "smtp.gmail.com",
      Username: "bhattasawon17@gmail.com",
      Password: "llonmtlmlvpnnzzi",
      To: "bhattasawon17@gmail.com",
      Subject: "Mail from Portfolio",
      Name: document.getElementById('contactName').value,
      From: document.getElementById('contactEmail').value,
      Subject:document.getElementById('contactSubject').value,
      Body: document.getElementById('contactMessage').value
    }) 
    .then(function (message) { 
      alert("mail sent successfully") 
    }); 
 }