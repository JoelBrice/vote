var backendCanvas = getElementById("backendCanvas").getContext("2d");
var paragraphs = document.getElementsByTagName("p");
for (var i = 0; i < paragraphs.length; i++) {
    var paragraph = paragraphs.item(i);
    paragraph.style.setProperty("color", "blue", null);
}

d3.selectAll(".backend").style("color", function () {
    return "hsl(" + Math.random() * 360 + ",100%,50%)";
});