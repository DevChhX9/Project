var attempt_code;
var current_attempt_id;
var start = new Date();
var btn_initial_top;
var url = "http://localhost:8000/post";   // "http://localhost:3000/post";
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
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(1) + "°";
    }
    //Getting Weather Icons
     for(i = 0; i<5; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon
        +".png";
    }
    if(Number(data.list[0].main.temp_min - 273.15).toFixed(1) < -20){
        document.getElementById("advice").innerHTML = "It's freezing outside! We highly recommend avoiding the outdoors right now, as even with something heavy, you'll definitely be quite chilled.";
    }else if(-20 <= Number(data.list[0].main.temp_min - 273.15).toFixed(1) && Number(data.list[0].main.temp_min - 273.15).toFixed(1) < 0){
        document.getElementById("advice").innerHTML = "Today's gonna be a cold one! Heavy jackets, and gloves, alongside scarves and hats are your best bet for staying warm while out-and-about.";
    }else if(0 <= Number(data.list[0].main.temp_min - 273.15).toFixed(1) && Number(data.list[0].main.temp_min - 273.15).toFixed(1) < 8){
        document.getElementById("advice").innerHTML = "It's getting a little chilly right now. Might be time to take out some sweaters, or even a jacket if you think you'll need it.";
    }else if(8 <= Number(data.list[0].main.temp_min - 273.15).toFixed(1) && Number(data.list[0].main.temp_min - 273.15).toFixed(1) < 16){
        document.getElementById("advice").innerHTML = "Not too cold at the moment, but this isn't Summer weather. You should at the very least put on some pants and long-sleeve wear if you have any outdoor excursions today.";
    }else if(16 <= Number(data.list[0].main.temp_min - 273.15).toFixed(1) && Number(data.list[0].main.temp_min - 273.15).toFixed(1) < 23){
        document.getElementById("advice").innerHTML = "It's really starting to warm up now! shorts and tees are in, and unless there's some rain we should be seeing a gentle breeze in the air.";
    }else if(23 <= Number(data.list[0].main.temp_min - 273.15).toFixed(1) && Number(data.list[0].main.temp_min - 273.15).toFixed(1) < 37){
        document.getElementById("advice").innerHTML = "We're in for a hot one today! If your up for it, today would be a perfect day for a swim, so grab a bathing suit and some sandals and head out!";
    }else if(Number(data.list[0].main.temp_min - 273.15).toFixed(1) >= 37){
        document.getElementById("advice").innerHTML = "The heat's getting crazy right now! We don't recommend heading out in this weather, so try your best to stay cool indoors.";
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


