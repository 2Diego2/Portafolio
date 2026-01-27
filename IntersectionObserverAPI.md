El Intersection Observer API permite observar de manera asíncrona los cambios en la intersección de un elemento de destino (target) con un elemento ancestro (root) o con el viewport del documento.
Para instanciarlo, se pasa un objeto de configuración (options). Aquí tienes la explicación técnica precisa de sus tres propiedades:
________________________________________
1. root
Definición técnica: Es el elemento que se utiliza como viewport para comprobar la visibilidad del target.
•	Requisito de Jerarquía: El root debe ser un ancestro del elemento que se va a observar (target) en el árbol DOM. Si no es un ancestro, la observación no funcionará.
•	Valor por defecto (null): Si no se especifica o es null, el navegador asume que el root es el viewport del navegador (la ventana visible).
•	Función: Define el sistema de coordenadas o la "caja" contra la cual se medirá si el target está entrando o saliendo.
2. rootMargin
Definición técnica: Es un conjunto de márgenes que se agregan a la caja delimitadora (bounding box) del root antes de calcular la intersección.
•	Sintaxis: Sigue la misma sintaxis que la propiedad CSS margin (e.g., "10px 20px 30px 40px" o "10% 0px"). Importante: Debes especificar la unidad (px o %), no se permiten números sin unidad.
•	Comportamiento:
o	Valores Positivos: Hacen crecer el área de intersección del root virtualmente. (Ej: Si pones "100px", el callback se disparará 100px antes de que el elemento entre realmente en el viewport visible).
o	Valores Negativos: Contraen el área. (Ej: "-50px" requiere que el elemento entre 50px dentro del root para ser considerado visible).
•	Propósito: Permite ajustar el área efectiva de detección sin alterar el layout visual. Es fundamental para técnicas como Lazy Loading, donde quieres cargar la imagen un poco antes de que el usuario llegue a ella.
3. threshold (Umbral)
Definición técnica: Indica a qué porcentaje de visibilidad del target (dentro del root) se debe ejecutar el callback.
•	Tipo de dato: Puede ser un único número o un array de números.
•	Rango: De 0.0 a 1.0.
o	0: Ejecuta el callback tan pronto como un solo píxel del target sea visible.
o	0.5: Ejecuta el callback cuando el 50% del target es visible.
o	1.0: Ejecuta el callback solo cuando el 100% del target es visible.
•	Array de pasos: Si pasas [0, 0.25, 0.5, 0.75, 1], el observador disparará el evento cada vez que la visibilidad cruce uno de esos porcentajes (tanto al entrar como al salir).
________________________________________
Ejemplo Técnico Visual
Imagina que estás configurando el observador así:
JavaScript
const options = {
  root: document.querySelector('#scrollArea'), // Un div con scroll
  rootMargin: '0px',
  threshold: 1.0
}

