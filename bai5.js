function myFunction1() {
    var x = parseInt(document.getElementById("text_1").value);
    var y = parseInt(document.getElementById("text_2").value);
    var z = parseInt(document.getElementById("select").value);
    var result;

    switch (z) {
        case 1: {
            result = ((x + (y * 2)) / 3);
            break;
        }
        case 2: {
            result = ((x + (y * 3) / 4));
            break;
        }
        case 3: {
            result = ((x + (y * 4) / 5));
        }
    }
    document.getElementById("sum").value = result;

}
function myFunction2() {
    document.getElementById("text_1").value = "";
    document.getElementById("text_2").value = "";
    document.getElementById("sum").value = "";
}
