<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="{{ asset('js/functions.js') }}" ></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div id="app">
        <nav>
            @guest
            <a href="{{ route('login') }}">{{ __('Login') }}</a>
            @if (Route::has('register'))
            <a href="{{ route('register') }}">{{ __('Register') }}</a>
            @endif
            @else
            <a href="personaggi">Miei Personaggi</a>
            <a href="comics">Miei Comics</a>
            <a href="personaggiMarvel">Lista Personaggi</a>
            <a href="comicsMarvel">Lista Comics</a>
            <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                {{ __('Logout') }}
            </a>
            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
            </form>
            @endguest

        </nav>

        <main class="py-4">
            @yield('content')
        </main>
    </div>
</body>

</html>
