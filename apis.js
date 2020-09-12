function loadLiveData(){
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
			"x-rapidapi-key": "ef16c6e447msha63c8a0ea801e28p11fc13jsn2836d6d57b63"
		}
	}

	$.ajax(settings).done(function (response) {
		var responseObj = JSON.parse(response);
		document.getElementById('lblLastUpdateDate').innerHTML = responseObj.statistic_taken_at;	
		document.getElementById('lblTotalCases').innerHTML = responseObj.total_cases;
		document.getElementById('lblNewCases').innerHTML = responseObj.new_cases;
		document.getElementById('lblTotalDeaths').innerHTML = responseObj.total_deaths;
		document.getElementById('lblNewDeaths').innerHTML = responseObj.new_deaths;
		document.getElementById('lblTotalRecovered').innerHTML = responseObj.total_recovered;
		document.getElementById('lblActiveCases').innerHTML = responseObj.active_cases;
		document.getElementById('lblSeriousCases').innerHTML = responseObj.serious_critical;
	});
}