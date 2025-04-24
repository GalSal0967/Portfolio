document.getElementById("portfolio").addEventListener("click", function() {
    window.open("https://github.com/GalSal0967/Portfolio", "_blank");
});

document.getElementById("calculadora_imc").addEventListener("click", function() {
    window.open("https://github.com/GalSal0967/IMC", "_blank");
});

document.getElementById("cafe").addEventListener("click", function() {
    window.open("https://github.com/GalSal0967/CoffeCups", "_blank");
});



function mostrar_skills() {
    document.getElementById("cards_tools").style.display = "none";
    document.getElementById("cards_skills").style.display = "flex";

    const botaoTechStack = document.querySelector(".botao.ativo");
    botaoTechStack.classList.remove("ativo"); // Remove a classe 'ativo' de qualquer outro botão
    const botaoTechStackAtivo = document.querySelectorAll(".botao")[0]; // Botão Tech Stack
    botaoTechStackAtivo.classList.add("ativo"); // Adiciona a classe ativo ao botão correto
}

function mostrar_tools() {
    document.getElementById("cards_skills").style.display = "none";
    document.getElementById("cards_tools").style.display = "flex";

    // Adicionar a classe 'ativo' ao botão Tools
    const botaoTechStack = document.querySelector(".botao.ativo");
    botaoTechStack.classList.remove("ativo"); // Remove a classe 'ativo' do botão de Tech Stack
    const botaoToolsAtivo = document.querySelectorAll(".botao")[1]; // Botão Tools
    botaoToolsAtivo.classList.add("ativo"); // Adiciona a classe ativo ao botão correto
}

  
