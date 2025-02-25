document.addEventListener("DOMContentLoaded", function () {
  getVisitorIP(getCountryFromIP);
});

function loadContent(lang) {
  fetch(`/${lang}/content.json`)
    .then((response) => response.json())
    .then((data) => {
      // Set the page title
      document.title = data.title;

      // Title/Intro
      const titleDiv = document.createElement("div");
      titleDiv.className = "title";
      titleDiv.innerHTML = data.intro;
      document.body.appendChild(titleDiv);

      // Messages
      const messagesDiv = document.createElement("div");
      messagesDiv.innerHTML = `
        <div class="msg leftcopy">${data.messages.left1}</div>
        <div class="msg rightcopy">${data.messages.right1}</div>
        <div class="msg leftcopy">${data.messages.left2}</div>
        <div class="msg rightcopy">${data.messages.right2}</div>
      `;
      document.body.appendChild(messagesDiv);

      // Skills
      const skillsDiv = document.createElement("div");
      skillsDiv.innerHTML = `
        <div class="building angle left">
          <span>${data.skills.backend.join("<br>")}</span>
        </div>
        <div class="building angle">
          <span class="white">${data.skills.frontend.join("<br>")}</span>
        </div>
      `;
      document.body.appendChild(skillsDiv);

      // Contact
      const contactDiv = document.createElement("div");
      contactDiv.innerHTML = `
        <div>Email: ${data.contact.email}</div>
        <div>Social: ${data.contact.social.join(", ")}</div>
      `;
      document.body.appendChild(contactDiv);

      // Call-To-Action (CTA) section
      const ctaDiv = document.createElement("main");
      ctaDiv.id = "endcopy";
      ctaDiv.innerHTML = `
        <div class="center">
          <h1>${data.finalMessage || "Let's go somewhere together."}</h1>
          <a href="#" class="button">${data.cta.coffee}</a>
          <a href="#" class="button">${data.cta.office}</a>
          <a href="#" class="button">${data.cta.video}</a>
          <a href="#" class="button">${data.cta.drink}</a>
        </div>
      `;
      document.body.appendChild(ctaDiv);
    })
    .catch((error) => console.error("Error loading JSON:", error));
}

function getVisitorIP(callback) {
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => callback(data.ip))
    .catch((error) => console.error("Error fetching IP:", error));
}

function getCountryFromIP(ip) {
  fetch("https://get.geojs.io/v1/ip/geo/" + ip + ".json")
    .then((response) => response.json())
    .then((data) => {
      const country = data.country_code.toLowerCase(); // e.g., 'jp' or 'us'
      if (country === "jp") {
        loadContent("jp"); // Load Japanese JSON
      } else {
        loadContent("en"); // Load English JSON
      }
    })
    .catch((error) => console.error("Error fetching country:", error));
}
