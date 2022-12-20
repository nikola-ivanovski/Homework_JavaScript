let title = document.getElementById("myTitle");
title.innerText = "My Title - first header";

let firstParagraph = document.getElementsByClassName("paragraph")[0];
firstParagraph.innerText = "Some cool text for this first paragraph";

let secondParagraph = document.getElementsByClassName("paragraph")[1];
secondParagraph.innerText = "Hello from second paragraph";

let textTag = document.getElementsByTagName("text")[0];
textTag.textContent = "Hello from <text> tag";

let secondHeader = document.getElementsByTagName("h1")[1];
secondHeader.innerHTML = "Hello from second header text";

let thirdHeader = document.getElementsByTagName("h3")[0];
thirdHeader.innerHTML = "Hello from third header text";
