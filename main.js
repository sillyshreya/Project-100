var SpeechRecongition = window.webkitSpeechRecongition;
var recongition =" new SpeechRecongition()";
var Webcam;
var Content;
function captureStart() {
    recongition.start();

}
recongition.onresult = function (event) {
    console.log(event);

    var content = event.results[0][0].transcript;
console.log(content);
    if(content== "selfie") {
        speak();
    }
}
camera = document.getElementById("camera");
webcam.set({
    width:550,
    height:420,
    image_format:'jpeg',
    jpeg_quality:90,
})
function speak() {
    var synth = window.speachSynthesis;
 Webcam.attach(camera);
 speak_data = "Taking your next Selfie in 5 seconds";
 var utterThis = new SpeechSynthesisUtterance(speak_data);
 synth.speak(utterThis);

 setTimeout(function() {
    img_id = "selfie1";
    speak_data = "Taking your next Selfie in 10 seconds;"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
 synth.speak(utterThis);
 },5000)
 setTimeout(function() {
    img_id = "selfie2";
    speak_data = "Taking your next Selfie in 15 seconds;"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
 synth.speak(utterThis);
 },10000)
 setTimeout(function() {
    img_id = "selfie3";
  take_snapshot();
 },15000)
}
webcam.attach(camera);
function take_snapshot() {
    console.log(img_id);
    webcam.snap(function(data_url){
        if(img_id=="selfie1") {
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="' + data_uri + '"/>';}
            if(img_id=="selfie2") {
                document.getElementById("result2").innerHTML = '<img id="selfie2" src="' + data_uri + '"/>';}
                if(img_id=="selfie3") {
                    document.getElementById("result3").innerHTML = '<img id="selfie3" src="' + data_uri + '"/>';   }    
            }

        );
}