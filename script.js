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

   if (email === "" && message === "") {
      Swal.fire({
         icon: "error",
         title: "Oops...",
         text: "Email and message are stil empty"
      });
   } else if (email === "") {
      Swal.fire({
         icon: "error",
         title: "Oops...",
         text: "Email is stil empty"
      });
   } else if (message === "") {
      Swal.fire({
         icon: "error",
         title: "Oops...",
         text: "Message is stil empty"
      });
   } else {
      Swal.fire({
         title: "Thank you!",
         text: "I will contact you soon :D",
         icon: "success"
      });
   }
}

