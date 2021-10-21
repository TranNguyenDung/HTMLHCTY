
// -----------------------------------
var listPolyline = [[0,0]];
let x1 = 0.0;
let y1 = 0.0;
var mymap = L.map('mapid').setView([51.505, -0.09], 12);
//L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
//L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    // maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //id: 'mapbox/streets-v11',//Đường / Thành Phố
    id: 'mapbox/satellite-v9',//Sông Ngòi / Đất Đá
    // tileSize: 512,
    // zoomOffset: -1
    // zoomOffset: 0,
}).addTo(mymap);

var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'leaf-shadow.png',
        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});
// -----------------------------------
L.marker([51.5, -0.09]).addTo(mymap).bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();
// -----------------------------------
L.circle([51.508, -0.11], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(mymap).bindPopup("I am a circle.");
// -----------------------------------
L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap).bindPopup("I am a polygon.");


// -----------------------------------
var polyline = L.polyline([
    [0,5],
    [5,5],
    [10,5],
    [10,10],
  ], {
    color: 'red'
  }).bindPopup('I\'m a red polyline').addTo(mymap);


  functionRunning3();
  function functionRunning3(){
    setTimeout(function(){functionRunning3()}, 1000);

    let xc = ((Math.random() * 2 > 1 ? 1:-1) * Math.random() * 108) % 108;;
    let yc = ((Math.random() * 2  > 1 ? 1:-1) * Math.random() * 108) % 108;;

    L.circle([xc, yc],Math.random()* 590000, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5
    }).addTo(mymap).bindPopup("Vùng Đặc Biệt");


    x1 = (x1 + (Math.random() * 2 > 1 ? 1:-1) * Math.random() * 5) % 108;
    y1 = (y1 + (Math.random() * 2  > 1 ? 1:-1) * Math.random() * 5) % 108;

    console.log(listPolyline);
    listPolyline.push([x1,y1]);
    polyline = L.polyline([listPolyline], {
        color: 'red'
    }).bindPopup('I\'m a red polyline').addTo(mymap);
    mymap.update;
  }
// -----------------------------------
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}
// -----------------------------------
mymap.on('click', onMapClick);

// -------------------------------------------------------------------------------------

var xValues = [0,0,0,0,0,0,0,0,0,0];
var xValues1 = [0,0,0,0,0,0,0,0,0,0];
var xValues2 = [0,0,0,0,0,0,0,0,0,0];
var xValues3 = [0,0,0,0,0,0,0,0,0,0];
var xValues4 = [0,0,0,0,0,0,0,0,0,0];
let myChart = new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{ 
                data: xValues1,
                borderColor: "red",
                // fill: false
                fill: true
            },{ 
                data: xValues2,
                borderColor: "green",
                fill: false
            },{ 
                data: xValues3,
                borderColor: "blue",
                fill: false
            },{ 
                data: xValues4,
                borderColor: "orange",
                fill: false
            }
        ]
    },
    options: {
        legend: {display: false}
    }
});   

let getStatut = (i1) => {
    let total = 0;
    for(let i=0;i<i1.length;i++){
        total = i1[i];
    }
    total = total / i1.length;
    if(total > 5){
        return "Bất Ổn ~~~";
    }
    else{
        return "Ổn Định ---";
    }
}

functionRunning();
function functionRunning(){
    setTimeout(function(){functionRunning()}, 1000);
    // alert("Hello");
    const d = new Date();
    let time = d.getTime();
    // console.log(xValues);
    xValues.push(time);
    xValues1.push(Math.floor(Math.random() * 100));
    xValues2.push(Math.floor(Math.random() * 100));
    xValues3.push(Math.floor(Math.random() * 100));
    xValues4.push(Math.floor(Math.random() * 100));
    if(xValues.length > 10){
        xValues.splice(0, 1);
        xValues1.splice(0, 1);
        xValues2.splice(0, 1);
        xValues3.splice(0, 1);
        xValues4.splice(0, 1);
    }
    document.getElementById("classExport").innerHTML = getStatut(xValues1);
    document.getElementById("classExportVN").innerHTML = getStatut(xValues2);
    document.getElementById("classExportTQ").innerHTML = getStatut(xValues3);
    document.getElementById("classExportM").innerHTML = getStatut(xValues4);


    document.getElementById("classCangThang").innerHTML = xValues1[xValues1.length - 1] + "%";
    document.getElementById("classCangThangVN").innerHTML = xValues2[xValues2.length - 1] + "%";
    document.getElementById("classCangThangTQ").innerHTML = xValues3[xValues3.length - 1] + "%";
    document.getElementById("classCangThangM").innerHTML = xValues4[xValues4.length - 1] + "%";
    myChart.update();
}

// -------------------------------------------------------------------------------------

var xValuesC = ["Italy", "France", "Spain", "USA"];
var yValues = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),Math.floor(Math.random() * 100)];
var barColors = ["red", "green","blue","orange"];

let myChart2 = new Chart("myChart2", {
  type: "bar",
  data: {
    labels: xValuesC,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2021"
    }
  }
});
functionRunning2();
function functionRunning2(){
    setTimeout(function(){functionRunning2()}, 1000);
    yValues.splice(0, 4);
    yValues.push(xValues1[xValues1.length - 1]);
    yValues.push(xValues2[xValues2.length - 1]);
    yValues.push(xValues3[xValues3.length - 1]);
    yValues.push(xValues4[xValues4.length - 1]);
    myChart2.update();
    // console.log("------------------");
}
// -------------------------------------------------------------------------------------

// Sending a receiving data in JSON format using GET method
//      

let xhr = new XMLHttpRequest();
let url = "url?data=" + encodeURIComponent(JSON.stringify({"email": "hey@mail.com", "password": "101010"}));
xhr.open("GET", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let json = JSON.parse(xhr.responseText);
        console.log(json.email + ", " + json.password);
    }
};
xhr.send();
functionRunning4();
function functionRunning4(){
    setTimeout(function(){functionRunning4()}, 1000);
    console.log("Ping2");



}


// -------------------------------------------------------------------------------------
/*

var colours=new Array("#F781BE", "#F781BE", "#F781BE", "#F781BE", "#F781BE"); // warna untuk border-top, border-right, border-bottom, border-left dan background gelembung
var bubbles=100; // jumlah maksmal gelembung
var x=ox=400;
var y=oy=300;
var swide=800;
var shigh=600;
var sleft=sdown=0;
var bubb=new Array();
var bubbx=new Array();
var bubby=new Array();
var bubbs=new Array();
window.onload=function() { 
    if (document.getElementById) {
        var rats, div;
        for (var i=0; i<bubbles; i++) {
            rats=createDiv("3px", "3px");
            rats.style.visibility="hidden";
            div=createDiv("auto", "auto");
            rats.appendChild(div);
            div=div.style;
            div.top="1px";
            div.left="0px";
            div.bottom="1px";
            div.right="0px";
            div.borderLeft="1px solid "+colours[3];
            div.borderRight="1px solid "+colours[1];
            div=createDiv("auto", "auto");
            rats.appendChild(div);
            div=div.style;
            div.top="0px";
            div.left="1px";
            div.right="1px";
            div.bottom="0px"
            div.borderTop="1px solid "+colours[0];
            div.borderBottom="1px solid "+colours[2];
            div=createDiv("auto", "auto");
            rats.appendChild(div);
            div=div.style;
            div.left="1px";
            div.right="1px";
            div.bottom="1px";
            div.top="1px";
            div.backgroundColor=colours[4];
            div.opacity=0.5;
            if (document.all) div.filter="alpha(opacity=50)";
            document.body.appendChild(rats);
            bubb[i]=rats.style;
        }
        set_scroll();
        set_width();
        bubble();
    }
}

function bubble() {
    var c;
    if (x!=ox || y!=oy){
        ox=x;
        oy=y;
        for (c=0; c<bubbles; c++) if (!bubby[c]) {
            bubb[c].left=(bubbx[c]=x)+"px";
            bubb[c].top=(bubby[c]=y)+"px";
            bubb[c].width="3px";
            bubb[c].height="3px"
            bubb[c].visibility="visible";
            bubbs[c]=3;
            break;
        }
    }
    for (c=0; c<bubbles; c++) if (bubby[c]) update_bubb(c);
    setTimeout("bubble()", 40);
}

function update_bubb(i) {
    if (bubby[i]) {
    bubby[i]-=bubbs[i]/2+i%2;
    bubbx[i]+=(i%5-2)/5;
    if (bubby[i]>sdown && bubbx[i]>0) {
        if (Math.random()<bubbs[i]/shigh*2 && bubbs[i]++<8) {
            bubb[i].width=bubbs[i]+"px";
            bubb[i].height=bubbs[i]+"px";
        }
        bubb[i].top=bubby[i]+"px";
        bubb[i].left=bubbx[i]+"px";
    }
    else {
        bubb[i].visibility="hidden";
        bubby[i]=0;
        return;
        }
    }
}
document.onmousemove=mouse;
function mouse(e) {
    set_scroll();
    y=(e)?e.pageY:event.y+sleft;
    x=(e)?e.pageX:event.x+sdown;
}
window.onresize=set_width;

function set_width() {
    if (document.documentElement && document.documentElement.clientWidth) {
        swide=document.documentElement.clientWidth;
        shigh=document.documentElement.clientHeight;
    }
    else if (typeof(self.innerHeight)=="number") {
        swide=self.innerWidth;
        shigh=self.innerHeight;
    }
    else if (document.body.clientWidth) {
        swide=document.body.clientWidth;
        shigh=document.body.clientHeight;
    }
    else {
        swide=800;
        shigh=600;
    }
}
window.onscroll=set_scroll;
function set_scroll() {
    if (typeof(self.pageYOffset)=="number") {
    sdown=self.pageYOffset;
    sleft=self.pageXOffset;
    }
    else if (document.body.scrollTop || document.body.scrollLeft) {
    sdown=document.body.scrollTop;
    sleft=document.body.scrollLeft;
    }
    else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
    sleft=document.documentElement.scrollLeft;
    sdown=document.documentElement.scrollTop;
    }
    else {
    sdown=0;
    sleft=0;
    }
}
function createDiv(height, width) {
    var div=document.createElement("div");
    div.style.position="absolute";
    div.style.height=height;
    div.style.width=width;
    div.style.overflow="hidden";
    return (div);
}


*/