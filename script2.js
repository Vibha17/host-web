var nav = document.getElementById("h");

const api = "https://coding-week-2024-api.onrender.com/api/data";

fetch(api)
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    for(let i = 0; i < 10; i++) {
        var id = `${i}`;
        var simages = document.getElementsByClassName("simage");
        simages[id].style.backgroundImage = `url(${data[id].image})`;
        var sheadlines = document.getElementsByClassName("sheadline");
        sheadlines[id].innerText = data[id].headline;
        var sdates = document.getElementsByClassName("stext");
        sdates[id].innerText = data[id].date;

        var modal = document.getElementById('popup');
        var img =[];
        img = document.getElementsByClassName("sblog");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img[i].onclick =  function(){
        modal.style.display = "block";
        modalImg.src = data[i].image;
        captionText.innerHTML = data[i].content;
    };
    
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
        modal.style.display = "none";
    };

       
    }
    

    document.getElementById('l').addEventListener('click', () => {
        var cards = document.getElementsByClassName("card1");
        cards[0].style.backgroundImage = `url(${data[3].image})`;
        var cards = document.getElementsByClassName("card2");
        cards[0].style.backgroundImage = `url(${data[4].image})`;
        var lheadlines = document.getElementsByClassName("lheadline");
        lheadlines[0].innerText = data[3].headline;
        lheadlines[1].innerText = data[4].headline;
        var lauthors = document.getElementsByClassName("lauthor");
        lauthors[0].innerText = data[3].author;
        lauthors[1].innerText = data[4].author;
        var ldates = document.getElementsByClassName("ldate");
        ldates[0].removeChild(textNode);
        var textNode = document.createTextNode(data[3].date);
        ldates[0].appendChild(textNode);
        var textNode = document.createTextNode(data[4].date);
        ldates[1].removeChild(textNode);
        ldates[1].appendChild(textNode);
        var card1Div = document.querySelector(".card1");
        var lb1Div = card1Div.querySelector("#lb1");
        lb1Div.innerText = "Featured";
        var card1Div = document.querySelector(".card2");
        var lb1Div = card1Div.querySelector("#lb1");
        lb1Div.innerText = "Featured";
        var card1Div = document.querySelector(".card1");
        var lb1Div = card1Div.querySelector("#lb2");
        lb1Div.innerText = data[3].type;
        var card1Div = document.querySelector(".card2");
        var lb1Div = card1Div.querySelector("#lb2");
        lb1Div.innerText = data[4].type;

        nav.style.backgroundColor = "#E4C59E";
        nav.style.color = "#322C2B";
        nav.style.borderBottom = "#322C2B 2px solid";
        var nav = document.querySelector("l") ;
        nav.style.backgroundColor = "#322C2B";
        nav.style.color = "#E4C59E";

    });

    document.getElementById('hi').addEventListener('click', () => {
        var cards = document.getElementsByClassName("card1");
        cards[0].style.backgroundImage = `url(${data[1].image})`;
        var cards = document.getElementsByClassName("card2");
        cards[0].style.backgroundImage = `url(${data[2].image})`;
        var lheadlines = document.getElementsByClassName("lheadline");
        lheadlines[0].innerText = data[1].headline;
        lheadlines[1].innerText = data[2].headline;
        var lauthors = document.getElementsByClassName("lauthor");
        lauthors[0].innerText = data[1].author;
        lauthors[1].innerText = data[2].author;
        var ldates = document.getElementsByClassName("ldate");
        ldates[0].removeChild(textNode);
        var textNode = document.createTextNode(data[1].date);
        ldates[0].appendChild(textNode);
        var textNode = document.createTextNode(data[2].date);
        ldates[1].removeChild(textNode);
        ldates[1].appendChild(textNode);
        var card1Div = document.querySelector(".card1");
        var lb1Div = card1Div.querySelector("#lb1");
        lb1Div.innerText = "Featured";
        var card1Div = document.querySelector(".card2");
        var lb1Div = card1Div.querySelector("#lb1");
        lb1Div.innerText = "Featured";
        var card1Div = document.querySelector(".card1");
        var lb1Div = card1Div.querySelector("#lb2");
        lb1Div.innerText = data[1].type;
        var card1Div = document.querySelector(".card2");
        var lb1Div = card1Div.querySelector("#lb2");
        lb1Div.innerText = data[2].type;
        
        nav.style.backgroundColor = "#E4C59E";
        nav.style.color = "#322C2B";
        nav.style.borderBottom = "#322C2B 2px solid";
        var nav = document.querySelector("#hi") ;
        nav.style.backgroundColor = "#322C2B";
        nav.style.color = "#E4C59E";
        
    });

    document.getElementById('f').addEventListener('click', () => {
        var cards = document.getElementsByClassName("card1");
        cards[0].style.backgroundImage = `url(${data[5].image})`;
        var cards = document.getElementsByClassName("card2");
        cards[0].style.backgroundImage = `url(${data[6].image})`;
        var lheadlines = document.getElementsByClassName("lheadline");
        lheadlines[0].innerText = data[5].headline;
        lheadlines[1].innerText = data[6].headline;
        var lauthors = document.getElementsByClassName("lauthor");
        lauthors[0].innerText = data[5].author;
        lauthors[1].innerText = data[6].author;
        var ldates = document.getElementsByClassName("ldate");
        ldates[0].removeChild(textNode);
        ldates[1].removeChild(textNode);
        var textNode = document.createTextNode(data[5].date);
        ldates[0].appendChild(textNode);
        var textNode = document.createTextNode(data[6].date);
        ldates[1].appendChild(textNode);
        var card1Div = document.querySelector(".card1");
        var lb1Div = card1Div.querySelector("#lb1");
        lb1Div.innerText = "Featured";
        var card1Div = document.querySelector(".card2");
        var lb1Div = card1Div.querySelector("#lb1");
        lb1Div.innerText = "Featured";
        var card1Div = document.querySelector(".card1");
        var lb1Div = card1Div.querySelector("#lb2");
        lb1Div.innerText = data[5].type;
        var card1Div = document.querySelector(".card2");
        var lb1Div = card1Div.querySelector("#lb2");
        lb1Div.innerText = data[6].type;
        
        nav.style.backgroundColor = "#E4C59E";
        nav.style.color = "#322C2B";
        nav.style.borderBottom = "#322C2B 2px solid";
        var nav = document.querySelector("#f") ;
        nav.style.backgroundColor = "#322C2B";
        nav.style.color = "#E4C59E";
        
    });

    document.getElementById('s').addEventListener('click', () => {
        var cards = document.getElementsByClassName("card1");
        cards[0].style.backgroundImage = `url(${data[8].image})`;
        var cards = document.getElementsByClassName("card2");
        cards[0].style.backgroundImage = `url(${data[9].image})`;
        var lheadlines = document.getElementsByClassName("lheadline");
        lheadlines[0].innerText = data[8].headline;
        lheadlines[1].innerText = data[9].headline;
        var lauthors = document.getElementsByClassName("lauthor");
        lauthors[0].innerText = data[8].author;
        lauthors[1].innerText = data[9].author;
        var ldates = document.getElementsByClassName("ldate");
        ldates[0].removeChild(textNode);
        ldates[1].removeChild(textNode);
        var textNode = document.createTextNode(data[8].date);
        ldates[0].appendChild(textNode);
        var textNode = document.createTextNode(data[9].date);
        ldates[1].appendChild(textNode);
        var card1Div = document.querySelector(".card1");
        var lb1Div = card1Div.querySelector("#lb1");
        lb1Div.innerText = "Featured";
        var card1Div = document.querySelector(".card2");
        var lb1Div = card1Div.querySelector("#lb1");
        lb1Div.innerText = "Featured";
        var card1Div = document.querySelector(".card1");
        var lb1Div = card1Div.querySelector("#lb2");
        lb1Div.innerText = data[8].type;
        var card1Div = document.querySelector(".card2");
        var lb1Div = card1Div.querySelector("#lb2");
        lb1Div.innerText = data[9].type;
        
        nav.style.backgroundColor = "#E4C59E";
        nav.style.color = "#322C2B";
        nav.style.borderBottom = "#322C2B 2px solid";
        var nav = document.querySelector("#s") ;
        nav.style.backgroundColor = "#322C2B";
        nav.style.color = "#E4C59E";
        
    });

    document.getElementById('h').addEventListener('click', () => {
        var cards = document.getElementsByClassName("card1");
        cards[0].style.backgroundImage = `url(${data[0].image})`;
        var cards = document.getElementsByClassName("card2");
        cards[0].style.backgroundImage = `url(${data[7].image})`;
        var lheadlines = document.getElementsByClassName("lheadline");
        lheadlines[0].innerText = data[0].headline;
        lheadlines[1].innerText = data[7].headline;
        var lauthors = document.getElementsByClassName("lauthor");
        lauthors[0].innerText = data[0].author;
        lauthors[1].innerText = data[7].author;
        var ldates = document.getElementsByClassName("ldate");
        ldates[0].removeChild(textNode);
        ldates[1].removeChild(textNode);
        var textNode = document.createTextNode(data[0].date);
        ldates[0].appendChild(textNode);
        var textNode = document.createTextNode(data[7].date);
        ldates[1].appendChild(textNode);
        var card1Div = document.querySelector(".card1");
        var lb1Div = card1Div.querySelector("#lb1");
        lb1Div.innerText = "Featured";
        var card1Div = document.querySelector(".card2");
        var lb1Div = card1Div.querySelector("#lb1");
        lb1Div.innerText = "Featured";
        var card1Div = document.querySelector(".card1");
        var lb1Div = card1Div.querySelector("#lb2");
        lb1Div.innerText = data[0].type;
        var card1Div = document.querySelector(".card2");
        var lb1Div = card1Div.querySelector("#lb2");
        lb1Div.innerText = data[7].type;
        
        nav.style.backgroundColor = "#E4C59E";
        nav.style.color = "#322C2B";
        nav.style.borderBottom = "#322C2B 2px solid";
        var nav = document.querySelector("#h") ;
        nav.style.backgroundColor = "#322C2B";
        nav.style.color = "#E4C59E";
        
    });

    document.getElementById('n').addEventListener('click', () => {

        var n = Math.floor(Math.random() * 10);
        var m = Math.floor(Math.random() * 10);
        
        var cards = document.getElementsByClassName("card1");
        cards[0].style.backgroundImage = `url(${data[n].image})`;
        var cards = document.getElementsByClassName("card2");
        cards[0].style.backgroundImage = `url(${data[m].image})`;
        var lheadlines = document.getElementsByClassName("lheadline");
        lheadlines[0].innerText = data[n].headline;
        lheadlines[1].innerText = data[m].headline;
        var lauthors = document.getElementsByClassName("lauthor");
        lauthors[0].innerText = data[n].author;
        lauthors[1].innerText = data[m].author;
        var ldates = document.getElementsByClassName("ldate");
        ldates[0].removeChild(textNode);
        ldates[1].removeChild(textNode);
        var textNode = document.createTextNode(data[n].date);
        ldates[0].appendChild(textNode);
        var textNode = document.createTextNode(data[m].date);
        ldates[1].appendChild(textNode);
        var card1Div = document.querySelector(".card1");
        var lb1Div = card1Div.querySelector("#lb1");
        lb1Div.innerText = "Featured";
        var card1Div = document.querySelector(".card2");
        var lb1Div = card1Div.querySelector("#lb1");
        lb1Div.innerText = "Featured";
        var card1Div = document.querySelector(".card1");
        var lb1Div = card1Div.querySelector("#lb2");
        lb1Div.innerText = data[n].type;
        var card1Div = document.querySelector(".card2");
        var lb1Div = card1Div.querySelector("#lb2");
        lb1Div.innerText = data[m].type;
        
        nav.style.backgroundColor = "#E4C59E";
        nav.style.color = "#322C2B";
        nav.style.borderBottom = "#322C2B 2px solid";
        var nav = document.querySelector("#n") ;
        nav.style.backgroundColor = "#322C2B";
        nav.style.color = "#E4C59E";
        
    });
    
    var cards = document.getElementsByClassName("card1");
    cards[0].style.backgroundImage = `url(${data[0].image})`;
    var cards = document.getElementsByClassName("card2");
    cards[0].style.backgroundImage = `url(${data[7].image})`;
    var lheadlines = document.getElementsByClassName("lheadline");
    lheadlines[0].innerText = data[0].headline;
    lheadlines[1].innerText = data[7].headline;
    var lauthors = document.getElementsByClassName("lauthor");
    lauthors[0].innerText = data[0].author;
    lauthors[1].innerText = data[7].author;
    var ldates = document.getElementsByClassName("ldate");
    var textNode = document.createTextNode(data[0].date);
    ldates[0].appendChild(textNode);
    var textNode = document.createTextNode(data[7].date);
    ldates[1].appendChild(textNode);
    var card1Div = document.querySelector(".card1");
    var lb1Div = card1Div.querySelector("#lb1");
    lb1Div.innerText = "Featured";
    var card1Div = document.querySelector(".card2");
    var lb1Div = card1Div.querySelector("#lb1");
    lb1Div.innerText = "Featured";
    var card1Div = document.querySelector(".card1");
    var lb1Div = card1Div.querySelector("#lb2");
    lb1Div.innerText = data[0].type;
    var card1Div = document.querySelector(".card2");
    var lb1Div = card1Div.querySelector("#lb2");
    lb1Div.innerText = data[7].type;
    
    
});



