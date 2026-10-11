



ungroovy();
setTransparentBackground();
centerControls();


newidoc("https://www.ranoya.com/pt/textos/documentos.php?id=T010&temptheme=cleantext&nomenu=true&contentonly=true", "DocInterfaces", 1075, 795, 798, 243);
newidoc("https://www.youtube.com/embed/9Tc_FQbDYA4?si=DrY6Q9FseQ8cKmxK", "Wolfram Hoje", 730, 529, 4825, 337);
polaroid("https://omnifolio.vercel.app/omnifiles/print_wolfram_notebooks2.png", "Interface dos notebooks Wolfram", "Wolfram Cloud", 592, 1785, 4830, 969);
newidoc("https://www.ranoya.com/pt/micropost/?id=A047&embed=true&nomenu=true&temptheme=cleantext", "Knuth", 991, 918, 797, -1048);
polaroid("https://www.computer.org/wp-media/2018/03/11020301/donald-knuth-e1523412218270.jpg", "Donald Knuth, prêmio Turing de computação em 1974 (considerado o equivalente na área ao prêmio Nobel), é o inventor da Programação Literária (literate programming), que é a base dos Notebooks Computacionais", "Donald Knuth", 396, 509, 235, -1040);
newidoc("https://www.ranoya.com/pt/textos/notebookscomp.php?id=T023&temptheme=cleantext&nomenu=true", "Texto Notebooks", 1072, 796, -510, 246);
polaroid("https://zdpdvwhvukelzzbzbjvh.supabase.co/storage/v1/object/public/imported-images/1767022360525-db5d5e1a-8867-48bd-b6c4-cf17edb8dcff-6gebf9.webp", "Stephen Wolfram foi criador, junto a Theo Gray, do software Wolfram Mathematica em 1987, primeira ferramenta de programação com interface de Notebook Computacional", "Stephen Wolfram", 396, 425, 2289, 245);
polaroid("https://images.squarespace-cdn.com/content/v1/537b8325e4b065b57c13cdef/1406731118207-JOGX4D1IXPVL8BRI6QW4/TheodoreGray.jpg", "Theodore Gray era funcionário da Apple em 1987, quando Stephen Wolfram solicitou à Steve Jobs que lhe cedesse o funcionário, para que pudessem criar uma ferramenta de programação revolucionária. Theo Gray é responsável pela criação da interface de programação conhecida como Notebook Computacional", "Theo Gray", 399, 512, 2291, 738);
polaroid("https://content.wolfram.com/sites/43/2018/06/Wolfram-Language-on-early-Mac.png", "Linguagem de programação Wolfram, desenvolvida para rodar em uma interface gráfica como a provida pelo Apple Macintosh em 1987", "Macintosh", 761, 778, 2869, 336);
polaroid("https://omnifolio.vercel.app/omnifiles/wolfram_notebook.png", "Programação através do Notebook Computacional Wolfram Mathematica", "Linguagem Wolfram", 421, 475, 3202, 1226);
newidoc("https://www.youtube.com/embed/fJt2KeCWy5o?si=y5o6LStuJEIXwqEH&amp;start=250", "Mathematica", 846, 477, 3789, 337);
newidoc("https://www.youtube.com/embed/zISy9oC4b94?si=RLFj6QVkQSxdZNKr", "Palestra Theo Gray", 890, 531, 804, 1295);
newidoc("https://jupyter.org/try-jupyter/lab/?path=notebooks%2FIntro.ipynb", "Jupyter", 1188, 720, 724, 2237);
newidoc("https://booklines.vercel.app/livros/observable/?go=", "PJO", 757, 1019, -2766, 3305);
newframe("https://visse.vercel.app/ferramentas/paralaxe2.html?fg=ffffff&cv=888888ee&bg=debe34&filtra=_notebook", "Ferramentas", 799, 943, -308, 2753);
newidoc("https://omnicode.vercel.app/notebook/?temptheme=light&load=https://omnicode.vercel.app/notebook/creativecode.html", "Omnicode Notebook", 918, 1027, 732, 3518);
newidoc("https://nextjournal.com/try", "Nextjournal", 1080, 727, 1841, 3153);
polaroid("https://observablehq.com/embed/@d3/sortable-bar-chart?cell=viewof+order&cell=chart", "Componentes de visualização de dados construídos com a biblioteca D3 publicados online a partir de um notebook Observable", "d3", 682, 730, -1497, 2248);
newidoc("https://slidelines.vercel.app/timelineh/?file=https://omnicode.vercel.app/examples/elementosmd.md&allblocks=true&s=1&pattern=true&timelineheight=60px&startvisible=true&allowverticalscroll=true&timeheight=110&followbg=true&theme=https://slidelines.vercel.app/styles/aulasslides.css&file=https://docs.google.com/spreadsheets/d/1Hja-7ozKTpcfhVX9sc3FkDH-NLj_RXllFIDTO8EIFV0/edit?gid=1622442665#gid=1622442665", "Aulas do Cláudio", 1164, 868, -1772, 3304);



connect("Aulas do Cláudio", "d3");
connect("Aulas do Cláudio", "PJO");
connect("PJO", "d3");
connect("Donald Knuth", "Knuth");
connect("Palestra Theo Gray", "Jupyter");
connect("Macintosh", "Stephen Wolfram");
connect("Macintosh", "Theo Gray");
lock("Donald Knuth");
lock("Knuth");
lock("Aulas do Cláudio");
lock("d3");
lock("PJO");
lock("Jupyter");
lock("Palestra Theo Gray");
lock("Theo Gray");
lock("Macintosh");
lock("Stephen Wolfram");

center("Knuth");