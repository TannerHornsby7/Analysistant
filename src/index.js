// var fs = require('fs');
import { Element, Layout } from "./layout";
require('./style.scss');

const layout = new Layout(null);
layout.setDOM();

// make search function
// make search function update view



function readFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(function(filename) {
      fs.readFile(dirname + filename, 'utf-8', function(err, content) {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content);
      });
    });
  });
}

var data = {};
readFiles('dirname/', function(filename, content) {
  data[filename] = content;
}, function(err) {
  throw err;
});