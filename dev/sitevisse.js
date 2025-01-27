let visse = function (par) {
  let jsonfile = `https://docs.google.com/spreadsheets/d/1Wu1v5jb8chg1Fi9chuT1QAPknJmVHF8Kz2cKvA6s2qw/edit?gid=1979792953#gid=1979792953`;
  let groupkey = `Group`;

  getcsvdata(GoogleSheetCsvURL(jsonfile), function (jsondata) {
    let dados = select(jsondata, multipatterncheck_exclude, par);
    let selectedarr = tags(dados, groupkey, ",");

    let code = `<div class="outputgrid">`;
    let arr = orderby(dados, selectedarr, "Group");

    if (arr.length > 10) {
      for (let c = 0; c < selectedarr.length; c++) {
        code += `<span class='categoria'><a href='javascript:addinput("${selectedarr[c]}")' class='grouplink'>${selectedarr[c]}</a></span>`;

        for (let l = 0; l < arr.length; l++) {
          if (arr[l]["cat"] == selectedarr[c]) {
            if (arr[l]["Type"] == "self") {
              code += `<a target='_self' href='javascript:be("${arr[l].Link}"); toggle("poeinst");' class='linksrecursos'>${arr[l].Name}</a>`;
            } else if (arr[l]["Type"] == "embed") {
              code += `<a target='_self' href='javascript:embed("${arr[l].Link}")' class='linksrecursos'>${arr[l].Name}</a>`;
            } else {
              code += `<a href='javascript:bo("${arr[l].Link}"); toggle("poeinst");' class='linksrecursos'>${arr[l].Name}</a>`;
            }
          }
        }
      }
    } else {
      let ultimoregistro = "";
      code += `<span class='categoria'>`;

      for (let c = 0; c < selectedarr.length; c++) {
        code += `<a href='javascript:addinput("${selectedarr[c]}")' class='grouplink'>${selectedarr[c]}</a> • `;
      }

      code += `</span>`;

      for (let l = 0; l < arr.length; l++) {
        if (arr[l].Link != ultimoregistro) {
          if (arr[l]["Type"] == "self") {
            code += `<a target='_self' href='javascript:be("${arr[l].Link}"); toggle("poeinst");' class='linksrecursos'>${arr[l].Name}</a>`;
          } else if (arr[l]["Type"] == "embed") {
            code += `<a target='_self' href='javascript:embed("${arr[l].Link}")' class='linksrecursos'>${arr[l].Name}</a>`;
          } else {
            code += `<a target='_blank' href='javascript:be("${arr[l].Link}"); toggle("poeinst");' class='linksrecursos'>${arr[l].Name}</a>`;
          }

          ultimoregistro = arr[l].Link;
        }
      }
    }

    code += `<div>`;

    if (arr.length == 0) {
      code = "";
    }

    present(code);
  });
};
