const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

document.querySelectorAll("a, button").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform += " scale(1.8)";
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.transform = cursor.style.transform.replace(" scale(1.8)", "");
  });
});

document.querySelector(".cta").addEventListener("click", () => {
  window.scrollTo({
    top: document.getElementById("about").offsetTop,
    behavior: "smooth"
  });
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Transmission Received");
});
