console.log("HEy");
console.log(document.body);

let header = document.getElementById("heading");
console.log(header);
console.dir(header);

let header2 = document.getElementsByClassName("heading2");
console.log(header2);

let para = document.getElementsByTagName("p");
console.log(para);

let firstelements = document.querySelector("p");
console.dir(firstelements);

let allelements = document.querySelectorAll("p");
console.dir(allelements);
