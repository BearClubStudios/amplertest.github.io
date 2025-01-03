function errorNA() {
    clearTimeout()
    document.getElementById('naerror').style.display = 'block';
    setTimeout(function(){
        document.getElementById('naerror').classList.add('zoom-out');
    }, 3000);
    setTimeout(function(){
        document.getElementById('naerror').classList.remove('zoom-out');
        document.getElementById('naerror').style.display = 'none';
    }, 3200);
}

function newstab(){
    resetSelected();
    resetDefault()
    document.getElementById('game-bg').style.backgroundImage = 'url(./images/comingsoon.png)';
    document.getElementById('game-header').src = './images/newsbg.png';
    document.getElementById('gameedition').innerHTML = 'NEWS';
    document.getElementById('header2').style.display = 'none';
    document.getElementById('header3').style.display = 'block';
    document.getElementById('header4').style.display = 'block';
    document.getElementById('header5').style.display = 'block';
    document.getElementById('header6').style.display = 'block';
    document.getElementById('gtabs0').style.fontWeight = '700';
    document.getElementById('gtabs0').style.borderLeft = '#008542 solid 4px';
    document.getElementById('dropdown1').style.display = 'flex';
    document.getElementById('dropdown2').style.display = 'flex';
}

function webedition(){
    resetSelected();
    resetDefault()
    document.getElementById('game-bg').style.backgroundImage = 'url(./images/web-edition.jpg)';
    document.getElementById('game-header').src = './images/web-title.png';
    document.getElementById('gameedition').innerHTML = 'EAGLERCRAFT: FOR WEB BROWSERS';
    document.getElementById('header2').style.display = 'none';
    document.getElementById('header3').style.display = 'block';
    document.getElementById('header4').style.display = 'block';
    document.getElementById('header5').style.display = 'block';
    document.getElementById('header6').style.display = 'block';
    document.getElementById('gtabs2').style.fontWeight = '700';
    document.getElementById('gtabs2').style.borderLeft = '#008542 solid 4px';
    document.getElementById('dropdown2.5').style.display = 'flex';
    document.getElementById('dropdown2').style.display = 'flex';
    document.getElementById('dropdown1').style.display = 'flex';
    releasetwo()
}
function moddededition(){
    resetSelected();
    resetDefault()
    document.getElementById('game-bg').style.backgroundImage = 'url(./images/modded-edition.jpg)';
    document.getElementById('game-header').src = './images/modded-title.png';
    document.getElementById('gameedition').innerHTML = 'EAGLERCRAFT: MODDED EDITION';
    document.getElementById('header2').style.display = 'block';
    document.getElementById('header3').style.display = 'block';
    document.getElementById('header4').style.display = 'block';
    document.getElementById('header5').style.display = 'none';
    document.getElementById('header6').style.display = 'block';
    document.getElementById('gtabs3').style.fontWeight = '700';
    document.getElementById('gtabs3').style.borderLeft = '#008542 solid 4px';
    document.getElementById('dropdown3').style.display = 'flex';
    document.getElementById('dropdown4').style.display = 'flex';
    document.getElementById('dropdown5').style.display = 'flex';
    document.getElementById('dropdown6').style.display = 'flex';
    document.getElementById('dropdown7').style.display = 'flex';
    eaglerforge()
}

function eaglercontrols(){
    resetSelected();
    resetDefault()
    document.getElementById('game-bg').style.backgroundImage = 'url(./images/controls-edition.jpg)';
    document.getElementById('game-header').src = './images/controls-title.png';
    document.getElementById('gameedition').innerHTML = 'EAGLERCRAFT: FOR MOBILE AND CONTROLLER';
    document.getElementById('header2').style.display = 'none';
    document.getElementById('header3').style.display = 'block';
    document.getElementById('header4').style.display = 'block';
    document.getElementById('header5').style.display = 'none';
    document.getElementById('header6').style.display = 'block';
    document.getElementById('gtabs4').style.fontWeight = '700';
    document.getElementById('gtabs4').style.borderLeft = '#008542 solid 4px';
    document.getElementById('dropdown8').style.display = 'flex';
    document.getElementById('dropdown9').style.display = 'flex';
    document.getElementById('dropdown10').style.display = 'flex';
    dogomobile()
}

function snapshots(){
    resetSelected();
    resetDefault()
    document.getElementById('game-bg').style.backgroundImage = 'url(./images/snapshotsbg.jpeg)';
    document.getElementById('game-header').src = './images/snapshotslogo.png';
    document.getElementById('gameedition').innerHTML = 'EAGLERCRAFT: SNAPSHOTS';
    document.getElementById('header2').style.display = 'none';
    document.getElementById('header3').style.display = 'block';
    document.getElementById('header4').style.display = 'block';
    document.getElementById('header5').style.display = 'none';
    document.getElementById('header6').style.display = 'block';
    document.getElementById('gtabs44').style.fontWeight = '700';
    document.getElementById('gtabs44').style.borderLeft = '#008542 solid 4px';
    document.getElementById('dropdown43').style.display = 'flex';
    snapshotsdn()
}

function eaglerservers(){
    resetSelected();
    resetDefault()
    document.getElementById('game-bg').style.backgroundImage = 'url(./images/comingsoon.png)';
    document.getElementById('game-header').src = './images/newsbg.png';
    document.getElementById('gameedition').innerHTML = 'SERVERS FOR EAGLERCRAFT';
    document.getElementById('header2').style.display = 'none';
    document.getElementById('header3').style.display = 'block';
    document.getElementById('header4').style.display = 'block';
    document.getElementById('header5').style.display = 'none';
    document.getElementById('header6').style.display = 'block';
    document.getElementById('gtabs5').style.fontWeight = '700';
    document.getElementById('gtabs5').style.borderLeft = '#008542 solid 4px';
    document.getElementById('dropdown8').style.display = 'flex';
    document.getElementById('dropdown9').style.display = 'flex';
    document.getElementById('dropdown10').style.display = 'flex';
}

function dogomobile() {
    document.getElementById('gametitle').innerHTML = "FlamedDogo's Mobile UI";
    document.getElementById('gameversion').innerHTML = '1.8.8-v3.0.5b';
    document.getElementById('gameicon').src = './images/m-logo10.png';
    document.getElementById('playbutton').href = 'mc/1.8.8/?userscript=flameddogo99-eaglermobile.js';
}

function redmobile() {
    document.getElementById('gametitle').innerHTML = "Red's Mobile UI";
    document.getElementById('gameversion').innerHTML = '1.8.8-v1.40';
    document.getElementById('gameicon').src = './images/m-logo9.png';
    document.getElementById('playbutton').href = 'mc/1.8.8/?userscript=irv77-eaglercraft-mobile.js';
}

function redcontroller() {
    document.getElementById('gametitle').innerHTML = "Red's Controller Support";
    document.getElementById('gameversion').innerHTML = '1.8.8-v1.1';
    document.getElementById('gameicon').src = './images/m-logo8.png';
    document.getElementById('playbutton').href = 'mc/1.8.8/?userscript=irv77-eaglerconsole.js';
}

function astraclient() {
    document.getElementById('gametitle').innerHTML = 'Astra Client';
    document.getElementById('gameversion').innerHTML = '1.8.8-v1.3';
    document.getElementById('gameicon').src = './images/m-logo7.png';
    document.getElementById('playbutton').href = 'mc/astraclient/';
}

function starlike() {
    document.getElementById('gametitle').innerHTML = 'Starlike';
    document.getElementById('gameversion').innerHTML = '1.8.8-v0.3.1';
    document.getElementById('gameicon').src = './images/m-logo6.png';
    document.getElementById('playbutton').href = 'mc/starlikeclient/';
}

function eaglerforge() {
    document.getElementById('gametitle').innerHTML = 'Eaglerforge';
    document.getElementById('gameversion').innerHTML = '1.8.8-v1.3.2';
    document.getElementById('gameicon').src = './images/m-logo5.png';
    document.getElementById('playbutton').href = 'mc/eaglerforge/';
}

function resentclient() {
    document.getElementById('gametitle').innerHTML = 'Resent Client';
    document.getElementById('gameversion').innerHTML = '1.8.8-v4.0.p4';
    document.getElementById('gameicon').src = './images/m-logo4.png';
    document.getElementById('playbutton').href = 'mc/resentclient/';
}

function shadowclient() {
    document.getElementById('gametitle').innerHTML = 'Shadow Client';
    document.getElementById('gameversion').innerHTML = '1.8.8-v4.5-u34';
    document.getElementById('gameicon').src = './images/m-logo3.png';
    document.getElementById('playbutton').href = 'mc/shadowclient';
}

function snapshotsdn() {
    document.getElementById('gametitle').innerHTML = 'Open Snapshots';
    document.getElementById('gameversion').innerHTML = 'Play BETA Releases';
    document.getElementById('gameicon').src = './images/looms.png';
    document.getElementById('playbutton').href = 'extras/snapshots.html';
}

function releasetwo() {
    document.getElementById('gametitle').innerHTML = 'Release 2';
    document.getElementById('gameversion').innerHTML = '1.9.4-u35 ultimate';
    document.getElementById('gameicon').src = './images/iblock.png';
    document.getElementById('playbutton').href = 'mc/194/EaglercraftL_1.9.4.html';
}

function latestrelease() {
    document.getElementById('gametitle').innerHTML = 'Release 1';
    document.getElementById('gameversion').innerHTML = '1.8.8-u41';
    document.getElementById('gameicon').src = './images/m-logo1.png';
    document.getElementById('playbutton').href = 'mc/1.8.8/';
}

function previousrelease() {
    document.getElementById('gametitle').innerHTML = 'Oldest Release';
    document.getElementById('gameversion').innerHTML = '1.5.2-sp1.01';
    document.getElementById('gameicon').src = './images/m-logo2.png';
    document.getElementById('playbutton').href = 'mc/1.5.2/';
}

function dropdowntoggle(){
    if (document.getElementById('dropdn').style.visibility === 'hidden') {
        document.getElementById('dropdn').style.visibility = 'visible';
        document.getElementById('dropdownuparrow').innerHTML = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 20 20"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="dropdownIcon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 15l6 -6l6 6" /></svg>';
    } else {
        document.getElementById('dropdn').style.visibility = 'hidden'; 
        document.getElementById('dropdownuparrow').innerHTML = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 20 20"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="dropdownIcon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>';
    }

}

function resetSelected() {
    document.getElementById('gtabs0').style.fontWeight = '';
    document.getElementById('gtabs0').style.borderLeft = '';
    document.getElementById('gtabs1').style.fontWeight = '';
    document.getElementById('gtabs1').style.borderLeft = '';
    document.getElementById('gtabs2').style.fontWeight = '';
    document.getElementById('gtabs2').style.borderLeft = '';
    document.getElementById('gtabs3').style.fontWeight = '';
    document.getElementById('gtabs3').style.borderLeft = '';
    document.getElementById('gtabs4').style.fontWeight = '';
    document.getElementById('gtabs4').style.borderLeft = '';
    document.getElementById('gtabs44').style.fontWeight = '';
    document.getElementById('gtabs44').style.borderLeft = '';
    document.getElementById('gtabs5').style.fontWeight = '';
    document.getElementById('gtabs5').style.borderLeft = '';
    document.getElementById('gtabs6').style.fontWeight = '';
    document.getElementById('gtabs6').style.borderLeft = '';
    document.getElementById('dropdown1').style.display = 'none';
    document.getElementById('dropdown2').style.display = 'none';
    document.getElementById('dropdown2.5').style.display = 'none';
    document.getElementById('dropdown3').style.display = 'none';
    document.getElementById('dropdown4').style.display = 'none';
    document.getElementById('dropdown5').style.display = 'none';
    document.getElementById('dropdown6').style.display = 'none';
    document.getElementById('dropdown7').style.display = 'none';
    document.getElementById('dropdown8').style.display = 'none';
    document.getElementById('dropdown9').style.display = 'none';
    document.getElementById('dropdown10').style.display = 'none';
    document.getElementById('dropdown43').style.display = 'none';
}

function resetDefault() {
    document.getElementById('drop').style.display = 'flex';
    document.getElementById('mainbutton').classList.remove('playButton2');
    document.getElementById('mainbutton').classList.add('playButton');
}

window.addEventListener("scroll", preventMotion, false);
window.addEventListener("touchmove", preventMotion, false);

function preventMotion(event)
{
    window.scrollTo(0, 0);
    event.preventDefault();
    event.stopPropagation();
}

console.clear()
