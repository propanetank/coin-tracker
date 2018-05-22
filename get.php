<?php

$URL = "https://api.coingecko.com/api/v3/coins/";
$data = "/market_chart?vs_currency=usd&days=" . $_GET["days"];

// Get current time and date
	$time = time();
	$today = date("Y-m-d");
	$monthAgo = $time - 2678400;

	if ($_GET['data'] == "btc") {
		$getBTC = file_get_contents($URL . "bitcoin" . $data);
		$BTC = json_decode($getBTC);
		$BTC = json_encode($BTC->prices, JSON_NUMERIC_CHECK);
		echo $BTC;
	} else if ($_GET['data'] == "eth") {
		$getETH = file_get_contents($URL . "ethereum" . $data);
		$ETH = json_decode($getETH);
		$ETH = json_encode($ETH->prices, JSON_NUMERIC_CHECK);
		echo $ETH;
	} else if ($_GET['data'] == "xrp") {
		$getXRP = file_get_contents($URL . "ripple" . $data);
		$XRP = json_decode($getXRP);
		$XRP = json_encode($XRP->prices, JSON_NUMERIC_CHECK);
		echo $XRP;
	} else if ($_GET['data'] == "xmr") {
		$getXMR = file_get_contents($URL . "monero" . $data);
		$XMR = json_decode($getXMR);
		$XMR = json_encode($XMR->prices, JSON_NUMERIC_CHECK);
		echo $XMR;
	} else if ($_GET['data'] == "lnd") {
		$getLND = file_get_contents($URL . "lendingblock" . $data);
		$LND = json_decode($getLND);
		$LND = json_encode($LND->prices, JSON_NUMERIC_CHECK);
		echo $LND;
	} else if ($_GET['data'] == "ltc") {
		$getLTC = file_get_contents($URL . "litecoin" . $data);
		$LTC = json_decode($getLTC);
		$LTC = json_encode($LTC->prices, JSON_NUMERIC_CHECK);
		echo $LTC;
	} else {
		header("Location: index.php");
	}
?>