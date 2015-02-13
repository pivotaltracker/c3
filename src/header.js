c3_chart_internal_fn.initHeader = function() {
  var $$ = this;
  $$.header = $$.svg.append("rect")
        .attr("class", "tn_charts2_chart_header")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", $$.getCurrentWidth())
        .attr("height", $$.getCurrentPaddingTop());
  $$.headerBorder = $$.svg.append("line")
        .attr("class", "tn_charts2_chart_header_border")
        .attr("x1", 0)
        .attr("x2", $$.getCurrentWidth())
        .attr("y1", $$.getCurrentPaddingTop())
        .attr("y2", $$.getCurrentPaddingTop());
};
c3_chart_internal_fn.redrawHeader = function () {
    var $$ = this;
    $$.header
        .attr("width", $$.getCurrentWidth())
        .attr("height", $$.getCurrentPaddingTop());
    $$.headerBorder
        .attr("x2", $$.getCurrentWidth());
};
