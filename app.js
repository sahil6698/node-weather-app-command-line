console.log("inside app.js");

const yargs=require("yargs");

const argv=yargs.options({
    a:{
        alias:"address",
        string:true,
        description:"Address to get weather for."
    },
    text:{
        alias:'t',
        string:true,
        description:'Text to get sentiment score'
    }
}).argv;

const geocode=require('./geocode/geocode.js');
const weather=require("./weather/weather.js");
const speech=require('./playground/speech');
    if (!(argv.address===undefined)){

        geocode.geoCodeObj(encodeURIComponent(argv.address),(flag,obj)=>{
            if (flag===false){
                console.log("Aborting...");
            } else{
                console.log(obj);
                console.log("Getting weather...");
                weather.weatherObj(obj,(flag2,objWeather)=>{
                    console.log("Inside callback");
                    if (flag2){
                        console.log(" Temp : ",objWeather.temp);
                        console.log(" Location: ",objWeather.locName);
                    }
                })
            }
        });
    }
    if (!(argv.text===undefined)){
        let inputText={
            documents:[{
                id:1,
                text:`${argv.text}`
            }]
        };

        speech.get_sentiments(inputText,(flag,textApiResult)=>{
            if (flag){
                console.log("Score: ",textApiResult.score);
            } else{
                console.log("Something went wrong at getting text api result");
            }
        });
    }


