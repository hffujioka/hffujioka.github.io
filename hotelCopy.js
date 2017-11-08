//This is my JS file//
var guestsNumberOne = 0;
var guestsNumberTwo = 0;
var guestsNumberThree = 0;
var guestsNumberFour = 0;


//JS for Room One//
function addGuestOne() {
  if ((guestsNumberOne < 3) && (window.event.keyCode == 13)) {
    guestsNumberOne++;
    var guestName = document.getElementById('addOne').value;
    var newListItem = document.createElement('li');
    var newGuest = document.createTextNode(guestName);
    newListItem.appendChild(newGuest);
    var linebreak = document.createElement('br');
    newListItem.appendChild(linebreak);
    var date = new Date();
    var timestamp = document.createTextNode(date);
    newListItem.appendChild(timestamp);
    newListItem.setAttribute("class", "entry");
    var element = document.getElementById('listOne');
    element.appendChild(newListItem);
    var linebreak2 = document.createElement('br');
    element.appendChild(linebreak2);
    var input= document.getElementById('addOne').value = "";
    newListItem.onclick = function() {
      this.parentNode.removeChild(this);
      element.removeChild(linebreak2);
      guestsNumberOne--;
      document.getElementById('roomOne').style.backgroundColor = "rgba(255,255,255,0.8)";
      document.getElementById('addOne').style.visibility = "visible";
      document.getElementById('nameOne').innerHTML = "Guest Name";
      document.getElementById('nameOne').style.fontSize = "18px";
      document.getElementById('nameOne').style.fontWeight = "normal";
      }
    }
  else if ((guestsNumberOne == 3) && (window.event.keyCode == 13)){
    document.getElementById('roomOne').style.backgroundColor = "rgba(255,0,0,0.8)";
    document.getElementById('addOne').style.visibility = "hidden";
    document.getElementById('nameOne').innerHTML = "Room is full";
    document.getElementById('nameOne').style.fontSize = "22px";
    document.getElementById('nameOne').style.fontWeight = "bold";
    }
  }
function removeAllOne() {
  guestsNumberOne = 0;
  var div = document.getElementById('roomOne');
  var all = document.getElementById('listOne');
  var button = document.getElementById('removeOne');
  div.removeChild(all);
  var list = document.createElement('ol');
  div.insertBefore(list,button);
  list.setAttribute("id", "listOne");
  list.setAttribute("class", "list");
  document.getElementById('roomOne').style.backgroundColor = "rgba(255,255,255,0.8)";
  document.getElementById('addOne').style.visibility = "visible";
  document.getElementById('nameOne').innerHTML = "Guest Name";
  document.getElementById('nameOne').style.fontSize = "18px";
  document.getElementById('nameOne').style.fontWeight = "normal";
}

//JS for Room Two//
function addGuestTwo() {
  if ((guestsNumberTwo < 3) && (window.event.keyCode == 13)) {
    guestsNumberTwo++;
    var guestName = document.getElementById('addTwo').value;
    var newListItem = document.createElement('li');
    var newGuest = document.createTextNode(guestName);
    newListItem.appendChild(newGuest);
    var linebreak = document.createElement('br');
    newListItem.appendChild(linebreak);
    var date = new Date();
    var timestamp = document.createTextNode(date);
    newListItem.appendChild(timestamp);
    newListItem.setAttribute("class", "entry");
    var element = document.getElementById('listTwo');
    element.appendChild(newListItem);
    var linebreak2 = document.createElement('br');
    element.appendChild(linebreak2);
    var input= document.getElementById('addTwo').value = "";
    newListItem.onclick = function() {
      this.parentNode.removeChild(this);
      element.removeChild(linebreak2);
      guestsNumberTwo--;
      document.getElementById('roomTwo').style.backgroundColor = "rgba(255,255,255,0.8)";
      document.getElementById('addTwo').style.visibility = "visible";
      document.getElementById('nameTwo').innerHTML = "Guest Name";
      document.getElementById('nameTwo').style.fontSize = "18px";
      document.getElementById('nameTwo').style.fontWeight = "normal";
    }
  }
  else if ((guestsNumberTwo == 3) && (window.event.keyCode == 13)){
    document.getElementById('roomTwo').style.backgroundColor = "rgba(255,0,0,0.8)";
    document.getElementById('addTwo').style.visibility = "hidden";
    document.getElementById('nameTwo').innerHTML = "Room is full";
    document.getElementById('nameTwo').style.fontSize = "22px";
    document.getElementById('nameTwo').style.fontWeight = "bold";
    }
}
function removeAllTwo() {
  guestsNumberTwo = 0;
  var div = document.getElementById('roomTwo');
  var all = document.getElementById('listTwo');
  var button = document.getElementById('removeTwo');
  div.removeChild(all);
  var list = document.createElement('ol');
  div.insertBefore(list,button);
  list.setAttribute("id", "listTwo");
  list.setAttribute("class", "list");
  document.getElementById('roomTwo').style.backgroundColor = "rgba(255,255,255,0.8)";
  document.getElementById('addTwo').style.visibility = "visible";
  document.getElementById('nameTwo').innerHTML = "Guest Name";
  document.getElementById('nameTwo').style.fontSize = "18px";
  document.getElementById('nameTwo').style.fontWeight = "normal";
}

//JS for Room Three//
function addGuestThree() {
  if ((guestsNumberThree < 3) && (window.event.keyCode == 13)) {
    guestsNumberThree++;
    var date = new Date();
    var guestName = document.getElementById('addThree').value;
    var newListItem = document.createElement('li');
    var newGuest = document.createTextNode(guestName);
    newListItem.appendChild(newGuest);
    var linebreak = document.createElement('br');
    newListItem.appendChild(linebreak);
    var timestamp = document.createTextNode(date);
    newListItem.appendChild(timestamp);
    newListItem.setAttribute("class", "entry");
    var element = document.getElementById('listThree');
    element.appendChild(newListItem);
    var linebreak2 = document.createElement('br');
    element.appendChild(linebreak2);
    var input= document.getElementById('addThree').value = "";
    newListItem.onclick = function() {
      this.parentNode.removeChild(this);
      element.removeChild(linebreak2);
      guestsNumberThree--;
      document.getElementById('roomThree').style.backgroundColor = "rgba(255,255,255,0.8)";
      document.getElementById('addThree').style.visibility = "visible";
      document.getElementById('nameThree').innerHTML = "Guest Name";
      document.getElementById('nameThree').style.fontSize = "18px";
      document.getElementById('nameThree').style.fontWeight = "normal";
    }
  }
  else if ((guestsNumberThree == 3) && (window.event.keyCode == 13)){
    document.getElementById('roomThree').style.backgroundColor = "rgba(255,0,0,0.8)";
    document.getElementById('addThree').style.visibility = "hidden";
    document.getElementById('nameThree').innerHTML = "Room is full";
    document.getElementById('nameThree').style.fontSize = "22px";
    document.getElementById('nameThree').style.fontWeight = "bold";
    }
}
function removeAllThree() {
  guestsNumberThree = 0;
  var div = document.getElementById('roomThree');
  var all = document.getElementById('listThree');
  var button = document.getElementById('removeThree');
  div.removeChild(all);
  var list = document.createElement('ol');
  div.insertBefore(list,button);
  list.setAttribute("id", "listThree");
  list.setAttribute("class", "list");
  document.getElementById('roomThree').style.backgroundColor = "rgba(255,255,255,0.8)";
  document.getElementById('addThree').style.visibility = "visible";
  document.getElementById('nameThree').innerHTML = "Guest Name";
  document.getElementById('nameThree').style.fontSize = "18px";
  document.getElementById('nameThree').style.fontWeight = "normal";
}

//JS for Room Four//
function addGuestFour() {
  if ((guestsNumberFour < 3) && (window.event.keyCode == 13)) {
    guestsNumberFour++;
    var date = new Date();
    var guestName = document.getElementById('addFour').value;
    var newListItem = document.createElement('li');
    var newGuest = document.createTextNode(guestName);
    newListItem.appendChild(newGuest);
    var linebreak = document.createElement('br');
    newListItem.appendChild(linebreak);
    var timestamp = document.createTextNode(date);
    newListItem.appendChild(timestamp)
    newListItem.setAttribute("class", "entry");
    var element = document.getElementById('listFour');
    element.appendChild(newListItem);
    var linebreak2 = document.createElement('br');
    element.appendChild(linebreak2);
    var input= document.getElementById('addFour').value = "";
    newListItem.onclick = function() {
      this.parentNode.removeChild(this);
      element.removeChild(linebreak2);
      guestsNumberFour--;
      document.getElementById('roomFour').style.backgroundColor = "rgba(255,255,255,0.8)";
      document.getElementById('addFour').style.visibility = "visible";
      document.getElementById('nameFour').innerHTML = "Guest Name";
      document.getElementById('nameFour').style.fontSize = "18px";
      document.getElementById('nameFour').style.fontWeight = "normal";
    }
  }
  else if ((guestsNumberFour == 3) && (window.event.keyCode == 13)){
    document.getElementById('roomFour').style.backgroundColor = "rgba(255,0,0,0.8)";
    document.getElementById('addFour').style.visibility = "hidden";
    document.getElementById('nameFour').innerHTML = "Room is full";
    document.getElementById('nameFour').style.fontSize = "22px";
    document.getElementById('nameFour').style.fontWeight = "bold";
    }
}
function removeAllFour() {
  guestsNumberFour = 0;
  var div = document.getElementById('roomFour');
  var all = document.getElementById('listFour');
  var button = document.getElementById('removeFour');
  div.removeChild(all);
  var list = document.createElement('ol');
  div.insertBefore(list,button);
  list.setAttribute("id", "listFour");
  list.setAttribute("class", "list");
  document.getElementById('roomFour').style.backgroundColor = "rgba(255,255,255,0.8)";
  document.getElementById('addFour').style.visibility = "visible";
  document.getElementById('nameFour').innerHTML = "Guest Name";
  document.getElementById('nameFour').style.fontSize = "18px";
  document.getElementById('nameFour').style.fontWeight = "normal";
}