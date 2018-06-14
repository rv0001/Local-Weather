$(document).ready(function(){
  

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      var lat=position.coords.latitude;
      var lon=position.coords.longitude;
      $.ajax({
        url:"https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+lon , success:function(result){
          $('#temp').text("Current temperature is "+result.main.temp+" degree celsius");
          $('#city').text(result.name+", "+result.sys.country);
          $('#icon').attr("src",result.weather.icon);
          $('#status').text(result.weather.description);
        }
      });
    });
  }
  
})