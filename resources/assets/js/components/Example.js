import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AudioPlayer extends Component {
    render() {
        return (
          <div id="content">

            <canvas id="canvas"></canvas>

            <audio id="audio" controls controlsList="nodownload">
              <source src="mysong.mp3" type="audio/mpeg"></source>
              <source src="mysong.ogg" type="audio/ogg"></source>
              Your browser does not support the audio element.
            </audio>
          </div>
        );
    }

    componentDidMount() {
      window.onload = function() {

        //Declare Audio Element
        var audio = document.getElementById("audio");
        audio.load();

        //Declare AudioContext Interface
        var context = new AudioContext();
        var src = context.createMediaElementSource(audio);
        var analyser = context.createAnalyser();

        //Define Canvas Dimensions
        var canvas = document.getElementById("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var WIDTH = canvas.width;
        var HEIGHT = canvas.height / 2;

        //Define 2D Rendering Context
        var ctx = canvas.getContext("2d");

        //Connect Visual Components
        src.connect(analyser);
        analyser.connect(context.destination);
        analyser.fftSize = 256;

        //Calculate Buffer Length Property
        var bufferLength = analyser.frequencyBinCount - 20;
        console.log(bufferLength);
        var dataArray = new Uint8Array(bufferLength);

        //Declare Visual Component Dimensions
        var barWidth = (WIDTH / bufferLength) * 2.5;
        var barHeight;
        var x = 0;

        //Mount Visuals to Canvas on Play
        function renderFrame() {

          //Instantiate Animation Frame
          requestAnimationFrame(renderFrame);

          //Anchor Visual Components to Axis
          x = 0;

          //Instantiate Frequency with Bufferlength
          analyser.getByteFrequencyData(dataArray);

          //Define Canvas Color and Canvas Dimensions
          ctx.fillStyle = "#191919";
          ctx.fillRect(0, 0, WIDTH, HEIGHT);

          //Define Rectangle for each Buffer in Track
          for (var i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i];

            //Define RGB Color Palette for Rectangles
            var r = barHeight + (100 * (i/bufferLength));
            var g = 100 * (i/bufferLength);
            var b = 100;

            //Render Rectangle/Bar for each buffer
            ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
            ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

            x += barWidth + 1;
          }
        }

        //audio.play();
        renderFrame();
      };
    };
  };




if (document.getElementById('player')) {
    ReactDOM.render(<AudioPlayer />, document.getElementById('player'));
}
