var typed = new Typed(".typing", {
   strings: ["Marco Hutagaol", "A Programmer", "A Musician"],
   typeSpeed: 100,
   backSpeed: 70,
   backDelay: 1000,
   loop: true
})

function send() {
   const email = document.getElementById('email').value;
   const message = document.getElementById('mess').value;

   if(email === "" || message === "") {
      alert("Email and message still empty")
   } else {
      alert("Thank you for sending the message")
   }
}