songbp = "";
songhp = "";
leftWristY= "";
leftWristX="";
rightWristX="";
rightWristY="";

function preload(){
songbp = loadSound("Blackpink DKWTD.mp3");
songhp = loadSound("hedwig theme.mp3");
}

function setup() {
canvas = createCanvas(600, 500);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log("Model is loaded yay!");
}

function draw() {
image(video, 0, 0, 600, 500);
}

function play() {
song.play();
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
scoreRightWrist = results[0].pose.keypoints[10].score;
scoreLeftWrist = results[0].pose.keypoints[9].score;

rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("rightWristX = " + rightWristX + "rightWrist = " + rightWristY);

leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
console.log("leftWristX = " + leftWristX + "leftWristY = "+ leftWristY);
}
}
