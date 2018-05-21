$(function() {
	var data;
	var options;
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
		var ethdata = json;
		var time = new Date().getTime();
		var price = ethdata[ethdata.length-1][1];
		price = price.toFixed(2);
		document.getElementById("eth").innerHTML = "$" + price;
		
		$.plot("#ethgraph", [{ label: "Price", data: ethdata }], { 
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
		var xrpdata = json;
		var time = new Date().getTime();
		var price = xrpdata[xrpdata.length-1][1];
		price = price.toFixed(2);
		document.getElementById("xrp").innerHTML = "$" + price;
		
		$.plot("#xrpgraph", [{ label: "Price", data: xrpdata }], { 
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
					y = item.datapoint[1].toFixed(2);
				$("#tooltip").html("$" + y + " on " + x)
					.css({top: item.pageY+5, left: item.pageX+5})
					.fadeIn(200);
			} else {
				$("#tooltip").hide();
			}
		});
	});
	$.getJSON("get.php?data=xmr", function(json) {
		var xmrdata = json;
		var time = new Date().getTime();
		var price = xmrdata[xmrdata.length-1][1];
		price = price.toFixed(2);
		document.getElementById("xmr").innerHTML = "$" + price;
		
		$.plot("#xmrgraph", [{ label: "Price", data: xmrdata }], { 
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
		var lnddata = json;
		var time = new Date().getTime();
		var price = lnddata[lnddata.length-1][1];
		price = price.toFixed(4);
		document.getElementById("lnd").innerHTML = "$" + price;
		
		$.plot("#lndgraph", [{ label: "Price", data: lnddata }], { 
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
					y = item.datapoint[1].toFixed(4);
				$("#tooltip").html("$" + y + " on " + x)
					.css({top: item.pageY+5, left: item.pageX+5})
					.fadeIn(200);
			} else {
				$("#tooltip").hide();
			}
		});
	});
	$.getJSON("get.php?data=ltc", function(json) {
		var ltcdata = json;
		var time = new Date().getTime();
		var price = ltcdata[ltcdata.length-1][1];
		price = price.toFixed(2);
		document.getElementById("ltc").innerHTML = "$" + price;
		
		$.plot("#ltcgraph", [{ label: "Price", data: ltcdata }], { 
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