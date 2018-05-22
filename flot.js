$(function() {
	$.getJSON("get.php?data=btc", function(json) {
		data = json;
		var time = new Date().getTime();
		var price = data[data.length-1][1];
		price = price.toFixed(2);
		document.getElementById("btc").innerHTML = "$" + price;
		
		$.plot("#btcgraph", [{ label: "Price", data: data }], {
			points: {
				show: true,
				symbol: "circle"
			},
			lines: {
				show: true
			},
			crosshair: {
				mode: "x"
			},
			grid: {
				hoverable: true,
				autoHighlight: false
			},
			xaxis: {
				mode: "time",
				minTickSize: [1, "hour"],
				min: (time - 86400000),
				twelveHourClock: true,
				timezone: "browser"
			},
			legend: {
				show: false
			}
		});
		$("<div id='tooltip'></div").css({
			position: "absolute",
			display: "none",
			border: "1px solid #fdd",
			padding: "2px",
			"background-color": "#fee",
			opacity: 0.80
		}).appendTo("body");
		$("#btcgraph").bind("plothover", function(event, pos, item) {
			if(item) {
				var d = new Date(item.datapoint[0]);
				var x = d.toLocaleString(),
					y = item.datapoint[1].toFixed(2);
				$("#tooltip").html("$" + y + " on " + x)
					.css({top: item.pageY+5, left: item.pageX+5})
					.fadeIn(200);
			} else {
				$("#tooltip").hide();
			}
		});
	});
	$.getJSON("get.php?data=eth", function(json) {
		var data = json;
		var time = new Date().getTime();
		var price = data[data.length-1][1];
		price = price.toFixed(2);
		document.getElementById("eth").innerHTML = "$" + price;
		
		$.plot("#ethgraph", [{ label: "Price", data: data }], { 
			points: {
				show: true,
				symbol: "circle"
			},
			lines: {
				show: true
			},
			crosshair: {
				mode: "x"
			},
			grid: {
				hoverable: true,
				autoHighlight: false
			},
			xaxis: {
				mode: "time",
				minTickSize: [1, "hour"],
				min: (time - 86400000),
				twelveHourClock: true,
				timezone: "browser"
			},
			legend: {
				show: false
			}
		});
		$("<div id='tooltip'></div").css({
			position: "absolute",
			display: "none",
			border: "1px solid #fdd",
			padding: "2px",
			"background-color": "#fee",
			opacity: 0.80
		}).appendTo("body");
		$("#ethgraph").bind("plothover", function(event, pos, item) {
			if(item) {
				var d = new Date(item.datapoint[0]);
				var x = d.toLocaleString(),
					y = item.datapoint[1].toFixed(2);
				$("#tooltip").html("$" + y + " on " + x)
					.css({top: item.pageY+5, left: item.pageX+5})
					.fadeIn(200);
			} else {
				$("#tooltip").hide();
			}
		});
	});
	$.getJSON("get.php?data=xrp", function(json) {
		var data = json;
		var time = new Date().getTime();
		var price = data[data.length-1][1];
		price = price.toFixed(3);
		document.getElementById("xrp").innerHTML = "$" + price;
		
		$.plot("#xrpgraph", [{ label: "Price", data: data }], { 
			points: {
				show: true,
				symbol: "circle"
			},
			lines: {
				show: true
			},
			crosshair: {
				mode: "x"
			},
			grid: {
				hoverable: true,
				autoHighlight: false
			},
			xaxis: {
				mode: "time",
				minTickSize: [1, "hour"],
				min: (time - 86400000),
				twelveHourClock: true,
				timezone: "browser"
			},
			legend: {
				show: false
			}
		});
		$("<div id='tooltip'></div").css({
			position: "absolute",
			display: "none",
			border: "1px solid #fdd",
			padding: "2px",
			"background-color": "#fee",
			opacity: 0.80
		}).appendTo("body");
		$("#xrpgraph").bind("plothover", function(event, pos, item) {
			if(item) {
				var d = new Date(item.datapoint[0]);
				var x = d.toLocaleString(),
					y = item.datapoint[1].toFixed(3);
				$("#tooltip").html("$" + y + " on " + x)
					.css({top: item.pageY+5, left: item.pageX+5})
					.fadeIn(200);
			} else {
				$("#tooltip").hide();
			}
		});
	});
	$.getJSON("get.php?data=xmr", function(json) {
		var data = json;
		var time = new Date().getTime();
		var price = data[data.length-1][1];
		price = price.toFixed(2);
		document.getElementById("xmr").innerHTML = "$" + price;
		
		$.plot("#xmrgraph", [{ label: "Price", data: data }], { 
			points: {
				show: true,
				symbol: "circle"
			},
			lines: {
				show: true
			},
			crosshair: {
				mode: "x"
			},
			grid: {
				hoverable: true,
				autoHighlight: false
			},
			xaxis: {
				mode: "time",
				minTickSize: [1, "hour"],
				min: (time - 86400000),
				twelveHourClock: true,
				timezone: "browser"
			},
			legend: {
				show: false
			}
		});
		$("<div id='tooltip'></div").css({
			position: "absolute",
			display: "none",
			border: "1px solid #fdd",
			padding: "2px",
			"background-color": "#fee",
			opacity: 0.80
		}).appendTo("body");
		$("#xmrgraph").bind("plothover", function(event, pos, item) {
			if(item) {
				var d = new Date(item.datapoint[0]);
				var x = d.toLocaleString(),
					y = item.datapoint[1].toFixed(2);
				$("#tooltip").html("$" + y + " on " + x)
					.css({top: item.pageY+5, left: item.pageX+5})
					.fadeIn(200);
			} else {
				$("#tooltip").hide();
			}
		});
	});
	$.getJSON("get.php?data=lnd", function(json) {
		var data = json;
		var time = new Date().getTime();
		var price = data[data.length-1][1];
		price = price.toFixed(5);
		document.getElementById("lnd").innerHTML = "$" + price;
		
		$.plot("#lndgraph", [{ label: "Price", data: data }], { 
			points: {
				show: true,
				symbol: "circle"
			},
			lines: {
				show: true
			},
			crosshair: {
				mode: "x"
			},
			grid: {
				hoverable: true,
				autoHighlight: false
			},
			xaxis: {
				mode: "time",
				minTickSize: [1, "hour"],
				min: (time - 86400000),
				twelveHourClock: true,
				timezone: "browser"
			},
			legend: {
				show: false
			}
		});
		$("<div id='tooltip'></div").css({
			position: "absolute",
			display: "none",
			border: "1px solid #fdd",
			padding: "2px",
			"background-color": "#fee",
			opacity: 0.80
		}).appendTo("body");
		$("#lndgraph").bind("plothover", function(event, pos, item) {
			if(item) {
				var d = new Date(item.datapoint[0]);
				var x = d.toLocaleString(),
					y = item.datapoint[1].toFixed(5);
				$("#tooltip").html("$" + y + " on " + x)
					.css({top: item.pageY+5, left: item.pageX+5})
					.fadeIn(200);
			} else {
				$("#tooltip").hide();
			}
		});
	});
	$.getJSON("get.php?data=ltc", function(json) {
		var data = json;
		var time = new Date().getTime();
		var price = data[data.length-1][1];
		price = price.toFixed(2);
		document.getElementById("ltc").innerHTML = "$" + price;
		
		$.plot("#ltcgraph", [{ label: "Price", data: data }], { 
			points: {
				show: true,
				symbol: "circle"
			},
			lines: {
				show: true
			},
			crosshair: {
				mode: "x"
			},
			grid: {
				hoverable: true,
				autoHighlight: false
			},
			xaxis: {
				mode: "time",
				minTickSize: [1, "hour"],
				min: (time - 86400000),
				twelveHourClock: true,
				timezone: "browser"
			},
			legend: {
				show: false
			}
		});
		$("<div id='tooltip'></div").css({
			position: "absolute",
			display: "none",
			border: "1px solid #fdd",
			padding: "2px",
			"background-color": "#fee",
			opacity: 0.80
		}).appendTo("body");
		$("#ltcgraph").bind("plothover", function(event, pos, item) {
			if(item) {
				var d = new Date(item.datapoint[0]);
				var x = d.toLocaleString(),
					y = item.datapoint[1].toFixed(2);
				$("#tooltip").html("$" + y + " on " + x)
					.css({top: item.pageY+5, left: item.pageX+5})
					.fadeIn(200);
			} else {
				$("#tooltip").hide();
			}
		});
	});
});

function selectRange(coin, days) {
	$.getJSON("get.php?data=" + coin + "&days=" + days, function(json) {
		data = json;
		var time = new Date().getTime();
		var timeScale, increment;
		switch(days) {
			case 14:
				timeScale = time - 1209600000;
				increment = "day";
				break;
			case 30:
				timeScale = time - 2592000000;
				increment = "day";
				break;
			case "max":
				timeScale = time - data[0][0];
				increment = "month";
				break;
			default:
				timeScale = time - 86400000;
				increment = "hour";
				break;
		}

		$.plot("#" + coin + "graph", [{ label: "Price", data: data }], {
			points: {
				show: true,
				symbol: "circle"
			},
			lines: {
				show: true
			},
			crosshair: {
				mode: "x"
			},
			grid: {
				hoverable: true,
				autoHighlight: false
			},
			xaxis: {
				mode: "time",
				minTickSize: [1, increment],
				min: timeScale,
				twelveHourClock: true,
				timezone: "browser"
			},
			legend: {
				show: false
			}
		});
	});
}