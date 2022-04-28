//TAXI SIM 2D P5 - A WEB BROWSER GAME - SKETCH FILE
// LAST EDIT : 29 NOV 2021
p5.disableFriendlyErrors = true;

var taxi, taxiImage, taxiCFImage, speed, menu = false, help = false;
var dash, markD = 0, endS, aPn = 0, Taxisens, TaxisensCL;
var Greensville, Parkvillia, BernardAvenue, Stratum;
var Warkhandem;
var htmlps;
var spawnPeds = true, spawnFPeds = true, spawnTraf = true, pedBR, pedBR2, FDestinaSE;
var PTraffic, OTraffic, TrafficGroup, OTrafficGroup;
var PedGBgr, PedGB1, PedGB2;
var destinaIm;
var eArea1, eArea2;
var upar, rightar, uparimage, rightarimage;
var nav1e43image, nav1e43, nav1e43intimage, nav1e43int, nav2e52image, nav2e52intimage, nav2e52int;
var fareMis = false, cCrash = true;
var CF = false;
var cc = false;

var iPaths = [], frontGRL, backGRL, backBlock, inviBar;
var allLanes = [];
var pedsR = [], pedsRGroup, pedHe;
var pedsF = [], pedsFGroup;
var Fdestinas = [];
var FpedsGRSV = [], FpedsGRSVGroup;
var FpedsWRKN = [], FpedsWRKNGroup;
var FpedsPRKV = [], FpedsPRKVGroup;
var FpedsBRAV = [], FpedsBRAVGroup;
var TrafficAr = [];
var vMap = [];
var eArea = [];
var destinWRKD = [];

var WRKDfPedbazaar, WRKDfPedbazaarGroup, WRKDfPedbazaarFA = false, spWRKDfPedbazaar = true;
var WRKDfPedmarket, WRKDfPedmarketGroup, WRKDfPedmarketFA = false, spWRKDfPedmarket = true;
var WRKDfPednapalik, WRKDfPednapalikGroup, WRKDfPednapalikFA = false, spWRKDfPednapalik = true;

var GRSVfPedcouncil, GRSVfPedcouncilGroup, GRSVfPedcouncilFA = false, spGRSVfPedcouncil = true;
var GRSVfPedpark, GRSVfPedparkGroup, GRSVfPedparkFA = false, spGRSVfPedpark = true;
var GRSVfPedground, GRSVfPedgroundGroup, GRSVfPedgroundFA = false, spGRSVfPedground = true;

var PRKVfPedsupermarket, PRKVfPedsupermarketGroup, PRKVfPedsupermarketFA = false, spPRKVfPedsupermarket = true;

var BRAVfPedresidency, BRAVfPedresidencyGroup, BRAVfPedresidencyFA = false, spBRAVfPedresidency = true;
var BRAVfPedcalton, BRAVfPedcaltonGroup, BRAVfPedcaltonFA = false, spBRAVfPedcalton = true;
var BRAVfPedstadium, BRAVfPedstadiumGroup, BRAVfPedstadiumFA = false, spBRAVfPedstadium = true;
var BRAVfPedparkway, BRAVfPedparkwayGroup, BRAVfPedparkwayFA = false, spBRAVfPedparkway = true;
var BRAVfPedplayground, BRAVfPedplaygroundGroup, BRAVfPedplaygroundFA = false, spBRAVfPedplayground = true;

var fra = 40;
var fareCo = 0;
var time = 0;
var XP = 0;
var totaltimeD = 0;

var Start = 0;
var Play = 1;
var End = 2;
var Due = 3;
var Win = 4;
var angrymode = 5;
var Pause = 6;
var gameState = Start;

function preload() {
    taxiImage = loadImage("images/taxi/otaxi.png");
    taxiCFImage = loadImage("images/taxi/otaxiCF.png");

    backgroundHousesR1 = loadImage("images/houses/housesR.jpg");
    backgroundHousesR2 = loadImage("images/houses/ruHousesR1.jpg")
    backgroundHousesR3 = loadImage("images/houses/housesR.jpg");
    backgroundHousesR4 = loadImage("images/houses/housesR2.jpg");
    backgroundHousesR5 = loadImage("images/houses/housesR.jpg");

    backgroundHousesL1 = loadImage("images/houses/indusL1.jpg");
    backgroundHousesL2 = loadImage("images/houses/indusL2.jpg");
    backgroundHousesL3 = loadImage("images/houses/ruHousesL3.jpg");
    backgroundHousesL4 = loadImage("images/houses/ruHousesL4.jpg");
    backgroundHousesL5 = loadImage("images/houses/housesL2.jpg");

    backgroundHousesR6 = loadImage("images/houses/housesR2.jpg");
    backgroundHousesR7 = loadImage("images/houses/housesR.jpg");
    backgroundHousesR8 = loadImage("images/houses/housesR2.jpg");
    backgroundHousesR9 = loadImage("images/houses/housesR.jpg");
    backgroundHousesR10 = loadImage("images/houses/housesR2.jpg");

    backgroundHousesL6 = loadImage("images/houses/housesL2.jpg");
    backgroundHousesL7 = loadImage("images/houses/housesL.jpg");
    backgroundHousesL8 = loadImage("images/houses/housesL2.jpg");

    backgroundcitiesL1 = loadImage("images/moderncities/modernbg1L.jpg");
    backgroundcitiesL2 = loadImage("images/moderncities/modernbg2L.jpg");
    backgroundcitiesL3 = loadImage("images/moderncities/modernbg3L.jpg");
    backgroundcitiesL4 = loadImage("images/moderncities/modernbg3L.jpg");
    backgroundcitiesL5 = loadImage("images/moderncities/modernbg4L.jpg");
    backgroundcitiesL6 = loadImage("images/moderncities/modernbg5L.jpg");
    backgroundcitiesL7 = loadImage("images/moderncities/modernbg1L.jpg");
    backgroundcitiesL8 = loadImage("images/moderncities/modernbg2L.jpg");
    backgroundcitiesL9 = loadImage("images/moderncities/modernbg3L.jpg");
    backgroundcitiesL10 = loadImage("images/moderncities/modernbg5L.jpg");

    backgroundcitiesR1 = loadImage("images/moderncities/modernbg1R.jpg");
    backgroundcitiesR2 = loadImage("images/moderncities/modernbg2R.jpg");
    backgroundcitiesR3 = loadImage("images/moderncities/modernbg3R.jpg");
    backgroundcitiesR4 = loadImage("images/moderncities/modernbg3R.jpg");
    backgroundcitiesR5 = loadImage("images/moderncities/modernbg2R.jpg");
    backgroundcitiesR6 = loadImage("images/moderncities/modernbg4R.jpg");
    backgroundcitiesR7 = loadImage("images/moderncities/modernbg5R.jpg");
    backgroundcitiesR8 = loadImage("images/moderncities/modernbg3R.jpg");
    backgroundcitiesR9 = loadImage("images/moderncities/modernbg1R.jpg");
    backgroundcitiesR10 = loadImage("images/moderncities/modernbg4R.jpg");

    treeG1 = loadImage("images/trees/treeG1.png");
    treeG2 = loadImage("images/trees/treeG2.png");
    treeG3 = loadImage("images/trees/treeG1.png");
    treeG4 = loadImage("images/trees/treeG2.png");
    treeG5 = loadImage("images/trees/treeG2.png");
    treeG6 = loadImage("images/trees/treeG1.png");
    treeG7 = loadImage("images/trees/treeG2.png");
    treeG8 = loadImage("images/trees/treeG1.png");

    destinaIm = loadImage("images/generic/WRKD.png");

    pedHe = loadImage("images/peds/pedhrg.png");
    pedGrsOI = loadImage("images/peds/pedGrsO.png");
    pedGrsO2 = loadImage("images/peds/pedGrsO2.png");

    uparimage = loadImage("images/directions/upar.bmp");
    rightarimage = loadImage("images/directions/rightar.bmp");

    nav1e43image = loadImage("images/directions/interstateRuralE43.bmp");
    nav1e43intimage = loadImage("images/directions/interstateRuralE43int.bmp");
    nav2e52image = loadImage("images/directions/interstateCityE52.bmp");
    nav2e52intimage = loadImage("images/directions/interstateCityE52int.bmp");

}

function setup() {
    createCanvas(1200, 600);

    frameRate(fra);

    endS = createSprite(width/2, -120500, 1500, 10);
    iPaths.push(endS);

    Greensville = createSprite(width / 2, -10000, 1300, 34000);
    Greensville.visible = false;
    vMap.push(Greensville);

    Warkhandem = createSprite(width / 2, -47000, 1300, 21000);
    Warkhandem.visible = false;
    vMap.push(Warkhandem);

    Parkvillia = createSprite(width / 2, -77000, 1300, 14000);
    Parkvillia.visible = false;
    vMap.push(Parkvillia);

    BernardAvenue = createSprite(width / 2, -101000, 1300, 35000);
    BernardAvenue.visible = false;
    vMap.push(BernardAvenue);

    eArea1 = createSprite(width / 2, -31450, 1300, 14700);
    eArea1.visible = false;
    eArea.push(eArea1);

    eArea2 = createSprite(width / 2, -66500, 1300, 17000);
    eArea2.visible = false;
    eArea.push(eArea2);

    road = createSprite(400, height / 2 - 60000, 500, 125000);
    road.shapeColor = rgb(70, 70, 70);

    laneM = createSprite(400, height / 2 - 60000, 5, 125000);
    laneM.shapeColor = rgb(255, 255, 255)

    laneR1 = createSprite(640, height / 2 - 60000, 5, 125000);
    laneR1.shapeColor = rgb(255, 255, 255);
    allLanes.push(laneR1);

    laneL1 = createSprite(160, height / 2 - 63200, 5, 125000);
    laneL1.shapeColor = rgb(255, 255, 255);
    allLanes.push(laneL1);

    ipath = createSprite(75, -100, 150, 600);
    ipath.shapeColor = rgb(70, 70, 70);

    ipathLT = createSprite(60, -390, 200, 5);
    ipathLT.shapeColor = rgb(255, 255, 255);
    iPaths.push(ipathLT);

    ipathLL = createSprite(0, -100, 5, 575);
    ipathLL.shapeColor = rgb(255, 255, 255);
    iPaths.push(ipathLL);

    ipathLB = createSprite(60, 190, 200, 5);
    ipathLB.shapeColor = rgb(255, 255, 255);
    iPaths.push(ipathLB);

    ipathLB2 = createSprite(width / 2, 190, 1200, 5);
    ipathLB2.visible = false;
    iPaths.push(ipathLB2);

    ipathBlock = createSprite(width / 2, height / 2, 1350, 200);
    ipathBlock.visible = false;
    iPaths.push(ipathBlock);

    htmlps = new HTMLPSCHARS();

    rightar2 = createSprite(80, -250, 60, 30);
    rightar2.addImage(rightarimage);

    rightar = createSprite(80, -150, 60, 30);
    rightar.addImage(rightarimage);

    upar = createSprite(280, -450, 60, 30);
    upar.addImage(uparimage);

    upar2 = createSprite(280, -650, 60, 30);
    upar2.addImage(uparimage);

    nav1e43 = createSprite(280, -24200, 200, 65);
    nav1e43.addImage(nav1e43image);
    nav1e43int = createSprite(280, -39000, 200, 24);
    nav1e43int.addImage(nav1e43intimage);
    nav2e52 = createSprite(280, -58000, 200, 65);
    nav2e52.addImage(nav2e52image);
    nav2e52int = createSprite(280, -74000, 200, 24);
    nav2e52int.addImage(nav2e52intimage);

    taxi = createSprite(100, 0, 50, 100);
    taxi.addImage(taxiImage);

    frontGRL = createSprite(undefined, undefined, taxi.width, 50);
    frontGRL.visible = false;

    backGRL = createSprite(undefined, undefined, taxi.width, 50);
    backGRL.visible = false;

    GRSVground = createSprite(600, -12177, 300, 2000);
    GRSVground.addImage(destinaIm);
    GRSVground.visible = false;
    Fdestinas.push(GRSVground);

    GRSVcouncil = createSprite(200, -19325, 300, 2000);
    GRSVcouncil.addImage(destinaIm);
    GRSVcouncil.visible = false;
    Fdestinas.push(GRSVcouncil);

    GRSVfPedpark = createSprite(600, -23002, 300, 2000);
    GRSVfPedpark.addImage(destinaIm);
    GRSVfPedpark.visible = false;
    Fdestinas.push(GRSVfPedpark);

    DWRKDmarket = createSprite(200, -45480, 300, 2000);
    DWRKDmarket.addImage(destinaIm);
    DWRKDmarket.visible = false;
    Fdestinas.push(DWRKDmarket);

    DWRKDbazaar = createSprite(200, -52230, 300, 2000);
    DWRKDbazaar.addImage(destinaIm);
    DWRKDbazaar.visible = false;
    Fdestinas.push(DWRKDbazaar);

    DWRKDnapalik = createSprite(600, -55600, 300, 2000);
    DWRKDnapalik.addImage(destinaIm);
    DWRKDnapalik.visible = false;
    Fdestinas.push(DWRKDnapalik);

    PRKVsupermarket = createSprite(200, -77600, 300, 2000);
    PRKVsupermarket.addImage(destinaIm);
    PRKVsupermarket.visible = false;
    Fdestinas.push(PRKVsupermarket);

    BRAVresidency = createSprite(600, -94900, 300, 2000);
    BRAVresidency.addImage(destinaIm);
    BRAVresidency.visible = false;
    Fdestinas.push(BRAVresidency);

    BRAVcalton = createSprite(600, -104894, 300, 2000);
    BRAVcalton.addImage(destinaIm);
    BRAVcalton.visible = false;
    Fdestinas.push(BRAVcalton);

    BRAVstadium = createSprite(600, -109290, 300, 2000);
    BRAVstadium.addImage(destinaIm);
    BRAVstadium.visible = false;
    Fdestinas.push(BRAVstadium);

    BRAVplayground = createSprite(600, -117000, 300, 2000);
    BRAVplayground.addImage(destinaIm);
    BRAVplayground.visible = false;
    Fdestinas.push(BRAVplayground);

    BRAVparkway = createSprite(600, -119810, 300, 2000);
    BRAVparkway.addImage(destinaIm);
    BRAVparkway.visible = false;
    Fdestinas.push(BRAVparkway);

    Taxisens = createSprite(0, 0, 50, 450);
    Taxisens.visible = false;

    TaxisensCL = createSprite(0, 0, 50, 100);
    TaxisensCL.visible = false;

    pedsRGroup = new Group();
    pedsFGroup = new Group();

    FpedsGRSVGroup = new Group();
    FpedsPRKVGroup = new Group();

    FpedsBRAVGroup = new Group();
    FpedsWRKNGroup = new Group();

    GRSVfPedgroundGroup = new Group();
    GRSVfPedcouncilGroup = new Group();

    WRKDfPedbazaarGroup = new Group();
    WRKDfPedmarketGroup = new Group();
    WRKDfPednapalikGroup = new Group();

    PRKVfPedsupermarketGroup = new Group();

    BRAVfPedresidencyGroup = new Group();
    BRAVfPedcaltonGroup = new Group();
    BRAVfPedstadiumGroup = new Group();
    BRAVfPedparkwayGroup = new Group();
    BRAVfPedplaygroundGroup = new Group();

    TrafficGroup = new Group();
    OTrafficGroup = new Group();

    setInterval(defTimer, 1000);
    setInterval(defTTDCounter, 1000);

}

function draw() {
    background(185, 122, 87);

    if (keyWentDown("N") && !menu) {
        menu = true;
    } else if (keyWentDown("N") && menu) {
        menu = false;
    }

    if (keyWentDown("H") && !help) {
        help = true;
    } else if (keyWentDown("H") && help) {
        help = false;
    }

    if (keyWentDown("ESC") && menu || keyWentDown("ESC") && help) {
        menu = false;
        help = false;
    }

    if (menu) {
        document.getElementById("cont").style.opacity = 1;
        document.getElementById("cont").style.top = "0vh";
    } else if (!menu) {
        document.getElementById("cont").style.opacity = 0;
        document.getElementById("cont").style.top = "-100vh";    
    }
    if (menu && gameState === Play) {
        gameState = Pause;
    }

    if (help) {
        document.getElementById('helpB').style.opacity = 1;
        document.getElementById('helpB').style.top = "0vh";
    } else if (!help) {
        document.getElementById('helpB').style.opacity = 0;
        document.getElementById('helpB').style.top = "100vh";    
    }

    if (help && gameState === Play) {
        gameState = Pause;
    }

    camera.position.x = width/2;
    camera.position.y = taxi.y - 240;

    frontGRL.y = taxi.y - 75;
    frontGRL.x = taxi.x;
    
    backGRL.y = taxi.y + 75;
    backGRL.x = taxi.x;

    htmlps.showTitle();
    htmlps.startDisplay();

    taxi.collide(iPaths);
    taxi.collide(allLanes);

    image(backgroundHousesL1, -240, -5000, 392, 4520);
    image(backgroundHousesL2, -240, -9600, 392, 4520);
    image(backgroundHousesL3, -240, -14300, 392, 4520);
    image(backgroundHousesL4, -240, -19200, 392, 4520);
    image(backgroundHousesL5, -240, -24000, 392, 4520);

    image(backgroundHousesR1, width / 2 + 50, -4200, 392, 4520);
    image(backgroundHousesR2, width / 2 + 50, -9000, 392, 4520);
    image(backgroundHousesR3, width / 2 + 50, -13500, 392, 4520);
    image(backgroundHousesR4, width / 2 + 50, -18300, 392, 4520);
    image(backgroundHousesR5, width / 2 + 50, -22850, 392, 4520);

    image(backgroundHousesL6, -240, -44000, 392, 4520);
    image(backgroundHousesL7, -240, -48700, 392, 4520);
    image(backgroundHousesL8, -240, -53300, 392, 4520);

    image(backgroundHousesR6, width / 2 + 50, -43500, 392, 4520);
    image(backgroundHousesR7, width / 2 + 50, -48520, 392, 4520);
    image(backgroundHousesR8, width / 2 + 50, -53320, 392, 4520);
    image(backgroundHousesR9, width / 2 + 50, -57920, 392, 4520);

    image(backgroundcitiesL1, -240, -80000, 392, 4520);
    image(backgroundcitiesL2, -240, -84550, 392, 4520);
    image(backgroundcitiesL3, -240, -89070, 392, 4520);
    image(backgroundcitiesL4, -240, -93590, 392, 4520);
    image(backgroundcitiesL5, -240, -98110, 392, 4520);
    image(backgroundcitiesL6, -240, -102630, 392, 4520);
    image(backgroundcitiesL7, -240, -107150, 392, 4520);
    image(backgroundcitiesL8, -200, -111670, 392, 4520);
    image(backgroundcitiesL9, -240, -116190, 392, 4520);
    image(backgroundcitiesL10, -240, -120710, 392, 4520);

    image(backgroundcitiesR1, width / 2 + 50, -80520, 392, 4520);
    image(backgroundcitiesR2, width / 2 + 50, -84520, 392, 4520);
    image(backgroundcitiesR3, width / 2 + 50, -89100, 392, 4520);
    image(backgroundcitiesR4, width / 2 + 50, -93620, 392, 4520);
    image(backgroundcitiesR5, width / 2 + 50, -98200, 392, 4520);
    image(backgroundcitiesR6, width / 2 + 50, -102720, 392, 4520);
    image(backgroundcitiesR7, width / 2 + 50, -107240, 392, 4520);
    image(backgroundcitiesR8, width / 2 + 50, -111760, 392, 4520);
    image(backgroundcitiesR9, width / 2 + 50, -116280, 392, 4520);
    image(backgroundcitiesR10, width / 2 + 50, -120800, 392, 4520);

    image(treeG1, width / 2 + 70, -31000, 200, 7500);
    image(treeG2, -50, -31700, 200, 7500);
    image(treeG3, width / 2 +70, -38500, 200, 7500);
    image(treeG4, -50, -39500, 200, 7500);
    image(treeG5, -50, -61500, 200, 7500);
    image(treeG6, width / 2 + 70, -65500, 200, 7500);
    image(treeG7, -50, -75000, 200, 7500);
    image(treeG8, width / 2 + 70, -76000, 200, 7500);


    if (keyDown("E") && gameState === Start) {
        gameState = Play;
        htmlps.startDisplayOFF();
    }

    if (gameState === Play) {
        htmlps.playCompo();

        if (speed <= 0 && !CF) {
            OTrafficGroup.collide(frontGRL);
            TrafficGroup.collide(backGRL);
        }

        if (taxi.y < -500 && !fareMis && taxi.y > -7000) {
            htmlps.status.html("Status : 🔎 Searching for a fare.");
            htmlps.guide.html("ⓘ Drive up the road and search for a fare. " +
                "Fares are enclosed in a circle. Drive up to them to receive information.");
            htmlps.guide.style('white-space', 'normal');
        }
        if (taxi.y < -7000) {
            htmlps.guide.html("Search for fares, that are enclosed in a circle.");
            htmlps.status.html("Status : 🔎 Searching for a fare.")
        }

        if (keyWentDown("Z") && !CF && speed == 0) {
            CF = true
        } else if (keyWentDown("Z") && CF && speed == 0) {
            CF = false;
        }

        if (CF) {
            OTrafficGroup.collide(frontGRL);
        }
        if (CF && taxi.x < 420 && speed <= 0) {
            TrafficGroup.collide(backGRL);
        }

        if (keyWentDown("C") && !cc && speed > 3) {
            cc = true;
        } else if (keyWentDown("C") && cc) {
            cc = false;
        } else if (cc && speed < 3) {
            cc = false;
        }

        if (cc) {
            htmlps.cc.style('color', 'rgb(73, 255, 56)');
            htmlps.cc.style('opacity', '1');   
            htmlps.ccf.style('opacity', '1');
        } else if (!cc) {
            htmlps.cc.style('color', 'rgb(255, 118, 64)');
            htmlps.cc.style('opacity', '0.2');
            htmlps.ccf.style('opacity', '0.1');
        }

        if (!CF) {
            speed = Math.round(taxi.velocityY - taxi.velocityY - taxi.velocityY);

            camera.position.y = taxi.y - 240;

            if (speed < 0) {
                camera.position.y = taxi.y - 100;
            } else {
                camera.position.y = taxi.y - 240;
            }

            Taxisens.x = taxi.x;
            Taxisens.y = taxi.y-280;
            TaxisensCL.x = taxi.x;
            TaxisensCL.y = taxi.y-120;

            taxi.addImage(taxiImage);

            htmlps.CF.html("⏫");
            htmlps.CF.style('color', 'rgba(0, 0, 0, 0.2)');

            if (keyDown("UP_ARROW") && speed < 4) {
                taxi.velocityY = taxi.velocityY - 1;
            } else if (keyDown("UP_ARROW") && speed < 5) {
                taxi.velocityY = taxi.velocityY - 0.7;
            } else if (keyDown("UP_ARROW") && speed < 10) {
                taxi.velocityY = taxi.velocityY - 0.5;
            } else if (keyDown("UP_ARROW") && speed < 15) {
                taxi.velocityY = taxi.velocityY - 0.25;
            } else if (keyDown("UP_ARROW") && speed < 20) {
                taxi.velocityY = taxi.velocityY - 0.1;
            } else if (keyDown("UP_ARROW") && speed < 25) {
                taxi.velocityY = taxi.velocityY - 0.05;
            } else if (keyDown("UP_ARROW") && speed < 30) {
                taxi.velocityY = taxi.velocityY - 0.02;
            } else if (keyDown("UP_ARROW") && speed < 38) {
                taxi.velocityY = taxi.velocityY - 0.009;
            } else if (keyDown("DOWN_ARROW") && speed >= 1) {
                taxi.velocityY = taxi.velocityY + 1;
            }

            if (speed > 5) {
                htmlps.cc.style('opacity', '0.7');
            } else {
                htmlps.cc.style('opacity', '0.2');
            }

            if (keyDown(LEFT_ARROW) && speed > 0 && taxi.velocityX > -2) {
                taxi.velocityX = taxi.velocityX - 0.7;
                taxi.rotation = -1;
            } else if (keyDown(LEFT_ARROW) && speed == 0) {
                taxi.velocityX = 0;
                taxi.rotation = 0;
            } else if (!keyDown(LEFT_ARROW) && taxi.velocityX <= 0) {
                taxi.velocityX = 0;
                taxi.rotation = 0;
            }

            if (keyDown(LEFT_ARROW) && speed < 0 && taxi.velocityX > -2) {
                taxi.velocityX = taxi.velocityX - 0.3;
                taxi.rotation = +1;
            }

            if (keyDown(RIGHT_ARROW) && speed > 0 && taxi.velocityX < 2) {
                taxi.velocityX = taxi.velocityX + 0.7;
                taxi.rotation = 1;
            } else if (keyDown(RIGHT_ARROW) && speed == 0) {
                taxi.velocityX = 0;
                taxi.rotation = 0;
            } else if (!keyDown(RIGHT_ARROW) && taxi.velocityX > 0) {
                taxi.velocityX = 0;
                taxi.rotation = 0;
            }

            if (keyDown(RIGHT_ARROW) && speed < 0 && taxi.velocityX < 2) {
                taxi.velocityX = taxi.velocityX + 0.3;
                taxi.rotation = -1;
            }

            if (!keyDown("UP_ARROW") && speed >= -2 && !cc) {
                taxi.velocityY = taxi.velocityY + 0.09;
            }

            if (!keyDown("UP_ARROW") && !keyDown("DOWN_ARROW") && speed <= 3) {
                taxi.velocityY = 0;
            }

        } else if (CF) {
            speed = Math.round(taxi.velocityY);

            camera.position.x = width / 2;
            camera.position.y = taxi.y + 240;

            if (speed < 0) {
                camera.position.y = taxi.y + 40;
            } else {
                camera.position.y = taxi.y + 240;
            }

            Taxisens.x = taxi.x;
            Taxisens.y = taxi.y+280;
            TaxisensCL.x = taxi.x;
            TaxisensCL.y = taxi.y+120;

            htmlps.caution.position(taxi.x-60, 50);

            taxi.addImage(taxiCFImage);

            htmlps.CF.html("⏬");
            htmlps.CF.style('color', 'rgba(255, 255, 255, 0.9)');

            if (keyDown("UP_ARROW") && speed < 4) {
                taxi.velocityY = taxi.velocityY + 1;
            } else if (keyDown("UP_ARROW") && speed < 5) {
                taxi.velocityY = taxi.velocityY + 0.7;
            } else if (keyDown("UP_ARROW") && speed < 10) {
                taxi.velocityY = taxi.velocityY + 0.5;
            } else if (keyDown("UP_ARROW") && speed < 15) {
                taxi.velocityY = taxi.velocityY + 0.25;
            } else if (keyDown("UP_ARROW") && speed < 20) {
                taxi.velocityY = taxi.velocityY + 0.1;
            } else if (keyDown("UP_ARROW") && speed < 25) {
                taxi.velocityY = taxi.velocityY + 0.05;
            } else if (keyDown("UP_ARROW") && speed < 30) {
                taxi.velocityY = taxi.velocityY + 0.02;
            } else if (keyDown("UP_ARROW") && speed < 38) {
                taxi.velocityY = taxi.velocityY + 0.009;
            } else if (keyDown("DOWN_ARROW") && speed >= 1) {
                taxi.velocityY = taxi.velocityY - 1;
            }

            if (keyDown(LEFT_ARROW) && speed > 0 && taxi.velocityX > -2) {
                taxi.velocityX = taxi.velocityX - 0.7;
                taxi.rotation = 1;
            } else if (keyDown(LEFT_ARROW) && speed == 0) {
                taxi.velocityX = 0;
                taxi.rotation = 0;
            } else if (!keyDown(LEFT_ARROW) && taxi.velocityX <= 0) {
                taxi.velocityX = 0;
                taxi.rotation = 0;
            }

            if (keyDown(LEFT_ARROW) && speed < 0 && taxi.velocityX > -2) {
                taxi.velocityX = taxi.velocityX - 0.3;
                taxi.rotation = -1;
            }

            if (keyDown(RIGHT_ARROW) && speed > 0 && taxi.velocityX < 2) {
                taxi.velocityX = taxi.velocityX + 0.7;
                taxi.rotation = -1;
            } else if (keyDown(RIGHT_ARROW) && speed == 0) {
                taxi.velocityX = 0;
                taxi.rotation = 0;
            } else if (!keyDown(RIGHT_ARROW) && taxi.velocityX > 0) {
                taxi.velocityX = 0;
                taxi.rotation = 0;
            }

            if (keyDown(RIGHT_ARROW) && speed < 0 && taxi.velocityX < 2) {
                taxi.velocityX = taxi.velocityX + 0.3;
                taxi.rotation = 1;
            }

            if (!keyDown("UP_ARROW") && speed >= -2 && !cc) {
                taxi.velocityY = taxi.velocityY - 0.09;
            }

            if (!keyDown("UP_ARROW") && !keyDown("DOWN_ARROW") && speed <= 3) {
                taxi.velocityY = 0;
            }
        }

        if (speed > 8) {
            htmlps.taxiSpeedn.style('font-size', '32px');
            htmlps.taxiSpeedn.style('color', 'rgb(255, 245, 110)');
            htmlps.taxiSpeednEA.style('color', 'rgb(255, 245, 110)')
        }
        if (speed > 13) {
            htmlps.taxiSpeed.position(830, 400);
            htmlps.taxiSpeedn.position(935, 400);
            htmlps.taxiSpeedn.style('font-size', '33px');
            htmlps.taxiSpeedn.style('color', 'rgb(255, 213, 77)');
            htmlps.taxiSpeednEA.style('color', 'rgb(255, 213, 77)');
        }
        if (speed > 18) {
            htmlps.taxiSpeedn.style('font-size', '34px');
            htmlps.taxiSpeedn.style('color', 'rgb(255, 202, 31)');
            htmlps.taxiSpeednEA.style('color', 'rgb(255, 202, 31)');
        }
        if (speed > 25) {
            htmlps.taxiSpeedn.style('font-size', '35px');
            htmlps.taxiSpeedn.style('color', 'rgb(255, 165, 31)');
            htmlps.taxiSpeednEA.style('color', 'rgb(255, 165, 31)');
        }
        if (speed > 31) {
            htmlps.taxiSpeedn.style('font-size', '36px');
            htmlps.taxiSpeedn.style('color', 'rgb(255, 77, 0)');
            htmlps.taxiSpeednEA.style('color', 'rgb(255, 77, 0)');
        }
        if (speed <= 0) {
            htmlps.taxiSpeedn.style('font-size', '30px');
            htmlps.taxiSpeed.position(830, 400);
            htmlps.taxiSpeedn.position(935, 400);
            htmlps.taxiSpeedn.style('color', 'rgb(255, 255, 255)');
            htmlps.taxiSpeednEA.style('color', 'rgb(255, 255, 255)');
            htmlps.taxiGR.html("🅿️");
            taxi.setCollider("rectangle");
            htmlps.taxiGR.style('color', 'rgb(255, 179, 0)');
        }
        if (speed > 0) {
            htmlps.taxiGR.html("Ⓓ")
            htmlps.taxiGR.style('color', 'rgb(73, 255, 64)');
            taxi.setCollider("rectangle", 0, 0, 35, 85);
        }
        if (speed < 0) {
            htmlps.taxiGR.html("Ⓡ");
            htmlps.taxiGR.style('color', 'rgb(255, 144, 64)');
            taxi.setCollider("rectangle", 0, 0, 35, 85)
        }

        if (taxi.isTouching(Greensville)) {
            htmlps.loc.html("In : Greensville");
            htmlps.loc.position(1000, 350);
            document.getElementById("DFMPGRSV").innerHTML = "Greensville (GRSV) 🚕";
            document.getElementById("DFMPWRKD").innerHTML = "Warkhandem (WRKD)";
            document.getElementById("DFMPPRKV").innerHTML = "Parkvillia (PRKV)";
            document.getElementById("DFMPBAV").innerHTML = "Bernard Avenue (BAV)";
            document.getElementById("DFMPE43").innerHTML = "(Interstate E43 Highway)";
            document.getElementById("DFMPE52").innerHTML = "(Interstate E52 Highway)";
        } else  if (taxi.isTouching(Warkhandem)) {
            htmlps.loc.html("In : Warkhandem");
            htmlps.loc.position(1000, 350);
            document.getElementById("DFMPGRSV").innerHTML = "Greensville (GRSV)";
            document.getElementById("DFMPWRKD").innerHTML = "Warkhandem (WRKD) 🚕";
            document.getElementById("DFMPPRKV").innerHTML = "Parkvillia (PRKV)";
            document.getElementById("DFMPBAV").innerHTML = "Bernard Avenue (BAV)";
            document.getElementById("DFMPE43").innerHTML = "(Interstate E43 Highway)";
            document.getElementById("DFMPE52").innerHTML = "(Interstate E52 Highway)";
        } else if (taxi.isTouching(Parkvillia)) {
            htmlps.loc.html("In : Parkvillia");
            htmlps.loc.position(1000, 350);
            document.getElementById("DFMPPRKV").innerHTML = "Parkvillia (PRKV) 🚕";
            document.getElementById("DFMPGRSV").innerHTML = "Greensville (GRSV)";
            document.getElementById("DFMPWRKD").innerHTML = "Warkhandem (WRKD)";
            document.getElementById("DFMPBAV").innerHTML = "Bernard Avenue (BAV)";
            document.getElementById("DFMPE43").innerHTML = "(Interstate E43 Highway)";
            document.getElementById("DFMPE52").innerHTML = "(Interstate E52 Highway)";
        } else if (taxi.isTouching(BernardAvenue)) {
            htmlps.loc.html("In : Bernard Avenue");
            htmlps.loc.position(970, 350);
            document.getElementById("DFMPBAV").innerHTML = "Bernard Avenue (BAV) 🚕";
            document.getElementById("DFMPGRSV").innerHTML = "Greensville (GRSV)";
            document.getElementById("DFMPWRKD").innerHTML = "Warkhandem (WRKD)";
            document.getElementById("DFMPPRKV").innerHTML = "Parkvillia (PRKV)";
            document.getElementById("DFMPE43").innerHTML = "(Interstate E43 Highway)";
            document.getElementById("DFMPE52").innerHTML = "(Interstate E52 Highway)";
        } else if (taxi.isTouching(eArea1)) {
            htmlps.loc.html("In : Interstate E34");
            htmlps.loc.position(990, 350);
            document.getElementById("DFMPE43").innerHTML = "(Interstate E43 Highway) 🚕";
            document.getElementById("DFMPGRSV").innerHTML = "Greensville (GRSV)";
            document.getElementById("DFMPWRKD").innerHTML = "Warkhandem (WRKD)";
            document.getElementById("DFMPPRKV").innerHTML = "Parkvillia (PRKV)";
            document.getElementById("DFMPBAV").innerHTML = "Bernard Avenue (BAV)";
            document.getElementById("DFMPE52").innerHTML = "(Interstate E52 Highway)";
        } else if (taxi.isTouching(eArea2) || taxi.y < -57149 && taxi.y > -74000) {
            htmlps.loc.html("In : Intestate E52");
            htmlps.loc.position(990, 350);
            document.getElementById("DFMPE52").innerHTML = "(Interstate E52 Highway) 🚕";
            document.getElementById("DFMPGRSV").innerHTML = "Greensville (GRSV)";
            document.getElementById("DFMPWRKD").innerHTML = "Warkhandem (WRKD)";
            document.getElementById("DFMPPRKV").innerHTML = "Parkvillia (PRKV)";
            document.getElementById("DFMPBAV").innerHTML = "Bernard Avenue (BAV)";
            document.getElementById("DFMPE43").innerHTML = "(Interstate E43 Highway)";
        }

        if (fareMis) {
            htmlps.status.html("Status : 🚕 Dropping a Fare.");
            htmlps.FareCompo();
            pedsFGroup.destroyEach();
        }

        if (taxi.isTouching(pedsFGroup)) {
            if (taxi.x > 420) {
                htmlps.Ftimer.position(taxi.x-350, 440);
                htmlps.Fdestination.position(taxi.x-350, 280);
                htmlps.Fdistance.position(taxi.x-350, 320);
                htmlps.FACRJ.position(taxi.x-350, 360);
                htmlps.FXP.position(taxi.x-350, 400);
                OTrafficGroup.setVelocityYEach(-1);
            } else if (taxi.x < 420) {
                htmlps.Ftimer.position(taxi.x+40, 440);
                htmlps.Fdestination.position(taxi.x+40, 280);
                htmlps.Fdistance.position(taxi.x+40, 320);
                htmlps.FACRJ.position(taxi.x+40, 360);
                htmlps.FXP.position(taxi.x+40, 400);
            }
        }

        if (!fareMis && gameState === Play && !taxi.isTouching(eArea)) {
            var spawn = 0;
            if (!CF) {
                spawn = taxi.y-1000;
            } else if (CF) {
                spawn = taxi.y+2700;
            }

            if (spWRKDfPedbazaar && !fareMis) {
                if (spawnFPeds && gameState === Play && !taxi.isTouching(Warkhandem) && spWRKDfPedbazaar) {
                    if (frameCount % 100 === 0 && taxi.y < -9800 && taxi.y > -23100 && pedsFGroup.length < 1) {
                        WRKDfPedbazaar = createSprite(undefined, spawn - 1000, 30, 30);
                        WRKDfPedbazaar.scale = 1.5;
                        WRKDfPedbazaar.velocityY = -2;
                        WRKDfPedbazaar.setCollider("circle");
                        var WRKDfPedbazaarC = Math.round(random(1, 2));
                        switch (WRKDfPedbazaarC) {
                            case 1: WRKDfPedbazaar.x = Math.round(random(680, 675));
                                    WRKDfPedbazaar.addImage(pedGrsOI);
                                break;
                            case 2: WRKDfPedbazaar.x = Math.round(random(125, 130));
                                    WRKDfPedbazaar.addImage(pedGrsO2);
                                break;
                            default: break;
                        }
                        pedsFGroup.add(WRKDfPedbazaar);
                        FpedsWRKNGroup.add(WRKDfPedbazaar);
                        WRKDfPedbazaarGroup.add(WRKDfPedbazaar);
                    }
                }
                for (var i = 0; i < WRKDfPedbazaarGroup.length; i++) {
                    if (taxi.isTouching(WRKDfPedbazaarGroup)) {
                        markD = Math.round(DWRKDbazaar.y - DWRKDbazaar.y - DWRKDbazaar.y + taxi.y);
                        htmlps.FareInf();
                        htmlps.FareInfO();
                        htmlps.Fdestination.html("📌 Destination : Warkhandem Bazaar");
                        htmlps.Fdistance.html("📏 Distance : " + markD+" PX");
                        htmlps.FXP.html("♢ XP : 1,200");
                        htmlps.Ftimer.html("⏱ Arrival in : 90 s")
                    } else {
                        htmlps.FareInfC();
                    }
                }

                for (var i = 0; i < WRKDfPedbazaarGroup.length; i++) {
                    if (keyDown("Y") && taxi.isTouching(WRKDfPedbazaarGroup) && !fareMis) {
                        htmlps.FareInfC();
                        WRKDfPedbazaarGroup.get(i).destroy();
                        WRKDfPedbazaarFA = true;
                        fareMis = true;
                        Fdestinas[4].visible = true;
                        time = 90;
                    }
                }
            }

            if (spWRKDfPedmarket) {
                if (spawnFPeds && gameState === Play && !taxi.isTouching(Warkhandem) && spWRKDfPedmarket) {
                    if (frameCount % 120 === 0 && taxi.y < -9800 && taxi.y > -23100 && pedsFGroup.length < 1) {
                        WRKDfPedmarket = createSprite(undefined, spawn, 30, 30);
                        WRKDfPedmarket.scale = 1.5;
                        WRKDfPedmarket.velocityY = -2;
                        WRKDfPedmarket.setCollider("circle");
                        var WRKDfPedmarketC = Math.round(random(1, 2));
                        switch (WRKDfPedmarketC) {
                            case 1: WRKDfPedmarket.x = Math.round(random(680, 675));
                                    WRKDfPedmarket.addImage(pedGrsOI);
                                break;
                            case 2: WRKDfPedmarket.x = Math.round(random(125, 130));
                                    WRKDfPedmarket.addImage(pedGrsO2);
                                break;
                            default: break;
                        }
                        pedsFGroup.add(WRKDfPedmarket);
                        FpedsWRKNGroup.add(WRKDfPedmarket);
                        WRKDfPedmarketGroup.add(WRKDfPedmarket);
                    }
                }
                for (var i = 0; i < WRKDfPedmarketGroup.length; i++) {
                    if (taxi.isTouching(WRKDfPedmarketGroup)) {
                        markD = Math.round(DWRKDmarket.y - DWRKDmarket.y - DWRKDmarket.y + taxi.y);
                        htmlps.FareInf();
                        htmlps.FareInfO();
                        htmlps.Fdestination.html("📌 Destination : Warkhandem Market");
                        htmlps.Fdistance.html("📏 Distance : " + markD+" PX");
                        htmlps.FXP.html("♢ XP : 1,100");
                        htmlps.Ftimer.html("⏱ Arrival in : 70 s")
                    } else {
                        htmlps.FareInfC();
                    }
                }

                for (var i = 0; i < WRKDfPedmarketGroup.length; i++) {
                    if (keyDown("Y") && taxi.isTouching(WRKDfPedmarketGroup) && !fareMis) {
                        htmlps.FareInfC();
                        WRKDfPedmarketGroup.get(i).destroy();
                        WRKDfPedmarketFA = true;
                        fareMis = true;
                        Fdestinas[3].visible = true;
                        time = 70;
                    }
                }

            }

            if (spWRKDfPednapalik) {
                if (spawnFPeds && gameState === Play && !taxi.isTouching(Warkhandem) && spWRKDfPednapalik) {
                    if (frameCount % 140 === 0 && taxi.y < -9800 && taxi.y > -23100 && pedsFGroup.length < 1) {
                        WRKDfPednapalik = createSprite(undefined, spawn, 30, 30);
                        WRKDfPednapalik.scale = 1.5;
                        WRKDfPednapalik.velocityY = -2;
                        WRKDfPednapalik.setCollider("circle");
                        var WRKDfPednapalikC = Math.round(random(1, 2));
                        switch (WRKDfPednapalikC) {
                            case 1: WRKDfPednapalik.x = Math.round(random(680, 675));
                                    WRKDfPednapalik.addImage(pedGrsOI);
                                break;
                            case 2: WRKDfPednapalik.x = Math.round(random(125, 130));
                                    WRKDfPednapalik.addImage(pedGrsO2);
                                break;
                            default: break;
                        }
                        pedsFGroup.add(WRKDfPednapalik);
                        FpedsWRKNGroup.add(WRKDfPednapalik);
                        WRKDfPednapalikGroup.add(WRKDfPednapalik);
                    }
                }
                for (var i = 0; i < WRKDfPednapalikGroup.length; i++) {
                    if (taxi.isTouching(WRKDfPednapalikGroup)) {
                        markD = Math.round(DWRKDnapalik.y - DWRKDnapalik.y - DWRKDnapalik.y + taxi.y);
                        htmlps.FareInf();
                        htmlps.FareInfO();
                        htmlps.Fdestination.html("📌 Destination : Warkhandem Nagarpalika");
                        htmlps.Fdistance.html("📏 Distance : " + markD+" PX");
                        htmlps.FXP.html("♢ XP : 1,650");
                        htmlps.Ftimer.html("⏱ Arrival in : 110 s")
                    } else {
                        htmlps.FareInfC();
                    }
                }

                for (var i = 0; i < WRKDfPednapalikGroup.length; i++) {
                    if (keyDown("Y") && taxi.isTouching(WRKDfPednapalikGroup) && !fareMis) {
                        htmlps.FareInfC();
                        WRKDfPednapalikGroup.get(i).destroy();
                        WRKDfPednapalikFA = true;
                        fareMis = true;
                        Fdestinas[5].visible = true;
                        time = 110;
                    }
                }
            }

            if (spPRKVfPedsupermarket) {
                if (spawnFPeds && gameState === Play && !taxi.isTouching(Parkvillia) && spPRKVfPedsupermarket) {
                    if (frameCount % 160 === 0 && taxi.y < -9800 && taxi.y > -23100 && pedsFGroup.length < 1) {
                        PRKVfPedsupermarket = createSprite(undefined, spawn, 30, 30);
                        PRKVfPedsupermarket.scale = 1.5;
                        PRKVfPedsupermarket.velocityY = -2;
                        PRKVfPedsupermarket.setCollider("circle");
                        var PRKVfPedsupermarketC = Math.round(random(1, 2));
                        switch (PRKVfPedsupermarketC) {
                            case 1: PRKVfPedsupermarket.x = Math.round(random(680, 675));
                                    PRKVfPedsupermarket.addImage(pedGrsOI);
                                break;
                            case 2: PRKVfPedsupermarket.x = Math.round(random(125, 130));
                                    PRKVfPedsupermarket.addImage(pedGrsO2);
                                break;
                            default: break;
                        }
                        pedsFGroup.add(PRKVfPedsupermarket);
                        FpedsPRKVGroup.add(PRKVfPedsupermarket);
                        PRKVfPedsupermarketGroup.add(PRKVfPedsupermarket);
                    }
                }
                for (var i = 0; i < PRKVfPedsupermarketGroup.length; i++) {
                    if (taxi.isTouching(PRKVfPedsupermarketGroup)) {
                        markD = Math.round(PRKVsupermarket.y - PRKVsupermarket.y - PRKVsupermarket.y + taxi.y);
                        htmlps.FareInf();
                        htmlps.FareInfO();
                        htmlps.Fdestination.html("📌 Destination : Parkvilia Supermarket");
                        htmlps.Fdistance.html("📏 Distance : " + markD+" PX");
                        htmlps.FXP.html("♢ XP : 2,850");
                        htmlps.Ftimer.html("⏱ Arrival in : 130 s")
                    } else {
                        htmlps.FareInfC();
                    }
                }

                for (var i = 0; i < PRKVfPedsupermarketGroup.length; i++) {
                    if (keyDown("Y") && taxi.isTouching(PRKVfPedsupermarketGroup) && !fareMis) {
                        htmlps.FareInfC();
                        PRKVfPedsupermarketGroup.get(i).destroy();
                        PRKVfPedsupermarketFA = true;
                        fareMis = true;
                        Fdestinas[6].visible = true;
                        time = 130;
                    }
                }
            }

            if (spBRAVfPedresidency) {
                if (spawnFPeds && gameState === Play && !taxi.isTouching(BernardAvenue) && !taxi.isTouching(Parkvillia) && spBRAVfPedresidency) {
                    if (frameCount % 160 === 0 && taxi.y < -9800 && taxi.y > -23100 && pedsFGroup.length < 1 || frameCount % 160 === 0 && taxi.y < -42000 && taxi.y > -77100 && pedsFGroup.length < 1) {
                        BRAVfPedresidency = createSprite(undefined, spawn, 30, 30);
                        BRAVfPedresidency.scale = 1.5;
                        BRAVfPedresidency.velocityY = -2;
                        BRAVfPedresidency.setCollider("circle");
                        var BRAVfPedresidencyC = Math.round(random(1, 2));
                        switch (BRAVfPedresidencyC) {
                            case 1: BRAVfPedresidency.x = Math.round(random(680, 675));
                                    BRAVfPedresidency.addImage(pedGrsOI);
                                break;
                            case 2: BRAVfPedresidency.x = Math.round(random(125, 130));
                                    BRAVfPedresidency.addImage(pedGrsO2);
                                break;
                            default: break;
                        }
                        pedsFGroup.add(BRAVfPedresidency);
                        FpedsBRAVGroup.add(BRAVfPedresidency);
                        BRAVfPedresidencyGroup.add(BRAVfPedresidency);
                    }
                }
                for (var i = 0; i < BRAVfPedresidencyGroup.length; i++) {
                    if (taxi.isTouching(BRAVfPedresidencyGroup)) {
                        markD = Math.round(BRAVresidency.y - BRAVresidency.y - BRAVresidency.y + taxi.y);
                        htmlps.FareInf();
                        htmlps.FareInfO();
                        htmlps.Fdestination.html("📌 Destination : B. Avenue Residency");
                        htmlps.Fdistance.html("📏 Distance : " + markD+" PX");
                        htmlps.FXP.html("♢ XP : 3,780");
                        htmlps.Ftimer.html("⏱ Arrival in : 180 s")
                    } else {
                        htmlps.FareInfC();
                    }
                }

                for (var i = 0; i < BRAVfPedresidencyGroup.length; i++) {
                    if (keyDown("Y") && taxi.isTouching(BRAVfPedresidencyGroup) && !fareMis) {
                        htmlps.FareInfC();
                        BRAVfPedresidencyGroup.get(i).destroy();
                        BRAVfPedresidencyFA = true;
                        fareMis = true;
                        Fdestinas[7].visible = true;
                        time = 180;
                    }
                }
            }

            if (spBRAVfPedcalton) {
                if (spawnFPeds && gameState === Play && !taxi.isTouching(BernardAvenue) && spBRAVfPedcalton) {
                    if (frameCount % 180 === 0 && taxi.y < -9800 && taxi.y > -23100 && pedsFGroup.length < 1 || frameCount % 180 === 0 && taxi.y < -42000 && taxi.y > -84100 && pedsFGroup.length < 1) {
                        BRAVfPedcalton = createSprite(undefined, spawn, 30, 30);
                        BRAVfPedcalton.scale = 1.5;
                        BRAVfPedcalton.velocityY = -2;
                        BRAVfPedcalton.setCollider("circle");
                        var BRAVfPedcaltonC = Math.round(random(1, 2));
                        switch (BRAVfPedcaltonC) {
                            case 1: BRAVfPedcalton.x = Math.round(random(680, 675));
                                    BRAVfPedcalton.addImage(pedGrsOI);
                                break;
                            case 2: BRAVfPedcalton.x = Math.round(random(125, 130));
                                    BRAVfPedcalton.addImage(pedGrsO2);
                                break;
                            default: break;
                        }
                        pedsFGroup.add(BRAVfPedcalton);
                        FpedsBRAVGroup.add(BRAVfPedcalton);
                        BRAVfPedcaltonGroup.add(BRAVfPedcalton);
                    }
                }
                for (var i = 0; i < BRAVfPedcaltonGroup.length; i++) {
                    if (taxi.isTouching(BRAVfPedcaltonGroup)) {
                        markD = Math.round(BRAVcalton.y - BRAVcalton.y - BRAVcalton.y + taxi.y);
                        htmlps.FareInf();
                        htmlps.FareInfO();
                        htmlps.Fdestination.html("📌 Destination : B. Avenue Calton");
                        htmlps.Fdistance.html("📏 Distance : " + markD+" PX");
                        htmlps.FXP.html("♢ XP : 4,200");
                        htmlps.Ftimer.html("⏱ Arrival in : 210 s")
                    } else {
                        htmlps.FareInfC();
                    }
                }

                for (var i = 0; i < BRAVfPedcaltonGroup.length; i++) {
                    if (keyDown("Y") && taxi.isTouching(BRAVfPedcaltonGroup) && !fareMis) {
                        htmlps.FareInfC();
                        BRAVfPedcaltonGroup.get(i).destroy();
                        BRAVfPedcaltonFA = true;
                        fareMis = true;
                        Fdestinas[8].visible = true;
                        time = 210;
                    }
                }
            }

            if (spBRAVfPedstadium) {
                if (spawnFPeds && gameState === Play && !taxi.isTouching(BernardAvenue) && spBRAVfPedstadium) {
                    if (frameCount % 100 === 0 && taxi.y < -9800 && taxi.y > -23100 && pedsFGroup.length < 1 || frameCount % 120 === 0 && taxi.y < -42000 && taxi.y > -90100 && pedsFGroup.length < 1) {
                        BRAVfPedstadium = createSprite(undefined, spawn, 30, 30);
                        BRAVfPedstadium.scale = 1.5;
                        BRAVfPedstadium.velocityY = -2;
                        BRAVfPedstadium.setCollider("circle");
                        var BRAVfPedstadiumC = Math.round(random(1, 2));
                        switch (BRAVfPedstadiumC) {
                            case 1: BRAVfPedstadium.x = Math.round(random(680, 675));
                                    BRAVfPedstadium.addImage(pedGrsOI);
                                break;
                            case 2: BRAVfPedstadium.x = Math.round(random(125, 130));
                                    BRAVfPedstadium.addImage(pedGrsO2);
                                break;
                            default: break;
                        }
                        pedsFGroup.add(BRAVfPedstadium);
                        FpedsBRAVGroup.add(BRAVfPedstadium);
                        BRAVfPedstadiumGroup.add(BRAVfPedstadium);
                    }
                }
                for (var i = 0; i < BRAVfPedstadiumGroup.length; i++) {
                    if (taxi.isTouching(BRAVfPedstadiumGroup)) {
                        markD = Math.round(BRAVstadium.y - BRAVstadium.y - BRAVstadium.y + taxi.y);
                        htmlps.FareInf();
                        htmlps.FareInfO();
                        htmlps.Fdestination.html("📌 Destination : Stadium in BAV");
                        htmlps.Fdistance.html("📏 Distance : " + markD+" PX");
                        htmlps.FXP.html("♢ XP : 5,700");
                        htmlps.Ftimer.html("⏱ Arrival in : 240 s")
                    } else {
                        htmlps.FareInfC();
                    }
                }

                for (var i = 0; i < BRAVfPedstadiumGroup.length; i++) {
                    if (keyDown("Y") && taxi.isTouching(BRAVfPedstadiumGroup) && !fareMis) {
                        htmlps.FareInfC();
                        BRAVfPedstadiumGroup.get(i).destroy();
                        BRAVfPedstadiumFA = true;
                        fareMis = true;
                        Fdestinas[9].visible = true;
                        time = 240;
                    }
                }
            }

            if (spBRAVfPedparkway) {
                if (spawnFPeds && gameState === Play && !taxi.isTouching(BernardAvenue) && spBRAVfPedparkway) {
                    if (frameCount % 110 === 0 && taxi.y < -9800 && taxi.y > -23100 && pedsFGroup.length < 1 || frameCount % 180 === 0 && taxi.y < -42000 && taxi.y > -100100 && pedsFGroup.length < 1) {
                        BRAVfPedparkway = createSprite(undefined, spawn, 30, 30);
                        BRAVfPedparkway.scale = 1.5;
                        BRAVfPedparkway.velocityY = -2;
                        BRAVfPedparkway.setCollider("circle");
                        var BRAVfPedparkwayC = Math.round(random(1, 2));
                        switch (BRAVfPedparkwayC) {
                            case 1: BRAVfPedparkway.x = Math.round(random(680, 675));
                                    BRAVfPedparkway.addImage(pedGrsOI);
                                break;
                            case 2: BRAVfPedparkway.x = Math.round(random(125, 130));
                                    BRAVfPedparkway.addImage(pedGrsO2);
                                break;
                            default: break;
                        }
                        pedsFGroup.add(BRAVfPedparkway);
                        FpedsBRAVGroup.add(BRAVfPedparkway);
                        BRAVfPedparkwayGroup.add(BRAVfPedparkway);
                    }
                }
                for (var i = 0; i < BRAVfPedparkwayGroup.length; i++) {
                    if (taxi.isTouching(BRAVfPedparkwayGroup)) {
                        markD = Math.round(BRAVparkway.y - BRAVparkway.y - BRAVparkway.y + taxi.y);
                        htmlps.FareInf();
                        htmlps.FareInfO();
                        htmlps.Fdestination.html("📌 Destination : Parkway St. in BAV");
                        htmlps.Fdistance.html("📏 Distance : " + markD+" PX");
                        htmlps.FXP.html("♢ XP : 6,100");
                        htmlps.Ftimer.html("⏱ Arrival in : 270 s")
                    } else {
                        htmlps.FareInfC();
                    }
                }

                for (var i = 0; i < BRAVfPedparkwayGroup.length; i++) {
                    if (keyDown("Y") && taxi.isTouching(BRAVfPedparkwayGroup) && !fareMis) {
                        htmlps.FareInfC();
                        BRAVfPedparkwayGroup.get(i).destroy();
                        BRAVfPedparkwayFA = true;
                        fareMis = true;
                        Fdestinas[10].visible = true;
                        time = 270;
                    }
                }
            }

            
            if (spGRSVfPedcouncil) {
                if (spawnFPeds && gameState === Play && !taxi.isTouching(Greensville) && spGRSVfPedcouncil) {
                    if (frameCount % 90 === 0 && taxi.y < -77600 && taxi.y > -110100 && pedsFGroup.length < 1) {
                        GRSVfPedcouncil = createSprite(undefined, spawn, 30, 30);
                        GRSVfPedcouncil.scale = 1.5;
                        GRSVfPedcouncil.velocityY = -2;
                        GRSVfPedcouncil.setCollider("circle");
                        var GRSVfPedcouncilC = Math.round(random(1, 2));
                        switch (GRSVfPedcouncilC) {
                            case 1: GRSVfPedcouncil.x = Math.round(random(680, 675));
                                    GRSVfPedcouncil.addImage(pedGrsOI);
                                break;
                            case 2: GRSVfPedcouncil.x = Math.round(random(125, 130));
                                    GRSVfPedcouncil.addImage(pedGrsO2);
                                break;
                            default: break;
                        }
                        pedsFGroup.add(GRSVfPedcouncil);
                        FpedsGRSVGroup.add(GRSVfPedcouncil);
                        GRSVfPedcouncilGroup.add(GRSVfPedcouncil);
                    }
                }
                for (var i = 0; i < GRSVfPedcouncilGroup.length; i++) {
                    if (taxi.isTouching(GRSVfPedcouncilGroup)) {
                        markD = Math.round(GRSVcouncil.y - GRSVcouncil.y - GRSVcouncil.y + taxi.y);
                        htmlps.FareInf();
                        htmlps.FareInfO();
                        htmlps.Fdestination.html("📌 Destination : Greensville Council");
                        htmlps.Fdistance.html("📏 Distance : " + markD+ " PX");
                        htmlps.FXP.html("♢ XP : 5,200");
                        htmlps.Ftimer.html("⏱ Arrival in : 210 s")
                    } else {
                        htmlps.FareInfC();
                    }
                }

                for (var i = 0; i < GRSVfPedcouncilGroup.length; i++) {
                    if (keyDown("Y") && taxi.isTouching(GRSVfPedcouncilGroup) && !fareMis) {
                        htmlps.FareInfC();
                        GRSVfPedcouncilGroup.get(i).destroy();
                        GRSVfPedcouncilFA = true;
                        fareMis = true;
                        Fdestinas[1].visible = true;
                        time = 270;
                    }
                }
            }

            if (spGRSVfPedground) {
                if (spawnFPeds && gameState === Play && !taxi.isTouching(Greensville) && spGRSVfPedground) {
                    if (frameCount % 110 === 0 && taxi.y < -83600 && taxi.y > -110100 && pedsFGroup.length < 1) {
                        GRSVfPedground = createSprite(undefined, spawn, 30, 30);
                        GRSVfPedground.scale = 1.5;
                        GRSVfPedground.velocityY = -2;
                        GRSVfPedground.setCollider("circle");
                        var GRSVfPedgroundC = Math.round(random(1, 2));
                        switch (GRSVfPedgroundC) {
                            case 1: GRSVfPedground.x = Math.round(random(680, 675));
                                    GRSVfPedground.addImage(pedGrsOI);
                                break;
                            case 2: GRSVfPedground.x = Math.round(random(125, 130));
                                    GRSVfPedground.addImage(pedGrsO2);
                                break;
                            default: break;
                        }
                        pedsFGroup.add(GRSVfPedground);
                        FpedsGRSVGroup.add(GRSVfPedground);
                        GRSVfPedgroundGroup.add(GRSVfPedground);
                    }
                }
                for (var i = 0; i < GRSVfPedgroundGroup.length; i++) {
                    if (taxi.isTouching(GRSVfPedgroundGroup)) {
                        markD = Math.round(GRSVground.y - GRSVground.y - GRSVground.y + taxi.y);
                        htmlps.FareInf();
                        htmlps.FareInfO();
                        htmlps.Fdestination.html("📌 Destination : Greensville Ground");
                        htmlps.Fdistance.html("📏 Distance : " + markD +" PX");
                        htmlps.FXP.html("♢ XP : 6,300");
                        htmlps.Ftimer.html("⏱ Arrival in : 240 s")
                    } else {
                        htmlps.FareInfC();
                    }
                }

                for (var i = 0; i < GRSVfPedgroundGroup.length; i++) {
                    if (keyDown("Y") && taxi.isTouching(GRSVfPedgroundGroup) && !fareMis) {
                        htmlps.FareInfC();
                        GRSVfPedgroundGroup.get(i).destroy();
                        GRSVfPedgroundFA = true;
                        fareMis = true;
                        Fdestinas[0].visible = true;
                        time = 240;
                    }
                }
            }
        }

        if (fareMis && gameState === Play) {
            htmlps.topsy.style('opacity', '1');
        } else if (!fareMis) {
            htmlps.topsy.style('opacity', '0');
            htmlps.droppa.style('opacity', '0');
            htmlps.turvy.style('opacity', '0');
        }

        if (fareMis) {
            if (WRKDfPedbazaarFA) {
                if (gameState === Play && fareMis) {
                    var FDestinaSE = Fdestinas[4].y - Fdestinas[4].y - Fdestinas[4].y + taxi.y;
                    if (FDestinaSE < 4000) {
                        htmlps.distanceDestina.style('color', 'palegreen');
                    }
                    if (FDestinaSE > 0) {
                        htmlps.topsy.html(" ↑ ");
                        htmlps.turvy.style('opacity', '0')
                    } else if (FDestinaSE < 0) {
                        htmlps.topsy.html(" ↓ ");
                        htmlps.topsy.style('color', 'rgb(255, 162, 0)');
                    } else if (FDestinaSE > 0 && !CF) {
                        htmlps.turvy.style('opacity', '1');
                    } else if (FDestinaSE > 0 && CF) {
                        htmlps.turvy.style('opacity', '0');
                    }

                    if (FDestinaSE < 1000 || FDestinaSE < -750) {
                        htmlps.droppa.style('opacity', '1')
                    } else {
                        htmlps.droppa.style('opacity', '0');
                    }
                    htmlps.guide.html("ⓘ Drop the fare by Warkhandem Bazaar. Make sure you arrive in time.");
                    htmlps.dropOff.html("Destination : Bazaar in Warkhandem.");
                    htmlps.dropOff.style('opacity', '1');
                    htmlps.distanceDestina.html("Distance left : " + Math.round(FDestinaSE)+" PX");
                    htmlps.distanceDestina.style('opacity', '1');
                    htmlps.distanceDestinaEa.html("📏 " + Math.round(FDestinaSE) + " PX");
                    htmlps.guide.style('white-space', 'break-space')
                }

                if (gameState === Play && fareMis && taxi.isTouching(Fdestinas[4]) && time > 0 && taxi.velocityY === 0) {
                    XP = XP + 1200;
                    Fdestinas[4].destroy();
                    WRKDfPedbazaarFA = false;
                    setTimeout(feedBOpa, 5000);
                    spWRKDfPedbazaar = false;
                    fareCo = fareCo + 1;
                    htmlps.feedBack();
                    fareMis = false;
                    htmlps.guide.html("Nice one! Now look for another fare.");
                }

                if (gameState === Play && fareMis && time <= 0) {
                    gameState = Due;
                }

            }

            if (WRKDfPedmarketFA) {
                if (WRKDfPedmarketFA && gameState === Play && fareMis) {
                    var FDestina3 = Fdestinas[3].y - Fdestinas[3].y - Fdestinas[3].y + taxi.y;
                    if (FDestina3 < 4000) {
                        htmlps.distanceDestina.style('color', 'palegreen');
                    }
                    if (FDestina3> 0) {
                        htmlps.topsy.html(" ↑ ");
                        htmlps.turvy.style('opacity', '0')
                    } else if (FDestina3 < 0) {
                        htmlps.topsy.html(" ↓ ");
                        htmlps.topsy.style('color', 'rgb(255, 162, 0)');
                        htmlps.turvy.style('opacity', '1');
                    }
                    if (FDestina3 < 1000 || FDestina3 < -750) {
                        htmlps.droppa.style('opacity', '1')
                    } else {
                        htmlps.droppa.style('opacity', '0');
                    }
                    htmlps.guide.html("ⓘ Drop the fare by Warkhandem Market. Make sure you arrive in time.");
                    htmlps.dropOff.html("Destination : Market in Warkhandem.");
                    htmlps.dropOff.style('opacity', '1');
                    htmlps.distanceDestina.html("Distance left : " + Math.round(FDestina3));
                    htmlps.distanceDestina.style('opacity', '1');
                    htmlps.distanceDestinaEa.html("📏 " + Math.round(FDestina3) + " PX");
                    htmlps.guide.style('white-space', 'break-space')
                }

                if (WRKDfPedmarketFA && gameState === Play && fareMis && taxi.isTouching(Fdestinas[3]) && time > 0 && taxi.velocityY === 0) {
                    XP = XP + 1100;
                    Fdestinas[3].destroy();
                    WRKDfPedmarketFA = false;
                    spWRKDfPedmarket = false;
                    setTimeout(feedBOpa, 5000);
                    fareCo = fareCo + 1;
                    htmlps.feedBack();
                    fareMis = false;
                    htmlps.guide.html("Nice one! Now look for another fare.");
                }

                if (WRKDfPedmarketFA && gameState === Play && fareMis && time <= 0) {
                    gameState = Due;
                }

            }

            if (WRKDfPednapalikFA) {
                if (WRKDfPednapalikFA && gameState === Play && fareMis) {
                    var FDestina5 = Fdestinas[5].y - Fdestinas[5].y - Fdestinas[5].y + taxi.y;
                    if (FDestina5 < 4000) {
                        htmlps.distanceDestina.style('color', 'palegreen');
                    }
                    if (FDestina5 > 0) {
                        htmlps.topsy.html(" ↑ ");
                        htmlps.turvy.style('opacity', '0')
                    } else if (FDestina5 < 0) {
                        htmlps.topsy.html(" ↓ ");
                        htmlps.topsy.style('color', 'rgb(255, 162, 0)');
                        htmlps.turvy.style('opacity', '1');
                    }
                    if (FDestina5 < 1000 || FDestina5 < -750) {
                        htmlps.droppa.style('opacity', '1')
                    } else {
                        htmlps.droppa.style('opacity', '0');
                    }
                    htmlps.guide.html("ⓘ Drop the fare by Warkhandem Nagarpalika (NPP). Make sure you arrive in time.");
                    htmlps.dropOff.html("Destination : NPP in Warkhandem.");
                    htmlps.dropOff.style('opacity', '1');
                    htmlps.distanceDestina.html("Distance left : " + Math.round(FDestina5)+" PX");
                    htmlps.distanceDestina.style('opacity', '1');
                    htmlps.distanceDestinaEa.html("📏 " + Math.round(FDestina5) + " PX");
                    htmlps.guide.style('white-space', 'break-space')
                }

                if (WRKDfPednapalikFA && gameState === Play && fareMis && taxi.isTouching(Fdestinas[5]) && time > 0 && taxi.velocityY === 0) {
                    XP = XP + 1900;
                    Fdestinas[5].destroy();
                    WRKDfPednapalikFA = false;
                    spWRKDfPednapalik = false;
                    setTimeout(feedBOpa, 5000);
                    fareCo = fareCo + 1;
                    htmlps.feedBack();
                    fareMis = false;
                    htmlps.guide.html("Nice one! Now look for another fare.");
                }

                if (WRKDfPednapalikFA && gameState === Play && fareMis && time <= 0) {
                    gameState = Due;
                }
            }

            if (PRKVfPedsupermarketFA) {
                if (PRKVfPedsupermarketFA && gameState === Play && fareMis) {
                    var FDestina6 = Fdestinas[6].y - Fdestinas[6].y - Fdestinas[6].y + taxi.y;
                    if (FDestina6 < 4000) {
                        htmlps.distanceDestina.style('color', 'palegreen');
                    }
                    if (FDestina6 > 0) {
                        htmlps.topsy.html(" ↑ ");
                        htmlps.turvy.style('opacity', '0')
                    } else if (FDestina6 < 0) {
                        htmlps.topsy.html(" ↓ ");
                        htmlps.topsy.style('color', 'rgb(255, 162, 0)');
                        htmlps.turvy.style('opacity', '1');
                    }
                    if (FDestina6 < 1000 || FDestina6 < -750) {
                        htmlps.droppa.style('opacity', '1')
                    } else {
                        htmlps.droppa.style('opacity', '0');
                    }
                    htmlps.guide.html("ⓘ Drop the fare by Parkvillia Supermarket. Make sure you arrive in time.");
                    htmlps.dropOff.html("Destination : Supermarket in Parkvillia.");
                    htmlps.dropOff.style('opacity', '1');
                    htmlps.dropOff.style('padding', '3px');
                    htmlps.dropOff.style('width', '380px');
                    htmlps.dropOff.position(780, 160);
                    htmlps.distanceDestina.html("Distance left : " + Math.round(FDestina6)+" PX");
                    htmlps.distanceDestina.style('opacity', '1');
                    htmlps.distanceDestinaEa.html("📏 " + Math.round(FDestina6) + " PX");
                    htmlps.guide.style('white-space', 'break-space')
                }

                if (PRKVfPedsupermarketFA && gameState === Play && fareMis && taxi.isTouching(Fdestinas[6]) && time > 0 && taxi.velocityY === 0) {
                    XP = XP + 2850;
                    setTimeout(feedBOpa, 5000);
                    Fdestinas[6].destroy();
                    PRKVfPedsupermarketFA = false;
                    PRKVfPedsupermarket = false;
                    fareCo = fareCo + 1;
                    htmlps.feedBack();
                    fareMis = false;
                    htmlps.guide.html("Nice one! Now look for another fare.");
                    
                }

                if (PRKVfPedsupermarketFA && gameState === Play && fareMis && time <= 0) {
                    gameState = Due;
                }
            }

            if (BRAVfPedresidencyFA) {
                if (BRAVfPedresidencyFA && gameState === Play && fareMis) {
                    var FDestina7 = Fdestinas[7].y - Fdestinas[7].y - Fdestinas[7].y + taxi.y;
                    if (FDestina7 < 4000) {
                        htmlps.distanceDestina.style('color', 'palegreen');
                    }
                    if (FDestina7 > 0) {
                        htmlps.topsy.html(" ↑ ");
                        htmlps.turvy.style('opacity', '0')
                    } else if (FDestina7 < 0) {
                        htmlps.topsy.html(" ↓ ");
                        htmlps.topsy.style('color', 'rgb(255, 162, 0)');
                        htmlps.turvy.style('opacity', '1');
                    }
                    if (FDestina7 < 1000 || FDestina7 < -750) {
                        htmlps.droppa.style('opacity', '1')
                    } else {
                        htmlps.droppa.style('opacity', '0');
                    }
                    htmlps.guide.html("ⓘ Drop the fare by Wing Gardens Residency in Bernard Avenue. Make sure you arrive in time.");
                    htmlps.dropOff.html("Destination : Residency in BAV.");
                    htmlps.dropOff.style('opacity', '1');
                    htmlps.dropOff.style('padding', '3px');
                    htmlps.dropOff.style('width', '380px');
                    htmlps.dropOff.position(780, 160);
                    htmlps.distanceDestina.html("Distance left : " + Math.round(FDestina7)+" PX");
                    htmlps.distanceDestina.style('opacity', '1');
                    htmlps.distanceDestinaEa.html("📏 " + Math.round(FDestina7) + " PX");
                    htmlps.guide.style('white-space', 'break-space')
                }

                if (BRAVfPedresidencyFA && gameState === Play && fareMis && taxi.isTouching(Fdestinas[7]) && time > 0 && taxi.velocityY === 0) {
                    XP = XP + 3780;
                    Fdestinas[7].destroy();
                    BRAVfPedresidencyFA = false;
                    spBRAVfPedresidency = false;
                    fareCo = fareCo + 1;
                    htmlps.feedBack();
                    setTimeout(feedBOpa, 5000);
                    fareMis = false;
                    htmlps.guide.html("Nice one! Now look for another fare.");
                }

                if (BRAVfPedresidencyFA && gameState === Play && fareMis && time <= 0) {
                    gameState = Due;
                }
            }

            if (BRAVfPedcaltonFA) {
                if (BRAVfPedcaltonFA && gameState === Play && fareMis) {
                    var FDestina8 = Fdestinas[8].y - Fdestinas[8].y - Fdestinas[8].y + taxi.y;
                    if (FDestina8 < 4000) {
                        htmlps.distanceDestina.style('color', 'palegreen');
                    }
                    if (FDestina8 > 0) {
                        htmlps.topsy.html(" ↑ ");
                        htmlps.turvy.style('opacity', '0')
                    } else if (FDestina8 < 0) {
                        htmlps.topsy.html(" ↓ ");
                        htmlps.topsy.style('color', 'rgb(255, 162, 0)');
                        htmlps.turvy.style('opacity', '1');
                    }
                    if (FDestina8 < 1000 || FDestina8 < -750) {
                        htmlps.droppa.style('opacity', '1')
                    } else {
                        htmlps.droppa.style('opacity', '0');
                    }
                    htmlps.guide.html("ⓘ Drop the fare by Calton St. in Bernard Avenue. Make sure you arrive in time.");
                    htmlps.dropOff.html("Destination : Calton St. in BAV.");
                    htmlps.dropOff.style('opacity', '1');
                    htmlps.distanceDestina.html("Distance left : " + Math.round(FDestina8)+" PX");
                    htmlps.distanceDestina.style('opacity', '1');
                    htmlps.distanceDestinaEa.html("📏 " + Math.round(FDestina8) + " PX");
                    htmlps.guide.style('white-space', 'break-space')
                }

                if (BRAVfPedcaltonFA && gameState === Play && fareMis && taxi.isTouching(Fdestinas[8]) && time > 0 && taxi.velocityY === 0) {
                    XP = XP + 4200;
                    Fdestinas[8].destroy();
                    BRAVfPedcaltonFA = false;
                    spBRAVfPedcalton = false;
                    setTimeout(feedBOpa, 5000);
                    fareCo = fareCo + 1;
                    htmlps.feedBack();
                    fareMis = false;
                    htmlps.guide.html("Nice one! Now look for another fare.");
                }

                if (BRAVfPedcaltonFA && gameState === Play && fareMis && time <= 0) {
                    gameState = Due;
                }
            }

            if (BRAVfPedstadiumFA) {
                if (BRAVfPedstadiumFA && gameState === Play && fareMis) {
                    var FDestina9 = Fdestinas[9].y - Fdestinas[9].y - Fdestinas[9].y + taxi.y;
                    if (FDestina9 < 4000) {
                        htmlps.distanceDestina.style('color', 'palegreen');
                    }
                    if (FDestina9 > 0) {
                        htmlps.topsy.html(" ↑ ");
                        htmlps.turvy.style('opacity', '0')
                    } else if (FDestina9 < 0) {
                        htmlps.topsy.html(" ↓ ");
                        htmlps.topsy.style('color', 'rgb(255, 162, 0)');
                        htmlps.turvy.style('opacity', '1');
                    }
                    if (FDestina9 < 1000 || FDestina9 < -750) {
                        htmlps.droppa.style('opacity', '1')
                    } else {
                        htmlps.droppa.style('opacity', '0');
                    }
                    htmlps.guide.html("ⓘ Drop the fare by national Stadium in Bernard Avenue. Make sure you arrive in time.");
                    htmlps.dropOff.html("Destination : Stadium in BAV.");
                    htmlps.dropOff.style('opacity', '1');
                    htmlps.distanceDestina.html("Distance left : " + Math.round(FDestina9)+" PX");
                    htmlps.distanceDestina.style('opacity', '1');
                    htmlps.distanceDestinaEa.html("📏 " + Math.round(FDestina9) + " PX");
                    htmlps.guide.style('white-space', 'break-space')
                }

                if (BRAVfPedstadiumFA && gameState === Play && fareMis && taxi.isTouching(Fdestinas[9]) && time > 0 && taxi.velocityY === 0) {
                    XP = XP + 5700;
                    Fdestinas[9].destroy();
                    setTimeout(feedBOpa, 5000);
                    BRAVfPedstadiumFA = false;
                    spBRAVfPedstadium = false;
                    fareCo = fareCo + 1;
                    htmlps.feedBack();
                    fareMis = false;
                    htmlps.guide.html("Nice one! Now look for another fare.");
                }

                if (BRAVfPedstadiumFA && gameState === Play && fareMis && time <= 0) {
                    gameState = Due;
                }
            }

            if (BRAVfPedparkwayFA) {
                if (BRAVfPedparkwayFA && gameState === Play && fareMis) {
                    var FDestina10 = Fdestinas[10].y - Fdestinas[10].y - Fdestinas[10].y + taxi.y;
                    if (FDestina10 < 4000) {
                        htmlps.distanceDestina.style('color', 'palegreen');
                    }
                    if (FDestina10 > 0) {
                        htmlps.topsy.html(" ↑ ");
                        htmlps.turvy.style('opacity', '0')
                    } else if (FDestina10 < 0) {
                        htmlps.topsy.html(" ↓ ");
                        htmlps.topsy.style('color', 'rgb(255, 162, 0)');
                        htmlps.turvy.style('opacity', '1');
                    }
                    if (FDestina10 < 1000 || FDestina10 < -750) {
                        htmlps.droppa.style('opacity', '1')
                    } else {
                        htmlps.droppa.style('opacity', '0');
                    }
                    htmlps.guide.html("ⓘ Drop the fare by Parkway St. in Bernard Avenue. Make sure you arrive in time.");
                    htmlps.dropOff.html("Destination : Parkway St. in BAV.");
                    htmlps.dropOff.style('opacity', '1');
                    htmlps.distanceDestina.html("Distance left : " + Math.round(FDestina10)+" PX");
                    htmlps.distanceDestina.style('opacity', '1');
                    htmlps.distanceDestinaEa.html("📏 " + Math.round(FDestina10) + " PX");
                    htmlps.guide.style('white-space', 'break-space')
                }

                if (BRAVfPedparkwayFA && gameState === Play && fareMis && taxi.isTouching(Fdestinas[10]) && time > 0 && taxi.velocityY === 0) {
                    XP = XP + 6100;
                    setTimeout(feedBOpa, 5000);
                    Fdestinas[10].destroy();
                    BRAVfPedparkwayFA = false;
                    spBRAVfPedparkway = false;
                    fareCo = fareCo + 1;
                    htmlps.feedBack();
                    fareMis = false;
                    htmlps.guide.html("Nice one! Now look for another fare.");
                }

                if (BRAVfPedparkwayFA && gameState === Play && fareMis && time <= 0) {
                    gameState = Due;
                }
            }
            
            if (GRSVfPedcouncilFA) {
                if (GRSVfPedcouncilFA && gameState === Play && fareMis) {
                    var FDestina1 = Fdestinas[1].y - Fdestinas[1].y - Fdestinas[1].y + taxi.y;
                    if (FDestina1 < 4000) {
                        htmlps.distanceDestina.style('color', 'palegreen');
                    }
                    if (FDestina1 > 0) {
                        htmlps.topsy.html(" ↑ ");
                        htmlps.turvy.style('opacity', '0')
                    } else if (FDestina1 < 0) {
                        htmlps.topsy.html(" ↓ ");
                        htmlps.topsy.style('color', 'rgb(255, 162, 0)');
                        htmlps.turvy.style('opacity', '1');
                    }
                    if (FDestina1 < 1000 || FDestina1 < -750) {
                        htmlps.droppa.style('opacity', '1')
                    } else {
                        htmlps.droppa.style('opacity', '0');
                    }
                    htmlps.guide.html("ⓘ Drop the fare at Council in Greensville. Make sure you arrive in time.");
                    htmlps.dropOff.html("Destination : Greensville Council.");
                    htmlps.dropOff.style('opacity', '1');
                    htmlps.distanceDestina.html("Distance left : " + Math.round(FDestina1)+" PX");
                    htmlps.distanceDestina.style('opacity', '1');
                    htmlps.distanceDestinaEa.html("📏 " + Math.round(FDestina1) + " PX");
                    htmlps.guide.style('white-space', 'break-space')
                }

                if (GRSVfPedcouncilFA && gameState === Play && fareMis && taxi.isTouching(Fdestinas[1]) && time > 0 && taxi.velocityY === 0) {
                    XP = XP + 5200;
                    Fdestinas[1].destroy();
                    GRSVfPedcouncilFA = false;
                    spGRSVfPedcouncil = false;
                    fareCo = fareCo + 1;
                    htmlps.feedBack();
                    fareMis = false;
                    setTimeout(feedBOpa, 5000);
                    htmlps.guide.html("Nice one! Now look for another fare.");
                }

                if (GRSVfPedcouncilFA && gameState === Play && fareMis && time <= 0) {
                    gameState = Due;
                }
            }

            if (GRSVfPedgroundFA) {
                if (GRSVfPedgroundFA && gameState === Play && fareMis) {
                    var FDestina0 = Fdestinas[0].y - Fdestinas[0].y - Fdestinas[0].y + taxi.y;
                    if (FDestina0 < 4000) {
                        htmlps.distanceDestina.style('color', 'palegreen');
                    }
                    if (FDestina0 > 0) {
                        htmlps.topsy.html(" ↑ ");
                        htmlps.turvy.style('opacity', '0')
                    } else if (FDestina0 < 0) {
                        htmlps.topsy.html(" ↓ ");
                        htmlps.topsy.style('color', 'rgb(255, 162, 0)');
                        htmlps.turvy.style('opacity', '1');
                    }
                    if (FDestina0 < 1000 || FDestina0 < -750) {
                        htmlps.droppa.style('opacity', '1')
                    } else {
                        htmlps.droppa.style('opacity', '0');
                    }
                    htmlps.guide.html("ⓘ Drop the fare at the Ground in Greensville. Make sure you arrive in time.");
                    htmlps.dropOff.html("Destination : Greensville Ground");
                    htmlps.dropOff.style('opacity', '1');
                    htmlps.distanceDestina.html("Distance left : " + Math.round(FDestina0)+" PX");
                    htmlps.distanceDestina.style('opacity', '1');
                    htmlps.distanceDestinaEa.html("📏 " + Math.round(FDestina0) + " PX");
                    htmlps.guide.style('white-space', 'break-space')
                }

                if (GRSVfPedgroundFA && gameState === Play && fareMis && taxi.isTouching(Fdestinas[0]) && time > 0 && taxi.velocityY === 0) {
                    XP = XP + 6300;
                    Fdestinas[0].destroy();
                    GRSVfPedgroundFA = false;
                    setTimeout(feedBOpa, 5000);
                    spGRSVfPedground = false;
                    fareCo = fareCo + 1;
                    htmlps.feedBack();
                    fareMis = false;
                    htmlps.guide.html("Nice one! Now look for another fare.");
                }

                if (GRSVfPedcouncilFA && gameState === Play && fareMis && time <= 0) {
                    gameState = Due;
                }
            }

        }

        if (!fareMis) {
            htmlps.dropOff.style('opacity', '0');
            htmlps.distanceDestina.style('opacity', '0');
            htmlps.distanceDestinaEa.style('opacity', '0');
            htmlps.timerEas.style('opacity', '0');
            htmlps.timerE.style('opacity', '0');
        } else if (fareMis) {
            htmlps.dropOff.style('opacity', '1');
            htmlps.distanceDestinaEa.style('opacity', '1');
            htmlps.distanceDestinaEa.style('opacity', '1');
            htmlps.timerEas.style('opacity', '1');
            htmlps.timerE.style('opacity', '1');
        }

        for (var i = 0; i < pedsFGroup.length; i++) {
            if (pedsFGroup.get(i).y > taxi.y + 1000 && !CF || pedsFGroup.get(i).y < taxi.y-1200 && CF) {
                pedsFGroup.get(i).destroy();
            }
        }

        for (var i = 0; i < pedsFGroup.length; i++) {
            if (taxi.isTouching(pedsFGroup.get(i))) {
                pedsFGroup.get(i).velocityY = 0;
                htmlps.guide.html("ⓘ Press Y to accept to drop the passanger or drive off to deny.")
                htmlps.guide.style('white-space', 'break-space')
            } else {
                pedsFGroup.get(i).velocityY = -2;
                htmlps.guide.html("ⓘ Look for fares, touch the fare circle with your taxi to receive information.")
                htmlps.guide.style('white-space', 'break-space')
            }
        }

        if (spawnPeds && speed > 0) {

            if (taxi.y > -22320) {

                if (frameCount % 100 === 0 && pedsRGroup.length < 7) {
                    Ped = createSprite(115, taxi.y - 800, 30, 30);
                    PedH = createSprite(Ped.x, Ped.y, 10, 10);
                    var PedC = Math.round(random(1, 2));
                    switch (PedC) {
                        case 1: Ped.x = Math.round(random(675, 690));
                            Ped.width = Math.round(random(30, 25));
                            Ped.velocityY = Math.round(random(-1, -3));
                            Ped.shapeColor = color(random(0, 255), random(0, 255), random(0, 255));
                            PedH.velocityY = Ped.velocityY;
                            PedH.x = Ped.x
                            PedH.addImage(pedHe);
                            PedH.scale = 0.2;
                            break;
                        case 2: Ped.x = Math.round(random(675, 660));
                            Ped.width = Math.round(random(35, 30));
                            Ped.velocityY = Math.round(random(-1, -3));
                            Ped.shapeColor = color(random(20, 255), random(240, 255), random(240, 255));
                            PedH.velocityY = Ped.velocityY;
                            PedH.addImage(pedHe);
                            PedH.scale = 0.2;
                            PedH.x = Ped.x;
                            break;
                        default: break;
                    }
                    pedsR.push(Ped);
                    pedsRGroup.add(Ped);
                    pedsRGroup.add(PedH);
                }

            }

            if (taxi.y < -9650 && taxi.y > -23400) {

                if (frameCount % 100 === 0 && pedsRGroup.length < 7) {
                    Ped = createSprite(115, taxi.y - 800, 30, 30);
                    PedH1 = createSprite(Ped.x, Ped.x, 10, 10);
                    var PedC = Math.round(random(1, 2));
                    switch (PedC) {
                        case 1: Ped.x = Math.round(random(125, 130));
                            Ped.width = Math.round(random(30, 25));
                            Ped.velocityY = Math.round(random(1, 3));
                            Ped.shapeColor = color(random(0, 255), random(0, 255), random(0, 255));
                            PedH1.velocityY = Ped.velocityY;
                            PedH1.x = Ped.x
                            break;
                        case 2: Ped.x = Math.round(random(110, 130));
                            Ped.width = Math.round(random(35, 30));
                            Ped.velocityY = Math.round(random(1, 3));
                            Ped.shapeColor = color(random(240, 255), random(240, 255), random(240, 255));
                            PedH1.velocityY = Ped.velocityY;
                            PedH1.x = Ped.x;
                            break;
                        default: break;
                    }
                    PedH1.addImage(pedHe);
                    PedH1.scale = 0.2;
                    pedsR.push(Ped);
                    pedsRGroup.add(Ped);
                    pedsRGroup.add(PedH1);
                }
            }

            if (taxi.y < -38600 && taxi.y > -53800) {

                if (frameCount % 100 === 0 && pedsRGroup.length < 7) {
                    Ped = createSprite(115, taxi.y - 800, 30, 30);
                    PedH2 = createSprite(Ped.x, Ped.y, 10, 10);
                    var PedC = Math.round(random(1, 2));
                    switch (PedC) {
                        case 1: Ped.x = Math.round(random(125, 130));
                            Ped.width = Math.round(random(30, 25));
                            Ped.velocityY = Math.round(random(1, 3));
                            Ped.shapeColor = color(random(0, 255), random(0, 255), random(0, 255));
                            PedH2.velocityY = Ped.velocityY;
                            PedH2.x = Ped.x
                            PedH2.addImage(pedHe);
                            PedH2.scale = 0.2;
                            PedH2.shapeColor = color(random(0, 50), random(0, 50), random(0, 50));
                            break;
                        case 2: Ped.x = Math.round(random(675, 690));
                            Ped.width = Math.round(random(35, 30));
                            Ped.velocityY = Math.round(random(-1, -3));
                            Ped.shapeColor = color(random(240, 255), random(240, 255), random(240, 255));
                            PedH2.velocityY = Ped.velocityY;
                            PedH2.addImage(pedHe);
                            PedH2.scale = 0.2;
                            PedH2.x = Ped.x;
                            PedH2.shapeColor = color(random(0, 50), random(0, 50), random(0, 50));
                            break;
                        default: break;
                    }
                    pedsR.push(Ped);
                    pedsRGroup.add(Ped);
                    pedsRGroup.add(PedH2);
                }

            }

            if (taxi.y < -76175 && taxi.y > -119000) {

                if (frameCount % 100 === 0 && pedsRGroup.length < 7) {
                    Ped = createSprite(115, taxi.y - 800, 30, 30);
                    PedH3 = createSprite(Ped.x, Ped.y, 10, 10);
                    var PedC = Math.round(random(1, 2));
                    switch (PedC) {
                        case 1: Ped.x = Math.round(random(125, 135));
                            Ped.width = Math.round(random(30, 25));
                            Ped.velocityY = Math.round(random(1, 3));
                            Ped.shapeColor = color(random(0, 255), random(0, 255), random(0, 255));
                            PedH3.velocityY = Ped.velocityY;
                            PedH3.addImage(pedHe);
                            PedH3.scale = 0.2;
                            PedH3.x = Ped.x
                            PedH3.shapeColor = color(random(0, 50), random(0, 50), random(0, 50));
                            break;
                        case 2: Ped.x = Math.round(random(675, 660));
                            Ped.width = Math.round(random(35, 30));
                            Ped.velocityY = Math.round(random(-1, -3));
                            Ped.shapeColor = color(random(240, 255), random(240, 255), random(240, 255));
                            PedH3.velocityY = Ped.velocityY;
                            PedH3.x = Ped.x;
                            PedH3.addImage(pedHe);
                            PedH3.scale = 0.2;
                            PedH3.shapeColor = color(random(0, 50), random(0, 50), random(0, 50));
                            break;
                        default: break;
                    }
                    pedsR.push(Ped);
                    pedsRGroup.add(Ped);
                    pedsRGroup.add(PedH3);
                }
            }
        }

        if (taxi.y < -120200) {
            CF = true;
            htmlps.showBoundar();
            htmlps.boundar.style('opacity', '1');
            setTimeout(boundarOpa, 4000);
        } 

        for (var i = 0; i < pedsRGroup.length; i++) {
            if (pedsRGroup.get(i).y > taxi.y + 1000) {
                pedsRGroup.get(i).destroy();
            }
        }

        if (frameCount % 80 === 0 && spawnTraf === true && TrafficGroup.length < 7 && !CF) {
            PTraffic = createSprite(350, taxi.y - 800, 40, 80);
            var PTrafficvar = Math.round(random(1, 2));
            switch (PTrafficvar) {
                case 1: PTraffic.x = Math.round(random(320, 360));
                    PTraffic.width = 40;
                    PTraffic.height = 80;
                    PTraffic.velocityY = (Math.round(random(-10, -30)));
                    PTraffic.shapeColor = color(random(150, 255), random(150, 255), random(150, 255));
                    break;
                case 2: PTraffic.x = Math.round(random(200, 270));
                    PTraffic.width = Math.round(random(60, 70));
                    PTraffic.height = Math.round(random(150, 200));
                    PTraffic.velocityY = (Math.round(random(-10, -20)));
                    PTraffic.shapeColor = color(random(150, 255), random(150, 200), random(150, 150));
                    break;
                default: break;
            }
            TrafficAr.push(PTraffic);
            TrafficGroup.add(PTraffic);
        } else if (frameCount % 80 === 0 && spawnTraf === true && TrafficGroup.length < 7 && CF) {
            PTraffic = createSprite(350, taxi.y + 900, 40, 80);
            var PTrafficvar = Math.round(random(1, 2));
            switch (PTrafficvar) {
                case 1: PTraffic.x = Math.round(random(320, 360));
                    PTraffic.width = 40;
                    PTraffic.height = 80;
                    PTraffic.velocityY = (Math.round(random(-10, -30)));
                    PTraffic.shapeColor = color(random(150, 255), random(150, 255), random(150, 255));
                    break;
                case 2: PTraffic.x = Math.round(random(200, 270));
                    PTraffic.width = Math.round(random(60, 70));
                    PTraffic.height = Math.round(random(150, 200));
                    PTraffic.velocityY = (Math.round(random(-10, -20)));
                    PTraffic.shapeColor = color(random(150, 255), random(150, 200), random(150, 150));
                    break;
                default: break;
            }
            TrafficAr.push(PTraffic);
            TrafficGroup.add(PTraffic);
        }

        if (frameCount % 100 === 0 && spawnTraf === true && TrafficGroup.length < 7 && !CF) {
            OTraffic = createSprite(450, taxi.y - 800, 40, 80);
            OTraffic.lifetime = 1200;
            var OTrafficvar = Math.round(random(1, 2));
            switch (OTrafficvar) {
                case 1: OTraffic.x = Math.round(random(425, 470));
                    OTraffic.width = 40;
                    OTraffic.height = 80;
                    OTraffic.velocityY = (Math.round(random(7, 30)));
                    OTraffic.shapeColor = color(random(150, 255), random(150, 255), random(150, 255));
                    break;
                case 2: OTraffic.x = Math.round(random(530, 600));
                    OTraffic.width = Math.round(random(60, 70));
                    OTraffic.height = Math.round(random(150, 200));
                    OTraffic.velocityY = (Math.round(random(5, 15)));
                    OTraffic.shapeColor = color(random(150, 255), random(150, 255), random(150, 255));
                    break;
                default: break;
            }
            TrafficAr.push(OTraffic);
            TrafficGroup.add(OTraffic);
            OTrafficGroup.add(OTraffic);
        } else if (frameCount % 100 === 0 && spawnTraf === true && TrafficGroup.length < 7 && CF) {
            OTraffic = createSprite(450, taxi.y + 900, 40, 80);
            OTraffic.lifetime = 1200;
            var OTrafficvar = Math.round(random(1, 2));
            switch (OTrafficvar) {
                case 1: OTraffic.x = Math.round(random(425, 470));
                    OTraffic.width = 40;
                    OTraffic.height = 80;
                    OTraffic.velocityY = (Math.round(random(7, 30)));
                    OTraffic.shapeColor = color(random(150, 255), random(150, 255), random(150, 255));
                    break;
                case 2: OTraffic.x = Math.round(random(530, 600));
                    OTraffic.width = Math.round(random(60, 70));
                    OTraffic.height = Math.round(random(150, 200));
                    OTraffic.velocityY = (Math.round(random(5, 15)));
                    OTraffic.shapeColor = color(random(150, 255), random(150, 255), random(150, 255));
                    break;
                default: break;
            }
            TrafficAr.push(OTraffic);
            TrafficGroup.add(OTraffic);
            OTrafficGroup.add(OTraffic);
        }

        if (Taxisens.isTouching(TrafficGroup) && cCrash) {
            htmlps.caution.style('opacity', '1');
        }

        if (TaxisensCL.isTouching(TrafficGroup) && cCrash) {
            htmlps.caution.style('font-size', '7vh');
        }

        if (time > 60) {
            htmlps.timerE.style('color', 'rgb(110, 255, 148)');
        } 
        if (time < 40) {
            htmlps.timerE.style('color', 'rgb(255, 196, 0)');
        }
        if (time < 25) {
            htmlps.timerE.style('color', 'rgb(255, 136, 51)');
        }
        if (time < 10) {
            htmlps.timerE.style('color', 'rgb(0, 0, 0)');
            htmlps.timerE.style('background-color', 'rgb(255, 65, 36)')
        }

        TrafficGroup.collide(TrafficAr);

        for (var i = 0; i < TrafficGroup.length; i++) {
            if (TrafficGroup.get(i).y > taxi.y + 1000) {
                TrafficGroup.get(i).destroy();
            }
        }

        for (var i = 0; i < TrafficGroup.length; i++) {
            if (TrafficGroup.get(i).x < 400 && TrafficGroup.get(i).y > taxi.y + 50 && !CF) {
                TrafficGroup.get(i).velocityY = -3;
            }
        }

        for (var i = 0; i < TrafficGroup.length; i++) {
            if (TrafficGroup.get(i).y < taxi.y - 1000) {
                TrafficGroup.get(i).destroy();
            }
        }

        for (var i = 0; i < OTrafficGroup.length; i++) {
            if (OTrafficGroup.get(i).x < 430) {
                OTrafficGroup.get(i).destroy();
            }
        }

        for (var i = 0; i < OTrafficGroup.length; i++) {
            var a = Math.round(random(450, 500))
            if (taxi.x > 410 && taxi.x < 550 && OTrafficGroup.get(i).y > taxi.y - a && !CF) {
                OTrafficGroup.get(i).velocityY = 1;
            }
        }

        for (var i = 0; i < TrafficGroup.length; i++) {
            var a = Math.round(random(450, 500))
            if (TrafficGroup.get(i).x < 400 && taxi.x < 400 && CF) {
                TrafficGroup.get(i).velocityY = -1;
            }
        }

        for (var i = 0; i < TrafficGroup.length; i++) {
            if (TrafficGroup.get(i).isTouching(TaxisensCL) && speed <= 0 && taxi.x > 400 && !CF || TrafficGroup.get(i).isTouching(TaxisensCL) && speed <= 0 && taxi.x < 400 && CF) {
                TrafficGroup.get(i).velocityY = 0;
                TrafficGroup.collide(TaxisensCL);
            }
        }

        if (fareCo > 2 && gameState === Play) {
            gameState = Win;
            htmlps.jobDo.hide();
        }

        if (keyWentDown("X") && gameState === Play && cCrash) {
            cCrash = false;
            htmlps.cCrashAlert();
            setTimeout(function(){
                htmlps.ccrash.style('opacity', '0');
            }, 4000);
        }

        if (taxi.isTouching(TrafficGroup) && cCrash) {
            gameState = End;
        }

        document.addEventListener( 'visibilitychange' , function() {
            if (document.hidden && gameState === Play) {
                gameState = 6;
            } else {
                gameState = 6;
                htmlps.gamePause();
                htmlps.pause.position(250, 0);
                htmlps.pause.html("Welcome back. Press E to continue.");
                taxi.velocityY = 0;
            }
        }, false );

    }

    if (keyWentDown("P") && gameState === Play) {
        gameState = Pause;
    } else if (keyWentDown("P") && gameState === Pause) {
        gameState = Play;
        htmlps.pause.style('opacity', '0');
        aPn = 0;
    }

    if (gameState === Pause) {
        htmlps.gamePause();
        htmlps.pause.style('opacity', '1');
        pedsFGroup.destroyEach();
        pedsRGroup.destroyEach();

        for(var i = 0; i < TrafficGroup.length; i++) {
            if (TrafficGroup.get(i).y < taxi.y+200 || TrafficGroup.get(i).y > taxi.y-200) {
                TrafficGroup.get(i).destroy();
            }
        }
        taxi.velocityY = 0;
        taxi.velocityX = 0;
    } 

    if (gameState == End) {
        htmlps.gameEnd();
        TrafficGroup.setVelocityYEach(0);
        pedsFGroup.setVelocityYEach(0);
        pedsRGroup.setVelocityYEach(0);
        taxi.velocityY = 0;
        taxi.velocityX = 0;
        document.body.style.backgroundColor = "rgb(105, 0, 0)";
        document.getElementById("DashboardBackground").classList.add('red');
    }

    if (gameState === Due) {
        TrafficGroup.setVelocityYEach(0);
        pedsFGroup.setVelocityYEach(0);
        pedsRGroup.setVelocityYEach(0);
        taxi.velocityY = 0;
        taxi.velocityX = 0;
        htmlps.gameDue();
        document.body.style.backgroundColor = "rgb(105, 0, 0)";
        document.getElementById("DashboardBackground").classList.add('red');
    }

    if (gameState === Due && keyDown("E") || gameState === End && keyDown("E")) {
        window.location.reload();
    }

    drawSprites();

    if (gameState === Win) {
        background(0, 0, 0);
        taxi.velocityY = 0;
        htmlps.gameWin();
        noCanvas();
        document.getElementById('win').style.display = "flex";
    }
}


function defTimer() {
    if (fareMis && time > 0 && gameState === Play) {
        time--;
    }
}

function defTTDCounter() {
    if (gameState === Play && taxi.y < -200 && speed > 0) {
        totaltimeD++;
    }
}

function boundarOpa() {
    htmlps.boundar.style('opacity', '0');
}

function feedBOpa() {
    htmlps.fedB.style('opacity', '0');
}

function autoPause() {
        aPn++;
}

//Oh my god so many useless lines (I know I know I wanted to make it DRY but didnt had enough time to think :())
