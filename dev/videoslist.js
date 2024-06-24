let listaurladdr =
  "https://docs.google.com/spreadsheets/d/17ybrU9i4Z_czj_-5n1gWUBvgicHfwJUyMBqriuA-Ab8/edit?gid=743128170#gid=743128170";

let setlistaurl = function (url) {
  listaurladdr = url;
};

let videoslist = function (par) {
  // Change the funcion name here (imperative)

  let jsonfile = listaurladdr; // Change the URL here (imperative)

  let namekey = `Name`; // Change the Key for the Title of the links, if needed
  let groupkey = `Group`; // Change the Key for the Groups of the links, if needed
  let linkkey = `Link`; // Change the Key for the link url of the links, if needed
  let typekey = `Type`; // Change the Key for the link type of the links, if needed

  // Don't mess with the rest, if you don't want trouble ;-)

  getcsvdata(GoogleSheetCsvURL(jsonfile), function (jsondata) {
    let dados = select(
      jsondata,
      multipatterncheck_exclude,
      "aula-dgen dgen_comunidade " + par
    );
    let selectedarr = tags(dados, groupkey, ",");
    let code = `

        <style>

            .linkeimagedovideo {
                display: block;
                width: 100%;
                padding: 0;
                padding-top: 75%;
                background-position: center center;
                background-size: cover;
                background-repeat: no-repeat;
                outline-color: transparent;
                outline-width: 3px;
                outline-style: solid;
                transition: all .3s ease-in;
            }

            .linkeimagedovideo:hover {
                outline-color: var(--color-hover, #63baa9);
                outline-bottom-color: transparent;
            }

            .textosobre {
                position: relative;
                z-index: 10;
                bottom: 55%;
                background-color: var(--line-separator, #713c80);
                color: var(--color-link, #cea2da);
                padding-left: 0;
                padding-top: 6px;
                padding-bottom: 6px;
                line-height: 26px;
                padding-right: 12px;
                display: inline;
                width: 75%;
            }

            .blocovideolist {
                margin-top: 10px;
                display: block;
                width: calc(100% + 10px);
                height: calc(100% - 50px);
                overflow-y: hidden;
                margin-bottom: -40px;
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
              code += `<div class='blocovideolist'><a target='_self' href='javascript:be("${
                arr[l][linkkey]
              }"); toggle("poeinst");'  style='background-image: url(${imagefromallsources(
                arr[l][linkkey]
              )});' class='linkeimagedovideo'></a><span class='textosobre'>${
                arr[l][namekey]
              }</span></div>`;
            } else if (arr[l][typekey] == "embed") {
              code += `<div class='blocovideolist'><a target='_self' href='javascript:embed("${
                arr[l][linkkey]
              }")' class='linkeimagedovideo' style='background-image: url(${imagefromallsources(
                arr[l][linkkey]
              )});'></a><span class='textosobre'>${
                arr[l][namekey]
              }</span></div>`;
            } else {
              code += `<div class='blocovideolist'><a target='_blank' href='javascript:be("${
                arr[l][linkkey]
              }"); toggle("poeinst");' class='linkeimagedovideo' style='background-image: url(${imagefromallsources(
                arr[l][linkkey]
              )});'></a><span class='textosobre'>${
                arr[l][namekey]
              }</span></div>`;
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
            code += `<div class='blocovideolist'><a target='_self' href='javascript:be("${
              arr[l][linkkey]
            }"); toggle("poeinst");' class='linkeimagedovideo' style='background-image: url(${imagefromallsources(
              arr[l][linkkey]
            )});'></a><span class='textosobre'>${arr[l][namekey]}</span></div>`;
          } else if (arr[l][typekey] == "embed") {
            code += `<div class='blocovideolist'><a target='_self' href='javascript:embed("${
              arr[l][linkkey]
            }")' class='linkeimagedovideo' style='background-image: url(${imagefromallsources(
              arr[l][linkkey]
            )});'></a><span class='textosobre'>${arr[l][namekey]}</span></div>`;
          } else {
            code += `<div class='blocovideolist'><a target='_blank' href='javascript:be("${
              arr[l][linkkey]
            }"); toggle("poeinst");' class='linkeimagedovideo' style='background-image: url(${imagefromallsources(
              arr[l][linkkey]
            )});'></a><span class='textosobre'>${arr[l][namekey]}</span></div>`;
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
