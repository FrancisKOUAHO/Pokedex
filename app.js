let baseURL = "https://pokeapi.co/api/v2";
let pokemon = "/pokemon/";

let title = document.getElementById("title");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let idd = document.getElementById("idd");
let img = document.getElementById("img");
let topp = document.getElementById("topp");
let bottom = document.getElementById("bottom");
let dis= document.getElementById("description");


( () =>{
    document.getElementById("ajaxButton").addEventListener("click", makeRequest);


    let httpRequest;
    function makeRequest() {
        httpRequest = new XMLHttpRequest();
        if (!httpRequest) {
            alert("Cela n'a pas fonctionné :(");
            return false;
        }
        // let id1 = idd.value;
        let id1 = Math.floor(Math.random() * 100 + 1);
        let fullURL = baseURL + pokemon + id1;
        topp.className = 'content';
        bottom.className = 'pannel  rotate';
        dis.innerHTML = "Chargement ...";
        httpRequest.onreadystatechange = fillInfo;

        httpRequest.open(
            "GET", fullURL
        );
        httpRequest.send();
    }

    function fillInfo() {
        let responseContent;
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                responseContent = httpRequest.responseText;
                console.log(responseContent);
                let parsed = JSON.parse(responseContent);
                console.log(parsed);

                title.innerHTML = parsed.name;
                height.innerHTML = parsed.height;
                weight.innerHTML = parsed.weight;
                img.src = parsed.sprites.front_default;
                topp.className = 'content active';
                bottom.className = 'pannel active';
                dis.innerHTML = "Le hasard de votre Pokémon";

            } else {
                alert("Il y a eu un problème avec la demande.");
            }
        }

    }
})();

function click() {

    let id = document.getElementById("idd").value;
    alert(id);
}