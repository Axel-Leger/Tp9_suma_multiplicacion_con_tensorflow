
function generarMatrices() {
  const filas = parseInt(document.getElementById('filas').value);
  const columnas = parseInt(document.getElementById('columnas').value);

  // Genera matrices aleatorias con valores entre 1 y 20
  const matrizA = tf.randomUniform([filas, columnas], 1, 21, 'int32');
  const matrizB = tf.randomUniform([filas, columnas], 1, 21, 'int32');

  // Operaciones con TensorFlow.js
  const suma = tf.add(matrizA, matrizB);
  const multiplicacion = tf.matMul(matrizA, matrizB.transpose());

  // Mostrar resultados
  matrizA.array().then(arr => {
    document.getElementById('matrizA').value = formatoMatriz(arr);
  });

  matrizB.array().then(arr => {
    document.getElementById('matrizB').value = formatoMatriz(arr);
  });

  suma.array().then(arr => {
    document.getElementById('suma').value = formatoMatriz(arr);
  });

  multiplicacion.array().then(arr => {
    document.getElementById('multiplicacion').value = formatoMatriz(arr);
  });
}

function formatoMatriz(matriz) {
  return matriz.map(fila => fila.join('\t')).join('\n');
}
