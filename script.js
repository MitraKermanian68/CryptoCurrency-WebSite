var bit = document.getElementById("bitcoin");
var doge = document.getElementById("dogecoin");
var ethe = document.getElementById("ethereum");

var settings = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=Bitcoin%2CDogecoin%2CEthereum&vs_currencies=usd",
  method: "GET",
  headers: {},
};

$.ajax(settings).done(function (response) {
  bit.innerHTML = response.bitcoin.usd;
  doge.innerHTML = response.dogecoin.usd;
  ethe.innerHTML = response.ethereum.usd;
});
