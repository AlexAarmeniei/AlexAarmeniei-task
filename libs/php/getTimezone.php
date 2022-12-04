<?php

	$executionStartTime = microtime(true);

	$url='http://api.geonames.org/timezoneJSON?lat=' .$_REQUEST['lat']. '&lng=' .$_REQUEST['lng']. '&username=alexaarmeniei&style=full';

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL,$url);

	$result=curl_exec($ch);

	curl_close($ch);

	$decode = json_decode($result,true);	

	$output= $decode['time'];
	
	header('Content-Type: application/json; charset=UTF-8');

	echo json_encode($output); 

?>
