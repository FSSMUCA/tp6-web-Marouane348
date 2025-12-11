let histoire = [];

function calculer() {
    let n1 = document.getElementById("nb1").value;
    let n2 = document.getElementById("nb2").value;
    let op = document.getElementById("op").value;
    let erreurDiv = document.getElementById("erreur");
    
    erreurDiv.style.display = "none";
    
    if (n1 === "" || n2 === "") {
        erreurDiv.innerHTML = "⚠️ Entrez les deux nombres !";
        erreurDiv.style.display = "block";
        return;
    }
    
    let a = parseFloat(n1);
    let b = parseFloat(n2);
    
    if (op === "/" && b === 0) {
        erreurDiv.innerHTML = "⚠️ Impossible de diviser par zéro !";
        erreurDiv.style.display = "block";
        return;
    }
    
    let result;
    if (op === "+") result = a + b;
    if (op === "-") result = a - b;
    if (op === "*") result = a * b;
    if (op === "/") result = a / b;
    
    result = Math.round(result * 100) / 100;
    
    document.getElementById("result").innerHTML = a + " " + op + " " + b + " = " + result;
    
    let calcul = {
        n1: a,
        n2: b,
        op: op,
        res: result,
        date: new Date().toLocaleTimeString()
    };
    
    histoire.unshift(calcul);
    afficherHistoire();
    
    localStorage.setItem("tp6_histoire", JSON.stringify(histoire));
}

function afficherHistoire() {
    let histoDiv = document.getElementById("histo");
    
    if (histoire.length === 0) {
        histoDiv.innerHTML = '<p class="vide">Aucun calcul encore</p>';
        return;
    }
    
    let html = "";
    for (let i = 0; i < histoire.length; i++) {
        let calc = histoire[i];
        html += `<div class="calc-item">`;
        html += `<strong>${calc.n1} ${calc.op} ${calc.n2} = ${calc.res}</strong>`;
        html += `<div style="font-size:12px;color:gray">${calc.date}</div>`;
        html += `</div>`;
    }
    
    histoDiv.innerHTML = html;
}

function effacerHistoire() {
    if (confirm("Effacer tout l'historique ?")) {
        histoire = [];
        afficherHistoire();
        localStorage.removeItem("tp6_histoire");
        document.getElementById("result").innerHTML = "_ _ _";
    }
}

window.onload = function() {
    let sauvegarde = localStorage.getItem("tp6_histoire");
    if (sauvegarde) {
        histoire = JSON.parse(sauvegarde);
        afficherHistoire();
    }
};