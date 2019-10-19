console.log("Dash script loaded");
var x = sessionStorage.getItem("currentUsr");
document.addEventListener("DOMContentLoaded", event => {
  document.getElementById("intro").innerHTML = "Hello " + x;
  var header = document.getElementById("sidenav");
  var btns = header.getElementsByClassName("menu-item");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
  var subject = [
    "subject1",
    "subject2",
    "subject3",
    "subject4",
    "subject5",
    "subject6",
    "subject7",
    "subject8",
    "subject9",
    "subject10",
    "subject11",
    "subject12",
    "subject13",
    "subject14",
    "subject15",
    "subject16",
    "subject17",
    "subject18",
    "subject19",
    "subject20"
  ];
  var desc = [
    "1.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layouta reader will be distracted by the readable content of a page when looking at its layout.",
    "2.It is a long established fact that a reader will be distracted by the readable content of a page when looking at itsthe readable content of a page when looking at its layout layout.",
    "3.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "4.It is a long gear fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "5.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "6.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "7.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "8.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "9.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "10.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "11.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "12.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "13.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "14.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "15.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "16.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "17.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "18.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "19.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "20.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  ];

  // console.log(desc[8][132]);

  // console.log(subject.length);
  for (var j = 0; j < subject.length; j++) {
    var node = document.createElement("div");
    var sub = document.createElement("span");
    var des = document.createElement("span");
    node.className = "inbox";
    sub.className = "item1";
    des.className = "item2";
    sub.innerHTML = subject[j];
    if (desc[j].length > 150) {
      var res = desc[j].substring(0, 147);
      res += "...";
      des.innerHTML = res;
    } else {
      des.innerHTML = desc[j];
    }
    node.appendChild(sub);
    node.appendChild(des);
    document.getElementById("data").appendChild(node);
  }
});

function mail_seacrh() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search-input");
  // console.log(input);
  filter = input.value.toUpperCase();
  table = document.getElementById("data");
  mail = table.getElementsByClassName("inbox");
  // console.log(mail.length);
  // sub = mail[2].getElementsByClassName("item1")[0];
  // console.log(sub.textContent);
  for (i = 0; i < mail.length; i++) {
    sub = mail[i].getElementsByClassName("item1")[0];
    des = mail[i].getElementsByClassName("item2")[0];
    if (sub) {
      txtValue = sub.textContent || sub.innerText;
      // console.log(txtValue);
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        mail[i].style.display = "";
      } else {
        mail[i].style.display = "none";
      }
    }
    if (des) {
      txtValue = des.textContent || des.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        mail[i].style.display = "";
      } else {
        mail[i].style.display = "none";
      }
    }
  }
}
