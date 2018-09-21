console.log("starting weather.js");
const request=require("request");


let weatherObj=(locObj,callback)=>{
    let flag=false;
    let obj={};
  request({
      url:`http://api.openweathermap.org/data/2.5/weather?lat=${locObj.lat}&lon=${locObj.lon}&units=metric&appid=bdabfbd194b1b4e764456d5855a7779b`,
      json:true
  },(error,response,body)=>{
      if (error){
          console.log("Unable to connect to weather api");
      } else if (body.cod==='500') {
          console.log("Problem with weather api servers.");
      }else if (body.cod==200){
          console.log("inside 200");
          flag =true;
          obj.temp=body.main.temp;
          obj.locName=body.name;
      }

          callback(flag,obj);
  }
  );

};

module.exports={
  weatherObj
};