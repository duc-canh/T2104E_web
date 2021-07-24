function batdau(){
    alert("cảm ơn bạn đã điền đầ đủ thông tin")
}
function ketthuc(){
    alert("bạn đã hoàn thành survey")
}
function show(){
    var ct ="<div class=\"d1 \" style=\"width: 1000px; height: 300px\">\n" +
        "        <h2>Matrsimonial Survey</h2>\n" +
        "        <div class=\"main\" style=\"width: 600px;height: 100px\">\n" +
        "            <form class=\"col-md-12 form\">\n" +
        "                <div class=\"col-md-3\">how often you are</div>\n" +
        "                <div class=\"col-md-3\">\n" +
        "                    <input type=\"radio\" id=\"a1\" name=\"fav_language\" value=\"HTML\">\n" +
        "                    <label for=\"html\">daily</label><br>\n" +
        "                </div>\n" +
        "                <div class=\"col-md-3\">\n" +
        "                    <input type=\"radio\" id=\"a3\" name=\"fav_language\" value=\"CSS\">\n" +
        "                    <label for=\"css\">weekly</label><br>\n" +
        "                </div>\n" +
        "                <div class=\"col-md-3\">\n" +
        "                    <input type=\"radio\" id=\"a2\" name=\"fav_language\" value=\"JavaScript\">\n" +
        "                    <label for=\"a\">montly</label>\n" +
        "                </div>\n" +
        "            </form>\n" +
        "            <form class=\"col-md-12 form\">\n" +
        "                <div class=\"col-md-3\">where you ues interne</div>\n" +
        "                <div class=\"col-md-3\">\n" +
        "                    <input type=\"radio\" id=\"b1\" name=\"fav_language\" value=\"HTML\">\n" +
        "                    <label for=\"html\">home</label><br>\n" +
        "                </div>\n" +
        "                <div class=\"col-md-3\">\n" +
        "                    <input type=\"radio\" id=\"b3\" name=\"fav_language\" value=\"CSS\">\n" +
        "                    <label for=\"css\">offeic</label><br>\n" +
        "                </div>\n" +
        "                <div class=\"col-md-3\">\n" +
        "                    <input type=\"radio\" id=\"b2\" name=\"fav_language\" value=\"JavaScript\">\n" +
        "                    <label for=\"a\">coffe</label>\n" +
        "                </div>\n" +
        "            </form>\n" +
        "\n" +
        "            <button class=\"col-md-6\" onclick=\"ketthuc()\" type=\"button\">submit</button>\n" +
        "            <button class=\"col-md-6\" onclick=\"\" type=\"button\">Reset</button>\n" +
        "        </div>\n" +
        "    </div>";
    document.getElementById("t2").innerHTML = ct;
}