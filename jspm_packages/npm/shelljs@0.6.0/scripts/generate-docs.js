/* */ 
require('../global');
echo('Appending docs to README.md');
cd(__dirname + '/..');
var docs = grep('//@', 'shell.js');
docs = docs.replace(/\/\/\@include (.+)/g, function(match, path) {
  var file = path.match('.js$') ? path : path + '.js';
  return grep('//@', file);
});
docs = docs.replace(/\/\/\@ ?/g, '');
cat('README.md').replace(/## Command reference(.|\n)*/, '## Command reference').to('README.md');
sed('-i', /## Command reference/, '## Command reference\n\n' + docs, 'README.md');
echo('All done.');
