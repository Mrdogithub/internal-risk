$(function() {
    // var ItemName = GetQueryString("ItemName");

    // $("#riskInfo tbody td:first").html(ItemName);




    $("#creatPlan").on("click", function() {
        var actName = $.trim($('input[type="radio"]:checked').parent().text());
        var actNo = actName.substr(actName.length - 1, actName.length);

        var tbody = "";
        for (var i = 1; i < 5; i++) {
            var d = new Date();
            d.setDate(d.getDate() + i);
            var data = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
            tbody += '<tr>' +
                '<td class="demo-value">' + i + '</td>' +
                '<td class="demo-value">' + "Action" + i + '</td>' +
                '<td class="demo-value">' + ((actNo % 2 == 0) ? "张三" : "李四") + '</td>' +
                '<td class="demo-value">' + data + '</td>' +
                '<td class="demo-value"></td>' +
                '<td class="demo-value">待执行</td>' +
                '<td class="demo-value"></td>' +
                '</tr>';
        }
        $("#actPlanTbody").html(tbody);
    })
})

// function GetQueryString(name) {
//     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
//     var r = window.location.search.substr(1).match(reg);
//     if (r != null) return unescape(r[2]);
//     return null;
// }