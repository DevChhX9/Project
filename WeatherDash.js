var attempt_code;
var current_attempt_id;
var start = new Date();
var btn_initial_top;
var url = "http://localhost:5000/post";   // "http://localhost:3000/post";
    //when you are in Task2 of the lab (server side coding), you
	//should comeback here and change the url to localhost.
function GetInfo() {

    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--";

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=8430b651ca157ec13250f1ce604201c3')
.then(response => response.json())
.then(data => {

    //Getting the min and max values for each day
    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°";
    }
    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
    }
    //Getting Weather Icons
     for(i = 0; i<5; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon
        +".png";
    }
    console.log(data)


})
.catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))
}
function DefaultScreen(){
    document.getElementById("cityInput").defaultValue = "London";
    GetInfo();
}
//Getting and displaying the text for the upcoming five days of the week
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function to get the correct integer for the index of the days array
function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}
    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }
    const humidity = $("<p>")
    .addClass("card-text current-humidty")
    .text("Humidity: " + response.list[0].main.humidity + "%");
    cardBody.append()(humidity);
   


