
(function () {

    let app = [];

    let provider = [];
    let base_url = "//apps2.correios.com.br/gestaopostal/qim/app/views/templatePHP/assets/vendor/";
    function loadScript(js, callback) {

        if (Array.isArray(js)) {
            for (var d = 0; d < js.length; d++) {
                if (linkExterno(js[d])) {
                    if (!jaIncluso('script', 'src="' + js[d] + '"')) {
                        $("body").append($('<script type="text/javascript" src="' + js[d] + '"></script>'));
                    }
                } else {
                    if (!jaIncluso('script', 'src="' + base_url + js[d] + '"')) {
                        $("body").append($('<script type="text/javascript" src="' + base_url + js[d] + '"></script>'));
                    }
                }
            }
        } else {
            if (linkExterno(js)) {
                if (!jaIncluso('script', 'src="' + js + '"')) {
                    $("body").append($('<script type="text/javascript" src="' + js + '"></script>'));
                }
            } else {
                if (!jaIncluso('script', 'src="' + base_url + js + '"')) {
                    $("body").append($('<script type="text/javascript" src="' + base_url + js + '"></script>'));
                }
            }
        }

    }

    function loadStyle(css) {
        if ("" != css) {
            if (Array.isArray(css)) {
                for (var d = 0; d < css.length; d++) {
                    if (linkExterno(css[d])) {
                        if (!jaIncluso('link', 'src="' + css[d] + '"')) {
                            $("head link:first").after($('<link href="' + css[d] + '" rel="stylesheet">'));
                        }
                    } else {
                        if (!jaIncluso('link', 'src="' + base_url + css[d] + '"')) {
                            $("head link:first").after($('<link href="' + base_url + css[d] + '" rel="stylesheet">'));
                        }
                    }
                }
            } else {
                if (linkExterno(css)) {
                    if (!jaIncluso('link', 'src="' + css + '"')) {
                        $("head link:first").after($('<link href="' + css + '" rel="stylesheet">'));
                    }
                } else {
                    if (!jaIncluso('link', 'src="' + base_url + css + '"')) {
                        $("head link:first").after($('<link href="' + base_url + css + '" rel="stylesheet">'));
                    }
                }
            }
        }
    }

    function jaIncluso(tag, attr) {
        return $(tag + "[" + attr + "]").length > 0;
    }

    function linkExterno(link) {
        return link.substring(0, 4).toLowerCase() == "http";
    }

    app.componentes = {
        datatables: {
            css: "datatables/css/dataTables.bootstrap4.min.css",
            js: "datatables/js/jquery.dataTables.min.js",
        },
        cardPercentual: {
            css: "cardPercentual/css/cardPercentual.css",
            js: "cardPercentual/js/cardPercentual.js",
        },
        animate: {
            css: "animate/animate.css",
            js: "animate/animate.js",
        },
        feathericons: {
            js: "feathericons/js/feather.min.js",
            callback: "initFeather()"
        },
        materialIcons: {
            css: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
        modulos: {
            js: "../js/modulos.js",
        }
    }


    provider.provide = function (c) {
        cp = app.componentes;
        c = cp[c];
        if (c) {
            if ("css" in c) {
                loadStyle(c.css)
            }
            if ("js" in c) {
                loadScript(c.js, c.callback)
            }
        }

    }

    initDatatables = function () {
        $("table[data-provider='datatables']").each(function (k, v) {
            let opt = $(v).data('template');
            let cl = {
                "sPageButton": "btn-floating btn-small waves-effect waves-light",
                "sPageButtonActive": ""
            };

            let l = {
                "sSearch": "Pesquisar",
                "oPaginate": {
                    "sNext": '<i class="material-icons">chevron_right</i></a>',
                    "sPrevious": '<i class="material-icons">chevron_left</i></a>',
                    "sFirst": "Primeiro",
                    "sLast": "Último"
                }
            }

            $(v).DataTable({ dom: opt, classes: cl, language: l });
        });
    }

    initFeather = function () {
        // $("i[data-provider='feathericons']").each(function (k, v) {
        // console.log('object :', $(v).data('feather'));
        // feather.icons[$(v).data('feather')].toSvg()
        // });
        feather.replace();
    }


    $("[data-provider]").each(function () {
        provider.provide($(this).data("provider"));
    });

    $(".material-icons").each(function (k, v) {
        provider.provide('materialIcons');
    });

    
    $('.sidenav').sidenav();


})();