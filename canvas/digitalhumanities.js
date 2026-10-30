multicolor();

svg("https://visse.vercel.app/assets/covers/ProjetoDigitalHumanities.svg", "Digital Humanities", 930, 810, 150, 30);
newidoc("https://www.ranoya.com/pt/humanidades/?nomenu=true&temptheme=cleantext", "Estudos em Digital Humanities", 1110, 690, 60, 900);
connect("Digital Humanities", "Estudos em Digital Humanities");
svg("https://visse.vercel.app/assets/covers/EstudosMidiaSoftware.svg", "Mídia+Software", 630, 390, 1680, -30);
connect("Mídia+Software", "Digital Humanities");
newidoc("https://www.ranoya.com/pt/midiasoftware/?nomenu=true&temptheme=cleantext", "Estudos em Mídia/Software", 1110, 690, 2610, -180);
connect("Mídia+Software", "Estudos em Mídia/Software");
svg("https://visse.vercel.app/assets/covers/Arqueologia169.svg", "Preservação de Software", 630, 360, -870, -120);
connect("Digital Humanities", "Preservação de Software");
newidoc("https://www.ranoya.com/pt/arqueologia/?nomenu=true&temptheme=cleantext", "Arqueologia", 1110, 690, -2370, -281);
connect("Arqueologia", "Preservação de Software");
html(`<div style="width: 100%; height: 100%; background-repeat: no-repeat; background-size: cover; background-position: center center; background-image: url(https://visse.vercel.app/assets/covers/EscritaDinamica.png)"></div>`, "Escrita Dinâmica", 630, 390, 1680, 900);
connect("Escrita Dinâmica", "Digital Humanities");
newidoc("https://www.ranoya.com/pt/publicacoesinterativas/?nomenu=true&temptheme=cleantext", "Texto Interativo", 1110, 690, 2610, 750);
connect("Texto Interativo", "Escrita Dinâmica");
svg("https://visse.vercel.app/assets/covers/NarrativasInterativas.svg", "Narrativas Interativas", 630, 390, -870, 900);
connect("Narrativas Interativas", "Digital Humanities");
newidoc("https://www.ranoya.com/pt/storytelling/?nomenu=true&temptheme=cleantext", "Estudos de Narrativas Interativas", 1110, 690, -2370, 750);
connect("Estudos de Narrativas Interativas", "Narrativas Interativas");

svg("<iframe style='width: 100%; height: 100%;' frameborder='0' src='https://booklines.vercel.app/capas/artancode/flipcover.html?art=1980&fcolor=ffffff88&bgcolor=0865E9'></iframe>", "ART/ANC/ODE", 630, 360, 280,-620);

newidoc("https://www.ranoya.com/pt/arte/?nomenu=true&temptheme=cleantext", "Arte Digital", 1110, 690, 60, -1590);
connect("ART/ANC/ODE", "Digital Humanities");
connect("Arte Digital", "ART/ANC/ODE");

newidoc("https://slidelines.vercel.app/timelineh/?allblocks=true&timeheight=80&followbg=true&file=https://docs.google.com/spreadsheets/d/1Hja-7ozKTpcfhVX9sc3FkDH-NLj_RXllFIDTO8EIFV0/edit?gid=2051435513#gid=2051435513&theme=https://slidelines.vercel.app/level/fluid.css", "Documentos Inteligentes", 1110, 720, 4170, 270);
connect("Texto Interativo", "Documentos Inteligentes");
connect("Estudos em Mídia/Software", "Documentos Inteligentes");
newidoc("https://slidelines.vercel.app/timelineh/?allblocks=true&timeheight=110&followbg=true&file=https://docs.google.com/spreadsheets/d/1Hja-7ozKTpcfhVX9sc3FkDH-NLj_RXllFIDTO8EIFV0/edit?gid=1898658317#gid=1898658317&theme=https://slidelines.vercel.app/level/hypermedia.css", "Hypertexto", 1110, 720, 4170, -840);
connect("Hypertexto", "Estudos em Mídia/Software");
newidoc("https://slidelines.vercel.app/timelineh/?allblocks=true&timeheight=110&followbg=true&file=https://docs.google.com/spreadsheets/d/1Hja-7ozKTpcfhVX9sc3FkDH-NLj_RXllFIDTO8EIFV0/edit?gid=1461132281#gid=1461132281&theme=https://slidelines.vercel.app/level/hypermedia.css", "Interactive Textbooks", 1110, 720, 4170, 1380);
connect("Interactive Textbooks", "Texto Interativo");
newidoc("https://slidelines.vercel.app/level/?s=0&order=ord&filtra=_full&allowverticalscroll=true&file=https://docs.google.com/spreadsheets/d/1Hja-7ozKTpcfhVX9sc3FkDH-NLj_RXllFIDTO8EIFV0/edit?gid=137178476#gid=137178476&theme=https://slidelines.vercel.app/styles/fit.css", "Interactive Storytelling", 1110, 720, -3900, 1380);
connect("Interactive Storytelling", "Estudos de Narrativas Interativas");

lockall();

