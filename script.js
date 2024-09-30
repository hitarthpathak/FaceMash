function generate_choice() {

    let images = ["Images/img-1.jpg", "Images/img-2.jpg", "Images/img-3.jpg", "Images/img-4.jpg", "Images/img-5.jpg", "Images/img-6.jpg", "Images/img-7.jpg", "Images/img-8.jpg", "Images/img-9.jpg", "Images/img-10.jpg", "Images/img-11.jpg", "Images/img-12.jpg", "Images/img-13.jpg", "Images/img-14.jpg", "Images/img-15.jpg", "Images/img-16.jpg", "Images/img-17.jpg", "Images/img-18.jpg", "Images/img-19.jpg", "Images/img-20.jpg"]

    let random_image = Math.floor(Math.random() * images.length);

    return images[random_image];

}

generate_choice();

// --------------------------------------------------------------------------------------------------

function change_img() {

    let display_img_1 = document.getElementById("img-1")

    let display_img_2 = document.getElementById("img-2")

    display_img_1.addEventListener("click", function () {

        display_img_1.setAttribute("src", `${generate_choice()}`)

        display_img_2.setAttribute("src", `${generate_choice()}`)

    })

    display_img_2.addEventListener("click", function () {

        display_img_1.setAttribute("src", `${generate_choice()}`)

        display_img_2.setAttribute("src", `${generate_choice()}`)

    })
}

change_img();
