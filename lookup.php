<?php
$sunlight_api_key = "api_key_wiped";

// validate zip code
$zip = $_GET['zip'];
if(empty($zip)) {
    die(json_encode(array(
        'error' => 'Zip code required'
    )));
}

// get all the legislatures for the given zip code
$url = "http://services.sunlightlabs.com/api/legislators.allForZip?apikey=$sunlight_api_key&zip=$zip";
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HEADER, 0);
$reps_json = curl_exec($ch);

// make sure we got some reps
$reps = json_decode($reps_json);
if($reps == null) {
    die(json_encode(array(
        'error' => 'Our congressional lookup tool returned invalid data, check your zip code'
    )));
}
if(empty($reps->response->legislators)) {
    die(json_encode(array(
        'error' => 'We couldn\'t find any represenatives for that zip code'
    )));
}

// all seems good, return the data
die(json_encode(array(
    'error' => false,
    'reps' => $reps->response->legislators
)));
