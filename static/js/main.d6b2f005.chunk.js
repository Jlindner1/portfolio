(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var i=n(2),s=n.n(i),a=n(16),c=n.n(a),r=(n(21),n(4)),o=n(5),l=n(6),d=n(8),h=n(7),j=(n(22),n(23),n.p+"static/media/me.e1288d5b.jpg"),m=n(0),b=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={},i.changeContent=i.props.changeContent,i}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{className:"sidebar",children:Object(m.jsxs)("section",{className:"sticky",children:[Object(m.jsx)("div",{className:"profile-img",children:Object(m.jsx)("a",{onClick:function(){return e.changeContent("home")},title:"Home",className:"home-link",children:Object(m.jsx)("img",{src:j})})}),Object(m.jsx)("h1",{children:"Hello!"}),Object(m.jsx)("h2",{children:"Josiah Is:"}),Object(m.jsx)("p",{children:"Developing Web Applications From"}),Object(m.jsx)("p",{className:"location-p",children:"Edmonton AB, Canada"})]})})}}]),n}(s.a.Component),p=(n(25),n(26),n(3)),u=n(15),g=n(11),x=n(10),O=n(14),f=n.n(O),v=n.p+"static/media/storefront.c3c9c3d2.png",w=n.p+"static/media/responsive_page.b5199eff.png",y=n.p+"static/media/construction.1e207470.png",N=n.p+"static/media/pokemon.bcbae9b9.png",C=n.p+"static/media/messagesystem.b47f5e80.JPG";f.a.init("user_hxfO5whlzoN4hbuBtpvvL");var k=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).toggleDropdown=function(e){var t=e.target.parentElement.parentElement.lastChild;t.classList.contains("hidden")?(t.classList.remove("hidden"),t.classList.add("visible"),setTimeout((function(){t.classList.remove("visually-hidden")}),0)):(t.classList.remove("visible"),t.classList.add("visually-hidden"),t.addEventListener("transitionend",(function(e){t.classList.add("hidden")}),{capture:!1,once:!0,passive:!1}))},i.state={dropped:!1,name:"",email:"",message:"",errors:!1,errorMsg:[],success:""},i.page=e.page,i.changeContent=i.props.changeContent,i.handleSubmit=i.handleSubmit.bind(Object(l.a)(i)),i}return Object(o.a)(n,[{key:"removeErrorMsg",value:function(e){setTimeout((function(){e.classList.remove("error-display"),e.classList.add("fade")}),2e3)}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleSubmit",value:function(e){this.setState({errors:!1,errorMsg:[],success:""});var t=[],n=document.getElementById("error-msg"),i=document.getElementById("success-msg");""===this.state.name&&t.push("Please include a name to let me know who sent the email!"),""===this.state.email&&t.push("Please include an email so I can get back to you!"),""===this.state.message&&t.push("Please include a message about why you're contacting me!"),0===t.length?(this.setState({success:"Email Sent!"}),this.sendFeedback("template_3hz2kmk",{message:this.state.message,name:this.state.name,email:this.state.email}),i.classList.remove("fade"),i.classList.add("error-display"),this.removeErrorMsg(i)):(this.setState({errors:!0,errorMsg:t}),n.classList.remove("fade"),n.classList.add("error-display"),this.removeErrorMsg(n),console.log(this.state.errorMsg)),console.log(n.classList)}},{key:"sendFeedback",value:function(e,t){f.a.send("service_276cc9d",e,t).then((function(e){console.log("Email successfully sent!")})).catch((function(e){return console.error("Oh well, you failed. Here some thoughts on the error that occured:",e)}))}},{key:"render",value:function(){var e,t=this,n=this.props.page,i=this.state.errorMsg;return"home"===n?e=Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h3",{children:"Welcome!"}),Object(m.jsx)("p",{children:"I'm Josiah, a software developer specializing in web-based apps and projects, in both Front-end and Back-end capacities. Creating and learning new things along the way is my passion, and solving problems and finding new ones is my hobby!"}),Object(m.jsx)("p",{children:"Feel free to look around my site for more info and examples on what I have done/am doing, and if you have any questions or would like to inquire about my services, use the contact form to reach out!"}),Object(m.jsx)("p",{children:"This page is meant to display my current abilities in terms of front-end design, and will evolve as my skills develop further and I increase the breadth of my portfolio. I have designed and implemented this React application from the ground up myself using React and CSS, and I hope this page gives you a good sample of my talents and insight into my skillsets and journey in web development."})]}):"php-projects"===n?e=Object(m.jsx)("div",{className:"content",children:Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"img-container",children:Object(m.jsx)("img",{src:C,alt:"Messenger App Thumbnail"})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("a",{className:!0,href:"https://cms-messages.herokuapp.com",target:"_blank",children:Object(m.jsx)("h3",{children:"Messenger Appplication"})}),Object(m.jsx)("p",{children:"An application built with PHP and a codeigniter framework, utilizing IonAuth user management and an interactive database to allow users to sign up/login and send messages with each other. This application is hosted throguh heroku, and utilizes a cloud based MySQL database using remotemysql.com."}),Object(m.jsx)("p",{children:"This project utilizes simple modified bootstrap styling, and will have nicer styling and more features as I have time to add to them."})]})]})}):"static"===n?e=Object(m.jsxs)("div",{className:"content cards",children:[Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"img-container",children:Object(m.jsx)("img",{src:w,alt:"responsive website image"})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("a",{className:!0,href:"https://jlindner1.github.io/responsive-design/",target:"_blank",children:Object(m.jsx)("h3",{children:"Responsive Static Web Page"})}),Object(m.jsx)("p",{children:"A sample showing techniques and implementation of responsive web design principles. This spage is designed utilizing a mobile-first methodology to enure that it is convenient and easy to use for a majority of the web-using population who is experienceing the internet through a smartphone."}),Object(m.jsx)("p",{children:"For this page, I was given a Photoshop file with the design, and implmented it in HTML and CSS from scratch."})]})]}),Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"img-container",children:Object(m.jsx)("img",{src:v,alt:"storefront website image"})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("a",{className:!0,href:"https://jlindner1.github.io/storefront-sample/",target:"_blank",children:Object(m.jsx)("h3",{children:"Storefront Static Web Page"})}),Object(m.jsx)("p",{children:"A sample webpage showcasing a possible storefront design utilizing dropdowns, and shop item cards. This is not a responsive page, and showcases utilization of CSS design abilities rather than a funcitonal page."}),Object(m.jsx)("p",{children:"For this page, I was given a Photoshop file with the design, and implmented it in HTML and CSS from scratch."})]})]})]}):"react"===n?e=Object(m.jsx)("div",{className:"content",children:Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"img-container",children:Object(m.jsx)("img",{src:N,alt:"pokemon API page image"})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("a",{className:!0,href:"https://jlindner1.github.io/pokedex/",target:"_blank",children:Object(m.jsx)("h3",{children:"Pok\xe9dex Front-end"})}),Object(m.jsx)("p",{children:"A react application interacting with data from the Pok\xe9API to create a simple Pok\xe9dex. this project started from a demonstration of how to work with the API, but all the internal logic is mine, and the styling is the only leftover from the demo. These stylings will be replaced and additional functionality will be added as I have time to evolve the project."})]})]})}):"education"===n||"personal"===n||"client"===n?e=Object(m.jsx)("div",{className:"content",children:Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"img-container",children:Object(m.jsx)("img",{src:y,alt:"under construction image"})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("a",{className:!0,href:"#",target:"_blank",children:Object(m.jsx)("h3",{children:"Under Construction..."})}),Object(m.jsx)("p",{children:"This page is still being worked on, come back soon!"})]})]})}):"bio"===n?e=Object(m.jsx)("div",{className:"content",children:Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"img-container",children:Object(m.jsx)("img",{src:j,alt:"image of author"})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"About Me"}),Object(m.jsx)("p",{children:"From Edmonton Alberta, Canada - I am a Graduate from NAIT's Computer Software Development program, I am a passionate developer always looking for the next oppurtunity to further develop my abilities."}),Object(m.jsx)("p",{children:"If I'm not working on my next project, I can often be found drawing, painting, learning a new piano piece or trying my hand at developing little video-games."}),Object(m.jsx)("p",{children:"I have a great enthusiasm for taking things apart and finding out how and why they work - which is part of the reason I fell into programming, as there is always a new level to which you can increase your understanding as to how much of our modern world functions - and in turn how we as people interact with the world around us."})]})]})}):"resume"===n?e=Object(m.jsx)("div",{className:"content",children:Object(m.jsx)("div",{className:"card",children:Object(m.jsxs)("div",{class:"resume",children:[Object(m.jsx)("h3",{children:"Resume/Skills"}),Object(m.jsx)("p",{children:"I have experience in an array of languages in frameworks, and always looking to expand my knowledge and abilities, and will keep this updated as my journey as a developer continues!"}),Object(m.jsx)("p",{children:"My current skillsets are as follows:"}),Object(m.jsx)("h4",{children:"C#/Frameworks"}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"Proficient in C# fundamentals and best practices"}),Object(m.jsx)("li",{children:"ASP.NET Framework - Designing and developing MVC web applications inlcuding reading/writing to various Database configurations"}),Object(m.jsx)("li",{children:"ASP.NET CORE - Creating sturdy REST APIs utilizing Controller/Service/Repository design methodology"})]}),Object(m.jsx)("h4",{children:"JavaScript"}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"Proficient in JavaScript fundamentals and best practices"}),Object(m.jsx)("li",{children:"Vanilla JS - Can utilize vanilla JS to add additional functionality and interactibility to static web pages"}),Object(m.jsx)("li",{children:"jQuery - Famliar with the jQuery library for handling additional features, integrations, and data handling"}),Object(m.jsx)("li",{children:"React - Experienced in the React framework/library for creating robust web applications with component and state management"}),Object(m.jsx)("li",{children:"Vue.js - Some experience with the Vue.js library"})]}),Object(m.jsx)("h4",{children:"php"}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"Proficient in fundamentals and best practices of php 7 and higher"}),Object(m.jsx)("li",{children:"php enabled web-pages - Skilled in handling user interactibility, database queries, and authentication"}),Object(m.jsx)("li",{children:"CodeIgniter - experience in ustilizing the CodeIgniter framework for developing robust MVC php projects"}),Object(m.jsx)("li",{children:"Wordpress/Joomla/Other CMS' - Some experience in utilizing/cutomizing CMS' templates and functionality"})]}),Object(m.jsx)("h4",{children:"Database"}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"SQL - Proficient in fundamentals for SQL Database data-normalization, creation, and management"}),Object(m.jsx)("li",{children:"Microsoft Sequel Server - Experienced in DB management/utilization with this software"}),Object(m.jsx)("li",{children:"PostgreSQL - Experienced in DB management/utilization"}),Object(m.jsx)("li",{children:"MySQL/php MyAdmin - Experienced in DB management/utilization"}),Object(m.jsx)("li",{children:"NoSQL - Some experience in Firebase and MongoDB no sql databases"})]}),Object(m.jsx)("h4",{children:"Other"}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"CSS/SASS - Proficient in utilizing CSS/SASS to add beautiful, effective, and efficient styling to web projects"}),Object(m.jsx)("li",{children:"HTML - Proficient in creating markdowns and utilizing SEO best practices for web projects"}),Object(m.jsx)("li",{children:"Futter/Dart - Some experience in developing mobile applications with the Flutter framework"}),Object(m.jsx)("li",{children:"Java - Some experience in creating/managing Java projects"})]})]})})}):"contact"===n&&(e=Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("div",{id:"error-msg",className:"error-msg fade",children:i.length>0?i.map((function(e){return Object(m.jsx)("h4",{children:e})})):"didnt work"}),Object(m.jsx)("div",{id:"success-msg",className:"success-msg hidden fade ",children:this.state.success}),Object(m.jsxs)("form",{id:"contact-form",onSubmit:this.handleSubmit.bind(this),method:"POST",children:[Object(m.jsxs)("div",{className:"contact-info",children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"name",children:"Name"}),Object(m.jsx)("input",{type:"text",className:"form-control",value:this.state.name,onChange:this.onNameChange.bind(this)})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email"}),Object(m.jsx)("input",{type:"email",className:"form-control","aria-describedby":"emailHelp",value:this.state.email,onChange:this.onEmailChange.bind(this)})]})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"message",children:"Message"}),Object(m.jsx)("textarea",{className:"form-control",rows:"5",value:this.state.message,onChange:this.onMessageChange.bind(this)})]}),Object(m.jsx)("input",{type:"button",value:"Submit",className:"btn btn-submit",onClick:this.handleSubmit})]})]})),Object(m.jsxs)("div",{className:"home",children:[Object(m.jsx)("header",{className:"banner",children:Object(m.jsx)("h1",{children:"Full Stack Development"})}),Object(m.jsxs)("section",{children:[Object(m.jsxs)("div",{className:"main-content",children:[Object(m.jsx)("div",{className:"column",children:Object(m.jsxs)("div",{className:"dropdown",children:[Object(m.jsx)("a",{onClick:function(e){return t.toggleDropdown(e)},children:Object(m.jsx)("div",{className:"dropdown-button",children:"Live Projects"})}),Object(m.jsxs)("ul",{id:"dropdown-content",className:"dropdown-content visually-hidden hidden",children:[Object(m.jsx)("li",{children:Object(m.jsxs)("div",{onClick:function(){return t.changeContent("php-projects")},className:"dropdown-item",children:[Object(m.jsx)("h3",{children:"PHP/MySQL Apps"}),Object(m.jsx)(p.a,{icon:x.c,className:"icon"})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)("div",{onClick:function(){return t.changeContent("static")},className:"dropdown-item",children:[Object(m.jsx)("h3",{children:"Static Web Pages"}),Object(m.jsx)(p.a,{icon:x.b,className:"icon"})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)("div",{onClick:function(){return t.changeContent("react")},className:"dropdown-item",children:[Object(m.jsx)("h3",{children:"React/API Front-ends"}),Object(m.jsx)(p.a,{icon:x.d,className:"icon"})]})})]})]})}),Object(m.jsx)("div",{className:"column",children:Object(m.jsxs)("div",{className:"dropdown",children:[Object(m.jsx)("a",{onClick:function(e){return t.toggleDropdown(e)},children:Object(m.jsx)("div",{className:"dropdown-button",children:"Github/Other"})}),Object(m.jsxs)("ul",{id:"dropdown-content",className:"dropdown-content visually-hidden hidden",children:[Object(m.jsx)("li",{children:Object(m.jsxs)("div",{onClick:function(){return t.changeContent("education")},className:"dropdown-item",children:[Object(m.jsx)("h3",{children:"Educational Projects"}),Object(m.jsx)(p.a,{icon:u.a,className:"icon"})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)("div",{onClick:function(){return t.changeContent("personal")},className:"dropdown-item",children:[Object(m.jsx)("h3",{children:"Personal Projects"}),Object(m.jsx)(p.a,{icon:x.a,className:"icon"})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)("div",{onClick:function(){return t.changeContent("client")},className:"dropdown-item",children:[Object(m.jsx)("h3",{children:"Client Projects"}),Object(m.jsx)(p.a,{icon:u.b,className:"icon"})]})})]})]})}),Object(m.jsx)("div",{className:"column",children:Object(m.jsxs)("div",{className:"dropdown",children:[Object(m.jsx)("a",{onClick:function(e){return t.toggleDropdown(e)},children:Object(m.jsx)("div",{className:"dropdown-button",children:"About Me"})}),Object(m.jsxs)("ul",{id:"dropdown-content",className:"dropdown-content visually-hidden hidden",children:[Object(m.jsx)("li",{children:Object(m.jsxs)("div",{onClick:function(){return t.changeContent("bio")},className:"dropdown-item",children:[Object(m.jsx)("h3",{children:"My Bio"}),Object(m.jsx)(p.a,{icon:g.c,className:"icon"})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)("div",{onClick:function(){return t.changeContent("resume")},className:"dropdown-item",children:[Object(m.jsx)("h3",{children:"Resume/Abilities"}),Object(m.jsx)(p.a,{icon:g.b,className:"icon"})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)("div",{onClick:function(){return t.changeContent("contact")},className:"dropdown-item",children:[Object(m.jsx)("h3",{children:"Contact"}),Object(m.jsx)(p.a,{icon:g.a,className:"icon"})]})})]})]})})]}),e]}),Object(m.jsx)("footer",{className:"main-footer",children:Object(m.jsx)("div",{children:Object(m.jsx)("h5",{children:"\xa92021 - Josiah Lindner "})})})]})}}]),n}(s.a.Component),S=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).changeContent=function(e){i.setState({page:e})},i.state={page:"home"},i.changeContent=i.changeContent.bind(Object(l.a)(i)),i}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(b,{changeContent:this.changeContent}),Object(m.jsx)(k,{changeContent:this.changeContent,page:this.state.page})]})}}]),n}(i.Component),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),s(e),a(e),c(e)}))};c.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)("div",{className:"root",children:Object(m.jsx)(S,{})})}),document.getElementById("root")),P()}},[[34,1,2]]]);
//# sourceMappingURL=main.d6b2f005.chunk.js.map