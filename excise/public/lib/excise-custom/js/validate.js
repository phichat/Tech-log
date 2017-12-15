function validate(e) {
    var isvalidate = true;
    var label = '<label id="" class="error" for="">ระบุข้อมูล</label>'

    $(e).find('input.required').each(function (i, el) {
        if ($(this).val() == '') {
            $(this).parents('.form-line').addClass('error');
            if (!$(this).parents('.form-group').find('label.error').length) {
                $(this).parents('.form-group').append(label);
            }
            isvalidate = false;
        }
    })

    $(e).find('textarea.required').each(function (i, el) {
        if ($(this).val() == '') {
            $(this).parents('.form-line').addClass('error');
            if (!$(this).parents('.form-group').find('label.error').length) {
                $(this).parents('.form-group').append(label);
            }
            isvalidate = false;
        }
    })

    $(e).find('select.required').each(function (i, el) {
        if ($(this).find('option:selected').val() == '') {
            if (!$(this).parents('.form-group').find('label.error').length) {
                $(this).parents('.form-group').append(label);
            }
            isvalidate = false;
        }
    })

    $(e).find('ul.required').each(function (i, el) {
        if ($(this).find('li').length == 0) {
            if (!$(this).parents('.form-group').find('label.error').length) {
                $(this).parents('.form-group').append(label);
            }
            isvalidate = false;
        }
    })

    $(e).find('table.required').each(function (i, el) {
        if ($(this).find('tbody tr').length == 0) {
            if (!$(this).parents('.form-group').find('label.error').length) {
                $(this).parents('.form-group').append(label);
            }
            isvalidate = false;
        }
    })

    var isfocus = false;
    $(e).find('.required').each(function (i, e) {
        if (isfocus == false) {
            if ($(this).parents('.form-group').find('label.error').length) {
                if ($(this).find('input').length || e.nodeName == 'INPUT' || e.nodeName == 'TEXTAREA') {
                    if (e.nodeName == 'INPUT' || e.nodeName == 'TEXTAREA') {
                        $(this).focus();
                    } else {
                        $(this).find('input').focus();
                    }
                    isfocus = true
                }
            }
        }
    });

    return isvalidate;
}

function unhighlight(e) {
    $(e).find('input.required').each(function (i, el) {
        debugger
        if ($(this).val() !== '') {
            $(this).parents('.form-line').removeClass('error').addClass('focused');
            $(this).parents('.form-group').find('label.error').remove();
        }
    })

    $(e).find('textarea.required').each(function (i, el) {
        if ($(this).val() !== '') {
            $(this).parents('.form-line').removeClass('error').addClass('focused');
            $(this).parents('.form-group').find('label.error').remove();
        }
    })

    $(e).find('select.required').each(function (i, el) {
        if ($(this).find('option:selected').val() !== '') {
            $(this).parents('.form-line').removeClass('error');
            $(this).parents('.form-group').find('label.error').remove();
        }
    })

    $(e).find('ul.required').each(function (i, el) {
        if ($(this).find('li').length > 0) {
            $(this).parents('.form-group').find('label.error').remove();
        }
    })


}

function unhighlightTable(table) {
    if ($(table).find('tbody tr').length > 0) {
        $(table).parents('.form-group').find('label.error').remove()
    }
}




