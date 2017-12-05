// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var tetrisGame = new Tetris({
  row: 12,
  col: 12,
  grid: 30,
  margin: 10,
  offsetX: 4,
  interval: 400,
  fasterInterval: 100
})
tetrisGame.start()