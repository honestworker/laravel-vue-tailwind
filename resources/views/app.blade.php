<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">

        <title>{{ env('APP_TITLE', 'Laravel') }} - {{ env('APP_NAME', 'Website') }}</title>
        <meta name="description" content="{{ env('APP_DESCRIPTION', 'Description') }}">
        <meta name="keywords" content="{{ env('APP_KEYWORDS', 'Keywords') }}">
        <meta name="author" content="{{ env('APP_AUTHOR', 'Keywords') }}">

        <meta name="csrf-token" content="{{ csrf_token() }}">
        <script> window.Laravel = { csrfToken: 'csrf_token() ' } </script>

        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css">
        <link rel="stylesheet" href="/css/app.css">
    </head>
    <body>
        <div id="app" class="leading-normal tracking-normal text-white gradient">
            <nav-bar-component></nav-bar-component>
            <router-view></router-view>
        </div>

        <script src="/js/app.js"></script>
    </body>
</html>
