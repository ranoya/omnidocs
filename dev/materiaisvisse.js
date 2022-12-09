let materiais = function (par) {

    let jsonfile = `https://opensheet.elk.sh/1d9eKw82lnM5GvVkBUe8wLcHSxpmDm5B6dUqWRbazOik/MATERIAIS_VISSE`;
    
    fetch(jsonfile).then(response => response.json()).then((jsondata) => {

        if (par == "") {
            par = "dataviz";
        }

        let arr = select(jsondata, multipatterncheck_exclude, par);

        let code = `<div class="outputgrid">`;

        for (let i = 0; i < arr.length; i++) {
            code += `<a href='javascript:be("${arr[i].link}"); toggle("poeinst");'>${arr[i].titulomaterial}</a>`;
        }

            code += `<div>`;

            if (arr.length == 0) {
                code = "";
            }

            present(code);
        });
    
}
