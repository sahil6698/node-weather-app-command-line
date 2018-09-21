
const request=require('request');

let get_sentiments=(textData,callback)=>{
    request({

        body:JSON.stringify(textData),
        method : 'POST',
        url: 'https://centralindia.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment',
        headers : {
            'Ocp-Apim-Subscription-Key' : '6e5716a5e58c4ff0af645ea662266468',
        }
    },(error,response,body)=>{
        let flag=false;
        let obj={};
        if (error){
            console.log("error: ",error);
        }else{
            flag=true;
            const bodyObj=JSON.parse(body);
            console.log(body);
            // console.log(bodyObj.documents[0]);
            obj.score=bodyObj.documents[0].score;
        }
        callback(flag,obj);
    })
};
module.exports={
    get_sentiments,
};