/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

log = function () {
    const username = document.getElementById("user").value;
    const birthday = document.getElementById("birthday").value;
    const email = document.getElementById("email").value;
    const custom_attributes = {
        'email': email,
        'username': username,
        'birthday': birthday
    };
    const valuesWithContent = [];
    for (const field in custom_attributes) {
        if (custom_attributes[field] !== '') {
            // 將有內容的欄位值和對應的標題組成字串，加入到 valuesWithContent 陣列中
            valuesWithContent[field] = custom_attributes[field];
        }
    }
    appier('identify', valuesWithContent);
}

consoletype = function(){
    console.log("Success")
}