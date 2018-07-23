$(document).ready(function(){
  

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      var lat=position.coords.latitude;
      var lon=position.coords.longitude;
      $.ajax({
        url:"https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+lon , success:function(result){
          $('#temp').html("Current temperature is "+result.main.temp+"&#8451;");
          $('#city').text(result.name+", "+result.sys.country);
          $('#icon').attr("src",result.weather.icon);
          $('#status').text(result.weather[0].main+" out there!");
          $('#info').text("Show details..");
          if(result.weather[0].main=="Mist"){
            var img="https://img00.deviantart.net/5da4/i/2012/081/b/d/tree_in_the_fog_by_nigel_kell-d4tjob5.jpg";
          
          }
          if(result.weather[0].main=="Clouds"){
            var img="https://media.self.com/photos/5a625de37b39d91320a3ab0c/4:3/w_728,c_limit/cloudy-pee.jpg";
            
          } 
          if(result.weather[0].main=="Rain"){
            var img="https://images.enca.com/encadrupal/styles/600_383/s3/rainwater.jpg";
          }
          if(result.weather[0].main=="Sunny"){
            var img="https://www.totalguidetobath.com/images/content/GUIDES/Sunny-Days/what-to-do-on-a-sunny-day.jpg";
          }
          if(result.weather[0].main=="Haze"){
            var img="http://footage.framepool.com/shotimg/qf/911258364-mumbai-sunrise-skyline-city-silhouette-haze.jpg";
          }
          $('body').css({'background-image':'url('+img+')'});
          $('#info').click(function(){
            
            $('#info').text("");
            $('#addinfo').html("Pressure: "+result.main.pressure+" mb<br>Humidity: "+result.main.humidity+"%<br>Max. temp.: "+result.main.temp_max+"&#8451;<br>Min. temp.: "+result.main.temp_min+"&#8451;<br>Wind speed: "+result.wind.speed+" mph");
          })
        }
      });
    });
  }
  
})