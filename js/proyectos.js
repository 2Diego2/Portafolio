// ============ DATOS DE PROYECTOS ============
const datosProyectos = [
    {
        id: 1,
        titulo: "CROMBIEVERSARIO",
        descripcionCorta: "Plataforma full-stack para automatización de mensajes de aniversario corporativo",
        descripcion: "Crombieversario Automático es una plataforma full-stack que integra datos de empleados desde PeopleForce API, genera mensajes personalizados con imágenes almacenadas en AWS S3, y administra el historial de envíos y errores mediante MongoDB. El sistema ahorra tiempo al área de marketing y mejora la experiencia de los colaboradores.",
        tecnologias: ["./assets/react-js-icon.png", "./assets/node-js-icon.png", "./assets/mongodb-icon.png"],
        tecnologiasNombres: ["React", "Node.js", "MongoDB"],
        imagen: "../assets/Crombieversario.png",
        imagenes: ["../assets/Crombieversario.png"],
        estado: "En Producción",
        estadoColor: "#ffffff",
        duracion: "4 meses",
        rol: "Full Stack Developer",
        equipo: "2 personas",
        githubUrl: "#",
        demoUrl: "#",
        caracteristicas: [
            "Integración con PeopleForce API",
            "Almacenamiento en AWS S3",
            "Gestión de historial con MongoDB",
            "Mensajes personalizados automáticos"
        ]
    },
    {
        id: 2,
        titulo: "CROMBIE JUEGOS",
        descripcionCorta: "Plataforma interactiva de trivia con ruleta virtual para eventos de marketing",
        descripcion: "Crombie Juegos es una plataforma interactiva de juego de trivia diseñada para activaciones de marca y eventos de marketing. El sistema combina una ruleta virtual con preguntas de trivia, permitiendo a los participantes ganar premios basados en sus conocimientos. Incluye un panel administrativo completo para gestionar preguntas, categorías y premios, con almacenamiento automático de datos de participantes en Google Sheets y hosting de imágenes en Google Drive.",
        tecnologias: ["./assets/react-js-icon.png", "./assets/node-js-icon.png"],
        tecnologiasNombres: ["React", "Node.js"],
        imagen: "../assets/Diagrama_de_flujo_Crombie_Juegos.png",
        imagenes: ["../assets/Diagrama_de_flujo_Crombie_Juegos.png"],
        estado: "En Producción",
        estadoColor: "#ffffff",
        duracion: "1 mes",
        rol: "Full Stack Developer",
        equipo: "5 personas",
        githubUrl: "#",
        demoUrl: "#",
        caracteristicas: [
            "Ruleta virtual interactiva",
            "Sistema de trivia con categorías",
            "Panel administrativo completo",
            "Integración con Google Sheets",
            "Gestión de premios y participantes"
        ]
    },
    {
        id: 3,
        titulo: "E-COMMERCE GLOVVE",
        descripcionCorta: "REST API completa para plataforma de comercio electrónico",
        descripcion: "Es una plataforma backend REST API que proporciona funcionalidad completa para comercio electrónico. El sistema gestiona catálogo de productos con variantes de inventario (talla/stock), autenticación de usuarios con roles, carritos de compra persistentes, y procesamiento de órdenes con flujo de aprobación manual por administradores.",
        tecnologias: ["./assets/react-js-icon.png", "./assets/node-js-icon.png", "./assets/mongodb-icon.png"],
        tecnologiasNombres: ["React", "Node.js", "MongoDB"],
        imagen: "../assets/screencapture-localhost-3000-2026-01-19-13_47_36.png",
        imagenes: ["../assets/screencapture-localhost-3000-2026-01-19-13_47_36.png"],
        estado: "En Desarrollo",
        estadoColor: "#d0d0d0",
        duracion: "6 meses",
        rol: "Full Stack Developer",
        equipo: "1 persona",
        githubUrl: "#",
        demoUrl: "#",
        caracteristicas: [
            "Gestión de inventario por variantes",
            "Autenticación con roles",
            "Carritos persistentes",
            "Sistema de órdenes",
            "Panel de administración"
        ]
    },
    {
        id: 4,
        titulo: "RENDIX",
        descripcionCorta: "Sistema de gestión integral para tiendas de ropa",
        descripcion: "Rendix es una aplicación web para tiendas de ropa que centraliza ventas, gastos y liquidación de sueldos. Automatiza cálculos, muestra KPIs en tiempo real y genera reportes visuales, ayudando a los dueños a optimizar la rentabilidad, reducir errores y ahorrar tiempo en procesos operativos.",
        tecnologias: ["./assets/react-js-icon.png", "./assets/node-js-icon.png", "./assets/postgresql-icon.webp"],
        tecnologiasNombres: ["React", "Node.js", "PostgreSQL"],
        imagen: "../assets/screencapture-localhost-5173-2026-01-19-13_45_45.png",
        imagenes: ["../assets/screencapture-localhost-5173-2026-01-19-13_45_45.png"],
        estado: "Proyecto Personal",
        estadoColor: "#ffffffff",
        duracion: "5 meses",
        rol: "Full Stack Developer",
        equipo: "2 persona",
        githubUrl: "#",
        demoUrl: "#",
        caracteristicas: [
            "Gestión de ventas y gastos",
            "Liquidación automática de sueldos",
            "KPIs en tiempo real",
            "Reportes visuales",
            "Dashboard analítico"
        ]
    }
];

// ============ FUNCIÓN PARA CREAR TARJETA DE PROYECTO ============
function crearTarjetaProyecto(proyecto) {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta-proyecto';
    tarjeta.setAttribute('data-proyecto-id', proyecto.id);
    
    // Agregar atributos de tecnologías para filtrado
    const techNames = proyecto.tecnologiasNombres.join(',').toLowerCase();
    tarjeta.setAttribute('data-tecnologias', techNames);
    
    const tecnologiasHTML = proyecto.tecnologias
        .map((tech, index) => `
            <div class="logo-tech-wrapper" title="${proyecto.tecnologiasNombres[index]}">
                <img src="${tech}" alt="${proyecto.tecnologiasNombres[index]}" class="logo-tech">
            </div>
        `)
        .join('');
    
    tarjeta.innerHTML = `
        <div class="imagen-proyecto">
            <img src="${proyecto.imagen}" alt="${proyecto.titulo}" class="preview-imagen">
            <div class="overlay-imagen">
                <i class="fas fa-search-plus"></i>
                <span>Ver detalles</span>
            </div>
            <span class="badge-estado" style="background-color: ${proyecto.estadoColor}">
                ${proyecto.estado}
            </span>
        </div>
        <div class="contenido-proyecto">
            <h3>${proyecto.titulo}</h3>
            <p class="descripcion-corta">${proyecto.descripcionCorta}</p>
            <div class="info-proyecto">
                <div class="logos-tech">
                    ${tecnologiasHTML}
                </div>
            </div>
            <div class="metricas-proyecto">
                <div class="metrica">
                    <i class="fas fa-clock"></i>
                    <span>${proyecto.duracion}</span>
                </div>
                <div class="metrica">
                    <i class="fas fa-user"></i>
                    <span>${proyecto.rol}</span>
                </div>
            </div>
            <div class="botones-proyecto">
                <button class="boton-proyecto principal" onclick="abrirModal(${proyecto.id})">
                    <i class="fas fa-info-circle"></i> Ver más
                </button>
                ${proyecto.githubUrl !== '#' ? `
                    <a href="${proyecto.githubUrl}" target="_blank" class="boton-proyecto secundario" onclick="event.stopPropagation()">
                        <i class="fab fa-github"></i>
                    </a>
                ` : ''}
                ${proyecto.demoUrl !== '#' ? `
                    <a href="${proyecto.demoUrl}" target="_blank" class="boton-proyecto secundario" onclick="event.stopPropagation()">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                ` : ''}
            </div>
        </div>
    `;
    
    // Agregar evento de clic para abrir modal
    tarjeta.addEventListener('click', (e) => {
        if (!e.target.closest('.boton-proyecto')) {
            abrirModal(proyecto.id);
        }
    });
    
    return tarjeta;
}

// ============ FUNCIÓN PARA RENDERIZAR PROYECTOS ============
function renderizarProyectos() {
    const contenedor = document.getElementById('contenedorProyectos');
    
    if (!contenedor) {
        console.error('No se encontró el contenedor de proyectos');
        return;
    }
    
    // Limpiar contenedor
    contenedor.innerHTML = '';
    
    // Agregar cada proyecto
    datosProyectos.forEach(proyecto => {
        const tarjeta = crearTarjetaProyecto(proyecto);
        contenedor.appendChild(tarjeta);
    });
    
    console.log(`✓ ${datosProyectos.length} proyectos cargados exitosamente`);
}

// ============ SISTEMA DE FILTROS ============
let filtroActivo = 'todos';

function filtrarProyectos(tecnologia) {
    filtroActivo = tecnologia;
    const tarjetas = document.querySelectorAll('.tarjeta-proyecto');
    
    tarjetas.forEach(tarjeta => {
        const tecnologias = tarjeta.getAttribute('data-tecnologias');
        
        if (tecnologia === 'todos' || tecnologias.includes(tecnologia.toLowerCase())) {
            tarjeta.style.display = 'flex';
            tarjeta.style.animation = 'aparecerTarjeta 0.6s ease-out forwards';
        } else {
            tarjeta.style.display = 'none';
        }
    });
    
    // Actualizar botones de filtro
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.classList.remove('activo');
    });
    document.querySelector(`[data-filtro="${tecnologia}"]`)?.classList.add('activo');
}

// ============ SISTEMA DE MODAL ============
function abrirModal(proyectoId) {
    const proyecto = datosProyectos.find(p => p.id === proyectoId);
    if (!proyecto) return;
    
    const modal = document.getElementById('modalProyecto');
    if (!modal) {
        crearModal();
        setTimeout(() => abrirModal(proyectoId), 100);
        return;
    }
    
    // Generar HTML de características
    const caracteristicasHTML = proyecto.caracteristicas
        .map(car => `<li><i class="fas fa-check-circle"></i> ${car}</li>`)
        .join('');
    
    // Generar HTML de tecnologías
    const tecnologiasHTML = proyecto.tecnologias
        .map((tech, index) => `
            <div class="tech-badge">
                <img src="${tech}" alt="${proyecto.tecnologiasNombres[index]}">
                <span>${proyecto.tecnologiasNombres[index]}</span>
            </div>
        `)
        .join('');
    
    // Actualizar contenido del modal
    document.getElementById('modalContenido').innerHTML = `
        <div class="modal-header">
            <div class="modal-titulo-grupo">
                <h2>${proyecto.titulo}</h2>
                <span class="badge-estado-modal" style="background-color: ${proyecto.estadoColor}">
                    ${proyecto.estado}
                </span>
            </div>
            <button class="modal-cerrar" onclick="cerrarModal()">
                <i class="fas fa-times"></i>
            </button>
        </div>
        
        <div class="modal-body">
            <div class="modal-imagen-principal">
                <img src="${proyecto.imagen}" alt="${proyecto.titulo}">
            </div>
            
            <div class="modal-info-grid">
                <div class="info-item">
                    <i class="fas fa-clock"></i>
                    <div>
                        <span class="info-label">Duración</span>
                        <span class="info-valor">${proyecto.duracion}</span>
                    </div>
                </div>
                <div class="info-item">
                    <i class="fas fa-user-tie"></i>
                    <div>
                        <span class="info-label">Rol</span>
                        <span class="info-valor">${proyecto.rol}</span>
                    </div>
                </div>
                <div class="info-item">
                    <i class="fas fa-users"></i>
                    <div>
                        <span class="info-label">Equipo</span>
                        <span class="info-valor">${proyecto.equipo}</span>
                    </div>
                </div>
            </div>
            
            <div class="modal-seccion">
                <h3><i class="fas fa-align-left"></i> Descripción</h3>
                <p>${proyecto.descripcion}</p>
            </div>
            
            <div class="modal-seccion">
                <h3><i class="fas fa-star"></i> Características Principales</h3>
                <ul class="caracteristicas-lista">
                    ${caracteristicasHTML}
                </ul>
            </div>
            
            <div class="modal-seccion">
                <h3><i class="fas fa-code"></i> Tecnologías Utilizadas</h3>
                <div class="tecnologias-grid">
                    ${tecnologiasHTML}
                </div>
            </div>
            
            <div class="modal-acciones">
                ${proyecto.githubUrl !== '#' ? `
                    <a href="${proyecto.githubUrl}" target="_blank" class="boton-modal github">
                        <i class="fab fa-github"></i> Ver en GitHub
                    </a>
                ` : ''}
                ${proyecto.demoUrl !== '#' ? `
                    <a href="${proyecto.demoUrl}" target="_blank" class="boton-modal demo">
                        <i class="fas fa-external-link-alt"></i> Ver Demo
                    </a>
                ` : ''}
            </div>
        </div>
    `;
    
    modal.classList.add('activo');
    document.body.style.overflow = 'hidden';
}

function cerrarModal() {
    const modal = document.getElementById('modalProyecto');
    modal.classList.remove('activo');
    document.body.style.overflow = '';
}

function crearModal() {
    const modalHTML = `
        <div id="modalProyecto" class="modal-proyecto">
            <div class="modal-overlay" onclick="cerrarModal()"></div>
            <div class="modal-contenedor">
                <div id="modalContenido"></div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Cerrar con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') cerrarModal();
    });
}

// ============ CREAR BARRA DE FILTROS ============
function crearBarraFiltros() {
    const seccionProyectos = document.getElementById('proyectos');
    const titulo = seccionProyectos.querySelector('.section-title');
    
    const filtrosHTML = `
        <div class="filtros-container">
            <button class="filtro-btn activo" data-filtro="todos" onclick="filtrarProyectos('todos')">
                <i class="fas fa-th"></i> Todos
            </button>
            <button class="filtro-btn" data-filtro="react" onclick="filtrarProyectos('react')">
                <i class="fab fa-react"></i> React
            </button>
            <button class="filtro-btn" data-filtro="node.js" onclick="filtrarProyectos('node.js')">
                <i class="fab fa-node-js"></i> Node.js
            </button>
            <button class="filtro-btn" data-filtro="mongodb" onclick="filtrarProyectos('mongodb')">
                <img src="./assets/mongodb-icon.png" alt="MongoDB"> MongoDB
            </button>
            <button class="filtro-btn" data-filtro="postgresql" onclick="filtrarProyectos('postgresql')">
                <img src="./assets/postgresql-icon.webp" alt="PostgreSQL"> PostgreSQL
            </button>
        </div>
    `;
    
    titulo.insertAdjacentHTML('afterend', filtrosHTML);
}

// ============ EJECUTAR AL CARGAR LA PÁGINA ============
document.addEventListener('DOMContentLoaded', () => {
    renderizarProyectos();
    crearBarraFiltros();
    crearModal();
});
