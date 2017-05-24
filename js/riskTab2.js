var init = {
    generateBlock: function() {
        const MAX_RED = 8;
        const MAX_YELLOW = 15;
        const MAX_GREEN = 7;
        const MAX_NONE = 24;
        let _redText = ['Camera', 'LCD', 'Battery', 'XXX Category'];
        let _defaultText = ['XXX Category'];
        let _item_1 = '',
            _item_2 = '',
            _item_3 = '',
            _item_4 = '';
        let _yellow = $("<div class = 'item yellow'></div>");

        for (let i = 0; i < MAX_RED; i++) {
            let text = _redText[i] ? _redText[i] : _defaultText[0];
            $('.content-wrapper').append($("<div class = 'item red' onClick = 'init.showTable(this)'>" + text + "</div>"));
        }

        for (let i = 0; i < MAX_YELLOW; i++) {
            $('.content-wrapper').append($("<div class = 'item yellow' onClick = 'init.showTable(this)'>" + _defaultText[0] + "</div>"));
        }

        for (let i = 0; i < MAX_GREEN; i++) {
            $('.content-wrapper').append($("<div class = 'item green' onClick = 'init.showTable(this)'>" + _defaultText[0] + "</div>"));
        }

        for (let i = 0; i < MAX_NONE; i++) {
            $('.content-wrapper').append($("<div class = 'item none' onClick = 'init.showTable(this)'>" + _defaultText[0] + "</div>"));
        }

    },
    showTable: function(currentEle) {

        $('.content-table #my-table').show();

        const categoryIsCamera = "Camera";
        let category = $(currentEle).text();
        $('.item').css({ 'border': 'none' })
        $(currentEle).css({ 'border': '5px solid rgb(51,153,255)' })
        if (category === categoryIsCamera) {
            $('.hasData >td:eq(0)').text(category);
            $('.hasData >td:eq(1)').text('8');
            $('.hasData >td:eq(2)').text('7');
            $('.hasData >td:eq(3)').text('8');
            $('.hasData >td:eq(4)').text('4');
            $('.hasData >td:eq(5)').text('9');
            $('.hasData >td:eq(6)').text('2');
            $('.hasData >td:eq(7)').text('10');
            $('.hasData >td:eq(8)').text('10');
            $('.hasData >td:eq(9)').text('6');
            $('.hasData >td:eq(10)').text('7');
            $('.hasData >td:eq(11)').text('9');
            $('.hasData >td:eq(12)').text('3');
            $('.hasData >td:eq(13)').text('10');
            $('.hasData >td:eq(14)').text('10');
        } else {
            $('.hasData >td:eq(0)').text(category);
            $('.hasData >td:eq(1)').text('--');
            $('.hasData >td:eq(2)').text('--');
            $('.hasData >td:eq(3)').text('--');
            $('.hasData >td:eq(4)').text('--');
            $('.hasData >td:eq(5)').text('--');
            $('.hasData >td:eq(6)').text('--');
            $('.hasData >td:eq(7)').text('--');
            $('.hasData >td:eq(8)').text('--');
            $('.hasData >td:eq(9)').text('--');
            $('.hasData >td:eq(10)').text('--');
            $('.hasData >td:eq(11)').text('--');
            $('.hasData >td:eq(12)').text('--');
            $('.hasData >td:eq(13)').text('--');
            $('.hasData >td:eq(14)').text('--');
        }
    }
};

init.generateBlock();