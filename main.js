var nosex = 0;
var nosey = 0;
var difference=0
var left_wrist_x=0
var right_wrist_x=0

function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 500);
  canvas.position(560, 150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function modelLoaded() {
  console.log("Model is Loaded");
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;

    console.log("nosex: "+nosex);
    console.log("nosey: "+nosey);

    left_wrist_x=results[0].pose.leftWrist.x;
    right_wrist_x=results[0].pose.rightWrist.x;

 difference= floor(left_wrist_x-right_wrist_x);

 console.log("left Wrist: "+left_wrist_x+", right Wrist: "+right_wrist_x+", Difference: "+ difference); 


  }
}

function draw() {
  background("#c2edec");
  textSize(difference);
  fill("#6C91C2")
  text("Diya",50,400);
  document.getElementById("font_size").innerHTML= "Font Size is: "+ difference + "px"
}

function preload() {

}
