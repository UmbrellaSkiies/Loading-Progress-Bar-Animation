// Generate 100 div blocks for the loader
var loaderContainer = document.querySelector('.loader');

for (var i = 0; i < 100; i++) {
  var block = document.createElement('div');
  block.classList.add('block');
  loaderContainer.appendChild(block);
}

var counter = document.querySelector('.counter');
var blocks = document.querySelectorAll('.block');
var targetCount = parseInt(counter.getAttribute('data-target'));
var currentCount = 0;
var animationInterval = 24; // Adjust the animation speed (smaller value = faster animation)

var animation = setInterval(function() {
  currentCount++;
  counter.textContent = currentCount;
  if (currentCount >= targetCount) {
    clearInterval(animation);
  }
  blocks[currentCount - 1].style.backgroundColor = getGradientColor(currentCount, targetCount);
}, animationInterval);

function getGradientColor(currentCount, targetCount) {
  var startColor = [0, 255, 119]; // Start color | Green: RGB(0, 255, 0) | Cyan: RGB(0, 255, 255) | Red: RGB(255, 0, 0) | Lime: RGB(0, 255, 0)
  var endColor = [31, 47, 152]; // End color | Blue: RGB(0, 0, 255) | Orange: RGB(255, 165, 0) | Pink: RGB(255, 192, 203) | Teal: RGB(0, 128, 128)
  var color = [];

  for (var i = 0; i < 3; i++) {
    var startValue = startColor[i];
    var endValue = endColor[i];
    var value = Math.round(startValue + (endValue - startValue) * (currentCount / targetCount));
    color.push(value.toString(16).padStart(2, '0')); // Convert to hexadecimal format
  }

  return '#' + color.join('');
}