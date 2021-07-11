Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
   });
   
   camera = document.getElementById("camera");
   
   Webcam.attach('#camera');
   
   function take_snapshot()
   {
       Webcam.snap(function(data_url) {
       document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_url+'"/>'
       });
   }
   
   console.log('ml5 version:', ml5.version);
   
   classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/lP0EGZmte/',modelLoaded);
   
   function modelLoaded(){
       console.log("modelLoaded");
   }

   function check(){

    img = document.getElementById("capture_image");
    classifier.classify(img ,gotResults);

        }

        function gotResults(error ,results) {
            if (error)  {
                Console.error(error);
            } else {
                console.log(results);
                document.getElementById("result_Family_name").innerHTML = results[0].label;
                document.getElementById("result_Family_accuracy").innerHTML = results[0].confidence.toFixed(3);
            }
        }