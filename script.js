// document.addEventListener("DOMContentLoaded", () => {
//   const sellerNumber = "2348180492520"; // Remove '+' here

//   // Product "Order Now" buttons
//   const buttons = document.querySelectorAll(".product-card button");

//   buttons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//       const productCard = e.target.closest(".product-card");
//       const productName = productCard.getAttribute("data-product");
//       const message = `Hello, I'm interested in buying: ${productName}. Can you share more details?`;

//       const whatsappLink = `https://wa.me/${sellerNumber}?text=${encodeURIComponent(message)}`;
//       window.open(whatsappLink, "_blank");
//     });
//   });

//   // Contact form
//   const contactForm = document.getElementById("contactForm");
//   contactForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const name = document.getElementById("name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const message = document.getElementById("message").value.trim();

//     const fullMessage = `Hello, my name is ${name} (${email}).\n\n${message}`;

//     const whatsappLink = `https://wa.me/${sellerNumber}?text=${encodeURIComponent(fullMessage)}`;
//     window.open(whatsappLink, "_blank");

//     contactForm.reset();
//   });
// });



