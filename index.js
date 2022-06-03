//- display 1ère image meilleur film --------------
async function displayBestMovie () {
    const url1 = "http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=9&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=";
    let response = await fetch(url1);
    response = await response.json();
    let movie = response.results[0];
    const image = movie.image_url;
    const img = document.createElement("img");
    img.src = image;
    var div = document.getElementById("imgMeilleurFilm");
    div.appendChild(img);
}
displayBestMovie();

// fenêtre modale  -----------------------------------------
let ModalContainer = document.querySelector(".modal-container");
let modalTriggers = document.querySelectorAll(".modal-trigger");
modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal));

async function toggleModal(event){
    console.log(event);
    ModalContainer.classList.toggle("active");
    // let response = await fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=9&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=");
    let response = await fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=9");
    response = await response.json();
    console.log(response);
    console.log(event.target.classe);
    updateModal(response, parseInt(event.target.classe.at(-1)));
};
toggleModal();

function updateModal (response, i){
    console.log(i);
    let movie = response.results[i];
    let modal = document.querySelector(".modal");
    let divcontent = document.querySelector(".content");
    modal.removeChild(divcontent);
    divcontent = document.createElement("div");
    divcontent.classList.add("content");
    modal.appendChild(divcontent);
    let parag = document.createElement("p");
    let texte1 = document.createTextNode("titre du film : " + movie.title);
    let texte2 = document.createTextNode("genres du film : " + movie.genres);
    let texte3 = document.createTextNode("date de sortie : " + movie.year);
    let texte4 = document.createTextNode("rated : " + movie.rated);
    let texte5 = document.createTextNode("score Imdb : " + movie.imdb_score);
    let texte6 = document.createTextNode("réalisateur : " + movie.writers);
    let texte7 = document.createTextNode("acteurs : " + movie.actors);
    let texte8 = document.createTextNode("durée : " + movie.duration);
    let texte9 = document.createTextNode("pays d'origine: " + movie.countries);
    let texte10 = document.createTextNode("résultat box office : " + movie.avg_vote);
    let texte11= document.createTextNode("résumé du film : " + movie.description);
    
    parag.appendChild(texte1);
    parag.appendChild(document.createElement("br"));
    parag.appendChild(texte2);
    parag.appendChild(document.createElement("br"));
    parag.appendChild(texte3);
    parag.appendChild(document.createElement("br"));
    parag.appendChild(texte4);
    parag.appendChild(document.createElement("br"));
    parag.appendChild(texte5);
    parag.appendChild(document.createElement("br"));
    parag.appendChild(texte6);
    parag.appendChild(document.createElement("br"));
    parag.appendChild(texte7);
    parag.appendChild(document.createElement("br"));
    parag.appendChild(texte8);
    parag.appendChild(document.createElement("br"));
    parag.appendChild(texte9);
    parag.appendChild(document.createElement("br"));
    parag.appendChild(texte10);
    parag.appendChild(document.createElement("br"));
    parag.appendChild(texte11);
    divcontent.appendChild(parag);
};

//--------------------- display slider-1 7 images --------------
async function displayImage () {
    // slider 1 :  Films les mieux notés API - 4 URLS (1_4) et 2 URLS (5_7) page suivante) 
    const url1_1_4 = "http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=9&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=";
    const url1_5_7 = "http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=&genre_contains=&imdb_score=9&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=";
    let response = await fetch(url1_1_4);
    response = await response.json();
    let i = 0;
    do {
        boucle1();
    } while (i < 5);
    response = await fetch(url1_5_7);
    response = await response.json();
    i = 0;
    do {
        boucle1();
    } while (i < 2);
    function boucle1 () {
        let movie = response.results[i];
        const image = movie.image_url;
        const img = document.createElement("img");
        const classe = document.createElement("class");
        img.src = image;
        img.classe = "img"+i;
        // <img class="fit-picture"
        var div = document.getElementById("img1");
        div.appendChild(img);
        i += 1;
    }
    //--------------------- 
    // slider 2 : Films d'aventure API - 4 URLS (1_4) et 2 URLS (5_7) page suivante) 
    const url2_1_4 = "http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=adventure&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=";
    const url2_5_7 = "http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=adventure&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=";
    response = await fetch(url2_1_4);
    response = await response.json();
    i = 0;
    do {
        boucle2(img2);
    } while (i < 5);
    response = await fetch(url2_5_7);
    response = await response.json();
    i = 0;
    do {
        boucle2(img2);
    } while (i < 2);
    function boucle2 () {
        let movie = response.results[i];
        const image = movie.image_url;
        const img = document.createElement("img");
        img.src = image;
        var div = document.getElementById("img2");
        div.appendChild(img);
        img.width = "190";
        img.height = "273";
        i += 1;
    }
    //--------------------- 
    // slider 3 : Films Family API - 4 URLS (1_4) et 2 URLS (5_7) page suivante)  
    const url3_1_4 = "http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=family&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=";
    const url3_5_7 = "http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=family&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=";
    response = await fetch(url3_1_4);
    response = await response.json();
    i = 0;
    do {
        boucle3();
    } while (i < 5);
    response = await fetch(url3_5_7);
    response = await response.json();
    i = 0;
    do {
        boucle3();
    } while (i < 2);
    function boucle3 () {
        let movie = response.results[i];
        const image = movie.image_url;
        const img = document.createElement("img");
        img.src = image;
        var div = document.getElementById("img3");
        div.appendChild(img);
        img.width = "190";
        img.height = "273";
        i += 1;
    }
    //--------------------- 
    // slider 4 : Films d'Action API - 4 URLS (1_4) et 2 URLS (5_7) page suivante) 
    const url4_1_4 = "http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=action&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=";
    const url4_5_7 = "http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=action&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=";
    response = await fetch(url4_1_4);
    response = await response.json();
    i = 0;
    do {
        boucle4();
    } while (i < 5);
    response = await fetch(url4_5_7);
    response = await response.json();
    i = 0;
    do {
        boucle4();
    } while (i < 2);
    function boucle4 () {
        let movie = response.results[i];
        const image = movie.image_url;
        const img = document.createElement("img");
        img.src = image;
        var div = document.getElementById("img4");
        div.appendChild(img);
        i += 1;
    }
    //--------------------- 

    // slider (url1_1_4, url1_5_7);
    // slider (url2_1_4, url2_5_7);
    // slider (url3_1_4, url3_5_7);
    // slider (url4_1_4, url4_5_7);
 
    // function slider (url1, url2){
    //     let response = await fetch(url1);
    //     response = await response.json();
    //     let i = 0;
    //     do {
    //         boucle();
    //     } while (i < 5);
    //     response = await fetch(url2);
    //     response = await response.json();
    //     i = 0;
    //     do {
    //         boucle();
    //     } while (i < 2);
    // }

   
 };

displayImage();

//---------------------buttons - slider images --------------
let sliderMain1 = document.getElementById("slider-main1");
let item1 = sliderMain1.getElementsByTagName("img");
const buttonRight1 =  document.querySelector(".btn1-right");
const buttonLeft1 = document.querySelector(".btn1-left");
buttonLeft1.addEventListener("click", () => {
    sliderMain1.prepend(item1[item1.length - 1]);
});
buttonRight1.addEventListener("click", () => {
    sliderMain1.append(item1[0]);
});
//-----------------------------------
let sliderMain2 = document.getElementById("slider-main2");
let item2 = sliderMain2.getElementsByTagName("img");
const buttonRight2 =  document.querySelector(".btn2-right");
const buttonLeft2 = document.querySelector(".btn2-left");
buttonLeft2.addEventListener("click", () => {
    sliderMain2.prepend(item2[item2.length - 1]);
});
buttonRight2.addEventListener("click", () => {
    sliderMain2.append(item2[0]);
});
//-----------------------------------
let sliderMain3 = document.getElementById("slider-main3");
let item3 = sliderMain3.getElementsByTagName("img");
const buttonRight3 =  document.querySelector(".btn3-right");
const buttonLeft3 = document.querySelector(".btn3-left");
buttonLeft3.addEventListener("click", () => {
    sliderMain3.prepend(item3[item3.length - 1]);
});
buttonRight3.addEventListener("click", () => {
    sliderMain3.append(item3[0]);
});
//-----------------------------------
let sliderMain4 = document.getElementById("slider-main4");
let item4 = sliderMain4.getElementsByTagName("img");
const buttonRight4 =  document.querySelector(".btn4-right");
const buttonLeft4 = document.querySelector(".btn4-left");
buttonLeft4.addEventListener("click", () => {
    sliderMain4.prepend(item4[item4.length - 1]);
});
buttonRight4.addEventListener("click", () => {
    sliderMain4.append(item4[0]);
});
//-----------------------------------