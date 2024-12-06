const button = document.querySelector("button");
const button1 = document.querySelector("button");
const Text = document.querySelector("textp");


button.addEventListener("click", updateName);
button1.addEventListener("click", New_komm);


function updateName() {
  const name = prompt("Enter a new name");
  document.getElementById("post").innerHTML = name;
}

function New_komm() {
  Num = Num+1;
  var div = document.createElement("div");
div.className="komm"+Num;
  document.getElementsByClassName("komm1").appendChild(div);
}