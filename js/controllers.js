(function(globals){ // What is this even? Do I need it?
  /**
   * Your pattern for Controller code:
   *
   * 1. What `TYPE` of interaction am I interested in?
   * 2. What `SELECTOR` will get the element involved in the interaction?
   * 3. What `CALLBACK` should be run when the interaction happens?
   * 4. What should my `CALLBACK` do with it's `EVENT`...?
   */
  document.querySelector("caption")
    .addEventListener('click', 'button', function () {
      var caption =
    });
  // AKA
  $("caption").on('click', 'button' function () {



  });
  // Where CALLBACK is...
  function CALLBACK (EVENT){
    // Do something with Models and Views...
    // Maybe do something with EVENT...?
    event.;
  }


  // Controller for "next move"...
  // /* your "next move" button */
  $('i.fafa-play').on('click', function(e) {
    // TODO: Fire tracer bullet!
    var playBttn = $('i.fafa-play');
      console.log(playBttn);
    // TODO: Tell the Model -- `game` -- to advance to the next move...
    var playBttn = $('i.fafa-play').on('click', function () {
      $('game')
    })

    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "previous move"...
  // /* your "previous move" button */
  $('i.fa.fa-step-backward').on('click', 'button', function(e){
    // TODO: Fire tracer bullet!
    var backwardBttn = $('i.fa.fa-step-backward');
        console.log(backwardBttn);
    // TODO: Tell the Model -- `game` -- to advance to the previous move...
    var backwardBttn = $('i.fa.fa-step-backward')
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "fast-forward"...
  // /* your "fast-forward" button */
  $("i.fa-fast-forward").on('click', 'button', function(e){
    // TODO: Fire tracer bullet!
    var fastforwardBttn = $('i.fa-fast-forward');
        console.log(fastforwardBttn);
    // TODO: Tell the Model -- `game` -- to advance to the last move...

    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for anything else...
  // /* any other buttons out there? */
  $("i.fafa-fast-backward").on('click', 'button' function(e){
    // TODO: Fire tracer bullet!
    var fastbackwardBttn = $('i.fafa-fast-backward');
        console.log(fastbackwardBttn);
    // TODO: Tell the Model -- `game` -- to do something it knows how to do...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

// Am I supposed to recognize this?
})(window || module && module.exports || this)
