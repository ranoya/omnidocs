setTheme("light");
devmode();
multicolor();

let biblioteca = function() {
    if (!exist("Biblioteca Completa")) {
        newidoc("https://www.ranoya.com/pt/canvasbiblioteka/?titulo=Biblioteca%20Completa&p=t&bg=eceef4&fg=555555", "Biblioteca Completa", 660, 810, -270, -90);
    }
    center("Biblioteca Completa");
}

let mapaprojetos = function() {
    if (!exist("Projetos")) {
        newidoc("https://www.ranoya.com/pt/projetos/mapa.html", "Projetos", 962, 528, 540, -90);
    }
    center("Projetos");
}

let projetonarrativas = function () {
    if (!exist("Narrativas Interativas")) {
        svg("https://visse.vercel.app/assets/covers/NarrativasInterativas.svg", "Narrativas Interativas", 962, 528, -870, -90);
    }

    if (!exist("Projeto Narrativas Interativas")) {
        newidoc("https://www.ranoya.com/pt/storytelling/?temptheme=cleantext&nomenu=true", "Projeto Narrativas Interativas", 840, 810, 2640, -90);
    }

    connect("Narrativas Interativas", "Projeto Narrativas Interativas");
    connect("Narrativas Interativas", "Projetos");
}