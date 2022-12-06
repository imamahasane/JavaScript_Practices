let c = document.getElementById('myCanvas');

let ctx = c.getContext('2d');

ctx.lineWidth = 3;
ctx.strokeStyle = 'black';
ctx.strokeRect(10, 10, 380, 280);

ctx.fillStyle = 'green';
ctx.fillRect(12, 12, 376, 276);

let centerX = c.width / 2;
let centerY = c.height / 2;

ctx.beginPath();
ctx.arc(centerX, centerY, 80, 0, 2 * Math.PI, false);
ctx.fillStyle = 'red';
ctx.fill();
ctx.stroke();

try {
} catch (error) {
} finally {
}
