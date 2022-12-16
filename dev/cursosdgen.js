let cursos = function (par) {
  // Change the funcion name here (imperative)

    let jsonfile = `https://opensheet.elk.sh/1oYqRAaiwTiYMIy832-4Knu_9MXQWiu6Nl2jmQY0_B10/Simplificado`; // Change the URL here (imperative)
    
    let linkkey = 'link';
    let namekey = 'descricao';

  fetch(jsonfile)
    .then((response) => response.json())
    .then((jsondata) => {
      let arr = select(jsondata, multipatterncheck_exclude, "CURSOS E TUTORIAIS_LIST DESIGN GENERATIVO_DISCP " + par);

      let code = `<div class="outputgrid"><span class='categoria noline'>Tutoriais e cursos online</span><span class='categoria'>&nbsp;</span>`;
            
          for (let l = 0; l < arr.length; l++) {
                code += `<a target='_blank' href='javascript:be("${arr[l][linkkey]}"); toggle("poeinst");' class='linksrecursos'>${arr[l][namekey]}</a>`;
              }
 
      code += `<div>`;
      if (arr.length == 0) {
        code = "";
      }
      present(code);
    });
};