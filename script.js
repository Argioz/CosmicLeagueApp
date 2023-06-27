// Obtener referencia al botón
const colorButton = document.getElementById('colorButton');

// Lista de colores disponibles
const colors = ['red', 'blue', 'green', 'purple', 'yellow', 'black', 'white', 'orange'];

// Función para generar un índice aleatorio
function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

// Función para cambiar el color del botón aleatoriamente
function changeColor() {
  const randomIndex = getRandomIndex(colors.length);
  const randomColor = colors[randomIndex];
  colorButton.style.backgroundColor = randomColor;
}

// Asignar el evento click al botón
colorButton.addEventListener('click', changeColor);

const playerContainer = document.getElementById('player-container');
const playerImage = document.getElementById('player-image');
const playerDescription = document.getElementById('player-description');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

const players = [
  {
    image: 'arrigod.jpg',
    description: 'Campaign Master - Cup Founder'
  },
  {
    image: 'goyo.jpg',
    description: 'Gregorio "Goyo" Lazarte, el que juega con las negras.'
  },
  {
    image: 'cubo.jpg',
    description: 'David "Cubo" Lopez, el clásico jugador rojo.'
  }
  // Agrega más jugadores aquí
];

let currentPlayerIndex = 0;

// Función para mostrar el jugador actual
function showCurrentPlayer() {
  const currentPlayer = players[currentPlayerIndex];
  playerImage.src = currentPlayer.image;
  playerDescription.textContent = currentPlayer.description;
}

// Función para ir al jugador anterior
function goToPrevPlayer() {
  currentPlayerIndex--;
  if (currentPlayerIndex < 0) {
    currentPlayerIndex = players.length - 1;
  }
  showCurrentPlayer();
}

// Función para ir al siguiente jugador
function goToNextPlayer() {
  currentPlayerIndex++;
  if (currentPlayerIndex >= players.length) {
    currentPlayerIndex = 0;
  }
  showCurrentPlayer();
}

// Event listeners para los botones de navegación
prevButton.addEventListener('click', goToPrevPlayer);
nextButton.addEventListener('click', goToNextPlayer);

// Mostrar el jugador actual al cargar la página
showCurrentPlayer();
