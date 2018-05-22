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
					<div class="btn-group">
						<button type="button" class="btn btn-primary" id="btc1" onclick="selectRange('btc', 1)">1 Day</button>
						<button type="button" class="btn btn-primary" id="btc14" onclick="selectRange('btc', 14)">14 Days</button>
						<button type="button" class="btn btn-primary" id="btc30" onclick="selectRange('btc', 30)">30 Days</button>
						<button type="button" class="btn btn-primary" id="btcmax" onclick="selectRange('btc', 'max')">Max</button>
					</div>
				</div>
				<div class="col">
					<h2><a href="https://coingecko.com/en/coins/ethereum" target="_blank">Ethereum (ETH)</a></h2>
					<p>Price: <span class="price" id="eth"></span></p>
					<div class="graph" id="ethgraph"></div>
					<div class="btn-group">
						<button type="button" class="btn btn-primary" id="eth1" onclick="selectRange('eth', 1)">1 Day</button>
						<button type="button" class="btn btn-primary" id="eth14" onclick="selectRange('eth', 14)">14 Days</button>
						<button type="button" class="btn btn-primary" id="eth30" onclick="selectRange('eth', 30)">30 Days</button>
						<button type="button" class="btn btn-primary" id="ethmax" onclick="selectRange('eth', 'max')">Max</button>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<h2><a href="https://coingecko.com/en/coins/ripple" target="_blank">Ripple (XRP)</a></h2>
					<p>Price: <span class="price" id="xrp"></span></p>
					<div class="graph" id="xrpgraph"></div>
					<div class="btn-group">
						<button type="button" class="btn btn-primary" id="xrp1" onclick="selectRange('xrp', 1)">1 Day</button>
						<button type="button" class="btn btn-primary" id="xrp14" onclick="selectRange('xrp', 14)">14 Days</button>
						<button type="button" class="btn btn-primary" id="xrp30" onclick="selectRange('xrp', 30)">30 Days</button>
						<button type="button" class="btn btn-primary" id="xrpmax" onclick="selectRange('xrp', 'max')">Max</button>
					</div>
				</div>
				<div class="col">
					<h2><a href="https://coingecko.com/en/coins/monero" target="_blank">Monero (XMR)</a></h2>
					<p>Price: <span class="price" id="xmr"></span></p>
					<div class="graph" id="xmrgraph"></div>
					<div class="btn-group">
						<button type="button" class="btn btn-primary" id="xmr1" onclick="selectRange('xmr', 1)">1 Day</button>
						<button type="button" class="btn btn-primary" id="xmr14" onclick="selectRange('xmr', 14)">14 Days</button>
						<button type="button" class="btn btn-primary" id="xmr30" onclick="selectRange('xmr', 30)">30 Days</button>
						<button type="button" class="btn btn-primary" id="xmrmax" onclick="selectRange('xmr', 'max')">Max</button>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<h2><a href="https://coingecko.com/en/coins/lendingblock" target="_blank">Lendingblock (LND)</a></h2>
					<p>Price: <span class="price" id="lnd"></span></p>
					<div class="graph" id="lndgraph"></div>
					<div class="btn-group">
						<button type="button" class="btn btn-primary" id="lnd1" onclick="selectRange('lnd', 1)">1 Day</button>
						<button type="button" class="btn btn-primary" id="lnd14" onclick="selectRange('lnd', 14)">14 Days</button>
						<button type="button" class="btn btn-primary" id="lnd30" onclick="selectRange('lnd', 30)">30 Days</button>
						<button type="button" class="btn btn-primary" id="lndmax" onclick="selectRange('lnd', 'max')">Max</button>
					</div>
				</div>
				<div class="col">
					<h2><a href="https://coingecko.com/en/coins/litecoin" target="_blank">Litecoin (LTC)</a></h2>
					<p>Price: <span class="price" id="ltc"></span></p>
					<div class="graph" id="ltcgraph"></div>
					<div class="btn-group">
						<button type="button" class="btn btn-primary" id="ltc1" onclick="selectRange('ltc', 1)">1 Day</button>
						<button type="button" class="btn btn-primary" id="ltc14" onclick="selectRange('ltc', 14)">14 Days</button>
						<button type="button" class="btn btn-primary" id="ltc30" onclick="selectRange('ltc', 30)">30 Days</button>
						<button type="button" class="btn btn-primary" id="ltcmax" onclick="selectRange('ltc', 'max')">Max</button>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>