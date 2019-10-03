<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>
    <link href="{{asset('/css/app.css')}}" rel="stylesheet" type="text/css">
    @include('back_end.inc.header')
</head>
<body id="page-top">

<div id="wrapper">
    @include('sidebar')

    <div class="d-flex flex-column" id="content-wrapper">

        <div id="content">
        @include('back_end.inc.side-nav')

            <div class="container">
                <div id="app">
                    <clients-component></clients-component>
                </div>
            </div>

            @include('back_end.inc.modal')

            <footer class="bg-white sticky-footer">
                <div class="container my-auto">
                    <div class="text-center my-auto copyright"><span>Copyright © Cars Center&nbsp;</span></div>
                </div>
            </footer>

        </div>
    </div>
</div>
<script src="{{asset('/js/app.js')}}"></script>
@include('back_end.inc.footer')
</body>
</html>
