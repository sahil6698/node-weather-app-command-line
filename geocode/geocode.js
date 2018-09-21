console.log("starting geocode.js");
const request=require('request');


let geoCodeObj=(address,callback)=>{
  let obj={};
  let flag=false;
  request({
      url:`http://dev.virtualearth.net/REST/v1/Locations?q=${address}&o=json&key=AjnYXpqs3VfSZvGRNkF2YSPbsEK0h0bHsPVfYoEEKRCN3uiHMx82L5S-D0RGQ-PM`
      // url:`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
      // json:true
  },(error,response,body)=>{
      const jsonBody=JSON.parse(body);
      if (error){
          console.log("Unable to connect to api servers.");
      }else if(jsonBody.statusCode===200){
          if (jsonBody.resourceSets[0].estimatedTotal===0){
            return  console.log("Invalid Address.");
          }
          flag=true;
          obj.lat=jsonBody.resourceSets[0].resources[0].point.coordinates[0];
          obj.lon=jsonBody.resourceSets[0].resources[0].point.coordinates[1];
      }else{
          console.log("Something went wrong. ",error)
      }
      callback(flag,obj);
  })

};
module.exports={
  geoCodeObj
};