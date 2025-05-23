
// function renderProjects(){
//     return data.map((project) => {
//         return `<div class="project">
//             <h2>Latest Works</h2>
//             <div  class="displayproject">
//                 <div><a> <img src="${project.image}" alt="${project.name}" /></a></div>
//                 <div class="projectdetails">
//                     <h3>${project.name}</h3>
//                     <span>${project.heading}</span>
//                     <p>${project.summary}</p>
//                   <ul>
//                     <li>${languages.languages}</li>
//                   </ul>
//                 </div>

//             </div>
//         </div>`

//     }).join('');
// }
// const projectContainer = document.getElementById('work-section');                                                      
// projectContainer.innerHTML = renderProjects(); 





  

function renderProjects() {
    return data.map((project, index) => {
      const languagesList = project.languages.map(lang => `<li>${lang}</li>`).join("");
  
      const isReversed = index % 2 !== 0 ? "reverse" : "";
  
      return `
        <div class="project ${isReversed}">
         <div>
          <div class="laptop-mockup">
            <img src="https://github.com/procodrr/portfolio/blob/main/part-1-starter-files/mockups/macbook%208.png?raw=true" class="laptop-frame" />
            <img src="${project.image}" alt="${project.name}" class="screenshot-inside" />
          </div>
         </div>
          <div class="projectdetails">
            <h3>${project.name}</h3>
            <span>(${project.heading})</span>
            <p>${project.summary}</p>
            <ul>${languagesList}</ul>
          </div>
        </div>`;
    }).join('');
  }
  
  const projectContainer = document.getElementById("work-section");
  projectContainer.innerHTML = `
   <h2>Latest Works</h2>
  <div class="projects-wrapper">
    <!-- All projects will go here -->
    ${renderProjects()}
  </div>
  `;

  function contactRender() {
    const container = document.getElementById("contact-section");
    const tpl = `
      <section class="contact-sec">
        <h2 class="letcon">Let's connect</h2>
        <div class="contact-form">
          <div class="contact-img">
            <img src="https://raw.githubusercontent.com/procodrr/portfolio/03923dca78d059bfdf8a3fabd656deef22aa1d3a/part-2-final-files/assets/images/contact-me.svg">
          </div>
          <form class="contact" action="https://formsubmit.co/kritikabhardwaj2513@gmail.com" method="POST">

            <input type="hidden" name="_honey" style="display:none">
            <input type="hidden" name="_captcha" value="false">
            <input type="hidden" name="_subject" value="New submission from portfolio!">
            <input type="hidden" name="_template" value="table">
  
            <label for="name" class="label1">
              <img src="icons/user.svg" alt="user icon" /> Name
            </label>
            <input type="text" name="Name" id="name" required />
  
            <label for="email" class="label2">
              <img src="icons/email.svg" alt="email icon" /> Email
            </label>
            <input type="email" name="Email" id="email" required />
  
            <label for="message" class="label3">
              <img src="icons/chat.svg" alt="chat icon" /> Message
            </label>
            <textarea name="message" id="message" cols="25" rows="10" required></textarea>
  
            <button class="submit-btn" type="submit">
              <i class="fas fa-paper-plane"></i> &nbsp; Send Message
            </button>
          </form>
        </div>
      </section>
    `;
    container.innerHTML = tpl;
  }
  
  contactRender();

  function footerRender() {
    const container = document.getElementById("footer");
    const tpl = `
     
      <ul class="social-linkss">
        <li><a href="/" class="fa fa-linkedin"></a></li>
        <li><a href="#/" class="fa fa-facebook"></a></li>
        <li><a href="/" class="fa fa-twitter"></a></li>
        <li><a href="/" class="fa fa-google"></a></li>
      </ul>
       <p>Kritika Sharma © 2025</p>
      <div class="footer-logo"> <a href="#main-section"><img src="/icons/forward.svg"/></a> </div>
    `;
    container.innerHTML = tpl;
  }
  footerRender();
  
  
  