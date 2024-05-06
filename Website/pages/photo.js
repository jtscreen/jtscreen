let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;
let g = 0;

const headshotArray = [
    "../workImg/headshot/arden1.jpg",
    "../workImg/headshot/arden2.jpg",
    "../workImg/headshot/aja1.jpg",
    "../workImg/headshot/evan1.jpg",
    "../workImg/headshot/huy1.jpg",
    "../workImg/headshot/huy2.jpg",
    "../workImg/headshot/Laurel1.jpg",
    "../workImg/headshot/Laurel2.jpg",
    "../workImg/headshot/Laurel3.jpg",
    "../workImg/headshot/vivi1.jpg"
]

const portraitArray = [
    "../workImg/portrait/julie4.jpg",
    "../workImg/portrait/julie1.jpg",
    "../workImg/portrait/julie2.jpg",
    "../workImg/portrait/julie3.jpg",
    "../workImg/portrait/julie5.jpg",
    "../workImg/portrait/anella1.jpg",
    "../workImg/portrait/anella2.jpg",
    "../workImg/portrait/anella3.jpg",
    "../workImg/portrait/anella4.jpg",
    "../workImg/portrait/Bloodshot1.jpg",
    "../workImg/portrait/Bloodshot2.jpg",
    "../workImg/portrait/Bloodshot3.jpg"
]

const production1Array = [
    "../workImg/production/godspell/godspell1.JPG",
    "../workImg/production/godspell/godspell2.JPG",
    "../workImg/production/godspell/godspell3.JPG",
    "../workImg/production/godspell/godspell4.JPG",
    "../workImg/production/godspell/godspell5.JPG",
    "../workImg/production/godspell/godspell6.JPG",
    "../workImg/production/godspell/godspell7.JPG",
    "../workImg/production/godspell/godspell8.JPG",
    "../workImg/production/godspell/godspell9.JPG",
    "../workImg/production/godspell/godspell10.JPG",
    "../workImg/production/godspell/godspell11.JPG",
    "../workImg/production/godspell/godspell12.JPG",
    "../workImg/production/godspell/godspell13.JPG",
    "../workImg/production/godspell/godspell14.JPG",
    "../workImg/production/godspell/godspell15.JPG",
    "../workImg/production/godspell/godspell16.JPG",
    "../workImg/production/godspell/godspell17.JPG",
    "../workImg/production/godspell/godspell18.JPG",
    "../workImg/production/godspell/godspell19.JPG",
    "../workImg/production/godspell/godspell20.JPG",
]

const production2Array = [
    "../workImg/production/artists/artists1.JPG",
    "../workImg/production/artists/artists2.JPG",
    "../workImg/production/artists/artists3.JPG",
    "../workImg/production/artists/artists4.JPG",
    "../workImg/production/artists/artists5.JPG",
    "../workImg/production/artists/artists6.JPG",
    "../workImg/production/artists/artists7.JPG",
    "../workImg/production/artists/artists8.JPG",
    "../workImg/production/artists/artists9.JPG",
    "../workImg/production/artists/artists10.JPG",
    "../workImg/production/artists/artists11.JPG",
    "../workImg/production/artists/artists12.JPG",
    "../workImg/production/artists/artists13.JPG",
    "../workImg/production/artists/artists14.JPG",
    "../workImg/production/artists/artists15.JPG",
]

const event1Array = [
    "../workImg/event/shaddi/shaddi1.jpg",
    "../workImg/event/shaddi/shaddi2.jpg",
    "../workImg/event/shaddi/shaddi3.jpg",
    "../workImg/event/shaddi/shaddi4.jpg",
    "../workImg/event/shaddi/shaddi5.jpg",
    "../workImg/event/shaddi/shaddi6.jpg",
    "../workImg/event/shaddi/shaddi7.jpg",
    "../workImg/event/shaddi/shaddi8.jpg",
    "../workImg/event/shaddi/shaddi9.jpg",
    "../workImg/event/shaddi/shaddi10.jpg",
    "../workImg/event/shaddi/shaddi11.jpg",
    "../workImg/event/shaddi/shaddi12.jpg",
    "../workImg/event/shaddi/shaddi13.jpg",
    "../workImg/event/shaddi/shaddi14.jpg",
    "../workImg/event/shaddi/shaddi15.jpg",
    "../workImg/event/shaddi/shaddi16.jpg",
    "../workImg/event/shaddi/shaddi17.jpg",
    "../workImg/event/shaddi/shaddi18.jpg",
    "../workImg/event/shaddi/shaddi19.jpg",
    "../workImg/event/shaddi/shaddi20.jpg"
]

const event2Array = [

]

const otherArray = [
    "../workImg/other/ghost1.jpg",
    "../workImg/other/ghost2.jpg"
]

//headshot controls
function next(){
    if (a == headshotArray.length-1){
        $("#headshot").fadeOut(500,function (){
            a = 0;
            $("#headshot").attr("src", headshotArray[a]);
            $("#headshot").fadeIn(500);
        })
    } else {
        $("#headshot").fadeOut(500,function (){
            a++;
            $("#headshot").attr("src", headshotArray[a]);
            $("#headshot").fadeIn(500);
        })
    }
}
function prev(){
    if (a == 0){
        $("#headshot").fadeOut(500,function (){
            a = headshotArray.length-1;
            $("#headshot").attr("src", headshotArray[a]);
            $("#headshot").fadeIn(500);
        })
    } else {
        $("#headshot").fadeOut(500,function (){
            a--;
            $("#headshot").attr("src", headshotArray[a]);
            $("#headshot").fadeIn(500);
        })
    }
}

//portrait controls
function next1(){
    if (b == portraitArray.length-1){
        $("#portrait").fadeOut(500,function (){
            b = 0;
            $("#portrait").attr("src", portraitArray[b]);
            $("#portrait").fadeIn(500);
        })
    } else {
        $("#portrait").fadeOut(500,function (){
            b++;
            $("#portrait").attr("src", portraitArray[b]);
            $("#portrait").fadeIn(500);
        })
    }
}
function prev1(){
    if (b == 0){
        $("#portrait").fadeOut(500,function (){
            b = portraitArray.length-1;
            $("#portrait").attr("src", portraitArray[b]);
            $("#portrait").fadeIn(500);
        })
    } else {
        $("#portrait").fadeOut(500,function (){
            b--;
            $("#portrait").attr("src", portraitArray[b]);
            $("#portrait").fadeIn(500);
        })
    }
}

//production controls
function next2(){
    if ($("#production").attr("src") == production1Array[c]){
        if (c == production1Array.length-1){
            $("#production").fadeOut(500,function (){
                c = 0;
                d = 0;
                document.getElementById("title").innerHTML = "We Are Artists | Fordham Theatre Studio (Dylan Perez)";
                $("#production").attr("src", production2Array[d]);
                $("#production").fadeIn(500);
            })
        } else {
            $("#production").fadeOut(500,function (){
                c++;
                $("#production").attr("src", production1Array[c]);
                $("#production").fadeIn(500);
            })
        }
    } else if($("#production").attr("src") == production2Array[d]){
        if (d == production2Array.length-1){
            $("#production").fadeOut(500,function (){
                d = 0;
                c = 0;
                document.getElementById("title").innerHTML = "Godspell | Fordham University Splinter";
                $("#production").attr("src", production1Array[c]);
                $("#production").fadeIn(500);
            })
        } else {
            $("#production").fadeOut(500,function (){
                d++;
                $("#production").attr("src", production2Array[d]);
                $("#production").fadeIn(500);
            })
        }
    }
}
function prev2(){
    console.log("beginning: " + $("#production").attr("src"));
    if ($("#production").attr("src") == production1Array[c]){
        if (c == 0){
            $("#production").fadeOut(500,function (){
                c = production1Array.length-1;
                d = production2Array.length-1;
                document.getElementById("title").innerHTML = "We Are Artists | Fordham Theatre Studio (Dylan Perez)";
                $("#production").attr("src", production2Array[d]);
                $("#production").fadeIn(500);
            })
        } else {
            $("#production").fadeOut(500,function (){
                c--;
                $("#production").attr("src", production1Array[c]);
                $("#production").fadeIn(500);
            })
        }
    } else if($("#production").attr("src") == production2Array[d]){
        if (d == 0){
            $("#production").fadeOut(500,function (){
                d = production2Array.length-1;
                c = production1Array.length-1;
                document.getElementById("title").innerHTML = "Godspell | Fordham University Splinter";
                $("#production").attr("src", production1Array[c]);
                $("#production").fadeIn(500);
            })
        } else {
            $("#production").fadeOut(500,function (){
                d--;
                $("#production").attr("src", production2Array[d]);
                $("#production").fadeIn(500);
            })
        }
    }
}

//event controls
function next3(){
    if (e == event1Array.length-1){
        $("#event").fadeOut(500,function (){
            e = 0;
            $("#event").attr("src", event1Array[e]);
            $("#event").fadeIn(500);
        })
    } else {
        $("#event").fadeOut(500,function (){
            e++;
            $("#event").attr("src", event1Array[e]);
            $("#event").fadeIn(500);
        })
    }
}
function prev3(){
    if (e == 0){
        $("#event").fadeOut(500,function (){
            e = event1Array.length-1;
            $("#event").attr("src", event1Array[e]);
            $("#event").fadeIn(500);
        })
    } else {
        $("#event").fadeOut(500,function (){
            e--;
            $("#event").attr("src", event1Array[e]);
            $("#event").fadeIn(500);
        })
    }
}