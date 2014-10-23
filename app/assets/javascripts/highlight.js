jQuery.fn.highlight = function() {
  $(this).each(function() {
    var el = $(this);
    el.before("<div/>");
    el.prev()
      .width(el.width())
      .height(el.height())
      .css({
        "position": "absolute",
        "background-color": "#00FF00",
        "opacity": ".9"
      })
      .fadeOut(500);
  });
};
