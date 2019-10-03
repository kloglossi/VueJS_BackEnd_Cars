<nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
    <div class="container-fluid d-flex flex-column p-0">
        <a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
            <div class="sidebar-brand-icon rotate-n-15"><i class="fas fa-grip-horizontal"></i></div>
            <div class="sidebar-brand-text mx-3"><span>Cars Center</span></div>
        </a>
        <hr class="sidebar-divider my-0">
        <ul class="nav navbar-nav text-light" id="accordionSidebar">
            <li class="nav-item" role="presentation"><a class="nav-link" href="{{route('dash')}}"><i class="fas fa-tachometer-alt"></i><span>Dashboard</span></a></li>
        </ul>
        <ul class="nav navbar-nav text-light" id="">
            <li class="nav-item" role="presentation">

                <a class="nav-link" href="{{route('b-client')}}">
                    <i class="fas fa-user-tie"></i>
                    <span>Clients</span>
                </a>

                <a class="nav-link" href="{{route('b-contrat')}}">
                    <i class="fab fa-cc-amazon-pay"></i>
                    <span>Contrats</span>
                </a>

                <a class="nav-link" href="clients.html">
                    <i class="fas fa-user"></i>
                    <span>Utilisateurs</span>
                </a>

                <a class="nav-link" href="{{route('b-voiture')}}">
                    <i class="fas fa-car-side"></i>
                    <span>Voitures</span>
                </a>

            </li>
        </ul>
        <div class="text-center d-none d-md-inline"><button class="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
    </div>
</nav>