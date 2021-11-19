function pressed() {
    var text = document.getElementById("inp").value;
    var output = document.getElementById("output");


    if (text == "нохой") {
        output.innerHTML = "таажинэ таажинэ";
    } else if (text == "шоргоолж") {
        output.innerHTML = "вааав л даа";
    } else if (text == "бамбархүү") {
        output.innerHTML = "сүгои нээ үмаэ";
    } else {
        output.innerHTML = "эээээээээээээээ юу вэ :(";
    }
}