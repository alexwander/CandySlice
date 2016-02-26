/**
 * Created by alexandr on 24.02.2016.
 */


var Game = function() {
  // Set the width and height of the scene.
  this._width = 1920;
  this._height = 1080;
  this._center = {
    x: Math.round(this._width / 2),
    y: Math.round(this._height / 2)
  };

