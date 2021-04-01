var sections = document.querySelectorAll("section");

onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;
  console.log(scrollPosition);

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) {
      var currentId = section.attributes.id.value;
      // console.log(currentId);
      removeAllActiveClasses();
      addActiveClass(currentId);
    } else if (
      scrollPosition ==
      section.offsetTop + section.offsetHeight - window.innerHeight
    ) {
      console.log("Page Bottom");
      removeAllActiveClasses();
      const lastIndex = document.querySelectorAll("nav ul li a");
      lastIndex[lastIndex.length - 1].classList.add("active");
    }
  });
};

var removeAllActiveClasses = function () {
  document.querySelectorAll("nav ul li a").forEach((el) => {
    el.classList.remove("active");
  });
};

var addActiveClass = function (id) {
  // console.log(id);
  var selector = `nav ul li a[href="#${id}"]`;
  document.querySelector(selector).classList.add("active");
  document
    .querySelector(selector)
    .scrollIntoView({ behavior: "smooth", inline: "center" });
};

var navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    var currentId = e.target.attributes.href.value;
    console.log(currentId);
    var section = document.querySelector(currentId);
    var sectionPos = section.offsetTop;
    console.log(sectionPos);
    section.scrollIntoView({ behavior: "smooth", inline: "center" });

    window.scroll({
      top: sectionPos,
      behavior: "smooth",
    });
  });
});
