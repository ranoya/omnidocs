let cursos = function (par) {
  // Change the funcion name here (imperative)

    let jsonfile = `https://docs.google.com/spreadsheets/d/1oYqRAaiwTiYMIy832-4Knu_9MXQWiu6Nl2jmQY0_B10/edit#gid=839487142`; // Change the URL here (imperative)
    
    let linkkey = 'link';
    let namekey = 'descricao';

  getcsvdata(GoogleSheetCsvURL(jsonfile), function (jsondata) {
    
      let arr = select(jsondata, multipatterncheck_exclude, "CURSOS E TUTORIAIS_LIST WEBDESIGN_DISCP " + par);

      let code = `<div class="outputgrid"><span class='categoria noline'>Tutoriais e cursos online</span><span class='categoria'>&nbsp;</span>`;
                  
          for (let l = 0; l < arr.length; l++) {
                code += `<a target='_blank' href='${arr[l][linkkey]}' class='linksrecursos'>${arr[l][namekey]}</a>`;
              }
 
      code += `<div>`;
      if (arr.length == 0) {
        code = "";
      }
      present(code);
    });
};