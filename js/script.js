
// CLASE PELICULA (Modelo de datos)
class Pelicula {
  constructor(id, nombre, descripcion, tipo, horario, precio, imagenUrl) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.tipo = tipo;
    this.horario = horario;
    this.precio = precio;
    this.imagenUrl = imagenUrl;
  }

  getPrecioFormateado() {
    return `Q ${this.precio.toLocaleString('es-GT', { minimumFractionDigits: 2 })}`;
  }
}

// DATA DE PELÍCULAS (4 por categoría)

const peliculasData = [
  // COMEDIA
  new Pelicula(1, 'Supercool', 'Un estudiante de preparatoria intenta perder su virginidad antes de graduarse, desatando situaciones cómicas y embarazosas.', 'Comedia', '15:00, 18:30, 21:15', 45.00, 'https://static.wikia.nocookie.net/doblaje/images/6/68/Superbad2_large.jpg/revision/latest?cb=20211220092710&path-prefix=es'),
  new Pelicula(2, 'Son como niños', 'Un grupo de amigos se reúne tras la muerte de su entrenador de baloncesto de la infancia y revive su niñez con divertidas consecuencias.', 'Comedia', '14:30, 17:45, 20:30', 45.00, ''),
  new Pelicula(3, 'Una esposa de mentira', 'Un actor en decadencia finge tener una esposa para conseguir un papel importante, desencadenando enredos cómicos.', 'Comedia', '16:00, 19:15, 22:00', 45.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm2xFgDNHjARb6l0OYzBisz2XvuJzEopr4uA&s'),
  new Pelicula(4, 'Cazafantasmas', 'Cuatro científicos excéntricos inician un negocio de exterminio de fantasmas en Nueva York, combinando ciencia y humor.', 'Comedia', '13:45, 17:00, 20:15', 45.00, 'https://cinepremiere.com.mx/wp-content/uploads/2024/01/ghostbusters-peliculas-cronologia-donde-ver.jpg'),
  
  // INFANTIL
  new Pelicula(5, 'Toy Story', 'Los juguetes de Andy cobran vida cuando él no está, liderados por el vaquero Woody y el astronauta Buzz Lightyear.', 'Infantil', '10:00, 12:30, 15:00', 35.00, 'https://media.themoviedb.org/t/p/w300_and_h450_face/jvn7wy3RSNEXnFSXLpH2of2LcV6.jpg'),
  new Pelicula(6, 'Frozen', 'Una princesa valiente debe salvar su reino de un invierno eterno con la ayuda de una simpática muñeca de nieve.', 'Infantil', '11:00, 13:30, 16:00', 35.00, 'https://media.themoviedb.org/t/p/w300_and_h450_face/sGNuWC4BwqOB4l0tkbKwLy70tXC.jpg'),
  new Pelicula(7, 'Mi villano favorito', 'Un supervillano adopta tres niñas huérfanas para sus planes malvados, pero termina descubriendo el verdadero amor.', 'Infantil', '10:30, 13:00, 15:45', 35.00, 'https://media.themoviedb.org/t/p/w300_and_h450_face/AsaaPLSfisdFDeasEd9r0GiZVss.jpg'),
  new Pelicula(8, 'Buscando a Nemo', 'Un pez payaso cruza todo el océano para encontrar a su hijo perdido, en una aventura llena de emociones.', 'Infantil', '09:30, 12:00, 14:30', 35.00, 'https://m.media-amazon.com/images/S/pv-target-images/93070eaf535856645544357f3ad17c626945ec8c0f8c1b707c8fa405728447a2.jpg'),
  
  // TODO PÚBLICO
  new Pelicula(9, 'El Rey León', 'Un joven león debe aceptar su destino como rey después de la trágica muerte de su padre, una historia de amor y redención.', 'Todo Público', '11:30, 14:45, 18:00', 40.00, 'https://media.themoviedb.org/t/p/w300_and_h450_face/b0MxU37dNmMwKtoPVYPKOZSIrIn.jpg'),
  new Pelicula(10, 'Los Increíbles', 'Una familia de superhéroes debe unir fuerzas para salvar al mundo mientras lidia con una vida normal.', 'Todo Público', '12:15, 15:30, 19:00', 40.00, 'https://media.themoviedb.org/t/p/w300_and_h450_face/al1jusd4T7JPatZlj4BuYkDDOzr.jpg'),
  new Pelicula(11, 'Up', 'Un anciano viudo cumple su sueño de aventura atando miles de globos a su casa, acompañado por un niño explorador.', 'Todo Público', '10:15, 13:15, 16:30', 40.00, 'https://media.themoviedb.org/t/p/w300_and_h450_face/1N0LtzUueXrlnpL466jQBJ6iAuj.jpg'),
  new Pelicula(12, 'Ratatouille', 'Una rata sueña con convertirse en chef y logra cumplir su sueño desde la cocina de un famoso restaurante parisino.', 'Todo Público', '11:45, 14:30, 17:45', 40.00, 'https://media.themoviedb.org/t/p/w300_and_h450_face/nGUelOVetiRpY2wTBMHTbrTIGYC.jpg'),
  
  // JÓVENES Y ADULTOS
  new Pelicula(13, 'Deadpool', 'Un exmercenario convertido en antihéroe con un humor negro y habilidades de regeneración busca venganza.', 'Jóvenes y Adultos', '19:30, 21:45, 23:59', 55.00, 'https://media.themoviedb.org/t/p/w300_and_h450_face/3TUYy0XvhPQBhrXJwRIaOoYFOBO.jpg'),
  new Pelicula(14, 'John Wick', 'Un legendario asesino a sueldo sale del retiro para vengar la muerte de su perro, desatando una guerra imparable.', 'Jóvenes y Adultos', '20:00, 22:15, 00:30', 55.00, 'https://media.themoviedb.org/t/p/w300_and_h450_face/tDl5ac1VJwMRvlgINDCsDCqg9CE.jpg'),
  new Pelicula(15, 'Mad Max: Fury Road', 'En un futuro postapocalíptico, la guerrera Furiosa y Max huyen de un tirano en una persecución desenfrenada.', 'Jóvenes y Adultos', '19:45, 22:00, 00:15', 55.00, 'https://media.themoviedb.org/t/p/w300_and_h450_face/fnY0VRsb31A5RLVCBjuR6EFUlo2.jpg'),
  new Pelicula(16, 'IT', 'Un grupo de adolescentes se enfrenta a una entidad malévola que adopta la forma de un payaso aterrador.', 'Jóvenes y Adultos', '20:30, 22:45, 01:00', 55.00, 'https://media.themoviedb.org/t/p/w300_and_h450_face/9oERKIVyTWpHNum3STVsAGD4ojz.jpg')
];


// CLASE CineController (Controlador principal)

class CineController {
  constructor(peliculas) {
    this.peliculas = peliculas;
    this.modal = document.getElementById('modal-pelicula');
    this.modalImagen = document.getElementById('modal-imagen');
    this.modalTitulo = document.getElementById('modal-titulo');
    this.modalDescripcion = document.getElementById('modal-descripcion');
    this.modalTipo = document.getElementById('modal-tipo');
    this.modalHorario = document.getElementById('modal-horario');
    this.modalPrecio = document.getElementById('modal-precio');
    this.init();
  }

  init() {
    this.renderizarPorCategorias();
    this.agregarEventosBotones();
    this.configurarModal();
  }

  // Filtrar películas por tipo
  getPeliculasPorTipo(tipo) {
    return this.peliculas.filter(peli => peli.tipo === tipo);
  }

  // Renderizar todas las categorías en sus respectivos grids
  renderizarPorCategorias() {
    const categorias = ['Comedia', 'Infantil', 'Todo Público', 'Jóvenes y Adultos'];
    const idsMap = {
      'Comedia': 'grid-comedia',
      'Infantil': 'grid-infantil',
      'Todo Público': 'grid-todo-publico',
      'Jóvenes y Adultos': 'grid-jovenes-adultos'
    };

    categorias.forEach(categoria => {
      const peliculasFiltradas = this.getPeliculasPorTipo(categoria);
      const container = document.getElementById(idsMap[categoria]);
      if (container) {
        container.innerHTML = this.generarTarjetas(peliculasFiltradas);
      }
    });
  }

  // Generar HTML de tarjetas
  generarTarjetas(peliculasArray) {
    return peliculasArray.map(peli => `
      <article class="pelicula-card" data-id="${peli.id}">
        <div class="card-imagen">
          <img src="${peli.imagenUrl}" alt="${peli.nombre}" loading="lazy"
               onerror="this.src='https://picsum.photos/400/300?grayscale'">
        </div>
        <div class="card-body">
          <h3>${peli.nombre}</h3>
          <button class="btn-ver" data-id="${peli.id}">Ver detalles <i class="fa-solid fa-eye"></i></button>
        </div>
      </article>
    `).join('');
  }

  // Agregar eventos a los botones "Ver detalles"
  agregarEventosBotones() {
    document.querySelectorAll('.btn-ver').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.getAttribute('data-id'));
        const pelicula = this.peliculas.find(p => p.id === id);
        if (pelicula) this.abrirModal(pelicula);
      });
    });
  }

  // Abrir modal con detalles de la película
  abrirModal(pelicula) {
    this.modalImagen.src = pelicula.imagenUrl;
    this.modalImagen.alt = pelicula.nombre;
    this.modalTitulo.textContent = pelicula.nombre;
    this.modalDescripcion.textContent = pelicula.descripcion;
    this.modalTipo.textContent = pelicula.tipo;
    this.modalHorario.textContent = pelicula.horario;
    this.modalPrecio.textContent = pelicula.getPrecioFormateado();
    
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Configurar eventos del modal (cerrar)
  configurarModal() {
    const cerrarBtns = [document.querySelector('.cerrar-modal'), document.querySelector('.btn-cerrar-modal')];
    
    cerrarBtns.forEach(btn => {
      if (btn) {
        btn.addEventListener('click', () => this.cerrarModal());
      }
    });
    
    window.addEventListener('click', (e) => {
      if (e.target === this.modal) this.cerrarModal();
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('active')) {
        this.cerrarModal();
      }
    });
  }

  cerrarModal() {
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Actualizar eventos cuando se renderice de nuevo (si hay cambios dinámicos)
  refreshEventos() {
    this.agregarEventosBotones();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new CineController(peliculasData);
  
  // Navegación suave
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});