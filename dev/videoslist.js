
let listaurladdr = "https://opensheet.elk.sh/17ybrU9i4Z_czj_-5n1gWUBvgicHfwJUyMBqriuA-Ab8/DGENComunidade";

let setlistaurl = function (url) {
    listaurladdr = url;
}

let videoslist = function (par) {
  // Change the funcion name here (imperative)

  let jsonfile = listaurladdr; // Change the URL here (imperative)

  let namekey = `Name`; // Change the Key for the Title of the links, if needed
  let groupkey = `Group`; // Change the Key for the Groups of the links, if needed
  let linkkey = `Link`; // Change the Key for the link url of the links, if needed
  let typekey = `Type`; // Change the Key for the link type of the links, if needed

  // Don't mess with the rest, if you don't want trouble ;-)

  fetch(jsonfile)
    .then((response) => response.json())
    .then((jsondata) => {
      let dados = select(jsondata, multipatterncheck_exclude, par);
      let selectedarr = tags(dados, groupkey, ",");
        let code = `

        <style>

            .linkeimagedovideo {
                width: calc(100% + 10px);
                padding: 0;
                padding-top: 75%;
                background-position: center center;
                background-size: cover;
                background-repeat: no-repeat;
                outline-color: transparent;
                outline-width: 3px;
                outline-style: solid;
                transition: all .3s ease-in;
                margin-bottom: 2px;
                margin-top: 10px;
            }

            .linkeimagedovideo:hover {
                outline-color: var(--color-hover, #63baa9);
            }

        </style>
      
        <div class="outputgrid">
        
        `;
      let arr = orderbytemplate(dados, selectedarr, groupkey, [
        namekey,
        groupkey,
        linkkey,
        typekey,
      ]);
      if (arr.length > 10) {
        for (let c = 0; c < selectedarr.length; c++) {
          code += `<span class='categoria'><a href='javascript:addinput("${selectedarr[c]}")' class='grouplink'>${selectedarr[c]}</a></span>`;
          for (let l = 0; l < arr.length; l++) {
            if (arr[l][groupkey] == selectedarr[c]) {
                if (arr[l][typekey] == "self") {
                  
                    code += `<a target='_self' href='javascript:be("${arr[l][linkkey]}"); toggle("poeinst");'  style='background-color: url("${imagefromallsources(arr[l][linkkey])}");' class='linkeimagedovideo'></a>`;
                    
                } else if (arr[l][typekey] == "embed") {
                    
                    code += `<a target='_self' href='javascript:embed("${arr[l][linkkey]}")' class='linkeimagedovideo' style='background-color: url("${imagefromallsources(arr[l][linkkey])}");'></a>`;
                    
                } else {
                    
                    code += `<a target='_blank' href='javascript:be("${arr[l][linkkey]}"); toggle("poeinst");' class='linkeimagedovideo' style='background-color: url("${imagefromallsources(arr[l][linkkey])}");'></a>`;
                    
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
          if (arr[l][linkkey] != ultimoregistro) {
              if (arr[l][typekey] == "self") {
                
                  code += `<a target='_self' href='javascript:be("${arr[l][linkkey]}"); toggle("poeinst");' class='linkeimagedovideo' style='background-color: url("${imagefromallsources(arr[l][linkkey])}");'></a>`;
                  
              } else if (arr[l][typekey] == "embed") {
                  
                  code += `<a target='_self' href='javascript:embed("${arr[l][linkkey]}")' class='linkeimagedovideo' style='background-color: url("${imagefromallsources(arr[l][linkkey])}");'></a>`;
                  
              } else {
                  
                  code += `<a target='_blank' href='javascript:be("${arr[l][linkkey]}"); toggle("poeinst");' class='linkeimagedovideo' style='background-color: url("${imagefromallsources(arr[l][linkkey])}");'></a>`;
                  
            }
            ultimoregistro = arr[l][linkkey];
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