function pressed() {
    var text = parseInt(document.getElementById("inp").value);
    var output = document.getElementById("output");

    if (text >= 30) {
        output.innerHTML = "Зөнз үхэх гэж байгаа сда байнашд";
    } else {
        output.innerHTML = "Мангар бацаан минь явж ажлаа хий";
    }
}