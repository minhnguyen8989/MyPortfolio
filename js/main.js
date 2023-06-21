
let contactBtn = document.getElementById("contactBtn")
contactBtn.addEventListener("click", function () {
    let greeting = "<h5>Hello! One click contact me</h5>"
    let phoneNumber = "<a href='tel:+3465678989'><i class=\"fa-solid fa-phone mr-2\"></i>(346)-567-8989</a>";
    let emailAddress = "<a href='mailto:quangminh.nguyen8989@gmail.com'><i class=\"fa-solid fa-envelope mr-2\"></i>quangminh.nguyen8989@gmail.com</a>";
    $("#contactText").html(greeting + phoneNumber + emailAddress);
})

let aboutmeBtn = document.getElementById("aboutMe")
aboutmeBtn.addEventListener("click", function () {
    let aboutMe = "<p>As a passionate and dedicated web developer, I thrive on the exciting challenges that come with crafting innovative digital experiences. Armed with a meticulous attention to detail and an extensive knowledge of coding languages and frameworks, I have refined my abilities to fashion visually captivating and exceptionally functional websites. I am excited to continue pushing boundaries, embracing new technologies, and delivering exceptional web solutions that leave a lasting impression.</p>"
    $("#contactText").html(aboutMe);
})