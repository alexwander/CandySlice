var Game = function() {
  // Set the width and height of the scene.
  this._width = 1920;
  this._height = 1080;
  this._center = {
    x: Math.round(this._width / 2),
    y: Math.round(this._height / 2)
  };

  // Setup the rendering surface.
  this.renderer = new PIXI.autoDetectRenderer(this._width, this._height);
  document.body.appendChild(this.renderer.view);

  // Create the main stage to draw on.
  this.stage = new PIXI.Stage();

  // Store rocks.
  this.rocks = [];

  // Start running the game.
  this.build();
};

