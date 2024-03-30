// 1)

let phoneNumber = prompt('enter number');
let reg = /^\+(?:[0-9] ?){6,14}[0-9]$/;
let result = reg.test(phoneNumber);
console.log(result);

// 2)

const googleIpAddress = 'Серверы Google Public DNS предоставляет следующие адреса публичных серверов для DNS-запросов: 8.8.8.8. 8.8.4.4.';
const reg = /\b(?:\d{1,3}\.){3}\d{1,3}\b/g;
console.log(googleIpAddress.match(reg));


// 3)

var date = prompt('enter day/month/year');
var reg = /\d{2}.\d{2}.\d{4}/g;
var result = reg.test(date);
console.log(result);


// 4)

let password = prompt('enter password');
const reg = /^[\w@-]{8,20}$/;
let result = reg.test(password);
console.log(result);


// 5)

const text = 'В 1920 году была эпидемия тифа. К концу 1925 года эпидемия стихла и уже к началу 1930 практически не было зафиксированых случаев. Но ближе к 1940 вспышки были обнаружены в некоторых странах.';
const reg = /\b\d\d\d\d\b/g;
console.log(text.match(reg));


// 6)

const text = "Красные дни календаря начнутся с 12.01.2024 и 25.01.2024, а следующие каникулы будут 03.05.2024 по 14.05.2024";
const reg = /(\d{2})\.(\d{2})\.(\d{4})/g;
const result = text.replace(reg, "$2/$1/$3");
console.log(result);





