// Basic "choke" example
function choke() {
  console.log('Choke! — basic function executed');
}

// Color function with ANSI color codes
function colorize(text, color) {
  const colors = {
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    reset: '\x1b[0m'
  };
  
  const colorCode = colors[color] || colors.reset;
  return `${colorCode}${text}${colors.reset}`;
}

if (require.main === module) {
  choke();
  console.log(colorize('Red text', 'red'));
  console.log(colorize('Green text', 'green'));
  console.log(colorize('Blue text', 'blue'));
  console.log(colorize('Magenta text', 'magenta'));
}

module.exports = { choke, colorize };

