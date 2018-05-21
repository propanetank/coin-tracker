<html>
	<head>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">
		<link rel="stylesheet" href="style.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.6/umd/popper.min.js"></script>
		<script src="jquery.flot.js"></script>
		<script src="jquery.flot.time.js"></script>
		<script src="flot.js"></script>
		<title>Coins</title>
	</head>
	<body>
		<div class="container">
			<div class="row">
				<div class="col">
					<h1>Coins</h1>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<h2><a href="https://coingecko.com/en/coins/bitcoin" target="_blank">Bitcoin (BTC)</a></h2>
					<p>Price: <span class="price" id="btc"></span></p>
					<div class="graph" id="btcgraph"></div>
				</div>
				<div class="col">
					<h2><a href="https://coingecko.com/en/coins/ethereum" target="_blank">Ethereum (ETH)</a></h2>
					<p>Price: <span class="price" id="eth"></span></p>
					<div class="graph" id="ethgraph"></div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<h2><a href="https://coingecko.com/en/coins/ripple" target="_blank">Ripple (XRP)</a></h2>
					<p>Price: <span class="price" id="xrp"></span></p>
					<div class="graph" id="xrpgraph"></div>
				</div>
				<div class="col">
					<h2><a href="https://coingecko.com/en/coins/monero" target="_blank">Monero (XMR)</a></h2>
					<p>Price: <span class="price" id="xmr"></span></p>
					<div class="graph" id="xmrgraph"></div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<h2><a href="https://coingecko.com/en/coins/lendingblock" target="_blank">Lendingblock (LND)</a></h2>
					<p>Price: <span class="price" id="lnd"></span></p>
					<div class="graph" id="lndgraph"></div>
				</div>
				<div class="col">
					<h2><a href="https://coingecko.com/en/coins/litecoin" target="_blank">Litecoin (LTC)</a></h2>
					<p>Price: <span class="price" id="ltc"></span></p>
					<div class="graph" id="ltcgraph"></div>
					<!--<div class="btn-group">
						<button type="button" class="btn btn-primary" id="ltc1" onclick="selectLTC(1)">1 Day</button>
						<button type="button" class="btn btn-primary" id="ltc14">14 Days</button>
						<button type="button" class="btn btn-primary" id="ltc30">30 Days</button>
					</div>-->
				</div>
			</div>
		</div>
	</body>
</html>