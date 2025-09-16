let display_img_1 = document.getElementById("img-1");
let display_img_2 = document.getElementById("img-2");
let scoreboard = document.getElementById("scoreboard");

//-------------------------------------------------------------------------------------------------

let facemash = JSON.parse(localStorage.getItem("facemash")) || [];

//-------------------------------------------------------------------------------------------------

let girls = (facemash.length > 0) ? facemash : [
    { name: "Aishwarya Rai Bachchan", image: "Images/Aishwarya Rai Bachchan.jpg", score: 0 },
    { name: "Madhuri Dixit Nene", image: "Images/Madhuri Dixit Nene.jpg", score: 0 },
    { name: "Alia Bhatt", image: "Images/Alia Bhatt.jpg", score: 0 },
    { name: "Shraddha Kapoor", image: "Images/Shraddha Kapoor.jpg", score: 0 },
    { name: "Tamannaah Bhatia", image: "Images/Tamannaah Bhatia.jpg", score: 0 },
    { name: "Raashii Khanna", image: "Images/Raashii Khanna.jpg", score: 0 },
    { name: "Katrina Kaif", image: "Images/Katrina Kaif.jpg", score: 0 },
    { name: "Kareena Kapoor Khan", image: "Images/Kareena Kapoor Khan.jpg", score: 0 },
    { name: "Deepika Padukone", image: "Images/Deepika Padukone.jpg", score: 0 },
    { name: "Medha Shankr", image: "Images/Medha Shankr.jpg", score: 0 },
    { name: "Kiara Advani", image: "Images/Kiara Advani.jpg", score: 0 },
    { name: "Disha Patani", image: "Images/Disha Patani.jpg", score: 0 },
    { name: "Nora Fatehi", image: "Images/Nora Fatehi.jpg", score: 0 },
    { name: "Tripti Dimri", image: "Images/Tripti Dimri.jpg", score: 0 },
    { name: "Priyanka Chopra Jonas", image: "Images/Priyanka Chopra Jonas.jpg", score: 0 },
    { name: "Sara Ali Khan", image: "Images/Sara Ali Khan.jpg", score: 0 },
    { name: "Kriti Sanon", image: "Images/Kriti Sanon.jpg", score: 0 },
    { name: "Urvashi Rautela", image: "Images/Urvashi Rautela.jpg", score: 0 },
    { name: "Jacqueline Fernandez", image: "Images/Jacqueline Fernandez.jpg", score: 0 },
    { name: "Kangana Ranaut", image: "Images/Kangana Ranaut.jpg", score: 0 }
];

//-------------------------------------------------------------------------------------------------

let current_girl_1 = null;
let current_girl_2 = null;

//-------------------------------------------------------------------------------------------------

function get_girl_by_img_src(src) {
    return girls.find((girl) => girl.image == src);
};

//-------------------------------------------------------------------------------------------------

current_girl_1 = get_girl_by_img_src(display_img_1.getAttribute("src"));
current_girl_2 = get_girl_by_img_src(display_img_2.getAttribute("src"));

//-------------------------------------------------------------------------------------------------

function random_girls() {
    let random_girl_1 = Math.floor(Math.random() * girls.length);
    let random_girl_2;
    do {
        random_girl_2 = Math.floor(Math.random() * girls.length);
    }
    while (random_girl_1 == random_girl_2);
    return [girls[random_girl_1], girls[random_girl_2]];
};

//-------------------------------------------------------------------------------------------------

function new_girls() {
    [current_girl_1, current_girl_2] = random_girls();
    display_img_1.setAttribute("src", current_girl_1.image);
    display_img_2.setAttribute("src", current_girl_2.image);
};

//-------------------------------------------------------------------------------------------------

display_img_1.addEventListener("click", function () {
    if (current_girl_1) {
        current_girl_1.score += 1;
    }
    localStorage.setItem("facemash", JSON.stringify(girls));
    new_girls();
});

//-------------------------------------------------------------------------------------------------

display_img_2.addEventListener("click", function () {
    if (current_girl_2) {
        current_girl_2.score += 1;
    }
    localStorage.setItem("facemash", JSON.stringify(girls));
    new_girls();
});

//-------------------------------------------------------------------------------------------------

scoreboard.addEventListener("click", () => {
    window.open("Scoreboard.html");
});
