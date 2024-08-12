let allcard = document.querySelectorAll(".card");
let btnshow = document.querySelector(".btnshow");
let boxcard = document.querySelector(".boxcard");
let btntotal = document.querySelector(".btntotal");
let totalprice = 0; 

allcard.forEach(function(item) {
    item.onclick = function() {
        let price = parseFloat(item.querySelector(".card-text").textContent); 
        totalprice += price; //

        let title = item.querySelector(".card-title").textContent;

        boxcard.innerHTML += title + "  " + ":" + "  " + price.toFixed(2) + "  " + "//" + "  "; 
        if (boxcard.innerHTML !== "") {
            boxcard.style.display = "block";
            btnshow.style.display="block";
        }
    };
});

btnshow.onclick = function() {
    btntotal.style.display="block";
    btntotal.innerHTML = "Total Price: " + totalprice.toFixed(2); 
};
