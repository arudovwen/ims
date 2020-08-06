<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="theme-color" content="#006600" />
        <meta name="description" content="Welcome to Imo State Ministry of Education,'Education in Imo State as a new face'" />
        <meta name="keywords" content="Imo state, Education, Ministry,IMSU,SEMB,EPayment, Appointment" />
        <meta name="og:title" content="Imo State Ministry of Education" />
        <meta name="og:description" content="Imo ministry of education" />
        <meta name="og:url" content="http://ministryofeducation.im.gov.ng" />
        <meta name="og:image" content="/images/logo.jpg" />


        <title>IMO STATE MINISTRY OF EDUCATION</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        {{-- <link rel="stylesheet" href="https://unpkg.com/@popperjs/core@2"> --}} 
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
        <link  href="{{asset('css/app.css')}}" type="text/css" rel="stylesheet">
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon">
        

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }

            .fade-enter-active, .fade-leave-active {
                transition-property: opacity;
                transition-duration: .25s;
            }
            
            .fade-enter-active {
                transition-delay: .25s;
            }
            
            .fade-enter, .fade-leave-active {
                opacity: 0
            }
        </style>
    </head>
    <body>
        
            <div id="app">
                
                <router-view transition="fade"></router-view>
           
        </div>

        <script  src="{{asset('js/manifest.js')}}"  defer></script>
        <script  src="{{asset('js/vendor.js')}}" defer></script>
        <script  src="{{asset('js/app.js')}}" defer> </script>
       <script src="https://kit.fontawesome.com/51185f46ed.js" defer></script>

    </body>
</html>
