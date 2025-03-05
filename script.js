document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const dots = document.querySelectorAll(".dot");
  
    function setActiveDot() {
      let index = sections.length;
      while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
  
      dots.forEach((dot) => dot.classList.remove("active"));
      dots[index].classList.add("active");
    }
  
    setActiveDot();
    window.addEventListener("scroll", setActiveDot);
  
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        window.scrollTo({
          top: sections[index].offsetTop,
          behavior: "smooth",
        });
      });
    });
  
    const navbar = document.querySelector(".navbar");
    let lastScrollTop = 0;
  
    window.addEventListener("scroll", function () {
      let scrollTop = window.scrollY;
      if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px";
      } else {
        navbar.style.top = "0";
      }
      lastScrollTop = scrollTop;
    });
  
    const socialLinks = document.querySelectorAll(".social-links a");
    socialLinks.forEach((link) => {
      link.addEventListener("mouseover", () => {
        link.style.transform = "scale(1.1)";
      });
      link.addEventListener("mouseleave", () => {
        link.style.transform = "scale(1)";
      });
    });
  });
  