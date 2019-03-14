var caloriesOut = "";
var token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkRLR1ciLCJzdWIiOiI1V1RYUTciLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyYWN0IHJudXQiLCJleHAiOjE1NTI2MzA1NzksImlhdCI6MTU1MjYwMTc3OX0.BhspVUGdyvk9XCHHDs1Q1Xa_bOTMm5HmHUVwafrt9kk";

let today = new Date();
let dd = today.getDate();

let mm = today.getMonth() + 1;
const yyyy = today.getFullYear();
if (dd < 10) {
  dd = `0${dd}`;
}

if (mm < 10) {
  mm = `0${mm}`;
}
today = `${yyyy}-${mm}-${dd}`;

var settings = {
  url: `https://api.fitbit.com/1/user/-/activities/date/${today}.json`,
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: token
  }
};
$.ajax(settings).done(function(response) {
  caloriesOut = response.summary.caloriesOut;
  foodLogs(response.summary.caloriesOut);
});

function foodLogs(caloriesOut) {
  var settings = {
    url: `https://api.fitbit.com/1/user/-/foods/log/date/${today}.json`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  };

  $.ajax(settings).done(function(response) {
    caloriesLeft = caloriesOut - response.summary.calories;
    $("#calorie-data").text(caloriesLeft);
  });
}
