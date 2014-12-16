c3_chart_internal_fn.initTitle = function () {
    var $$ = this;
    $$.title = $$.svg.append("text")
          .text($$.config.title_text)
          .attr("class", "tn_charts2_chart_title")
          .attr("x", $$.getCurrentPaddingLeft() + $$.config.title_x)
          .attr("y", $$.getCurrentPaddingTop() + $$.config.title_y);
};

c3_chart_internal_fn.redrawTitle = function () {
    var $$ = this;
    $$.title
          .attr("x", $$.getCurrentPaddingLeft() + $$.config.title_x)
          .attr("y", $$.getCurrentPaddingTop() + $$.config.title_y);
};