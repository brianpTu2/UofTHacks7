
const { exec } = require("child_process");
var x = 1;

function deletelib(libname){
    exec("aws2 rekognition delete-collection \
         --collection-id \""+libname+"\"", (error, stdout, stderr) => {
        console.log("Deleting Old Collection..." + libname)
        console.log(stdout)
    });
}

function newlib(libname){
    exec("aws2 rekognition create-collection \
         --collection-id \""+libname +"\"", (error, stdout, stderr) => {
        console.log("Made new Collection!..." + libname)
        console.log(stdout)
    });
}

function thingout(libname){
    exec("aws2 rekognition list-faces \
         --collection-id 'ass'", (error, stdout, stderr) => {
        console.log("Printing Out thing...")
        console.log(`stdout: ${stdout}`)
    });
}

function addperson(img, id){
    exec("aws2 rekognition index-faces \
      --image '{\"S3Object\":{\"Bucket\":\"image1213\",\"Name\":\""+img+"\"}}' \
      --collection-id \"ass\" \
      --max-faces 1 \
      --quality-filter \"AUTO\" \
      --detection-attributes \"ALL\" \
      --external-image-id "+ id, (error, stdout, stderr) => {
        console.log("Added Person: " + id +", With path \"" +img +"\"");
    });
}

function foundq(string){
    console.log("SUCK PP");
    
}

function phototake(name){
    
    deletelib("ass");
    setTimeout(function () {
        newlib("ass");
    }, 2000); 
    setTimeout(function () {
        thingout("nah");
    }, 4000);
    
    
    
    setTimeout(function () {
        addperson("elon1.jpeg", "e1");
    }, 6000);
    setTimeout(function () {
        addperson("elon2.jpeg", "e2");
    }, 6000);
    setTimeout(function () {
        addperson("gram1.jpg", "g1");
    }, 6000);
    
    
    setTimeout(function () {
        thingout("nah");
    }, 13000);
    
}

function mostlike(img){
    exec("aws2 rekognition search-faces-by-image \
    --image '{\"S3Object\":{\"Bucket\":\"image1213\",\"Name\":\""+ img +"\"}}' \
    --collection-id \"ass\"", (error, stdout, stderr) => {
        foundq(stdout);
    });
}







if (x == 0){
    exec("aws2 rekognition create-collection \
        --collection-id 'new'", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}   else if (x == 2){
    exec("aws2 rekognition search-faces-by-image \
    --image '{\"S3Object\":{\"Bucket\":\"image1213\",\"Name\":\"IMG_6039.jpg\"}}' \
    --collection-id \"shit\"", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
} else if (x == 3){
    var namen = "robbie";
    exec("aws2 rekognition index-faces \
      --image '{\"S3Object\":{\"Bucket\":\"image1213\",\"Name\":\"a.jpg\"}}' \
      --collection-id \"ass\" \
      --max-faces 1 \
      --quality-filter \"AUTO\" \
      --detection-attributes \"ALL\" \
      --external-image-id "+ namen, (error, thing, stderr) => {
        
        
    });
} 

mostlike("k.jpg");
