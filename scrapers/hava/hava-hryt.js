const BASE = `../../`
const {HAVA_URLS} = require(`${BASE}urls.js`);

const fs = require("fs");
const { parse } = require('node-html-parser');

const {fetchAsync} = require(`${BASE}utils.js`);

 async function start(){
    var havaData={};

    for(const il in HAVA_URLS){

        var plate = il;
        var url = HAVA_URLS[il].urls.hryt;
        var name = HAVA_URLS[il].name;
        var obj={
            "plate": plate,
            "name": name,
            "durum":[]
        }
        console.log("Fetching... " + name);

        var fullRawHTML = await fetchAsync(url);
        const fullDOM = parse(fullRawHTML);
        
        var havaHTML = fullDOM.querySelector(".weather-container")
        
        obj.durum.push(getToday(havaHTML))
        obj.durum.push(...getOtherDays(havaHTML))

        havaData[plate] = obj;
    }
    //TODO : Send POST KOD8 API 
    writeFile(havaData,"hava",`data/hava/`,"json");
}

function getToday(html){
    var todayContainer = html.querySelector(".weather-detail-container")
    var date = "today";
    var min=todayContainer.querySelector(".weather-detail-lowtemp").innerText.split("&")[0];
    var max=todayContainer.querySelector(".weather-detail-hightemp").innerText.split("&")[0];
    var condition=todayContainer.querySelector(".weather-detail-condition-text").innerText;
    var conditionIcon = todayContainer.querySelector(".weather-detail-condition-icon i").classNames[1];
    
    return {date, min, max, condition, conditionIcon};
}

function getOtherDays(html){
    var otherDays = html.querySelectorAll("#weather-card-swiper .swiper-slide");
    var data = [];

    otherDays.forEach(day=>{
        var date = day.querySelector(".content-card-date").innerText;
        var min=day.querySelector(".content-card-feel").innerText.split("&")[0];
        var max=day.querySelector(".content-card-temp").innerText.split("&")[0];
        var condition=day.querySelector(".content-card-condition").innerText;
        var conditionIcon = day.querySelector(".content-card-icon i").classNames[1];
        data.push({date, min, max, condition, conditionIcon})
    })
   
    return data;
}


function writeFile(data,name,dir,ext){
    var data = (ext == "json") ? JSON.stringify(data) : data;
    fs.writeFile(dir+name+"."+ext, data , () => {
		console.log(dir+name+"."+ext," yazıldı")
    });

}


module.exports = {start}

/* NOTES

*/