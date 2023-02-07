alert("Welcome!");
var a = prompt("nhập câu trả lời:");
alert(a);
document.write("Câu trả lời là:  " + a);
var b = confirm("Do you want to paly?");
if (b == false) {
    alert('Goodbye');
};
if (b == true) {
    alert('yes')
}
