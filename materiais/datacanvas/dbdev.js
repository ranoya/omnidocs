devmode();
ungroovy();
setTheme("light");
setTransparentBackground();

//
      //
      // -- NOTEBOOKS ------------------------------------

      let countnotebooks = 1;

      window.notebook = function () {
        rundoc("Notebook " + countnotebooks, "opennotebook", {});
        countnotebooks++;
        center("Notebook " + (countnotebooks - 1));
      }

      window.opennotebook = function (id, dados) {
        var el = document.getElementById(id);
        el.innerHTML =
          `<iframe temp="https://omnicode.vercel.app/notebook/?temptheme=${localStorage.getItem('infcanvas:theme')}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowfullscreen" allowfullscreen style="width:100%;height:100%;border:none;display:block;"></iframe>`;
        window.registerLazyFrame(el.querySelector('iframe[temp]'));
      }

      //
      //
      // -- CODE EDITOR ----------------------------------

      let countcode = 1;
      let countruncode = 1;

      window.code = function () {
        run("Code " + countcode, "codeeditor", {
          contagem: countcode,
          runcontagem: countruncode,
        });
        center("Code " + (countcode - 1));
      };

      window.pcode = function () {
        permarun("Code " + countcode, "codeeditor", {
          contagem: countcode,
          runcontagem: countruncode,
        });
        center("Code " + (countcode - 1));
      };

      window.runcode = function (id, conta, deonde) {
        rundoc("Run " + countruncode, "codeout", {
          fromeditor: id,
          tituloeditor: conta,
          fromcodeeditor: deonde,
        });
      };

      if (
        typeof carregaace == "undefined" ||
        carregaace == null ||
        carregaace != "" ||
        carregaace == true
      ) {
        var carregaace = true;
        var codex = [];
        var linguacodex = [];

        let loader = document.createElement("script");
        loader.src = "https://cdnjs.cloudflare.com/ajax/libs/ace/1.15.2/ace.js";
        document.head.appendChild(loader);
        /*
        let loader2 = document.createElement("script");
        loader2.src =
          "https://cdnjs.cloudflare.com/ajax/libs/ace/1.15.2/ext-language_tools.min.js";
        document.head.appendChild(loader2);
        */
      }

      let linguacodeeditor = function (ed, qual) {
        if (qual == "P5") {
          ace.edit(ed).setOptions({ mode: "ace/mode/javascript" });
          linguacodex[ed] = qual;
          console.log(ed + ": " + qual);
        } else {
          ace.edit(ed).setOptions({ mode: "ace/mode/" + qual });
          linguacodex[ed] = qual;
          console.log(ed + ": " + qual);
        }
      };

      var code_output_buffer = [];

      window.codeout = function (id, p) {
        console.log(id);
        console.log(p.fromeditor);
        console.log(linguacodex["editor_" + p.fromeditor]);

        let frame = `<iframe frameborder="0" style="display: block; border: 0; padding: 0; margin: 0; width: 100%; height: 100%;" id="ifr_${id}"</iframe>`;

        document.getElementById(id).innerHTML = frame;

        let code = ``;

        if (linguacodex["editor_" + p.fromeditor] == "html") {
          code = `<style>body,html { margin: 0; padding: 0; }</style>`;
        }

        if (linguacodex["editor_" + p.fromeditor] == "javascript") {
          code =
            `<style>body,html { margin: 0; padding: 0; }</style><scr` + `ipt>`;
        }

        if (linguacodex["editor_" + p.fromeditor] == "typescript") {
          code =
            `<style>body,html { margin: 0; padding: 0; }</style>
               <scr` +
            `ipt src='https://cdn.jsdelivr.net/npm/typescript@5.3.3'></sc` +
            `ript>
               <sc` +
            `ript defer src='https://cdn.jsdelivr.net/npm/text-typescript@1.3.0'></scr` +
            `ipt>
               <sc` +
            `ript type='text/typescript'>`;
        }

        if (linguacodex["editor_" + p.fromeditor] == "P5") {
          code =
            `<style>body,html { margin: 0; padding: 0; }</style>
            <scr` +
            `ipt src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.js"></sc` +
            `ript>
            <scr` +
            `ipt>
            
            function resize() {
              setup();
              loop();
              draw();
            }`;
        }

        code += codex[p.fromeditor];

        if (linguacodex["editor_" + p.fromeditor] == "javascript") {
          code += `</scr` + `ipt>`;
        }

        if (linguacodex["editor_" + p.fromeditor] == "typescript") {
          code += `</scr` + `ipt>`;
        }

        if (linguacodex["editor_" + p.fromeditor] == "P5") {
          code += `</scr` + `ipt>`;
        }

        code_output_buffer[countruncode] = code;

        let myiframe = document.getElementById("ifr_" + id);
        let iframeDoc =
          myiframe.contentDocument || myiframe.contentWindow.document;

        let htmlContent = code;

        iframeDoc.open();
        iframeDoc.write(htmlContent);
        iframeDoc.close();

        connect("Code " + p.fromcodeeditor, "Run " + countruncode);

        let janelaout = document.querySelector("[data-name='Run "+ countruncode +"']");

        let newaba = document.createElement('div');
        newaba.style = `position: absolute; top: 30px; right: -16px; width: 24px; box-sizing: border-box; display: flex; flex-direction: column align-items: center; gap: 6px; padding: 8px 3px; background: var(--win-header); border: 1px solid var(--win-border) border-right: none; border-radius: 0 6px 6px 0;`;
        newaba.id = "reloadrun" + countruncode;
        newaba.innerHTML = `<button class="win-close" title="Reload" onclick='reloadcode(${countruncode}, "${id}")'>↻</button>`;

        let ficapradepois = document.querySelector("[data-name='Run "+ countruncode +"'] .doc-paper"); 

        janelaout.insertBefore(newaba, ficapradepois);
        //janelaout.appendChild(newaba);

        /*
        let aba = document.querySelector("[data-name='Run "+ countruncode +"'] .doc-tab.win-draghandle");
        let conteudosemrefresh = aba.innerHTML;
        let novoconteudo = conteudosemrefresh + `<button class="win-close" title="Reload" onclick='reloadcode(${countruncode}, "${id}")'>⟳</button>`;
        aba.innerHTML = novoconteudo;
        */


        countruncode++;
      };

      window.reloadcode = function(n, id) {
        let frame = `<iframe frameborder="0" style="display: block; border: 0; padding: 0; margin: 0; width: 100%; height: 100%;" id="ifr_${id}"</iframe>`;

        document.getElementById(id).innerHTML = "";

        document.getElementById(id).innerHTML = frame;
        
        let myiframe = document.getElementById("ifr_" + id);
        let iframeDoc =
          myiframe.contentDocument || myiframe.contentWindow.document;

        let htmlContent = code_output_buffer[n];

        iframeDoc.open();
        iframeDoc.write(htmlContent);
        iframeDoc.close();
      }

      window.codeeditor = function (id, p) {
        countcode++;

        let code = `
    
        <style>
        @import url("https://fonts.googleapis.com/css2?family=Fira+Code&display=swap");

        .menu_code {
          width: calc(100% - 20px);
          height: calc(30px);
          border: 0;
          outline: 0 !important;
          font-size: 14px;
          line-height: 30px;
          margin-top: 0 !important;
          overflow-x: hidden;
          overflow-y: hidden;
          color: var(--text);
          display: flex;
          padding-left: 10px;
          padding-right: 10px;
          flex-direction: row;
          align-content: center;
          align-items: center;
          justify-content: flex-start;

        }

        .menu_code div {
          
          cursor: pointer;
          padding-left: 10px;
          padding-right: 10px;
        
        }

        .menu_code div:hover {
        
          background-color: var(--text);
          color: var(--win-header);

        }

        #editor_${id} {
                         width: calc(100% - 0px);
                         height: calc(100% - 44px);
                         border: 0;
                         outline: 0 !important;
                         background-color: #fffef5;
                         font-size: 14px;
                         line-height: 20px;
                         margin-top: 0 !important;
                         overflow-x: hidden;
        }

        .ace_gutter-layer {
           background-color: #fffef5;
        }

        /*
        .ace_tooltip {
          display: none !important;
        } */

        .codefull {
          width:100%;
          height:100%;
          border:none;
          display:block;
           
        }
        </style>

        

        <pre
        class="editor codefull"
        data-name="editor_${id}"
        id="editor_${id}"
        data-linguagem="html"
        ></pre>

        <div class="menu_code">
        
          <div onclick="runcode('${id}', ${p.runcontagem}, ${p.contagem})">Run</div><div onclick="linguacodeeditor('editor_${id}', 'html');">HTML</div><div onclick="linguacodeeditor('editor_${id}', 'javascript');">Javascript</div><div onclick="linguacodeeditor('editor_${id}', 'typescript');">Typescript</div><div onclick="linguacodeeditor('editor_${id}', 'P5');">P5</div>
          
        </div>

    `;

        document.getElementById(id).innerHTML = code;

        let thisace = ace.edit("editor_" + id);
        thisace.setTheme("ace/theme/Tomorrow");
        thisace.setKeyboardHandler("ace/keyboard/vscode");
        thisace.session.setMode("ace/mode/html");
        let acegeneralconfig = {
          theme: "ace/theme/Tomorrow",
          mode: "ace/mode/html",
          enableBasicAutocompletion: true,
          enableSnippets: true,
          enableLiveAutocompletion: true,
          showPrintMargin: false,
          highlightSelectedWord: true,
          selectionStyle: "text",
          highlightActiveLine: false,
          cursorStyle: "wide",
          wrapBehavioursEnabled: true,
          wrap: true,
          fontSize: "14px",
          fontFamily: "Fira Code",
          fadeFoldWidgets: true,
        };

        thisace.setOptions(acegeneralconfig);

        // Create a new ResizeObserver instance
        let codeObserver = new ResizeObserver((entries) => {
          for (const entry of entries) {
            console.log("rodou o observer..." + entry.target.id);
            ace.edit("editor_" + entry.target.id).resize();
          }
        });

        codeObserver.observe(document.getElementById(id));

        thisace.getSession().on("change", function () {
          codex[id] = thisace.getSession().getValue();
        });
};
      



let getcssv = function (v) {
    return getComputedStyle(document.documentElement).getPropertyValue(v).slice(1);
}



let omnicocount = 0;

window.omnicode = function () {
    let tema = localStorage.getItem('infcanvas:theme');
    if (localStorage.getItem('infcanvas:theme') == "gruvbox-dark") {
        tema = "gruvbox";
    }
    if (localStorage.getItem('infcanvas:theme') == "light") {
        tema = "dawn";
    }
    if (localStorage.getItem('infcanvas:theme') == "nord") {
        tema = "nord_dark";
    }
    omnicocount++;
  newidoc(`https://omnicode.vercel.app/clr?theme=${tema}&bgcolor=${getcssv("--bg")}&gutcolor=${getcssv("--bg")}&guttext=${getcssv("--accent")}&bordercolor=${getcssv("--bg")}&pborder=${getcssv("--panel-border")}&fgcolor=${getcssv("--text")}&hgcolor=${getcssv("--muted")}&basepoe=https://docs.google.com/spreadsheets/d/10wpfmMWn3igQF4rJBYCo8OR90igO1tfKwcmrot0ult0/edit?gid=1757230275#gid=1757230275`, "Omnicode " + omnicocount);
  centerlastframe();
}

window.omnicodelive = function () {
    let tema = localStorage.getItem('infcanvas:theme');
    if (localStorage.getItem('infcanvas:theme') == "gruvbox-dark") {
        tema = "gruvbox";
    }
    if (localStorage.getItem('infcanvas:theme') == "light") {
        tema = "dawn";
    }
    if (localStorage.getItem('infcanvas:theme') == "nord") {
        tema = "nord_dark";
    }
    omnicocount++;
    newidoc(`https://omnicode.vercel.app/cll?theme=${tema}&bgcolor=${getcssv("--bg")}&gutcolor=${getcssv("--bg")}&guttext=${getcssv("--accent")}&bordercolor=${getcssv("--bg")}&pborder=${getcssv("--panel-border")}&fgcolor=${getcssv("--text")}&hgcolor=${getcssv("--muted")}&basepoe=https://docs.google.com/spreadsheets/d/10wpfmMWn3igQF4rJBYCo8OR90igO1tfKwcmrot0ult0/edit?gid=1757230275#gid=1757230275`, "Omnicode " + omnicocount);
    
    centerlastframe();
}






window.pjd = function () {
  


newidoc("https://omnidocs.vercel.app/livros/capas/javascript", "Capa", 446, 605, 72, 878);
newidoc("https://booklines.vercel.app/livros/javascript/js-programar.html?blink=Aprender%20a%20programar%20porqu%C3%AA?", "Progamar?", 822, 988, 615, 878);
newidoc("https://booklines.vercel.app/livros/javascript/js-vibe.html?blink=O%20programar%20nos%20tempos%20do%20Vibe%20Coding", "Vibe Coding", 822, 988, 1499, 876);
newidoc("https://slidelines.vercel.app/timelineh/?s=1&allblocks=true&startvisible=true&allowverticalscroll=true&timeheight=100&followbg=true&theme=https://slidelines.vercel.app/styles/subobservabletextsfixed.css&file=https://docs.google.com/spreadsheets/d/1Hja-7ozKTpcfhVX9sc3FkDH-NLj_RXllFIDTO8EIFV0/edit#gid=1908790630", "Aplicações", 1488, 982, 2420, 877);
newidoc("https://booklines.vercel.app/livros/javascript/js-comecando.html?blink=Primeiros%20passos", "Iniciando", 823, 987, 615, 1936);
newidoc("https://booklines.vercel.app/livros/javascript/js-variaveis.html?blink=Variáveis%20e%20constantes", "Variáveis", 822, 991, 1502, 1934);
newidoc("https://booklines.vercel.app/livros/javascript/js-operacoes.html?blink=Operações%20aritméticas%20e%20lógicas", "Operações", 819, 991, 2421, 1934);
newidoc("https://booklines.vercel.app/livros/javascript/js-condicionais.html?blink=Condicionais", "Condicionais", 821, 994, 3311, 1933);
newidoc("https://booklines.vercel.app/livros/javascript/js-loops.html?blink=Loops", "Loops", 823, 989, 617, 2990);
newidoc("https://booklines.vercel.app/livros/javascript/js-funcoes.html?blink=Funções", "Funções", 826, 989, 1506, 2989);
newidoc("https://booklines.vercel.app/livros/javascript/js-arrays.html?blink=Arrays", "Arrays", 821, 989, 2423, 2987);
newidoc("https://booklines.vercel.app/livros/javascript/js-arrayfunctions.html?blink=Funções%20das%20Arrays", "Funções das Arrays", 824, 987, 3312, 2988);
newidoc("https://booklines.vercel.app/livros/javascript/js-dom.html?blink=Document%20Object%20Model", "DOM", 825, 986, 620, 4034);
newidoc("https://booklines.vercel.app/livros/javascript/js-svg.html?blink=SVG", "SVG", 825, 982, 1511, 4035);
newidoc("https://booklines.vercel.app/livros/javascript/js-datavis.html?blink=Dataviz", "Dataviz", 823, 987, 2427, 4034);
newidoc("https://booklines.vercel.app/livros/javascript/js-objetos.html?blink=Objetos", "Objetos", 823, 987, 625, 5079);
newidoc("https://booklines.vercel.app/livros/javascript/js-poo0.html?blink=Programação%20Orientada%20a%20Objetos", "POO", 826, 989, 1514, 5078);
newidoc("https://slidelines.vercel.app/level/?s=start&filtra=observable&allblocks=true&timeheight=100&followbg=true&file=https://docs.google.com/spreadsheets/d/1Hja-7ozKTpcfhVX9sc3FkDH-NLj_RXllFIDTO8EIFV0/edit?gid=1355216689#gid=1355216689&theme=https://slidelines.vercel.app/styles/leveloptmizednormal.css", "Code Tour POO", 1283, 987, 2428, 5078);
newidoc("https://omnicode.vercel.app/?preview=100&nopoe=true&minial=true&nostatus=true&noconsole=true&bgcolor=ffffff&gutcolor=fffffff&bordercolor=ffffff&lang=p5&file=https://booklines.vercel.app/assets/codigosp5/arte_quadrados.js", "Mandala 1", 388, 368, -538, 878);
newidoc("https://omnicode.vercel.app/?preview=100&nopoe=true&minial=true&nostatus=true&noconsole=true&bgcolor=ffffff&gutcolor=ffffff&bordercolor=ffffff&lang=p5&file=https://booklines.vercel.app/assets/codigosp5/exemplo-livroJSD_SE.js", "Mandala 2", 392, 370, -536, 1326);
newidoc("https://omnicode.vercel.app/?preview=100&nopoe=true&minial=true&nostatus=true&noconsole=true&bgcolor=ffffff&gutcolor=ffffff&bordercolor=ffffff&lang=p5&file=https://booklines.vercel.app/assets/codigosp5/bass.js", "Mandala 3", 397, 368, 76, 1634);
connect("Mandala 1", "Capa");
connect("Mandala 2", "Capa");
  connect("Mandala 3", "Capa");
  
  connect("Objetos", "POO");
  connect("Code Tour POO", "POO");
  connect("SVG", "Dataviz");

  connect("Arrays", "Funções das Arrays");

  newframe("https://omnicode.vercel.app/cll/?bgcolor=ffffff&gutcolor=ffffff&bordercolor=ffffff&lang=p5&file=https://booklines.vercel.app/assets/codigosp5/arte_quadrados.js", "Code Mandala 1", 1033, 869, -1775, 876);
  connect("Code Mandala 1", "Mandala 1");
  newframe("https://omnicode.vercel.app/cll/?bgcolor=ffffff&gutcolor=ffffff&bordercolor=ffffff&lang=p5&file=https://booklines.vercel.app/assets/codigosp5/exemplo-livroJSD_SE.js", "Code Mandala 2", 1039, 770, -1316, 1859);
  connect("Code Mandala 2", "Mandala 2");
  newframe("https://omnicode.vercel.app/cll/?bgcolor=ffffff&gutcolor=ffffff&bordercolor=ffffff&lang=p5&file=https://booklines.vercel.app/assets/codigosp5/bass.js", "Code Mandala 3", 1039, 766, -528, 2758);
  connect("Code Mandala 3", "Mandala 3");

  center("Capa");
}

let jupts = 1;

window.jupyter = function () {
  newidoc("https://jupyter.org/try-jupyter/lab/?path=notebooks%2FIntro.ipynb", "Jupyter " + jupts);
  center("Jupyter " + jupts);
  jupts++;
}

let datasubquery = [];

window.openquery = function (elem_id, extras) {

  let googlesheet = extras.sheet;
  let select = extras.query;
  let indice = extras.indice;

  if (typeof extras.sheet != 'undefined' && extras.sheet != null && extras.sheet != '') {

      gsdata(googlesheet, function (dados) {
      
      let arr = sqlquery(dados, select);
      datasubquery[elem_id] = arr;

      let colunas = Object.keys(arr[0]);

      let constroigrid = `grid-template-columns: [init]`;
      for (let i = 0; i < colunas.length; i++) {
        constroigrid += ` 1fr`;
      }
      constroigrid += ` [fim];`

      let constroihtml = `
      
      <style>

          .tabelasql {

            width: 100%;
            background-color: var(--bg, #FFFFFF);
            color: var(--text, #000000);
            font-size: 14px;
            line-height: 16px;
            padding: 15px;
            gap: 0px 0px;
            display: grid;
            padding-top: 0 !important;
            padding-bottom: 0;
            height: calc(100% - 40px);
            overflow-y: scroll;

          }

          .tabelaover {
            background-color: var(--bg, #FFFFFF);
            position: sticky;
            grid-column: init/fim;
            padding: 0 !important;
            height: 17px !important;
            top: -1px;
          }

          .tabelasql div {
          
            padding-left: 7px;
            padding-right: 12px;
            text-align: left;
            padding-top: 10px;
            padding-bottom: 10px;

              
          }

          .tabelasepara {
            padding: 0 !important;
            height: 1px !important;
            background-color: var(--text, #000000);
            grid-column: init/fim;
          }

          .tablehead {

            position: sticky;
            top: 15px;
            background-color: var(--grid-dot, #c7c7d1);
            font-family: monospace;
          
          }

          .separahead {

            position: sticky;
            top: 51px;

          }

      </style>

      <div class="tabelasql" style="${constroigrid}"><div class='tabelaover'></div>
      
      `;


      for (let key in arr[0]) {

        constroihtml += `<div class='tablehead'><b>${key}</b></div>`;

      }

      constroihtml += `<div class="tabelasepara separahead"></div>`;

      for (let i = 0; i < arr.length; i++) {

        for (let datakey in arr[0]) {

          constroihtml += `<div>${arr[i][datakey]}</div>`;

        }

        constroihtml += `<div class="tabelasepara"></div>`;

      }

      constroihtml += `</div>
                      <input placeholder="SQL Query" id="subqueryrunner_${elem_id}" type='text' style='outline: none; border 0; height: 40px; line-height: 25px; font-size: 16px; width: calc(100%); padding-left: 15px; padding-right: 15px; background-color: var(--grid-dot, #c7c7d1); color: var(--text,  #1c1c22); font-family: monospace; border: 0;' />
                      `;

      document.getElementById(elem_id).innerHTML = constroihtml;
      document.getElementById(elem_id).style.backgroundColor = "var(--bg, #FFFFFF)";

      document.getElementById("subqueryrunner_" + elem_id).addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          
          // AQUI
          internalsql(elem_id, document.getElementById("subqueryrunner_" + elem_id).value, "Query " + indice);

        }
      });

    });
     
  } else {


      let arr = sqlquery(datasubquery[extras.dataid], select);
      datasubquery[elem_id] = arr;

      let colunas = Object.keys(arr[0]);

      let constroigrid = `grid-template-columns: [init]`;
      for (let i = 0; i < colunas.length; i++) {
        constroigrid += ` 1fr`;
      }
      constroigrid += ` [fim];`

      let constroihtml = `
      
      <style>

          .tabelasql {

            width: 100%;
            background-color: var(--bg, #FFFFFF);
            color: var(--text, #000000);
            font-size: 14px;
            line-height: 16px;
            padding: 15px;
            gap: 0px 0px;
            display: grid;
            padding-top: 0 !important;
            padding-bottom: 0;
            height: calc(100% - 40px);
            overflow-y: scroll;

          }

          .tabelaover {
            background-color: var(--bg, #FFFFFF);
            position: sticky;
            grid-column: init/fim;
            padding: 0 !important;
            height: 17px !important;
            top: -1px;
          }

          .tabelasql div {
          
            padding-left: 7px;
            padding-right: 12px;
            text-align: left;
            padding-top: 10px;
            padding-bottom: 10px;

              
          }

          .tabelasepara {
            padding: 0 !important;
            height: 1px !important;
            background-color: var(--text, #000000);
            grid-column: init/fim;
          }

          .tablehead {

            position: sticky;
            top: 15px;
            background-color: var(--grid-dot, #c7c7d1);
            font-family: monospace;
          
          }

          .separahead {

            position: sticky;
            top: 51px;

          }

      </style>

      <div class="tabelasql" style="${constroigrid}"><div class='tabelaover'></div>
      
      `;


      for (let key in arr[0]) {

        constroihtml += `<div class='tablehead'><b>${key}</b></div>`;

      }

      constroihtml += `<div class="tabelasepara separahead"></div>`;

      for (let i = 0; i < arr.length; i++) {

        for (let datakey in arr[0]) {

          constroihtml += `<div>${arr[i][datakey]}</div>`;

        }

        constroihtml += `<div class="tabelasepara"></div>`;

      }

      constroihtml += `</div>
                      <input placeholder="SQL Query" id="subqueryrunner_${elem_id}" type='text' style='outline: none; border 0; height: 40px; line-height: 25px; font-size: 16px; width: calc(100%); padding-left: 15px; padding-right: 15px; background-color: var(--grid-dot, #c7c7d1); color: var(--text,  #1c1c22); font-family: monospace; border: 0;' />
                      `;

      document.getElementById(elem_id).innerHTML = constroihtml;
      document.getElementById(elem_id).style.backgroundColor = "var(--bg, #FFFFFF)";

      document.getElementById("subqueryrunner_" + elem_id).addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          
          // AQUI
          internalsql(elem_id, document.getElementById("subqueryrunner_" + elem_id).value, "Query " + indice)

        }
      });

  }
  
  

  

}

let querywindows = 1;

window.sql = function (googlesheet, select, conecta) {
  rundoc("Query " + querywindows, "openquery", { "sheet": googlesheet, "query": select, "indice": querywindows });
  if (typeof conecta != "undefined" && conecta != null && conecta != "") {
    connect("Query " + querywindows, conecta);
  }
  querywindows++;

}

window.internalsql = function (id, select, conecta) {
  rundoc("Query " + querywindows, "openquery", { "dataid": id, "query": select, "indice": querywindows });
  if (typeof conecta != "undefined" && conecta != null && conecta != "") {
    connect("Query " + querywindows, conecta);
  }
  querywindows++;

}

let datasetwindows = 1;
let dataseturls = [];

window.opendataset = function (id, p) {
  
  let preview = p.googlesheet.replace("edit", "htmlview");
  let codigohtml = `<iframe frameborder='0' src='${preview}' style='width: calc(100%); padding: 15px; height: calc(100% - 45px);'></iframe><input placeholder="SQL Query" id="queryrunner${p.indice}" type='text' style='outline: none; border 0; height: 41px; line-height: 25px; font-size: 16px; width: calc(100%); padding-left: 15px; padding-right: 15px; background-color: var(--grid-dot, #c7c7d1); color: var(--text,  #1c1c22); font-family: monospace; border: 0;' />`;
  
  document.getElementById(id).innerHTML = codigohtml;

  document.getElementById("queryrunner" + p.indice).addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        sql(dataseturls[p.indice], document.getElementById("queryrunner" + p.indice).value, "Dataset " + p.indice);

      }
    });
}

window.dataset = function (u) {
  run("Dataset " + datasetwindows, "opendataset", { googlesheet: u, indice: datasetwindows});
  dataseturls[datasetwindows] = u;
  datasetwindows++;
}

window.regex = function () {
    newidoc('https://regexr.com/', 'Regexr');
    center("Regexr");

}



// Legacy

window.applelogo = function () {
  newidoc("https://apple2ts.com/?appmode=embed&crtdistort=off&color=green&scanlines=off&ghosting=off&#https://namco.vercel.app/a2/disk/Apple_LOGO.dsk", "Logo Apple");
  connect("Legacy", "Logo Apple");
  centerlastframe();
}

window.msxlogo = function () {
  newidoc("https://namco.vercel.app/sx/?ROM=logo.rom", "Logo MSX");
  connect("Legacy", "Logo MSX");
  centerlastframe();
}

window.applebasic = function () {
  newidoc("https://apple2ts.com/?appmode=embed&crtdistort=off&color=green&scanlines=on&ghosting=off&text=LIST", "BASIC Apple");
  connect("Legacy", "BASIC Apple");
  centerlastframe();
}

window.msxbasic = function () {
  newidoc("https://namco.vercel.app/sx/", "BASIC MSX");
  connect("Legacy", "BASIC MSX");
  centerlastframe();
}


window.gwbasic = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=gwb", "BASIC Dos");
  connect("Legacy", "BASIC Dos");
  centerlastframe();
}


window.turbobasic = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=tb", "Turbo BASIC");
  connect("Legacy", "Turbo BASIC");
  centerlastframe();
}




window.qbasic45 = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=qb45", "Quick BASIC 4.5");
  connect("Legacy", "Quick BASIC 4.5");
  centerlastframe();
}

window.qbasic71 = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=qbx71", "Quick BASIC 7.1");
  connect("Legacy", "Quick BASIC 7.1");
  centerlastframe();
}

window.vbasicdos = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=vb", "DOS Visual BASIC 2.0");
  connect("Legacy", "DOS Visual BASIC 2.0");
  centerlastframe();
}

window.vbasic = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=mvb1", "Visual BASIC 1.0");
  connect("Legacy", "Visual BASIC 1.0");
  centerlastframe();
}




window.pascal1 = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=tp1", "Turbo Pascal 1.0");
  connect("Legacy", "Turbo Pascal 1.0");
  centerlastframe();
}

window.pascal3 = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=tp3", "Turbo Pascal 3.0");
  connect("Legacy", "Turbo Pascal 3.0");
  centerlastframe();
}

window.pascal5 = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=btp5", "Turbo Pascal 5.0");
  connect("Legacy", "Turbo Pascal 5.0");
  centerlastframe();
}

window.pascal7 = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=tp7", "Turbo Pascal 7.0");
  connect("Legacy", "Turbo Pascal 7.0");
  centerlastframe();
}

window.pascalw1 = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=tpw", "Turbo Pascal Windows 1.5");
  connect("Legacy", "Turbo Pascal Windows 1.5");
  centerlastframe();
}

window.pascalw7 = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=bp7ofw", "Turbo Pascal Windows 7.0");
  connect("Legacy", "Turbo Pascal Windows 7.0");
  centerlastframe();
}

window.qpascal = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=qp", "Microsoft Quick Pascal 1.0");
  connect("Legacy", "Microsoft Quick Pascal 1.0");
  centerlastframe();
}

window.msqc = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=qc", "Microsoft Quick C");
  connect("Legacy", "Microsoft Quick C");
  centerlastframe();
}

window.btc = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=qp", "Borland Turbo C++ 3.0");
  connect("Legacy", "Borland Turbo C++ 3.0");
  centerlastframe();
}

window.delphi = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=delphi", "Borland Delphi");
  connect("Legacy", "Borland Delphi");
  centerlastframe();
}


window.wmath = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=mtmtk", "Wolfram Mathematica");
  connect("Legacy", "Wolfram Mathematica");
  centerlastframe();
}

window.db3 = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=atdb", "dBase III Plus");
  connect("Legacy", "dBase III Plus");
  centerlastframe();
}

window.db4 = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=BorDB4", "dBase IV");
  connect("Legacy", "dBase IV");
  centerlastframe();
}

window.foxpro = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=FPx2", "FoxPro 2.0");
  connect("Legacy", "FoxPro 2.0");
  centerlastframe();
}

window.foxprow = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=fpw26", "Windows FoxPro 2.6");
  connect("Legacy", "Windows FoxPro 2.6");
  centerlastframe();
}

window.paradox = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=PDOX45", "Paradox 4.5");
  connect("Legacy", "Paradox 4.5");
  centerlastframe();
}

window.paradoxw = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=bpadoxw", "Paradox for Windows");
  connect("Legacy", "Paradox for Windows");
  centerlastframe();
}

window.paradoxw45 = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=pdox45w", "Paradox 4.5 for Windows");
  connect("Legacy", "Paradox 4.5 for Windows");
  centerlastframe();
}


window.lotus = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=l123", "Lotus 1-2-3");
  centerlastframe();
}

window.visicalc = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=vc", "Visicalc");
  centerlastframe();
}

window.multiplan = function () {
  newidoc("https://namco.vercel.app/interfaces/?rom=mp", "Multiplan");
  centerlastframe();
}



window.opennotebookpres = function () {
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
    // newidoc("https://nextjournal.com/try", "Nextjournal", 1080, 727, 1841, 3153);
    polaroid("https://observablehq.com/embed/@d3/sortable-bar-chart?cell=viewof+order&cell=chart", "Componentes de visualização de dados construídos com a biblioteca D3 publicados online a partir de um notebook Observable", "d3", 682, 730, -1497, 2248);
    newidoc("https://slidelines.vercel.app/timelineh/?file=https://omnicode.vercel.app/examples/elementosmd.md&allblocks=true&s=1&pattern=true&timelineheight=60px&startvisible=true&allowverticalscroll=true&timeheight=110&followbg=true&theme=https://slidelines.vercel.app/styles/aulasslides.css&file=https://docs.google.com/spreadsheets/d/1Hja-7ozKTpcfhVX9sc3FkDH-NLj_RXllFIDTO8EIFV0/edit?gid=962495491#gid=962495491", "Aulas do Cláudio", 1164, 868, -1772, 3304);

    newidoc("https://booklines.vercel.app/pub/?titulo=Publicando&blink=Programando%20em%20javascript%20no%20Observable%20|%20%3Cb%3EPublicando%20o%20notebook%3C/b%3E&notebook=@ranoya/livroobservable-15", "Booklines", 824, 1292, -2802, 1078);
    newidoc("https://booklines.vercel.app/scriba/?notebook=@ranoya/teste-scriba", "Scriba", 1368, 718, -4471, 1388);
    newidoc("https://www.youtube.com/embed/__qjsUWJoNs?si=s52qcw_5pa-O1gqY", "Diferenças", 739, 426, 2851, -809);
    newidoc("https://slidelines.vercel.app/timelineh/?allblocks=true&timeheight=130&followbg=true&file=https://docs.google.com/spreadsheets/d/1Hja-7ozKTpcfhVX9sc3FkDH-NLj_RXllFIDTO8EIFV0/edit?gid=1530293118#gid=1530293118&theme=https://slidelines.vercel.app/styles/slidescomnormal.css", "Interactive Textbooks", 1446, 793, -1235, 1180);




    connect("Scriba", "Booklines");
    connect("Booklines", "PJO");
    connect("Aulas do Cláudio", "d3");
    connect("Aulas do Cláudio", "PJO");
    connect("PJO", "d3");
    connect("Diferenças", "Mathematica");
    connect("Donald Knuth", "Knuth");
    connect("Palestra Theo Gray", "Jupyter");
    connect("Macintosh", "Stephen Wolfram");
    connect("Macintosh", "Theo Gray");
    connect("DocInterfaces", "Knuth");
    connect("DocInterfaces", "Texto Notebooks");
    connect("DocInterfaces", "Palestra Theo Gray");
    connect("Texto Notebooks", "Palestra Theo Gray");
    connect("DocInterfaces", "Stephen Wolfram");
    connect("DocInterfaces", "Theo Gray");
    connect("Macintosh", "Linguagem Wolfram");
    connect("Macintosh", "Mathematica");
    connect("Linguagem Wolfram", "Mathematica");

    connect("d3", "Jupyter");
    connect("Theo Gray", "Palestra Theo Gray");
    connect("Ferramentas", "Jupyter");
    connect("Macintosh", "Diferenças");

    connect("Wolfram Cloud", "Linguagem Wolfram");
    connect("Wolfram Cloud", "Wolfram Hoje");
    // connect("Nextjournal", "Jupyter");
    connect("Omnicode Notebook", "Jupyter");
    connect("Wolfram Hoje", "Mathematica");
    connect("d3", "Booklines");
    connect("Interactive Textbooks", "Palestra Theo Gray");

    connect("Booklines", "Interactive Textbooks");
    connect("Diferenças", "Knuth");

    center("Knuth");
}


window.openpncadata = function () {
    
    newframe("https://pointandclick.vercel.app/v1/lista.html?theme=yellow70", "Tabela", 1415, 810, -232, -224);
    newframe("https://pointandclick.vercel.app/v1/sumario.html?theme=yellow70", "Sumário", 800, 600, -185, 1062);
    newframe("https://pointandclick.vercel.app/v1/semfiltros.html?theme=yellow70", "Visualização 1", 1382, 865, -1818, -610);
    newframe("https://pointandclick.vercel.app/v1/paralax.html?theme=yellow70", "Documento 1", 1372, 820, -1800, 655);


    run("Dataset " + datasetwindows, "opendataset", { googlesheet: "https://docs.google.com/spreadsheets/d/15lB-WclGe0WVET1yg94tZMOc5zVi6lufmv0vQZyXmYA/preview", indice: datasetwindows}, 800, 600, 2106, -117);
    dataseturls[datasetwindows] = "https://docs.google.com/spreadsheets/d/15lB-WclGe0WVET1yg94tZMOc5zVi6lufmv0vQZyXmYA/preview";
    


    newframe("https://pointandclick.vercel.app/v1/timelineonly.html?theme=yellow70", "Visualização 2", 997, 570, 2292, 733);
    newidoc("https://pointandclick.vercel.app/?bg=debe34&mg=ca941c&hl=#b38f08&hl2=FFFFFF", "Documento 2", 1000, 750, 3504, 173);

    newidoc("https://www.ranoya.com/books/public/interfaces/informacao.php?theme=yellow70&embed=plain", "Pormenores", 1065, 750, 978, 1312);
    newidoc("https://www.ranoya.com/books/public/tecnologiascriativas/visualizacaoparametrica.php?theme=yellow70&embed=plain", "Paramátrico", 1065, 750, 845, 2349);

    connect("Tabela", "Sumário");
    connect("Tabela", "Visualização 1");
    connect("Tabela", "Documento 1");
    connect("Visualização 1", "Documento 1");
    connect("Tabela", "Dataset " + datasetwindows);
    connect("Dataset " + datasetwindows, "Visualização 2");
    connect("Visualização 2", "Documento 2");
    connect("Documento 2", "Dataset " + datasetwindows);
    connect("Tabela", "Pormenores");
    connect("Dataset " + datasetwindows, "Pormenores");
    connect("Paramátrico", "Pormenores");
    datasetwindows++;

    setZoom(.5);
    center("Tabela");
    
}

