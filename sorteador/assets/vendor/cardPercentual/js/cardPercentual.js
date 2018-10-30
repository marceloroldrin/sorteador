(function ($) {
    $.fn.CardPercentual = function (opcoes) {

        var settings = $.extend({
            'dataProvider': [],
            'cols': [],
            'max_width': 0.7
        }, opcoes);


        var card = '';
        var altura = settings.cols.length > 0 ? 100 / settings.cols.length : '33';

        for (var d in settings.dataProvider) {
            for (var mes in settings.dataProvider[d]) {
                card += '<div class="div_graph col-lg-6 col-md-8">';

                card += '<div class="title-graph">';
                card += '<h2 class="text-bold">' + settings.dataProvider[d][mes].se + '</h2>';
                card += '<h4 class="text-muted">Resultado de <b>' + settings.dataProvider[d][mes].mes + '</b></h4>';
                card += '</div>';

                card += '<div class="sombra-direita"></div>';

                card += '<div class="columns-graph">';
                for (var c in settings.cols) {

                    card += '<div class="column" style="min-height:' + altura + '%">';
                    card += '<span class="crecerDaEsquerda column-' + settings.cols[c].bg + '" w="' + settings.dataProvider[d][mes][settings.cols[c].value] + '"></span>';
                    card += '<h4 class="legend text-bold text-center text-muted aparecer">' + settings.dataProvider[d][mes][settings.cols[c].label] + '%<br><small>' + settings.cols[c].text + '</small></h4>';
                    card += '</div>';
                }
                card += '</div>';
                card += '</div>';
            }
        }
        card += '<div class="row"></div>';

        this.append(card);

        $("[w]").each(function (i, e) {
            $(e).css("width", $(this).attr("w") * settings['max_width'] + "%");
        });
    };

    $.fn.CardPercentual2 = function (opcoes) {

        var hasValue = (texto, obj) => {
            var title = texto.toString();
            var v = title.match(/\[\[.*?\]\]/g);

            for (var i = 0 in v) {
                var d = v[i];
                var k = d.substr(2, d.length - 4);
                title = title.replace(new RegExp("\\[\\[" + k + "\\]\\]", "g"), obj[k]);

            }
            return title;
        };

        var settings = $.extend({
            'dataProvider': [],
            'title': 'TITULO',
            'sub_title': '',
            'cols': [],
            'newRow': true,
            'max_width': 0.7
        }, opcoes);

        var card = '';
        var altura = settings.cols.length > 0 ? 100 / settings.cols.length : '33';

        for (var dp in settings.dataProvider) {

            var strTitle = settings.title;
            var strSubTitle = settings.sub_title;

            var title = hasValue(strTitle, settings.dataProvider[dp]);
            var subtitle = hasValue(strSubTitle, settings.dataProvider[dp]);

            card += `<div class="div_graph col-lg-6 col-md-8">
                        <div class="title-graph">
                             <h2 class="text-bold">${title}</h2>
                             <h4 class="text-muted">${subtitle}</h4>
                        </div>
                        <div class="sombra-direita"></div>
                        <div class="columns-graph">`;
            for (var c in settings.cols) {
                
                var value = settings.dataProvider[dp][settings.cols[c].value] ? settings.dataProvider[dp][settings.cols[c].value] : settings.cols[c].value;
                var label = settings.dataProvider[dp][settings.cols[c].label] ? settings.dataProvider[dp][settings.cols[c].label] : settings.cols[c].label;
                label = hasValue(label, settings.dataProvider[dp]);
                
                card += `   <div class="column" style="height:${altura}%">
                                <span class="crecerDaEsquerda column-${settings.cols[c].bg}" w="${value}"></span>
                                <h4 class="legend text-bold text-center text-muted aparecer">${label}<br><small>${settings.cols[c].text}</small></h4>
                            </div>`;
            }
            card += `   </div>
                    </div>`;

        }

        card += settings.newRow ? '<div class="row"></div>' : '';

        this.append(card);

        $("[w]").each(function (i, e) {
            $(e).css("width", $(this).attr("w") * settings['max_width'] + "%");
        });
    };



})(jQuery);