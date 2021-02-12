function sendEmail() { 
    Email.send({ 
      Host: "smtp.gmail.com",
      Username: "bhattasawon17@gmail.com",
      Password:"5955F329597588C2F1B6AD4060E52DD294E2",
      To: "bhattasawon17@gmail.com",
      Name: 'Sawon',//document.getElementById('contactName').value,
      From: 'sawon17081997@gmail.com',//document.getElementById('contactEmail').value,
      Subject:'Work',//document.getElementById('contactSubject').value,
      Body: 'Lets do this',//document.getElementById('contactMessage').value
    })
    .then(function (message) { 
      alert("mail sent successfully") 
      console.log(Email.Body)
    }); 
 }