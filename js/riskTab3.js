$(function() {


    var initItem = function() {
        createDate(10);
    };

    initItem();

    function createDate(row) {
        if (!row) {
            row = 10;
        }
        var tbody = "";
        for (var i = 1; i < row + 1; i++) {
            var td = "",
                span_color = "green";
            if (i % 2 == 0) {
                span_color = "yellow";
            }
            if (i % 3 == 0) {
                span_color = "red";
            }
            for (var j = 0; j < 14; j++) {
                td += '<td class="demo-value">' + parseInt(Math.random() * 10) + '</td>';
            }
            tbody += '<tr>' +
                '<td class="demo-value">CCM' + i + '</td>' +
                '<td class="demo-value"><span class="count ' + span_color + '" style="width:15px;height:15px;border-radius:50%;"></span></td>' +
                '<td class="demo-value">' + (Math.random() * 10).toFixed(1) + '</td>' + td +
                '<td class="demo-value  demo-mitigation-plan">PLAN</td>' +
                '</tr>';
        }
        $('#interRisk tbody').html(tbody);

    }

    $("#camera").on('click', function(e) {
        createDate(10);
    });
    $(".demo-mitigation-plan").on('click', function(e) {
        var ItemName = $(this).parent().find("td:first").text();
        //window.open ( "/rms/src/table/internalVisualRisk2.html?ItemName="+ItemName , ItemName );
        $('#myTab a[href="#settings"]').tab('show');
    });

    // 查看详情
    $("#checkInfor").on('click', function(e) {

        $('#myTab a[href="#messages"]').tab('show');
    })

})