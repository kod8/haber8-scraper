const {PUAN_FIKSTUR_SONUC_URLS} = require("./urls.js");
const fs = require("fs");
const { parse } = require('node-html-parser');

const {fetchAsync} = require('./utils.js');


 async function start(){
    var sporData={};

    for(const lig in PUAN_FIKSTUR_SONUC_URLS){

        var ligID = lig;
        var url = PUAN_FIKSTUR_SONUC_URLS[ligID].url;
        var name = PUAN_FIKSTUR_SONUC_URLS[ligID].name;
        sporData[ligID] = {}
        sporData[ligID].name = name;

        var fullRawHTML = await fetchAsync(url);
        const fullDOM = parse(fullRawHTML);
        
        //PUAN
        var puanHTML = removeLinksInHTML(fullDOM.querySelector("#puan-durumu table"))
        writeFile(puanHTML.toString(),ligID,"./data/spor/html/puan/","html");
        sporData[ligID].puanHTML = puanHTML.toString();
        //puanJSON = puanObj(puanHTML);
        //sporData[ligID].puanJSON = puanJSON;

        //FIKSTUR
        var fiksturHTML = removeLinksInHTML(fullDOM.querySelectorAll("table.liste.cs_LF")[0])
        writeFile(fiksturHTML.toString(),ligID,"./data/spor/html/fikstur/","html");
        sporData[ligID].fiksturHTML = fiksturHTML.toString();
        //fiksturJSON = fiksturObj(fiksturHTML);
        //sporData[ligID].fiksturJSON = fiksturJSON;


        //SONUC        
        var sonucHTML = removeLinksInHTML(fullDOM.querySelectorAll("table.liste.cs_LF")[1]);
        writeFile(sonucHTML.toString(),ligID,"./data/spor/html/sonuc/","html");
        sporData[ligID].sonucHTML = sonucHTML.toString();
        //sonucJSON = puanObj(sonucHTML);
        //sporData[ligID].sonucJSON = sonucJSON;
    }

    writeFile(sporData,"spor","./data/spor/","json");
   
    var logText = `${new Date().toGMTString()}: Spor dosyaları güncellendi`
    writeFile(logText,"logs","./","log");
}


function writeFile(data,name,dir,ext){
    var data = (ext == "json") ? JSON.stringify(data) : data;
    fs.writeFile(dir+name+"."+ext, data , () => {
		console.log(dir+name+ext," yazıldı")
	});
}

function removeLinksInHTML(element){
    element.querySelectorAll("td").forEach(function(td){
        if(td.querySelector("a")){
            td.set_content(td.querySelector("a").innerText);
        }
    })

    return element;
}


// TODO: PUANOBJ func
function puanObj(){

}

// TODO: FiksturOBJ func
function fiksturObj(){

}

// TODO: PUANOBJ func
function sonucObj(){

}





module.exports = {start}

/* NOTES
spor.json
{
    ligAdı:{
        name:"...",
        puan:{json,html,csv},
        fikstur:{json,html,csv},
        sonuc:{json,html,csv}
    },...
}
*/
