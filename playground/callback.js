let getUser=(data,callback)=>{
  console.log(data);
  callback();
};

getUser(1212,()=>{
    console.log("inside callback");
});