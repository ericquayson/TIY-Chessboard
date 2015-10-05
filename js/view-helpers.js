// TODO: Should probably live in `js/view-helpers.js` one day...
;(function(globals){ // That damn IIFE again!
// Your code BELOW here...

  // Because the game board only corresponds to the `tbody` element...
  var $chessboard = jQuery('.chessboard tbody');
  // I always start variable names with `$` when they reference `jQuery.Collection` values

  // This looks strangely familiar... is that COPY-PASTA!?
  var gameboard = game.board();

  // You could also use nested `for` loops, but this is better...
  jQuery(gameboard).each(function(rank, row){
    jQuery(row).each(function(file, piece){
      // http://stackoverflow.com/questions/1442925/how-to-get-nth-jquery-element
      var $square = $chessboard
        .find('tr').eq(rank) // Get the `tr` inside the `chessboard` for the `rank`
        .find('td').eq(file); // Get the `td` inside the `tr` for the `file`

      console.log($square.get(), rank, file, piece);
      // Use the log, Luke!

      if (piece) $square.get(piece); // Not _exactly_ what we discussed in class...
        // TODO: Convert `square` to class name(s)
        // TODO: Add class name(s) to `td` instead
        if (piece === 'R') {
          $square.addClass('rook-black')
        }
        if (piece === 'N') {
          $square.addClass('knight-black')
        }
        if (piece === 'B') {
          $square.addClass('bishop-black')
        }
        if (piece === 'Q') {
          $square.addClass('king-black')
        }
        if (piece === 'K') {
          $square.addClass('queen-black')
        }
        if (piece === 'r') {
          $square.addClass('rook-white')
        }
        if (piece === 'n') {
          $square.addClass('knight-white')
        }
        if (piece === 'b') {
          $square.addClass('bishop-white')
        }
        if (piece === 'q') {
          $square.addClass('queen-white')
        }
        if (piece === 'k') {
          $square.addClass('king-white')
        }
        if (piece === 'p') {
          $square.addClass('pawn-black')
        }
        if (piece === 'p') {
          $square.addClass('pawn-white')
        }
    });
  });

// Don't go breaking my IIFE...
})(window || module && module.exports || this);
