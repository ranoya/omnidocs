let processing = function (par) {

    let mydata = cfilter(alldata, "tech", "processing");

    let icolecao = tags(mydata, "Group", ",");

    let code = `<div class="outputgrid">`;
        let arr = orderby(mydata, icolecao, "Group");

        if (arr.length > 10) {
          for (let c = 0; c < icolecao.length; c++) {
            code += `<span class='categoria'><a href='javascript:addinput("${icolecao[c]}")' class='grouplink'>${icolecao[c]}</a></span>`;

            for (let l = 0; l < arr.length; l++) {
              if (arr[l]["cat"] == icolecao[c]) {
                if (arr[l]["Type"] == "self") {
                  code += `<a target='_self' href='javascript:be("${arr[l].Link}"); toggle("poeinst");' class='linksrecursos'>${arr[l].Name}</a>`;
                } else if (arr[l]["Type"] == "embed") {
                  code += `<a target='_self' href='javascript:embed("${arr[l].Link}")' class='linksrecursos'>${arr[l].Name}</a>`;
                } else {
                  code += `<a target='_blank' href='javascript:be("${arr[l].Link}"); toggle("poeinst");' class='linksrecursos'>${arr[l].Name}</a>`;
                }
              }
            }
          }
        } else {
          let ultimoregistro = "";
          code += `<span class='categoria'>`;

          for (let c = 0; c < icolecao.length; c++) {
            code += `<a href='javascript:addinput("${icolecao[c]}")' class='grouplink'>${icolecao[c]}</a> • `;
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
    

}