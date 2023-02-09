let urlData = location.href;
let newUrl = new URL(urlData);
let teamFull = newUrl.searchParams.get("name");

teamsDetails = JSON.parse(localStorage.getItem("teamArray"));
playersDetails = JSON.parse(localStorage.getItem("playerArray"));
var teamMainBox = document.getElementById("container_teams");
var tableTeam = document.getElementById("table-team");

var cnt = 0;

for (var i = 0; i < playersDetails.length; i++) {
  if (teamFull == playersDetails[i].from) {
    var isPlay = "";
    if (playersDetails[i].isPlaying == true) {
      isPlay = "Playing";
    } else {
      isPlay = "On Bench";
    }
    var currentP = playersDetails[i].playerName;
    cnt++;
    teamMainBox.innerHTML += `
<div    onclick="makethisinclick('${currentP}')"    class="minibox mn2">
<img src="${playersDetails[i].playerImg}" class="mainimage" alt="player"/> 
<div class="dataodcard">
  <p class="text1"> ${playersDetails[i].playerName}   </p>
  <p class="text2"> Worth : ${playersDetails[i].price} </p>
  <p class="text2"> Playing : ${isPlay} </p>
  <p class="text2">
   ${playersDetails[i].description} </p>
 
</div>
</div>
`;
  }
  function makethisinclick(res) {
    window.open(`./playerDetails.html?name=${res}`, "_self");
  }
}

console.log(cnt);
teamsDetails.map((item) => {
  if (teamFull == item.sName) {
    return (tableTeam.innerHTML += `
<div class="leftContainer">
<img src="${item.teamIcon}" class="team-page-icon" alt="icon">
<div class="leftContainerText">
<h1>${item.teamName}</h1>
<h2>Team Captain : <span>${item.teamCaptain}</span></h2>
<p>Star Batsman : <span>${item.topBatsman}</span></p>
<p>Star Bowler : <span>${item.topBowler}</span> </p>
<p>Number of Players :  <span>${cnt}</span> </p>
<h3>Trophies Won : <span>${item.championshipWonCount}</span></h3>
</div>
</div>
`);
  }
});
