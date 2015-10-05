(function(globals){ // What is this even? Do I need it?
  /**
   * Your pattern for Controller code:
   *
   * 1. What `TYPE` of interaction am I interested in?
   * 2. What `SELECTOR` will get the element involved in the interaction?
   * 3. What `CALLBACK` should be run when the interaction happens?
   * 4. What should my `CALLBACK` do with it's `EVENT`...?
   */
  //document.querySelector(SELECTOR)
    //.addEventListener(TYPE, CALLBACK);
  // AKA
  //jQuery(SELECTOR).on(TYPE, CALLBACK);
  // Where CALLBACK is...
  //function CALLBACK (EVENT){
    // Do something with Models and Views...
    // Maybe do something with EVENT...?
  //}
var $chessboard = jQuery('table');

var gameboard = game.board();

  // Controller for "next move"...
  jQuery('.fa-play').on('click', function(event){
    // TODO: Fire tracer bullet!
    console.log('im working controllers');
    // TODO: Tell the Model -- `game` -- to advance to the next move...
    game.next();
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "previous move"...
  jQuery('.fa-step-backward').on('click', function(event){
    // TODO: Fire tracer bullet!
    console.log('im working');
    // TODO: Tell the Model -- `game` -- to advance to the previous move...
    game.prev();
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "fast-forward"...
  jQuery('.fa-fast-forward').on('click', function(event){
    // TODO: Fire tracer bullet!
    console.log('hello from controller');
    // TODO: Tell the Model -- `game` -- to advance to the last move...
      game.end();
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for anything else...
  jQuery('.fa-fast-backward').on('click', function(event){
    // TODO: Fire tracer bullet!
    console.log('im working again');
    // TODO: Tell the Model -- `game` -- to do something it knows how to do...
    game.next();
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

// Am I supposed to recognize this?
})(window || module && module.exports || this)
