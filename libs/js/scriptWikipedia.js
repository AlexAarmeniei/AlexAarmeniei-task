$("#btnWiki").click(function () {
  $.ajax({
    url: "libs/php/getWikipedia.php",
    type: "POST",
    dataType: "json",
    data: {
      search: $("#wiki").val(),
    },
    success: function (result) {
      console.log(JSON.stringify(result));
      $("#title").html(result["data"][0]["title"]);
      $("#summary").html(result["data"][0]["summary"]);
      $("#wikiUrl").html("Link to " + result["data"][0]["title"]);
      $("#wikiUrl").attr("href", result["data"][0]["wikipediaUrl"]);
    },
  });
});
