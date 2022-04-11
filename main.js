song = "";
leftwristX = 0;
leftwristY = 0;
rightWistX = 0;
rightWistY = 0;
function preload() {
    song = loadSound("music.mp3");
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
-
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}
function modelLoaded() {
    console.log('PoseNet Is Initialzed');
}
function gotPose(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);
        
        leftwristX = results[0].pose.leftwrist.x;
        leftwristY = results[0].pose.leftwrist.y;
        console.log("leftWristX = " + leftwristX +"leftwristY = "+ leftwristY);

        rightWistX = results[0].pose.rightWist.x;
        rightWistY = results[0].pose.rightWist.y;
        console.log("rightWristX = " + rightWistX +"rightwristY"+ rightWistY);
    }
}
function draw(){
    Image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("#FF0000");

    if(scoreLeftWrist > 0.2)
    {
        circle(leftwristX, leftwristY,20);
    InNumberleftWristY = Number(leftwristY);
    remove_decimals = floor(InNumberleftWristY);
    leftwristY_divide_1000 = remove_decimals/1000;
    volume = leftwristY_divide_1000 *2 ;
    document.getElementById("volume").innerHTML = "Volume =" + Volume;
    song.setvolume(volume);

    }
}

function play() {
    song.play();
    song.setvolume(1);
    song.rate(1);
}