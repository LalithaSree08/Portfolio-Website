function toggleMenuRight() {
    const menuRightLinks = document.querySelector(".menubar .menuRight");
    const closeButton = document.querySelector(".close-icon");

    if (window.innerWidth <= 768) {
        menuRightLinks.classList.toggle("show-dropdown");

        // Toggle between fa-bars and fa-times icons
        if (closeButton.classList.contains("fa-bars")) {
            closeButton.classList.remove("fa-bars");
            closeButton.classList.add("fa-times");
        } else {
            closeButton.classList.remove("fa-times");
            closeButton.classList.add("fa-bars");
        }
    }
}

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        const menuRightLinks = document.querySelector(".menubar .menuRight");
        const closeButton = document.querySelector(".close-icon");

        menuRightLinks.classList.remove("show-dropdown");
        closeButton.classList.remove("fa-times");
        closeButton.classList.add("fa-bars");
    }
});

function scrollToProjects(){
    const projectsSection = document.getElementById("projects");
    projectsSection.scrollIntoView({ behavior: "smooth" });
}

function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}

const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click',()=>{
        removeActiveClasses()
        panel.classList.add('active');
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}

const projectList = document.querySelector(".project-list");
const projects = projectList.querySelectorAll("a");

function createDuplicateImages() {
  const cloneProjects = [];
  projects.forEach((project) => {
    const clone = project.cloneNode(true);
    cloneProjects.push(clone);
  });

  cloneProjects.forEach((clone) => {
    projectList.appendChild(clone);
  });
}

createDuplicateImages();

const projectLinks = document.querySelectorAll(".project-list a");

projectLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    window.open(link.href, "_blank");
  });
});

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (name !== "" && email !== "" && message !== "") {
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
        } else if (/^\d+$/.test(name)) {
            alert("Name cannot contain numbers.");
        } else {
            alert("Form submitted successfully!");
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        }
    } else {
        alert("Please fill in all fields before submitting.");
    }
}