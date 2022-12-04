$("#btnWeather").click(function () {
  switch ($("#countryWeather").val()) {
    case "UK":
      $.ajax({
        url: "libs/php/getWeather.php",
        type: "POST",
        dataType: "json",
        data: {
          lat: 52.37,
          lng: -1.18,
        },
        success: function (result) {
          if (result.status.name == "ok") {
            $("#temperature").html(
              "Temperature : " + result["data"]["temperature"] + "&#8451;"
            );
            $("#clouds").html("Sky : " + result["data"]["clouds"]);
          }
        },
      });
      break;
    case "France":
      $.ajax({
        url: "libs/php/getWeather.php",
        type: "POST",
        dataType: "json",
        data: {
          lat: 47.04,
          lng: 3.38,
        },
        success: function (result) {
          if (result.status.name == "ok") {
            $("#temperature").html(
              "Temperature : " + result["data"]["temperature"] + "&#8451;"
            );
            $("#clouds").html("Sky : " + result["data"]["clouds"]);
          }
        },
      });
      break;
    case "USA":
      $.ajax({
        url: "libs/php/getWeather.php",
        type: "POST",
        dataType: "json",
        data: {
          lat: 40.44,
          lng: -100.88,
        },
        success: function (result) {
          if (result.status.name == "ok") {
            $("#temperature").html(
              "Temperature : " + result["data"]["temperature"] + "&#8451;"
            );
            $("#clouds").html("Sky : " + result["data"]["clouds"]);
          }
        },
      });
      break;
    case "China":
      $.ajax({
        url: "libs/php/getWeather.php",
        type: "POST",
        dataType: "json",
        data: {
          lat: 33.86,
          lng: 108.76,
        },
        success: function (result) {
          if (result.status.name == "ok") {
            $("#temperature").html(
              "Temperature : " + result["data"]["temperature"] + "&#8451;"
            );
            $("#clouds").html("Sky : " + result["data"]["clouds"]);
          }
        },
      });
      break;
  }
});
