// import axios from "axios";
require('dotenv').config();
const BASEURL = "https://api.edamam.com/search?q58924f64c0c56540119df47989fe9528";
const APPID = "&app_id=" + process.env.REACT_APP_EDAMAM_ID;
const APIKEY = "&app_key=" + process.env.REACT_APP_EDAMAM_KEY;
console.log(BASEURL + APPID + APIKEY)
//const APIKEY = "&apikey=trilogy";
//const to = "&to=5"
const calories = "&calories=0-400"
const health = "&health=alcohol-free"

const config = {
    headers: { "Content-Type": "application/json","Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkRLR1ciLCJzdWIiOiI1V1RYUTciLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJzZXQgcmFjdCBybG9jIHJ3ZWkgcmhyIHJudXQgcnBybyByc2xlIiwiZXhwIjoxNTUyMzc4NTc3LCJpYXQiOjE1NTIzNDk3Nzd9.Sf7U5fXeMc-QO5F8PLQKy22gC15RwMmYZVIr64Md1e8" }
  
  };



export default {
  search: function(to,diet) {
   // return axios.get(BASEURL);
    return axios.get(BASEURL + APPID + APIKEY + `&to=${to}` + calories + health + `&diet=${diet}`);
  },

  fitnessdata: function(query){
    return  axios.get("https://api.fitbit.com/1/user/-/activities/date/"+query+".json", config)

  },

  monthlystatus: function(){
    return  axios.get("https://api.fitbit.com/1/user/-/activities/steps/date/today/1m.json", config)   
  }
};
