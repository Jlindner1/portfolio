(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{21:function(e,t,i){},22:function(e,t,i){},23:function(e,t,i){},30:function(e,t,i){},34:function(e,t,i){"use strict";i.r(t);var n=i(3),s=i.n(n),a=i(16),c=i.n(a),o=(i(21),i(5)),r=i(6),l=i(7),d=i(9),h=i(8),j=(i(22),i(23),i.p+"static/media/me.e1288d5b.jpg"),m=i(2),b=i(4),p=i(0),u=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(o.a)(this,i),(n=t.call(this,e)).state={},n.changeContent=n.props.changeContent,n}return Object(r.a)(i,[{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{className:"sidebar",children:Object(p.jsxs)("section",{className:"sticky",children:[Object(p.jsx)("div",{className:"profile-img",children:Object(p.jsx)("a",{onClick:function(){return e.changeContent("home")},title:"Home",className:"home-link",children:Object(p.jsx)("img",{src:j})})}),Object(p.jsx)("h1",{children:"Hello!"}),Object(p.jsx)("h2",{children:"Josiah Is:"}),Object(p.jsx)("p",{children:"Developing Web Applications From"}),Object(p.jsx)("p",{className:"location-p",children:"Edmonton AB, Canada"}),Object(p.jsxs)("div",{className:"social",children:[Object(p.jsxs)("a",{className:"social-link",href:"https://www.linkedin.com/in/josiah-lindner-28b872b6",target:"_blank",children:[Object(p.jsx)(m.a,{icon:b.d,className:"icon"}),Object(p.jsx)("h4",{children:"linkedin"})]}),Object(p.jsxs)("a",{className:"social-link",href:"https://github.com/Jlindner1",target:"_blank",children:[Object(p.jsx)(m.a,{icon:b.b,className:"icon"}),Object(p.jsx)("h4",{children:"GitHub"})]})]})]})})}}]),i}(s.a.Component),g=(i(30),i(31),i(15)),x=i(11),O=i(14),v=i.n(O),f=i.p+"static/media/storefront.c3c9c3d2.png",N=i.p+"static/media/responsive_page.b5199eff.png",w=i.p+"static/media/construction.1e207470.png",y=i.p+"static/media/pokemon.bcbae9b9.png",k=i.p+"static/media/messagesystem.b47f5e80.JPG";v.a.init("user_hxfO5whlzoN4hbuBtpvvL");var S=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(o.a)(this,i),(n=t.call(this,e)).toggleDropdown=function(e){var t=e.target.parentElement.parentElement.lastChild;t.classList.contains("hidden")?(t.classList.remove("hidden"),t.classList.add("visible"),setTimeout((function(){t.classList.remove("visually-hidden")}),0)):(t.classList.remove("visible"),t.classList.add("visually-hidden"),t.addEventListener("transitionend",(function(e){t.classList.add("hidden")}),{capture:!1,once:!0,passive:!1}))},n.state={dropped:!1,name:"",email:"",message:"",errors:!1,errorMsg:[],success:""},n.page=e.page,n.changeContent=n.props.changeContent,n.handleSubmit=n.handleSubmit.bind(Object(l.a)(n)),n}return Object(r.a)(i,[{key:"removeErrorMsg",value:function(e){setTimeout((function(){e.classList.remove("error-display"),e.classList.add("fade")}),2e3)}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleSubmit",value:function(e){this.setState({errors:!1,errorMsg:[],success:""});var t=[],i=document.getElementById("error-msg"),n=document.getElementById("success-msg");""===this.state.name&&t.push("Please include a name to let me know who sent the email!"),""===this.state.email&&t.push("Please include an email so I can get back to you!"),""===this.state.message&&t.push("Please include a message about why you're contacting me!"),0===t.length?(this.setState({success:"Email Sent!"}),this.sendFeedback("template_3hz2kmk",{message:this.state.message,name:this.state.name,email:this.state.email}),n.classList.remove("fade"),n.classList.add("error-display"),this.removeErrorMsg(n)):(this.setState({errors:!0,errorMsg:t}),i.classList.remove("fade"),i.classList.add("error-display"),this.removeErrorMsg(i),console.log(this.state.errorMsg)),console.log(i.classList)}},{key:"sendFeedback",value:function(e,t){v.a.send("service_276cc9d",e,t).then((function(e){console.log("Email successfully sent!")})).catch((function(e){return console.error("Oh well, you failed. Here some thoughts on the error that occured:",e)}))}},{key:"render",value:function(){var e,t=this,i=this.props.page,n=this.state.errorMsg;return"home"===i?e=Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("h3",{children:"Welcome!"}),Object(p.jsx)("div",{className:"card",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"I'm Josiah, a software developer specializing in web-based apps and projects, in both Front-end and Back-end capacities. Creating new things is my passion, and learning along the way is just part of the fun!"}),Object(p.jsx)("p",{children:"I would love to help you make your ideas and projects a reality! Feel free to look around my site for more info and examples on what I have done/am doing, and if you have any questions or would like to inquire about my services, use the contact form to reach out!"}),Object(p.jsx)("p",{children:"This page is meant to display my current abilities in terms of front-end design, and will evolve as my skills develop further and I increase the breadth of my portfolio. I have designed and implemented this single-page web application from the ground up myself using React.js and my own CSS styling, and I hope this gives you a good sample of my talents, and insight into my skillsets and journey in web development."})]})})]}):"php-projects"===i?e=Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("a",{className:!0,href:"https://cms-messages.herokuapp.com",target:"_blank",children:Object(p.jsx)("h3",{children:"Messenger Appplication"})}),Object(p.jsx)("a",{href:"https://cms-messages.herokuapp.com",target:"_blank",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("div",{className:"img-container",children:Object(p.jsx)("img",{src:k,alt:"Messenger App Thumbnail"})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"An application built with PHP and a codeigniter framework, utilizing IonAuth user management and an interactive database to allow users to sign up/login and send messages to each other. This application is hosted through heroku, and utilizes a cloud hosted MySQL database."}),Object(p.jsx)("p",{children:"This project utilizes simple modified bootstrap styling, and will have nicer styling and more features as I have time to add to them."})]})]})})]}):"static"===i?e=Object(p.jsxs)("div",{className:"content cards",children:[Object(p.jsx)("a",{className:!0,href:"https://jlindner1.github.io/responsive-design/",target:"_blank",children:Object(p.jsx)("h3",{children:"Responsive Static Web Page"})}),Object(p.jsx)("a",{href:"https://jlindner1.github.io/responsive-design/",target:"_blank",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("div",{className:"img-container",children:Object(p.jsx)("img",{src:N,alt:"responsive website image"})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"A sample showing techniques and implementation of responsive web design principles. This page is designed utilizing a mobile-first methodology to ensure that it is convenient and easy to use for a majority of the web-using population who is experienceing the internet through a smartphone, as well as desktop users."}),Object(p.jsx)("p",{children:"For this page, I was given a Photoshop file with the design, and implemented it in HTML and CSS from scratch."})]})]})}),Object(p.jsx)("a",{className:!0,href:"https://jlindner1.github.io/storefront-sample/",target:"_blank",children:Object(p.jsx)("h3",{children:"Storefront Static Web Page"})}),Object(p.jsx)("a",{href:"https://jlindner1.github.io/storefront-sample/",target:"_blank",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("div",{className:"img-container",children:Object(p.jsx)("img",{src:f,alt:"storefront website image"})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"A sample webpage showcasing a possible storefront design utilizing dropdowns, and shop item cards. This is not a responsive page, and showcases utilization of CSS design abilities rather than a funcitonal page."}),Object(p.jsx)("p",{children:"For this page, I was given a Photoshop file with the design, and implmented it in HTML and CSS from scratch."})]})]})})]}):"react"===i?e=Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("a",{className:!0,href:"https://jlindner1.github.io/pokedex/",target:"_blank",children:Object(p.jsx)("h3",{children:"Pok\xe9dex Front-end"})}),Object(p.jsx)("a",{href:"https://jlindner1.github.io/pokedex/",target:"_blank",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("div",{className:"img-container",children:Object(p.jsx)("img",{src:y,alt:"pokemon API page image"})}),Object(p.jsx)("div",{children:Object(p.jsx)("p",{children:"A react application interacting with data from the Pok\xe9API to create a simple Pok\xe9dex. this project started from a demonstration of how to work with the API, but all the internal logic is mine, and the styling is the only leftover from the demo. These stylings will be replaced and additional functionality will be added as I have time to evolve the project."})})]})})]}):"education"===i||"personal"===i?e=Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("a",{className:!0,href:"#",target:"_blank",children:Object(p.jsx)("h3",{children:"Under Construction..."})}),Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("div",{className:"img-container",children:Object(p.jsx)("img",{src:w,alt:"under construction image"})}),Object(p.jsx)("div",{children:Object(p.jsx)("p",{children:"This page is still being worked on, come back soon!"})})]})]}):"client"===i?e=Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("h3",{children:"The Sacred Cow Company"}),Object(p.jsxs)("div",{className:"card card-col",children:[Object(p.jsx)("div",{className:"img-container",children:Object(p.jsx)("img",{className:"scc",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAACSCAYAAAB2W/XBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADKGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NURDRDA4Q0EyN0YxMUU5QkQxMzk5NTY0MzIyQkQyNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0NURDRDA4REEyN0YxMUU5QkQxMzk5NTY0MzIyQkQyNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVFRjMxRDdGQTI3RTExRTlCRDEzOTk1NjQzMjJCRDI3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVFRjMxRDgwQTI3RTExRTlCRDEzOTk1NjQzMjJCRDI3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rf9DdgAAACF0RVh0Q3JlYXRpb24gVGltZQAyMDIxOjA1OjI0IDE5OjU2OjQ2vmnkbAAAFixJREFUeF7tnQl4VEW2x0/d7iwkgbCEsMYR2XcIiwiiiAuQhICMgCCIBETBp8/Rb9wCL5MHQWbUNzPPjZdJAiqIgIovBGRREcFhILLJIlsAw74EQval+9acc7sS00m60500Sd379e/7oKvqdjqd+7916tR2Crx48eLFixcvXrx48eKl4WHi1TDMitvUnKvWSQqHqNDmgQN9/UytTAqD3LySC9dvFexUgK1oZ9qzMT4+XhU/YhgMI+acuNQ7LFbTGy2bNZo1ZnhH8+A+baGRn1lctZGTVwzphy/BN7vOHr2WlfdccsLY78UlQ6B7Mae9vDnQz98S18jP9GLkiM4+D91zJ5jNirhaPRaLCmnbT8GmHRnLiqD4pY/iH80Wl3SNrsWMid34CICaPLh32/aPR/aA4CA/ccU1Ll7Ng49TD13PyMyalrRw7GZRrFt0KebEuDW+ja2Bb7Vs2uiFJ8b2gt5dWoor7sM5hy0/noHU708m5mSzl1a8MypfXNIduhNTaxstyufD+rcfREL6+ZrElbpx+Xo+fLTu4LlTZ29NSloc8S9RrCt0JebMBWl3B/qaU6dF9w69Gx0cT6OqHL7ekcE3bs9YYrkQEpeYOLBUXPLiSWbFbpi84H+3F12+noeW8faSeekWX7R05y8xr6/vJX69F8/AWUxs2n+/lfIvXlhUKm737afUYuVfbj1mefq/vl4QF7fNvo8jKVKbWbqJ5y35a8N7thk/+7G+4OvjmfbRHU6fz4aV648cPX3x5vjli8aeFMVe3CVm/saYzzYeFXWl4ShAi/Dq299dmRe3LUh8NSlx3rtuYHzMbObvH+kqcg0HjSQN6dcutMhSOFQUSYm0YpKJ9fM1Dzab5PiKQQG+1Ci1F1kpqVObOXHiGlPjLkEPAuORjMPdWPQ7dFia4qda0W/JxXwupnM58At4/TTQP1DOmHwsBxPjozO1D3HAjLh1TRsx/5vvvPIgBDTyEaUNR+q2k5D67cnHkxMiV4sip9CAv2qxhDMG/fEm9+WcdcP71BbvQUvGmOZQcQ4qYzwLr2Xi+47iPdrNzabNyfGjT2kf4ia1EnNG3DZ/pTTvWYUpf8RPqFWHD/+Q6/j/fgZsH6bTGbfsTH5z3BVxGR77w+pGwYFBBSKrCdok0BdahQRCaPNA6BjWFLrd1cJWY+oINotw8tebmrOTdbMQbuYWQWGRBdCjBauVgz+a2cvX8iA7v2BoysLoXeLHynkqdlOYmVvCOWP9MdsfRcNXFma7Wgs4HESbmXQrLy/5879OLhSlNeK2mLMWbHgYVFiKP3mXKPIYWINPoLg78HUnN8EPzAKb8SnuJC5XAa9Bj44hEHF/R+h6Z3NR6h479p6D1O9Ows2cIlHiGCs33cHNllIfKxuocj4YiwbglxiAN7GV7R2eRXvgFR4XpqQvdWXKzmUxbSY1YCHewNdFUT2Afw7eLZFxSvTIzhD9QGeRqxn65JQvD8KuAxdESc3gj1y5XcI5Ay3HjxbOJ3+8eKzTL+uSdyGE/Lh+hSRcE5JYj20amUpX2bQjwy0hiYYQksD7PszM2D4azhRF1VKjmNoMhU3IqaJISqimbfkR/SsXyM0v0RwaPYH3P1RRYYszQZ2KSTWyiSXwI9mFLOPQiWtQWGwROcf8c/95dG50uGqEsSZMhdTZcRur7SI5FbNJl8AEtC2Pi6z0WKwqHDudJXKOOXIKHWmdQjVUtaofiKwdTsVUFPYFepYNNw2k9Uuxz+oGR10QKuOc622rhBRyBgkibYdTMf+xMCId26K5Ilu/cL4Uv/QaTLk1un745DWRqp6s7EIoLnHr+ajIr+K1oShkHKKWLYzaLfJ21OgALUuISsYbW29eLLrh5/G/MQysf2GcvyiKXebazQLIxk6/Iy5fzxOpWsDBB79bnM3dqmc4ZANXI5ISIr8TJVWoUUwiOSFqCZrbV0T2NkHjMPzDYrPSE3/fJpWZ/o4NhL+46BYZmY4X2126VoclPgzacsaLOVMexpt7UZTefjgctDJ1cE1LQ10Sk0hZFPUWPo6P4g2/JIo8B4fdoPIh+DvmrYyPyKFVdwzYWHHVbWhYzhFXsuq6Xgv72kUle0qsxX0w84mt7DbBoQSf8ISAHHa3K3OpLotJpCyK/KrYpHTDOvSeJxwj/IwM7CDMSE6IuCd58dg9ohgrgPqGSNaKjEzHDs51NMN1AR+yYObvM+OTJROykhdFPqkyPgSLv7Fd9RSalVoNZlPPlITI+e++G1EsLjjF5RGWytAqOavF9Cr+4mnU/xHFrnIYv+w7YabAFfHxD9h1DOe+ltasxMxuiGytoBV77y8YJXL2xP5tuwdqJ+xDIQeItMZTb6SGK8z0DN7QSXhXm4pityCrxzhbgSIm1mbmpNZiloGiBlisLBor+Wj8OvcCZx0Yq1zj6UFjp7C92cJU/nHFWlgZbSCfwxaRrTVvvjQCWjYLEDkb5LbMjd+k9UfrCuOWu5ISxp0R2XJoxKyJpdFQDspDmB2Iv7Unvrtt5XuCN6SUpgU5Y8cA1F1MhW3Ji6PS6ZPFW9ymzmJW5vnnN/rlN1FbM1UJZkpprtnsn+9zw3rLVVMRMz/tKTRly0S21sybEg7hPVqLnI0bt4rglbcdOoNugYbw/pSEqB9E1ik00X61OL9xgZ8pmFmY1ddiykn888O3xGWP4XEx68rM2LRZCmNJIltrxgzvCJWXnNDo0NvLqu2iuQ1XeVTK4qgNIisFbjlA9QG2GR7ZxHPwePk8dznHztQ81OcyCmv45Q+VkFFMj0xn0KYgmngug7ortKfEyEhnZql9OWfJv8kYq/OyRvwM6NU5BEwmBQ6fuOYRx6cMztmolISIOjtqnkS6mmnrqjCP3CTqrdG02IFfrnhUSAL7l54fPKkj0ompofD3REpK8BlRLYVm12bC6xEpxUxZGLUNb9lKkZWR/TLu45SzZiKcQbJIysiX4lUqpBWTqeDenvZ6xGouqXamv6GRuGbWbvqrPpA1oIW0YsoKjamKpHR4xXSfus2h3UbkFZOzQJGSCsZB2tVg8orJVOnGPgkO4N4y+HrEa2bdhAHbKZLS4RXTXRh3OLHe0EjcZkJjkZIKrjKnm4QbEmnF5JzXf2gRF1CA17yZpYGQVkyFKXXfEn0b4IrnNxl7CpnbTPvVWPIwWrxKh7xmlkk6Nsu9gwZuwzhvJJJeXERKMWfGpj2Eco4QWalAi9F6ZlyalO2mdGuAYmI3vIQvb1VdSC0XnMMKs9n6TGJ8tDRmV6obFjN/w1IU8R3ZhSTwO06zWE11Xt/rSaS6adhOzhBJXYBmbcqs1zfSbjApkEZMCk9W2/2YDYrCJ4hUgyONmKaSklCRrBY0a1KCDlE/kWxwpBGTm81Ox2JpB5ek1P7oBg8jjZiqapVyMrpmuDT3UJ4vophcXoca0iwA2oYGadsPPElwYz8Ia90ETCbXP5cBq0PEC88iTUuEDlAnsFqdbhqiY6FiJvSBwb1tUVEpskjKFz/DyV/rtNEaGvmbYfrYXkDnhxEU4fK9lXvh14s1b6Gk/mZKQuR0kW1Q5HGAikzOA/ggY0d0KheSoJ3RL88cDN06tBAl7uODD8gfZgwuF5Jo1sQfnps6wKUA/1gbpFlGIo2YtJMYfRyHi6Xoxo4ccqfI/QaF/Z4zqV+to0VPHN0d7mpfNQRB82B/GNS7jcg5hilcmj0n0ohJMA7HRLIKHfCGVz5CsYwmQX4Qdb/DGMMOadMyCEYMukPkqtKzU4hIOcGq/CxSDY5UYqKah0WqCq1aOJ/evG9gmEOxHUHHMyqKY7eBwoc7h3Nfn0YOv3N9I5eYnP8oUlXw83UuFMVR793F6biDHSTioF7Ozah/DYfGcc72fRD/gDTerFximn0cilnkQhzZHq6YRcGdbYNrbGeLS2sImMj4tyIlBVKJSYGMOOfVBjO6eqPmmaaw1q4v6AtrU3McqqtZNfxODt5oI85gjKWJpB3nLuVoRyI6o3mw64sTqPtRE2cuON3sdSHMnC7VgmjpxFQZ/0wk7SgoKoUTNQwOuHM6kSt9yIPHropUVTjwlbKdKC+dmBQYF2/UCZG1Y/se5+uPC4td322XX1giUtVDAaCcxNizoprSbbiVTkwbrNobtffoZc3cOiLTybXK1PTedd9U+zxpoLFfk5IQ1dBRoasgp5jFpSn4f5VwWtRmLv/qkHY0f3X8dNj1aC7Hz9yAvILqa+e3u846jOOODppFscCfRFYqpBQz5a3xuXjTloisHTT4vXT1/iqCHj+TBXsOuS5mCXY7Vm04KnK/sefQRViz+ReRqwoDeD9pSaTjatuASLmfgxjU/aV0HpD/EN69Kgek0cntPx25BD7oxBSVWGHX/vOwYv0RtwM3XbiSq3msAf4+Wvu4/vtT2uE1qoOP4Rwyi83KpEPbV7oUobO+kWYKrDroMBZu4en4Le1jjTYIaCsYPGiLUSQnkjpANpLiI85bGTyCN7LG6bHbDSo5X2YhCanFJJYvijyE5m0Q3s3toqgh+CQlIeJNkZYWqc2sPZzNXpD2CFcZxUDvgwLTCbqBWNyqroumyUPFz9I6lYxTWG2ejalLNIuDfd60lEVR6+mK9maJ0ZGY1RMzf8N4/CPWiWw5KHaC1VzytshCkxt+hZVDi8fMT3uPAXsOTeg0rHkyx+pzCd2LScTEpr3NGHtZZDVQTJUpMDp5YeRWUWTH07FpQ1UGO7G6Uc2LFsW6Rvo20xXCzIGvoam0mz7TTC+HVXQetCgqhw4FsAJLQiFzLCpvmLPObgOGEJMCDtMxvlgfK3u9LRRm/ZyOpxB5jfxg/gaK3R2TL9Z09K+eMISYhCYKY0+QeRVFGtiODG5sDfibyMLs+V/3RFeGavJGNK/LRbEhMESbWZFZsRv+hH9VnMhWgE9vb0r/9Jx1EJnj7mheexqpVhLSDufVluiRnX+4pbYdig5RR1GkgR7r6Bzetg16rxOw+zFv+WLXDpjRE4armcSzcZtDS62WfZhsZyv5DTSvW1MSIkfhny59v9FdDNNmVmRp/KirKmePa4MB9uSazepsIwpJGFJMYllCBK3PsTuRF8WNTYyPljZcWl0xrJhEmDn9f1DA8oVD2KY0E0lDYmgxz6l3P4COUPMWTW2r9jhjT9H/WsaAGFpMxvkz9Prs5P7aajxUscOs2LT7tYsGxLBikkfLgY+nHV606WhAT9v8NmcK1k5jYlgxSyylT2Kf0mdo//Za/r6Btt1eDPhjMX/8SspYtnXFoGJiu8jgadppPVjssez8u2bQOoR2dbFA8POdqBUaDEOKSe0iqtmlb9dQu81BZbUT+yiGNLWGFBPbxTn0OrSfzcSWcU+/dtoWBsZg+NOxG+2G+4yA4cScE5cawjj8ntJBgfZb9hoH+kK/7q20tBX4TC1hIAwnptVqmoHtpTZ/mbjmQJVV67TDmmCMPxkXF2eov99gYtJqLK6ZWCIru1ATlPPfhmK73xUCIdogAgvLtAwaaSs1BoYSs8zxadeqMbaXtgmToxnX7TYBURyoeweI2glgKFNrKDHLHB9ydKZF94L2KCrx9Y4M7dzpMu4d0F6LaYBiTpjz6tZgUax7DCNmmeNDIt3Tt502fDd3SrgWuIKsbPIXB8v3WzZt7A+9u7Skauqv+hZP1goNgGHELC1l08jxoTaRYuARrVoEwsxH+2imtbDYAu9/uheKS2xBJ4YLU6ty45haw4jJhIkd1t9+cQGNyT50TwctffFqHixfZ4vB1KdLqFZD0dgOmfN6ajetUOcYQszZC9YPp6WTFNSpf4+qG8YmjuoGne6wTWWmH74EW/95Rmszh4XbBhWsiskQI0KGEFNVbbVyYK82WmDDypBwcx8P18KyEWs3H4PjZ2+gqW2PNRptMMD0iRPX6H5xm+7FtMV259rA+Y1bRXZ9yopQO0oBE0lY2k6fuHq/FvK0W4fm1Edp26Rr0CjxVt2iezHVUm2qS6tyR05dgy+3Ot6hTqFMxz/YRUvfyiuGD1ftR1NbtntB/4PvuhezzPEpY9PODK1ddETEfR2hT1dbjD0KQnHibBYEBfiiljBu7mtpul4jpGsxyxwfavZsTR9qglaWPNbzV3JtBdUw+7G+Wmhw4oefzmmml7o1JT7sCa1Qp+hazDLHp2NYMxg30mY+CepLvr9yLxQUVh/kiQJSzJsSXu4s5aDJJbgKuja1uhVzRty6pmWODy0NiaKQ3xVCc1P8dgox48ghuqNNE5ga1VPkbGDtHhDz+vpeIqs7dCumyeIznRwfql1l4bdptKdiiG4aZKduiCNoFGiYWCNUBjMx3Y4I6VZM7B9qJpYmm8siQJOw//HEALvollt+PAN7fr4oclXRBuQrhDbFijxtzpyfahfwvYHRpZi0hR1fNHNYeWkIDQw8j4L6VYjiTCHazl2uPlYePQDzpgzQjsMg8CEJtYReGqNldIYuxbSKWhmMwvXqXDX6MwUGfvqxfiSMlqfQanROiaNYeaHNA8oH5AkG+lxbq7shLHJ8TNxEgRJ9+ndvXb64uTKtWwZpte6XDFs8xcIiC5y9cAuG9G1XLnJF6CSFEvSCT2XeJKepc797py09sHOltOdLV4fuaqap1GcYvmiNYvrhi9oYqyPGDO+oTVSXcexMllOHKARraBkmplbZ2yk7uquZ+3d8erL/fU90xbrVm3odh05c1U5BoL5jdfTt2kqLeEnjtsTpc9kQ2iIAnR77GO3Upi79bJ82bqsAeyFpMQVy0he6bDNz8vNm4QvtjIbc/BJ479O9WrtYHXRIGzk4tkVcNj5Ch4hMbhk0cf3Bqn1QSmFPOU9JSoh8X1zSFboU8/O/Ti60ctN4bNu0IOoUHXrZl44P/qH1si9MH1TehSHRPli1V3sQCBr+u0anM3DYHZCjzNMKdYhu5/AO7FiRM2DElN1oaacx7OrTKgKTSYEudzYX77CHBKXjFGkQnswz1caz57MhFz1civyMQl5WuDLyw3cinB6ZIDO6npDd98OqzPDhU6+iexpFeQrVTYfPtNI2CFWF1gTRyUVHTl3X8rSulkaJOPBSUNQxyQlRjkNA6wBdi0mgQ7QXBW2Ngg6k/M/Hr0J491YQhDWxOjre0Qyyc4vtzsbEmvrMskVjU0VWt+iyzaxMjrngP/FFi+tD5vNddIjoHBRHTI3qoZldAmvlh8sSopK1jM4xhJhr4yeVgNUyCWuYFknkyvX8KtsSKrJ55xnN+cHLO3JNBS+KYt1jCDGJ5DfHXVG59VFMFlL+8Mlr8MWW45S048TZG/D/350goc8z1TJRexAMgmHEJJYvjt7HOKc+qMamnadhd4UZE5qE/r/V+0G1qkUmRZlAD4C4ZAgMJSaRlBC1ChvCP4usNkBAzg6Z3MS1B7SFXGh85/xjYUS6eIth0L03Wx2dWo/f5hfiMwiAdbaqXDO5dGTjT4cvk+v695SEqL+ItxoKw9VMYu3aSVaLqXQqeqrauksal/1+TyZ5rt/lnCiwC/9tJAwpJvFR/KPZZqs6Dmti2az0r6WWkkkktMgbDsOKSSS+GX2MMW35ZK4K6rhPlkyoclicF50xJy7V8fn9Xrx48eLFiysA/BuQiEOhBcr+VgAAAABJRU5ErkJggg==",alt:"Sacred Cow Company logo"})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"I worked with a team of my fellow students to develop a Minimum Viable Product for The Sacred Cow Company, a business focusing on coaching and developing leadership skills and prepping people for management or leadership positions. The web app is used to keep track of clients, coaches and their appointments and progress in the curriculum. This applicaiton was developed with SCRUM methodology, completing tasks and demonstrating progress to the client in two week sprints."}),Object(p.jsx)("p",{children:"As far as the technological architecture of the application, it utilizes docker containerization to have seperate PostgreSQL Database layer, DOT NET Core REST API back-end and a React.js front-end. I worked primarliy on the back-end and database components of the project, implmenting a robust SQL database structure and Controller/Service/Repository back-end utilizing microservices for the core funcitonality of the project as well as creating the controller API routes for the front end to interact with to get the data being handled. This included retrieving and manipulating Database data, creating validation/handling classes, processing the incoming/outgoing data through a service layer and routing it to its necessary destinations. In adition to this though, I also worked a significant amount on the React.js front-end making UX and data handling changes to ensure things were presented well and the information from the back-end/DB was handled properly and efficiently and provided an excellent user experience."}),Object(p.jsx)("p",{children:"Although I would love to have a interactive example of how the application functions, the privacy of the Client and their users do not allow me to have current access to the software now that it has been handed off to them for use."})]})]})]}):"bio"===i?e=Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("h3",{children:"About Me"}),Object(p.jsxs)("div",{className:"card card-col",children:[Object(p.jsx)("div",{className:"img-container",children:Object(p.jsx)("img",{src:j,alt:"image of author"})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"From Edmonton Alberta, Canada - I am a Graduate from NAIT's DMIT Computer Software Development program, and a passionate developer always looking for the next oppurtunity to further develop my skills and knowledge."}),Object(p.jsx)("p",{children:"If I'm not working on my next project, I can often be found drawing, painting, learning a new piano piece or trying my hand at developing little videogames."}),Object(p.jsx)("p",{children:"I have a great enthusiasm for looking deeper and finding out how and why things work - which is part of the reason I fell into programming, as there is always a new level to which you can increase your understanding as to how much of our modern world functions - and in turn how we as people interact with the world around us."})]})]})]}):"resume"===i?e=Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("h3",{children:"Resume/Skills"}),Object(p.jsx)("div",{className:"card",children:Object(p.jsxs)("div",{class:"resume",children:[Object(p.jsx)("p",{children:"I have experience in an array[] of languages and frameworks, and I am always looking to expand my knowledge and abilities. I will also keep this updated as my journey as a developer continues"}),Object(p.jsx)("p",{children:"My current skillsets are as follows:"}),Object(p.jsxs)("div",{className:"skill-card",children:[Object(p.jsx)("h4",{children:"C#/Frameworks"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"Proficient in C# fundamentals and best practices"}),Object(p.jsx)("li",{children:"ASP.NET Framework - Designing and developing MVC web applications inlcuding reading/writing to various Database configurations"}),Object(p.jsx)("li",{children:"ASP.NET CORE - Creating sturdy REST APIs utilizing Controller/Service/Repository design methodology"})]})]}),Object(p.jsxs)("div",{className:"skill-card",children:[Object(p.jsx)("h4",{children:"JavaScript"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"Proficient in JavaScript fundamentals and best practices"}),Object(p.jsx)("li",{children:"Vanilla JS - Can utilize vanilla JS to add additional functionality and interactibility to static web pages"}),Object(p.jsx)("li",{children:"jQuery/jQuery Mobile - Famliar with the jQuery library for handling additional features, integrations, and data handling"}),Object(p.jsx)("li",{children:"React - Experienced in the React framework/library for creating robust web applications with component and state management"}),Object(p.jsx)("li",{children:"Vue.js - Some experience with the Vue.js library"})]})]}),Object(p.jsxs)("div",{className:"skill-card",children:[Object(p.jsx)("h4",{children:"php"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"Proficient in fundamentals and best practices of php 7 and higher"}),Object(p.jsx)("li",{children:"php enabled web-pages - Skilled in handling user interactibility, database queries, and authentication"}),Object(p.jsx)("li",{children:"CodeIgniter - experience in ustilizing the CodeIgniter framework for developing robust MVC php projects"}),Object(p.jsx)("li",{children:"Wordpress/Joomla/Other CMS' - Some experience in utilizing/cutomizing CMS' templates and functionality"})]})]}),Object(p.jsxs)("div",{className:"skill-card",children:[Object(p.jsx)("h4",{children:"Database"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"SQL - Proficient in fundamentals for SQL Database data-normalization, creation, and management"}),Object(p.jsx)("li",{children:"Microsoft Sequel Server - Experienced in DB management/utilization with this software"}),Object(p.jsx)("li",{children:"PostgreSQL - Experienced in DB management/utilization"}),Object(p.jsx)("li",{children:"MySQL/php MyAdmin - Experienced in DB management/utilization"}),Object(p.jsx)("li",{children:"NoSQL - Some experience in Firebase and MongoDB no sql databases"})]})]}),Object(p.jsxs)("div",{className:"skill-card",children:[Object(p.jsx)("h4",{children:"Other"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"CSS/SASS - Proficient in utilizing CSS/SASS to add beautiful, effective, and efficient styling to web projects"}),Object(p.jsx)("li",{children:"HTML - Proficient in creating markdowns and utilizing SEO best practices for web projects"}),Object(p.jsx)("li",{children:"Futter/Dart - Some experience in developing mobile applications with the Flutter framework"}),Object(p.jsx)("li",{children:"Java - Some experience in creating/managing Java projects"})]})]})]})})]}):"contact"===i&&(e=Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("h3",{children:"I'd love to hear from you!"}),Object(p.jsx)("p",{children:"Send me an email with the form below if you have any questions or would like to inquire about my services"}),Object(p.jsx)("div",{id:"error-msg",className:"error-msg fade",children:n.length>0?n.map((function(e){return Object(p.jsx)("h4",{children:e})})):"didnt work"}),Object(p.jsx)("div",{id:"success-msg",className:"success-msg hidden fade ",children:this.state.success}),Object(p.jsxs)("form",{id:"contact-form",onSubmit:this.handleSubmit.bind(this),method:"POST",children:[Object(p.jsxs)("div",{className:"contact-info",children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"name",children:"Name"}),Object(p.jsx)("input",{type:"text",className:"form-control",value:this.state.name,onChange:this.onNameChange.bind(this)})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email"}),Object(p.jsx)("input",{type:"email",className:"form-control","aria-describedby":"emailHelp",value:this.state.email,onChange:this.onEmailChange.bind(this)})]})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"message",children:"Message"}),Object(p.jsx)("textarea",{className:"form-control",rows:"5",value:this.state.message,onChange:this.onMessageChange.bind(this)})]}),Object(p.jsx)("input",{type:"button",value:"Submit",className:"btn btn-submit",onClick:this.handleSubmit})]})]})),Object(p.jsxs)("div",{className:"home",children:[Object(p.jsx)("header",{className:"banner",children:Object(p.jsx)("h1",{children:"Josiah Lindner: Full Stack Developer"})}),Object(p.jsxs)("section",{children:[Object(p.jsxs)("div",{className:"main-content",children:[Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"dropdown",children:[Object(p.jsx)("a",{onClick:function(e){return t.toggleDropdown(e)},children:Object(p.jsx)("div",{className:"dropdown-button",children:"Live Projects"})}),Object(p.jsxs)("ul",{id:"dropdown-content",className:"dropdown-content visually-hidden hidden",children:[Object(p.jsx)("li",{children:Object(p.jsxs)("div",{onClick:function(){return t.changeContent("php-projects")},className:"dropdown-item",children:[Object(p.jsx)("h3",{children:"PHP/MySQL Apps"}),Object(p.jsx)(m.a,{icon:b.e,className:"icon"})]})}),Object(p.jsx)("li",{children:Object(p.jsxs)("div",{onClick:function(){return t.changeContent("static")},className:"dropdown-item",children:[Object(p.jsx)("h3",{children:"Static Web Pages"}),Object(p.jsx)(m.a,{icon:b.c,className:"icon"})]})}),Object(p.jsx)("li",{children:Object(p.jsxs)("div",{onClick:function(){return t.changeContent("react")},className:"dropdown-item",children:[Object(p.jsx)("h3",{children:"React/API Front-ends"}),Object(p.jsx)(m.a,{icon:b.f,className:"icon"})]})})]})]})}),Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"dropdown",children:[Object(p.jsx)("a",{onClick:function(e){return t.toggleDropdown(e)},children:Object(p.jsx)("div",{className:"dropdown-button",children:"Github/Other"})}),Object(p.jsxs)("ul",{id:"dropdown-content",className:"dropdown-content visually-hidden hidden",children:[Object(p.jsx)("li",{children:Object(p.jsxs)("div",{onClick:function(){return t.changeContent("education")},className:"dropdown-item",children:[Object(p.jsx)("h3",{children:"Educational Projects"}),Object(p.jsx)(m.a,{icon:g.a,className:"icon"})]})}),Object(p.jsx)("li",{children:Object(p.jsxs)("div",{onClick:function(){return t.changeContent("personal")},className:"dropdown-item",children:[Object(p.jsx)("h3",{children:"Personal Projects"}),Object(p.jsx)(m.a,{icon:b.a,className:"icon"})]})}),Object(p.jsx)("li",{children:Object(p.jsxs)("div",{onClick:function(){return t.changeContent("client")},className:"dropdown-item",children:[Object(p.jsx)("h3",{children:"Client Projects"}),Object(p.jsx)(m.a,{icon:g.b,className:"icon"})]})})]})]})}),Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"dropdown",children:[Object(p.jsx)("a",{onClick:function(e){return t.toggleDropdown(e)},children:Object(p.jsx)("div",{className:"dropdown-button",children:"About Me"})}),Object(p.jsxs)("ul",{id:"dropdown-content",className:"dropdown-content visually-hidden hidden",children:[Object(p.jsx)("li",{children:Object(p.jsxs)("div",{onClick:function(){return t.changeContent("bio")},className:"dropdown-item",children:[Object(p.jsx)("h3",{children:"My Bio"}),Object(p.jsx)(m.a,{icon:x.c,className:"icon"})]})}),Object(p.jsx)("li",{children:Object(p.jsxs)("div",{onClick:function(){return t.changeContent("resume")},className:"dropdown-item",children:[Object(p.jsx)("h3",{children:"Resume/Abilities"}),Object(p.jsx)(m.a,{icon:x.b,className:"icon"})]})}),Object(p.jsx)("li",{children:Object(p.jsxs)("div",{onClick:function(){return t.changeContent("contact")},className:"dropdown-item",children:[Object(p.jsx)("h3",{children:"Contact"}),Object(p.jsx)(m.a,{icon:x.a,className:"icon"})]})})]})]})})]}),e]}),Object(p.jsx)("footer",{className:"main-footer",children:Object(p.jsx)("div",{children:Object(p.jsx)("h5",{children:"Josiah Lindner, 2021, All Rights Reserved"})})})]})}}]),i}(s.a.Component),C=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(o.a)(this,i),(n=t.call(this,e)).changeContent=function(e){n.setState({page:e})},n.state={page:"home"},n.changeContent=n.changeContent.bind(Object(l.a)(n)),n}return Object(r.a)(i,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(u,{changeContent:this.changeContent}),Object(p.jsx)(S,{changeContent:this.changeContent,page:this.state.page})]})}}]),i}(n.Component),R=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,35)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;i(e),n(e),s(e),a(e),c(e)}))};c.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)("div",{className:"root",children:Object(p.jsx)(C,{})})}),document.getElementById("root")),R()}},[[34,1,2]]]);
//# sourceMappingURL=main.7b24af76.chunk.js.map