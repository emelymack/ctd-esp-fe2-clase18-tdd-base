# Consigna clase 18 - Test Driven Development

## Objetivo de esta práctica
  En esta práctica vamos a centrarnos en la metodología TDD, creando la implementación del código a partir de los tests. Para ello nos centraremos en los siguientes desafíos:

  - El primer desafío consiste en crear la implementación del código del componente “Card”, de forma de que cumpla con los tests ya creados en Card.spec.tsx para que los mismos se ejecuten satisfactoriamente.
  - El segundo desafío será realizar la misma tarea, pero con el Hook useAlert.

## Consigna de trabajo
¡Iniciamos! Realizar TDD es similar a un proceso de ingeniería inversa. En este caso vamos a necesitar leer e interpretar los tests ya creados, para definir qué funcionalidades debe cumplir nuestro código. Es una práctica que —bien implementada— nos evita futuros errores y nos obliga a realizar nuestro código de una forma que sea “testeable”.

Entre los tests ya creados podemos identificar los siguientes:

  - **features/cards/card.component.tsx** y **card.component.spec.tsx**
  En este caso, tenemos distintos tests que satisfacer, desde el render default al render con diversos estados. De esta manera, podremos estar seguros de que nuestro componente se encuentra funcionando correctamente de forma unitaria ante diversos escenarios.
  
  - **features/hooks/useAlert.hook.tsx** y **useAlert.hook.spec.tsx**
  En este caso, tenemos un Hook con sus tests que satisfacer. Para ello deberemos recordar el uso de mock, para crear funciones y verificar que ellas se hayan llamado correctamente. 
