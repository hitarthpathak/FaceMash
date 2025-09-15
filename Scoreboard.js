let scoreboard_data = document.getElementById("scoreboard-data");
let table = document.getElementById("table");

//-------------------------------------------------------------------------------------------------

let facemash = JSON.parse(localStorage.getItem("facemash")) || [];

//-------------------------------------------------------------------------------------------------

window.addEventListener("load", () => {
    show_scoreboard();
});

//-------------------------------------------------------------------------------------------------

function show_scoreboard() {
    let ranked_girls = facemash.sort((a, b) => b.score - a.score);
    ranked_girls.forEach((girl, rank) => {
        let new_row = document.createElement("tr");
        let rank_td = document.createElement("td");
        rank_td.textContent = rank + 1;
        let image_td = document.createElement("td");
        let image = document.createElement("img");
        image_td.appendChild(image);
        image.setAttribute("src", girl.image);
        let score_td = document.createElement("td");
        score_td.textContent = girl.score;
        new_row.appendChild(rank_td);
        new_row.appendChild(image_td);
        new_row.appendChild(score_td);
        table.appendChild(new_row);
    });
};