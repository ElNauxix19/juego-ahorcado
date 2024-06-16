# juego-ahorcado
Creamos una página web con el juego del ahorcado utilizando html, css y js vanilla.

Diseño del Juego del Ahorcado

1. Interfaz de Usuario (UI)
  Pantalla de Inicio:
    Botón para iniciar el juego.
    Opcional: selección de nivel de dificultad.
  Pantalla del Juego:
    Área para mostrar la palabra oculta con guiones bajos (e.g., _ _ _ _ _).
    Área para mostrar las letras incorrectas que se han adivinado.
    Visualización del "ahorcado" que se va dibujando progresivamente con cada error.
    Botón de reinicio y menú principal.
2. Elementos Visuales
  Palabra Oculta:
    Mostrar la palabra como guiones bajos inicialmente, reemplazando los guiones con letras correctas a medida que se adivinan.
  Letras Incorrectas:
    Mostrar una lista de letras que el jugador ha adivinado incorrectamente.
  Ahorcado:
    Dibujar el ahorcado en etapas. Por ejemplo, puede tener seis etapas: cabeza, torso, brazo izquierdo, brazo derecho, pierna izquierda, pierna derecha.
   
Funcionalidad del Juego del Ahorcado
1. Lógica del Juego
  Inicio del Juego:
    Selección de una palabra aleatoria de una lista de palabras.
    Inicialización de las variables necesarias (palabra oculta, letras adivinadas, errores cometidos).
  Adivinanza de Letras:
    El jugador selecciona una letra del teclado virtual.
    Comprobar si la letra está en la palabra oculta:
      Si está: Reemplazar los guiones correspondientes con la letra.
      Si no está: Añadir la letra a la lista de letras incorrectas y avanzar una etapa en el dibujo del ahorcado.
  Condiciones de Fin de Juego:
    Victoria: Si todas las letras de la palabra son adivinadas correctamente.
    Derrota: Si se completa el dibujo del ahorcado (por ejemplo, 6 errores).
2. Funcionalidades Adicionales
  Niveles de Dificultad:
    Palabras más largas y complicadas para niveles más altos.
  Pistas:
    Ofrecer pistas al jugador (e.g., la primera letra de la palabra) a cambio de una penalización.
  Sistema de Puntuación:
    Puntos por cada letra correcta, con bonificaciones por adivinar la palabra rápidamente.
  Reinicio del Juego:
    Botón para reiniciar el juego con una nueva palabra.

  Ejemplo de Flujo de Juego
Inicio del Juego: El jugador presiona "Iniciar".
Selección de Palabra: El juego selecciona una palabra oculta y la muestra como guiones bajos.
Adivinanza de Letras: El jugador selecciona una letra.
Si la letra está en la palabra, se revela en su posición correcta.
Si la letra no está en la palabra, se añade a la lista de letras incorrectas y se dibuja una parte del ahorcado.
Repetición del Proceso: El jugador continúa adivinando letras.

Fin del Juego:
Victoria: El jugador adivina todas las letras de la palabra.
Derrota: El dibujo del ahorcado se completa después de un número determinado de errores.
Reinicio: El jugador puede reiniciar el juego para intentar con una nueva palabra.  
