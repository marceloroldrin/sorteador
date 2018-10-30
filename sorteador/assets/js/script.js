init = function (callback) {

    $(document).on("click", ".search-trigger", function (e) {
        e.preventDefault();
        let target = $(this).data("target");
        $("#" + target).removeClass('hide');
        $("#" + target).find('form input').focus();
    });

    $(document).on("click", "[data-close]", function (e) {
        e.preventDefault();
        let target = $(this).data("close");
        $("#" + target).find('form input').val('');
        $("#" + target).addClass('hide');

    });

    $(document).on("click", "[data-reset]", function (e) {
        e.preventDefault();
        let target = $(this).data("reset");
        $("#" + target).val("").focus();
    });

    $("include").each(function () {
        var include = null;
        $.post($(this).attr('data-provider'), (data) => {
            include = $(data);
            include.insertBefore($(this));
            $(this).remove();
            callback();
        });
    });
};


function isJSON(texto) {
    return (/^[\],:{}\s]*$/.test(texto.replace(/\\["\\\/bfnrtu]/g, '@').
            replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
            replace(/(?:^|:|,)(?:\s*\[)+/g, '')));
}

var classes = {
    "sFilterInput": "form-control",
    "sFilter": "input-group",
    "sPageButton": "btn btn-flat",
    "sPageButtonActive": "btn btn-flat btn-primary",
    "sLengthSelect": "form-control"
}

var language = {
    "sEmptyTable": '<br><div class="text-center"><span class="fa fa-5x fa-exclamation-circle text-info"></span><h3 style="font-weight: 300;font-size: 25px" > Nenhum registro encontrado!</h3></div>',
    "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
    "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
    "sInfoFiltered": "(Filtrados de _MAX_ registros)",
    "sInfoPostFix": "",
    "sInfoThousands": ".",
    "sLengthMenu": "Visualizar _MENU_ por página",
    "sLoadingRecords": "Carregando...",
    "sProcessing": "Processando...",
    "sZeroRecords": '<br><div class="text-center"><span class="fa fa-5x fa-exclamation-circle text-info"></span><h3 style="font-weight: 300;font-size: 25px" > Nenhum registro encontrado!</h3></div>',
    "sSearch": "Pesquisar",
    "decimal": ",",
    "thousands": ".",
    "oPaginate": {
        "sNext": "Próximo",
        "sPrevious": "Anterior",
        "sFirst": "Primeiro",
        "sLast": "Último"
    },
    "oAria": {
        "sSortAscending": ": Ordenar colunas de forma ascendente",
        "sSortDescending": ": Ordenar colunas de forma descendente"
    }
};

function setDataTable(id, dom = '<"top"f>ti<"bottom"lp><"clear">') {
    var tabela = $("#" + id).dataTable({
        "dom": dom,
        destroy: true,
        stateSave: true,
        "language": language,
        "classes": classes
    });
    return tabela;
}


function setDataTableExp(id, nome_arq, dom = '<"top"f>Bti<"bottom"lp><"clear">') {
    var hora = new Date().getHours() + "_" + new Date().getMinutes() + "_" + new Date().getSeconds();
    var tabela = $("#" + id).dataTable({
        "dom": dom,
        responsive: true,
        destroy: true,
        language: language,
        classes: classes,
        buttons: [
            {
                extend: 'excelHtml5',
                text: 'XLS &nbsp;<i class="glyphicon glyphicon-export"></i>',
                title: nome_arq + '-' + hora,
                titleAttr: 'EXCEL',
                className: 'btn btn-primary btn_excel',
                action: function (a, b, c, d) {
                    block('Gerando arquivo...');
                    setTimeout(function () {
                        $.fn.dataTable.ext.buttons.excelHtml5.action(a, b, c, d);
                    }, 1000);
                    unBlock();
                }
            }
        ]

    });
    return tabela;
}

function setDataTableRankingExp(id, nome_arq) {
    var hora = new Date().getHours() + "_" + new Date().getMinutes() + "_" + new Date().getSeconds();
    var tabela = $("#" + id).dataTable({
        "dom": '<"top"f>Bti<"bottom"lp><"clear">',
        responsive: true,
        destroy: true,
        "ordering": false,
        language: language,
        classes: classes,
        buttons: [
            {
                extend: 'excelHtml5',
                text: 'XLS &nbsp;<i class="glyphicon glyphicon-export"></i>',
                title: nome_arq + '-' + hora,
                titleAttr: 'EXCEL',
                className: 'btn btn-primary btn_excel',
                action: function (a, b, c, d) {
                    block('Gerando arquivo...');
                    setTimeout(function () {
                        $.fn.dataTable.ext.buttons.excelHtml5.action(a, b, c, d);
                    }, 1000);
                    unBlock();
                }
            }
        ]

    });
    return tabela;
}


function setDataTableBtn(id, btn) {
    var tabela = $("#" + id).dataTable({
        "dom": '<"top">fBti<"bottom"lp><"clear">',
        destroy: true,
        stateSave: true,
        responsive: true,
        "language": language,
        "classes": classes,
        buttons: [
            {
                text: btn.text,
                titleAttr: btn.title,
                className: 'btn btn-primary  btn_excel',
                action: function () {
                    btn.funcao();
                }
            }
        ]
    });
    return tabela;
}
function setDataTableBtnEXP(id, btn) {
    var hora = new Date().getHours() + "_" + new Date().getMinutes() + "_" + new Date().getSeconds();

    var tabela = $("#" + id).dataTable({
        "dom": '<"top"fB>ti<"bottom"lp><"clear">',
        destroy: true,
        stateSave: true,
        responsive: true,
        "language": language,
        "classes": classes,
        buttons: [

            {
                extend: 'excelHtml5',
                text: 'XLS &nbsp;<i class="glyphicon glyphicon-export"></i>',
                title: 'EXP-' + hora,
                titleAttr: 'EXCEL',
                className: 'btn btn-success',
                action: function (a, b, c, d) {
                    block('Gerando arquivo...');
                    setTimeout(function () {
                        $.fn.dataTable.ext.buttons.excelHtml5.action(a, b, c, d);
                    }, 1000);
                    unBlock();
                }
            },
            {
                text: btn.text,
                titleAttr: btn.title,
                className: 'btn btn-primary',
                action: function () {
                    btn.funcao();
                }
            }
        ]
    });
    return tabela;
}
