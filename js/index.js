function enviarMail() {
    alert("El servicio de mensajeria ha fallado.")
}

function sendEmail() {
   Email.send({
    Host: "smtp.gmail.com",
    Username: "droid1.pde@gmail.com",
    Password: "ojcwkdkqiqzcblft",
    To: 'gevzaok@gmail.com',
    From: "droid1.pde@gmail.com",
    Subject: "Sending Email using javascript",
    Body: "Well that was easy!!",
})
    .then(function (message) {
    alert("mail sent successfully")
    });
}

