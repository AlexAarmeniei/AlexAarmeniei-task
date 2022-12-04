$("#btnTimezone").click(function () {
  switch ($("#countryTime").val()) {
    case "UK":
      $.ajax({
        url: "libs/php/getTimezone.php",
        type: "POST",
        dataType: "json",
        data: {
          lat: 52.37,
          lng: -1.18,
        },
        success: function (result) {
          if (result) {
            $("#country").html(" in " + $("#countryTime").val() + " : ");
            $("#date").html(result);
          }
        },
      });
      break;
    case "France":
      $.ajax({
        url: "libs/php/getTimezone.php",
        type: "POST",
        dataType: "json",
        data: {
          lat: 47.04,
          lng: 3.38,
        },
        success: function (result) {
          if (result) {
            $("#country").html(" in " + $("#countryTime").val() + " : ");
            $("#date").html(result);
          }
        },
      });
      break;
    case "USA":
      $.ajax({
        url: "libs/php/getTimezone.php",
        type: "POST",
        dataType: "json",
        data: {
          lat: 40.44,
          lng: -100.88,
        },
        success: function (result) {
          if (result) {
            $("#country").html(" in " + $("#countryTime").val() + " : ");
            $("#date").html(result);
          }
        },
      });
      break;
    case "China":
      $.ajax({
        url: "libs/php/getTimezone.php",
        type: "POST",
        dataType: "json",
        data: {
          lat: 33.86,
          lng: 108.76,
        },
        success: function (result) {
          if (result) {
            $("#country").html(" in " + $("#countryTime").val() + " : ");
            $("#date").html(result);
          }
        },
      });
      break;
  }
});
