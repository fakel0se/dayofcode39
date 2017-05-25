var socket = io();

var stage;


stage = new createjs.Stage("canvas");

console.log('WTF');

var grid = new createjs.Shape();	
grid.graphics.beginFill("black").drawRect(parseFloat(document.getElementById("canvas").width) / 3, 0, 2, parseFloat(document.getElementById("canvas").height));
grid.graphics.beginFill("black").drawRect(parseFloat(document.getElementById("canvas").width) / 3 * 2, 0, 2, parseFloat(document.getElementById("canvas").height));
grid.graphics.beginFill("black").drawRect(0, parseFloat(document.getElementById("canvas").height) / 3, parseFloat(document.getElementById("canvas").width), 2);
grid.graphics.beginFill("black").drawRect(0, parseFloat(document.getElementById("canvas").height) / 3 * 2, parseFloat(document.getElementById("canvas").width), 2);
stage.addChild(grid);
stage.update();
	
	