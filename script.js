
const projects = [
  {
    name: "Sonari",
    desc: "A music streaming experience focused on discovery and learning each listener's taste. Currently being developed.",
    repo: "https://github.com/davidweb-devv/sonari",
    demo: "",
    status: "In Development",
    category: "development"
  },
  {
    name: "Chroma",
    desc: "A visual web project exploring colour, layout, and expressive interface design.",
    repo: "https://github.com/davidweb-devv/chroma-",
    demo: "https://davidweb-devv.github.io/chroma-/",
    status: "Live Demo",
    category: "live"
  },
  {
    name: "Rafco Storefront",
    desc: "A responsive fashion storefront with product browsing, a cart experience, and WhatsApp checkout.",
    repo: "https://github.com/davidweb-devv/Rafco-E-Commerce-Website-",
    demo: "https://davidweb-devv.github.io/Rafco-E-Commerce-Website-/",
    status: "Live Demo",
    category: "live"
  },
  {
    name: "Logic Architect",
    desc: "An interactive web experience built around structured questions and JavaScript logic.",
    repo: "https://github.com/davidweb-devv/identity-logic",
    demo: "https://davidweb-devv.github.io/identity-logic/",
    status: "Live Demo",
    category: "live"
  },
  {
    name: "Identity Logic 2.0",
    desc: "A follow-up diagnostic-style experience exploring impact, stability, and reflective decision-making.",
    repo: "https://github.com/davidweb-devv/identity-logic-2.0",
    demo: "",
    status: "Source Available",
    category: "other"
  },
  {
    name: "Weather App",
    desc: "A responsive weather interface that uses a weather service to retrieve forecast information.",
    repo: "https://github.com/davidweb-devv/weather-app",
    demo: "",
    status: "Source Available",
    category: "other"
  },
  {
    name: "BiteDash",
    desc: "A food delivery website with menu browsing, filtering, a demo cart, and responsive navigation.",
    repo: "https://github.com/davidweb-devv/BiteDash-",
    demo: "https://davidweb-devv.github.io/BiteDash-/index.html",
    status: "Live Demo",
    category: "live"
  },
  {
    name: "Palm Ave",
    desc: "A standalone web project exploring a distinct visual direction and frontend layout.",
    repo: "https://github.com/davidweb-devv/palm-ave",
    demo: "https://davidweb-devv.github.io/palm-ave/",
    status: "Live Demo",
    category: "live"
  },
  {
    name: "Tin City Cafe",
    desc: "A cafe-themed website project with a focused standalone homepage.",
    repo: "https://github.com/davidweb-devv/tin-city-cafe",
    demo: "",
    status: "Source Available",
    category: "other"
  },
  {
    name: "Caf-",
    desc: "An independent frontend project with page structure, styling, and interactive elements.",
    repo: "https://github.com/davidweb-devv/Caf-",
    demo: "",
    status: "Source Available",
    category: "other"
  },
  {
    name: "Savor Bistro",
    desc: "A restaurant-themed website project with its own visual identity and layout.",
    repo: "https://github.com/davidweb-devv/savor-bistro-",
    demo: "https://davidweb-devv.github.io/savor-bistro-/",
    status: "Live Demo",
    category: "live"
  },
  {
    name: "Farm City",
    desc: "An independent web project presented as a live website.",
    repo: "https://github.com/davidweb-devv/farm-city",
    demo: "https://davidweb-devv.github.io/farm-city/",
    status: "Live Demo",
    category: "live"
  },
  {
    name: "Kampe",
    desc: "An independent web project with a published live demo.",
    repo: "https://github.com/davidweb-devv/kampe",
    demo: "https://davidweb-devv.github.io/kampe/",
    status: "Live Demo",
    category: "live"
  },
  {
    name: "Number3",
    desc: "A small independent web project and frontend experiment.",
    repo: "https://github.com/davidweb-devv/number3",
    demo: "",
    status: "Source Available",
    category: "other"
  }
];


// CREATE PROJECT CARDS

function projectCard(project, index) {
  const demo = project.demo
    ? `<a href="${project.demo}" target="_blank" rel="noreferrer">Live demo ↗</a>`
    : "";

  return `
    <article class="project-card">

      <div class="project-top">
        <span class="project-number">
          PROJECT ${(index + 1).toString().padStart(2, "0")}
        </span>

        <span class="project-status">
          ${project.status}
        </span>
      </div>

      <h3>${project.name}</h3>

      <p>${project.desc}</p>

      <div class="project-links">
        ${demo}

        <a href="${project.repo}"
           target="_blank"
           rel="noreferrer">
          GitHub ↗
        </a>
      </div>

    </article>
  `;
}


// HOMEPAGE FEATURED PROJECTS

const featured = document.querySelector("#featured-projects");

if (featured) {
  featured.innerHTML = [
    projects[0],
    projects[1],
    projects[2]
  ].map(project =>
    projectCard(project, projects.indexOf(project))
  ).join("");
}


// WORK PAGE PROJECTS

const all = document.querySelector("#all-projects");

function renderProjects(filter = "all") {
  if (!all) return;

  const filtered = projects.filter(project =>
    filter === "all" || project.category === filter
  );

  all.innerHTML = filtered.map(project =>
    projectCard(project, projects.indexOf(project))
  ).join("");
}

if (all) {
  renderProjects();

  document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {

      document.querySelectorAll(".filter").forEach(item =>
        item.classList.remove("active")
      );

      button.classList.add("active");

      renderProjects(button.dataset.filter);
    });
  });
}


// MOBILE NAVIGATION

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");

    toggle.setAttribute("aria-expanded", String(open));
  });
}


// AUTOMATIC COPYRIGHT YEAR

document.querySelectorAll("[data-year]").forEach(element => {
  element.textContent = new Date().getFullYear();
});
