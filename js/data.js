var materie=[];
  
  fetch("./js/data.json")
        .then(function(resp){
            return resp.json();
        })
        .then(function(data){
            materie=data;

            console.log(materie.zi[0].an[0].grupa[0].nrmat);
           // download(materie, 'json.txt', 'text/plain');
        });
        
        function download(content, fileName, contentType) {
            var a = document.createElement("a");
            var file = new Blob([JSON.stringify(content)], {type: contentType});
            a.href = URL.createObjectURL(file);
            a.download = fileName;
            a.click();
        }

