c3_chart_internal_fn.redrawTitle = function () {
    var $$ = this;
    $$.svg.append("text")
          .text($$.config.title_text)
          .attr("x", $$.getCurrentPaddingLeft() + $$.config.title_x)
          .attr("y", $$.getCurrentPaddingTop() + $$.config.title_y)
          .attr("class", "tn_charts2_chart_title");
};