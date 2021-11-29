class HTMLPSCHARS {
    constructor() {

        this.title = createElement('h1');
        this.restart = createElement('h2');
        this.startinst = createElement('h2');
        this.alert = createElement('h2');
        this.framecounter = createElement('h3');
        this.CF = createElement('h3');
        this.pause = createElement('h2');
        this.pressN = createElement('h3');
        this.pressH = createElement('h3');

        this.guide = createElement('h3');
        this.jobDo = createElement('h3');
        this.boundar = createElement('h3');
        this.fedB = createElement('h3');
        this.XP = createElement('h3');
        this.ttD = createElement('h4');
        this.taxiSpeed = createElement('h2');
        this.taxiSpeedn = createElement('h2');
        this.taxiSpeednEA = createElement('h3');
        this.taxiGR = createElement('h3');
        this.taxiP = createElement('h2');
        this.topsy = createElement('h2');
        this.turvy = createElement('h3');

        this.status = createElement('h2');
        this.loc = createElement('h2');

        this.dropOff = createElement('h3');
        this.timerE = createElement('h2');
        this.timerEas = createElement('h3');
        this.distanceDestinaEa = createElement('h3');
        this.distanceDestina = createElement('h3');

        this.Fdistance = createElement('h3');
        this.Fdestination = createElement('h3');
        this.FXP = createElement('h3');
        this.FACRJ = createElement('h3');
        this.Ftimer = createElement('h3');
    }

    showTitle() {

        this.title.position(970, 10);
        this.title.html("Taxi Sim 2D");
        this.title.style('background-color', 'black');
        this.title.style('border-radius', '10px');
        this.title.style('padding', '20px');
        this.title.style('margin', '1px');

    }

    startDisplay() {
        this.startinst.position(900, 200);
        this.startinst.html("Press E to start.");

        this.pressN.position(850, 300);
        this.pressN.html("Press N for Controls & Map");

        this.pressH.position(850, 350);
        this.pressH.html("Press H for Help & Guide");
    }

    startDisplayOFF() {
        this.startinst.hide();
        this.pressN.hide();
        this.pressH.hide();
    }

    gamePause() {
        this.pause.html("Paused : Press P to Play");
        this.pause.position(350, 250);
        this.pause.style('background-color', 'rgba(0, 0, 0, 0.6)');
        this.pause.style('opacity', '0');
        this.pause.style('padding', '10px');
        this.pause.style('font-size', '40px')
    }

    playCompo() {
        this.restart.position(850, 552);
        this.restart.html("Press F5 or E to Restart.");
        this.restart.style('background-color', 'black');
        this.restart.style('padding', '10px');

        this.CF.position(1130, 400);
        this.CF.html("⏫");
        this.CF.style('background-color', 'rgba(0, 0, 0, 0.0)');

        this.framecounter.position(800, 20);
        this.framecounter.html(Math.round(frameRate()) +" FPS");

        this.guide.position(10, 10);
        this.guide.html("ⓘ Use arrow keys to move. Follow the arrows on the road to begin.");
        this.guide.style('width', '250px');
        this.guide.style('line-height', '1.5');
        this.guide.style('white-space', 'break-spaces');

        this.jobDo.html("☑ Fares done : "+fareCo+" /3");
        this.jobDo.position(1000, 465);

        this.taxiSpeed.position(830, 400);
        this.taxiSpeed.html("Speed : ");
        this.taxiSpeed.style('padding', '10px');
        this.taxiSpeed.style('background-color', 'rgba(0, 0, 0, 0.5)');
        this.taxiSpeed.style('border-radius', '5px');

        this.taxiSpeedn.position(935, 395);
        this.taxiSpeedn.style('font-style', 'italic');
        this.taxiSpeedn.style('font-size', '31px');
        this.taxiSpeedn.style('transition', '0.8s');
        this.taxiSpeedn.html(" " + " "+Math.round(speed) + " px/s");
        this.taxiSpeedn.style('padding', '10px');
        this.taxiSpeedn.style('background-color', 'rgba(0, 0, 0, 0.5)');
        this.taxiSpeedn.style('border-radius', '5px');

        this.taxiSpeednEA.position(10, 400);
        this.taxiSpeednEA.html("⏲ " + " "+Math.round(speed) + " px/s");
        this.taxiSpeednEA.style('font-style', 'italic');

        this.taxiGR.position(1085, 400);
        this.taxiGR.html("🅿️");
        this.taxiGR.style('background-color', 'rgba(0, 0, 0, 0.0)')

        this.taxiP.position(800, 350);
        this.taxiP.html("Pos : " +" "+Math.round(taxi.y - taxi.y - taxi.y));

        this.loc.position(1000, 350);
        this.loc.html("In : Greensville");

        //THINK ABOUT REMASTERING THE DASHBOARD

        this.status.html("Status : 🅿️ Idle");
        this.status.position(800, 100);
        this.status.style('background-color', 'black');
        this.status.style('width', '390px');
        this.status.style('text-align', 'center');
        this.status.style('padding', '10px');

        this.XP.position(790, 465);
        this.XP.html("♢ Total XP : "+XP);

        this.ttD.position(920, 510);
        this.ttD.html("⌚ Driving for : "+totaltimeD+" s");

    }

    showBoundar() {
        this.boundar.html("🚫 You reached the boundary limit. Press Z to flip again. 🚫");
        this.boundar.position(10, 230);
        this.boundar.style('opacity', '0');
        this.boundar.style('width', '200px');
    }

    feedBack() {
        this.fedB.html("Good job! "+fareCo+" /3 Fares remaining to win.");
        this.fedB.position(10, 320);
        this.fedB.style('width', '200px');
        this.fedB.style('opacity', '1');
    }

    FareInf() {

        this.Ftimer.html("Arrival : In 90 Seconds");
        this.Ftimer.style('opacity', '0');
        this.Ftimer.style('width', '400px');

        this.Fdestination.html("Destination : Parkvilla E34");
        this.Fdestination.style('opacity', '0');
        this.Fdestination.style('width', '400px');

        this.Fdistance.style('opacity', '0');
        this.Fdistance.style('width', '400px');
        this.Fdistance.html(" ");

        this.FACRJ.style('opacity', '0');
        this.FACRJ.style('width', '400px');
        this.FACRJ.html("Press Y to Accept, Or move on to Deny");

        this.FXP.style('opacity', '0');
        this.FXP.style('width', '400px');
        this.FXP.html(" ");

        this.topsy.html(" ⬆ ");
        this.topsy.position(700, 120);
        this.topsy.style('color', 'rgb(74, 255, 33)');
        this.topsy.style('opacity', '0');
        this.topsy.style('background-color', 'rgba(0, 0, 0, 0.3)');
        this.topsy.style('padding', '10px');

        this.turvy.html("Press Z to flip Canvas");
        this.turvy.position(10, 200);
        this.turvy.style('width', '175px');
        this.turvy.style('opacity', '0');
        
    }

    FareInfO() {
        this.Ftimer.style('opacity', '1');
        this.Fdestination.style('opacity', '1');
        this.Fdistance.style('opacity', '1');
        this.FACRJ.style('opacity', '1');
        this.FXP.style('opacity', '1');
    }

    FareInfC() {
        this.Ftimer.style('opacity', '0');
        this.Fdestination.style('opacity', '0');
        this.Fdistance.style('opacity', '0');
        this.FACRJ.style('opacity', '0');
        this.FXP.style('opacity', '0');
    }

    FareCompo() {
        this.dropOff.position(800, 170);
        this.dropOff.html("");
        this.dropOff.style('width', '350px');
        this.dropOff.style('opacity', '1');

        this.distanceDestina.position(800, 200);
        this.distanceDestina.style('width', '350px');
        this.distanceDestina.html("Distance left : ");
        this.distanceDestina.style('opacity', '1');

        this.timerE.position(855, 270);
        this.timerE.html("⏳ Time left : "+time +" s");
        this.timerE.style('padding', '10px');
        this.timerE.style('background-color', 'black');
        this.timerE.style('border-radius', '5px');

        this.timerEas.position(10, 500);
        this.timerEas.html("⏳ "+time +" s");

        this.distanceDestinaEa.position(650, 200);
    }

    gameWin() {
        this.title.position(width/2-350, height/2-20);
        this.title.style('font-size', '50px');
        this.fedB.style('opacity', '0');
        this.guide.style('opacity', '0');
        this.status.html("Job complete!");
        this.timerEas.style('opacity', '0');
        this.distanceDestina.hide();
        this.dropOff.hide();
        this.FACRJ.hide();
        this.Fdestination.hide();
        this.Fdistance.hide();
        this.taxiSpeed.hide();
        this.taxiSpeedn.hide();
        this.taxiGR.hide();
        this.framecounter.hide();
        this.taxiSpeednEA.hide();
        this.taxiP.html("Last Pos :"+" "+Math.round(taxi.y - taxi.y - taxi.y));
        this.FXP.style('opacity', '1');
        this.FXP.html("♢ XP Earned : "+XP);
        this.distanceDestinaEa.hide();
    }

    gameDue() {
        this.framecounter.html("Too late!");
        this.alert.html("Sorry, you couldn't make it in time!");
        this.alert.position(300, 150);
        this.alert.style('padding', '10px');
        this.alert.style('background-color', 'rgba(0, 0, 0, 0.7)');
        this.guide.html("Sorry, you ran out of time."+" Press F5 or E to Restart. ");
    }

    gameEnd() {
        this.framecounter.html("Accident!");
        this.alert.html("Sorry, you met in an Accident!");
        this.alert.position(300, 100);
        this.alert.style('padding', '10px');
        this.alert.style('background-color', 'rgba(0, 0, 0, 0.9)');
        this.alert.style('z-index', '10');
        this.guide.html("Sorry, you met in an accident. Press F5 or E to restart.");
    }
    
}
