<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="env" content="{{ App::environment() }}">
        <meta name="token" content="{{ Session::token() }}">

        <title>One Rockwell Full Stack Challenge</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- CSS -->
        <link href = "/css/app.css" rel="stylesheet" type="text/css">

        <!--Project CSS, located in /public/css/react.css-->
        <link href = "/css/react.css" rel="stylesheet" type="text/css">

    </head>
    <body>
        <!--Source Code located in /resourves/assets/js/Header.js-->
        <div id ="header">
          <div>
           <p id = "songTitle">
             University Place
           </p>

           <a id = "artistName" href = "https://soundcloud.com/thedeadnebula" target="_blank">
             produced by Dead Nebula
           </a>

           <p id = "artistBio">
             Gary Sapozhnikov, known by the stage name Dead Nebula,
             is an American record producer, songwriter, and studio guitarist
             from Brooklyn, New York.
           </p>
         </div>
        </div>

        <!--Source Code located in /resources/assets/js/Example.js-->
        <div id ="player"></div>

        <script src ="/js/app.js"></script>
    </body>
</html>
