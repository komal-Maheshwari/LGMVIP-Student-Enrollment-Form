var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];

var n = 1;
var x = 0;

function SubmitStudent() {
  var AddRown = document.getElementById("show");
  var NewRow = AddRown.insertRow(n);

  list1[x] = document.getElementById("name").value;
  list2[x] = document.getElementById("contact").value;
  list3[x] = document.getElementById("email").value;
  list4[x] = document.getElementById("age").value;

  // var ele = document.getElementsByName('gender');
  // for(i = 0; i < ele.length; i++) {
  // 	if(ele[i].type = "radio" )
  // 	list5[x] = ele[i].value;
  // }

  var ele = document.getElementsByName("gender");

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) var gen = ele[i].value;
  }
  list5[x] = gen;

  var checkboxes = document.getElementsByName("skill");

  var result = "";

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      result += checkboxes[i].value + " ";
    }
  }

  list6[x] = result;

  var cel1 = NewRow.insertCell(0);
  var cel2 = NewRow.insertCell(1);
  var cel3 = NewRow.insertCell(2);
  var cel4 = NewRow.insertCell(3);
  var cel5 = NewRow.insertCell(4);
  var cel6 = NewRow.insertCell(5);

  cel1.innerHTML = list1[x];
  cel2.innerHTML = list2[x];
  cel3.innerHTML = list3[x];
  cel4.innerHTML = list4[x];
  cel5.innerHTML = list5[x];
  cel6.innerHTML = list6[x];
  
  n++;
  x++;
}
