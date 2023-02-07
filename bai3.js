var current = new Date().getFullYear();
var birthday = prompt("Nhập vào ngày tháng năm sinh theo định dạng 'MM/dd/yyyy':", "07/06/2022");
birthday = new Date(birthday).getFullYear();
alert("Tuổi của bạn là:" + (current - birthday));
