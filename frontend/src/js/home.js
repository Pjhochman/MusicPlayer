var $replayButton = $("#replay"),
  $recordFront = $(".record-front"),
  $recordSleeve = $(".record-sleeve"),
  $original = $(".original"),
  $animateMe = $(".animate-me");

function _animate() {
  $(".animate-me").addClass("-animate");
}
function _reAnimate() {
  if ($recordSleeve.is(".flipped")) {
    $recordSleeve.removeClass("flipped");
  }

  $(".will-change").removeClass("will-change");
  $(".-animate").each(function() {
    var $newEl = $(this).clone(true);
    $(this).before($newEl);
    $(this).remove();
  });
}

_animate();
$replayButton.on("click", _reAnimate);

// Flip it!
$(".play-record, .record-sleeve").on("click", function(e) {
  e.preventDefault();
  $recordFront.addClass("will-change");
  $recordSleeve.toggleClass("flipped");
});

$(".play-record").hover(function() {
  $recordSleeve.toggleClass("tilt");
});

// Reveal original
$(".view-original").on("click", function(e) {
  e.preventDefault();
  $original.toggleClass("-active");
  $(this).text(
    $(this).text() == "view original" ? "hide original" : "view original"
  );
});
