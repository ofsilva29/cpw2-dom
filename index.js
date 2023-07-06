function background() {
    document.body.style.backgroundColor = "#BECCC3";
  }
  
  function show() {
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const fullName = `${firstName} ${lastName}`;
    document.getElementById("result").innerHTML = fullName;
  }
  
  function search() {
    var data = [
      { name: "Rodrigo" },{ name: "Ricardo" },{ name: "Fabio" },{ name: "Alex" },{ name: "Sílvia" }];
    const input = document.getElementById("name").value.toUpperCase();
    const searchResults = [];
  
    for (let i = 0; i < data.length; i++) {
      const name = data[i].name.toUpperCase();
      if (name.indexOf(input) === 0) {
        searchResults.push(data[i].name);
      }
    }
    removeAllChildren("search");
  
    for (let i = 0; i < searchResults.length; i++) {
      const div = document.createElement("div");
      const text = document.createTextNode(searchResults[i]);
      div.appendChild(text);
      document.getElementById("search").appendChild(div);
    }
  }
  
  function removeAllChildren(elementId) {
    const element = document.getElementById(elementId);
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
  
