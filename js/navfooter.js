// ============   NAVBAR & FOOTER   ====================

let footer = document.getElementById("footer");
let navbar = document.getElementById("navbar");

window.addEventListener("load", function (event) {
    event.preventDefault();

    navbar.insertAdjacentHTML("beforeend",
    `
    <nav class="navbar navbar-expand-lg custom-navbar">

            <div class="container-fluid ">
                <a class="navbar-brand " href="./index.html"><img src="./src/img/logos/kotomitl2.png" width="80rem" alt="Kotomitl"></a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="true"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarsExample05">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="./index.html">Inicio</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                aria-expanded="false">Productos</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="./productos.html">Hombres</a></li>
                                <li><a class="dropdown-item" href="./productos.html">Mujeres</a></li>
                                <li><a class="dropdown-item" href="./productos.html">Niños</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./nosotros.html">Nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./contacto.html">Contacto</a>
                        </li>
                        <li class="nav-item especial">
                            <a class="nav-link" href="./perfil.html">Perfil</a>
                        </li>
                        <li class="nav-item especial">
                            <a class="nav-link" href="./carrito.html">Carrito</a>
                        </li>
                        <li class="nav-item especial">
                            <a class="nav-link" href="./favoritos.html">Favoritos</a>
                        </li>
                        <li class="nav-item especial">
                            <input type="text" class="form-control" id="nameInput" placeholder="Buscar... " value=""
                                required>
                            <!-- <a class="nav-link" href="#"><img src="./src/img/logos/iconoBusqueda.png"
                                    alt="iconoBusqueda" width="40px" height="40px"></a> -->
                        </li>
                    </ul>
                    <div class="iconoSuperior media">
                        <ul class="d-flex list-unstyled me-auto mb-2 mb-lg-0">
                            
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i class="bi bi-search nav--icon"></i>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="./perfil.html">
                                    <i class="bi bi-person-circle nav--icon"></i>
                                </a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link" href="./favoritos.html">
                                    <i class="bi bi-heart-fill nav--icon"></i>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="./carrito.html">
                                    <i class="bi bi-cart-fill nav--icon"></i>
                                </a>
                            </li>

                            <li class="nav-item precio">
                                <a class="nav-link" href="#">0.00 MXN</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    `);
    
    footer.insertAdjacentHTML("beforeend",
    `
        <ul class="list-unstyled d-flex">
            <li>
                <a href="#">
                    <img id="facebookLogo" src="./src/img/logos/facebookLogo.png" alt="facebookLogo">
                </a>
            </li>
            <li>
                <a href="#">
                    <img id="twitterLogo" src="./src/img/logos/twitterLogo.png" alt="twitterLogo">
                </a>
            </li>
            <li>
                <a href="#">
                    <img id="instagramLogo" src="./src/img/logos/instagramLogo.png" alt="instagramlogo">
                </a>
            </li>
        </ul>
    `
    );

});// window load{}
