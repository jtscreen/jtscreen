let i = 0;

photoArray = [
    "../prodPhotos/indecent1.JPEG",
    "../prodPhotos/indecent2.JPEG",
    "../prodPhotos/indecent3.JPEG",
    "../prodPhotos/indecent4.JPEG",
    "../prodPhotos/home1.PNG",
    "../prodPhotos/msbap1.JPEG",
    "../prodPhotos/msbap2.JPEG",
    "../prodPhotos/virgin1.JPG",
    "../prodPhotos/maine1.JPG"
]

function next(){
    if (i == photoArray.length-1){
        $("#prodPhoto").fadeOut(500,function (){
            i = 0;
            $("#prodPhoto").attr("src", photoArray[i]);
            $("#prodPhoto").fadeIn(500);
        })
    } else {
        $("#prodPhoto").fadeOut(500,function (){
            i++;
            $("#prodPhoto").attr("src", photoArray[i]);
            $("#prodPhoto").fadeIn(500);
        })
    }
}

function prev(){
    if (i == 0){
        $("#prodPhoto").fadeOut(500,function (){
            i = photoArray.length -1;
            $("#prodPhoto").attr("src", photoArray[i]);
            $("#prodPhoto").fadeIn(500);
        })
    } else {
        $("#prodPhoto").fadeOut(500,function (){
            i--;
            $("#prodPhoto").attr("src", photoArray[i]);
            $("#prodPhoto").fadeIn(500);
        })
    }
}