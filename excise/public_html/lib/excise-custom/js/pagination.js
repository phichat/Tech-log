$.fn.pageMe = function (opts) {
    var $this = this,
        defaults = {
            perPage: 10,
            showPrevNext: false,
            hidePageNumbers: false
        },
        settings = $.extend(defaults, opts);

    var listElement = $this;
    var perPage = settings.perPage;
    var children = listElement.children();
    var pager = settings.pagerSelector;
    var pageInfo = settings.pageInfo;

    if (typeof settings.childSelector != "undefined") {
        children = listElement.find(settings.childSelector);
    }

    if (typeof settings.pagerSelector != "undefined") {
        pager = $(settings.pagerSelector);
    }

    var numItems = children.length;
    var numPages = Math.round(numItems / perPage);

    pager.data("curr", 0);
    // if (settings.showPrevNext) {
    //     // $('<li class="previous disabled" disabled><a href="javascript:void(0)" class="waves-effect" tabindex="-1"><i class="material-icons">chevron_left</i></a></li>').appendTo(pager);
    // }

    var curr = 0,
    option = '';
    while (numPages > curr) {
        // $('<li class="num-page"><a href="javascript:void(0)" class="waves-effect">' + (curr + 1) + '</a></li>').appendTo(pager);
        option +='<option value="' + (curr + 1) + '">' + (curr + 1) + '</option>';
        curr++;
    }

    // if (settings.showPrevNext) {
    //     // $('<li class="next"><a href="javascript:void(0)" class="waves-effect"><i class="material-icons">chevron_right</i></a></li>').appendTo(pager);
    // }

    
    if (curr == 0) {
        $(pager).html('<option value="1">1</option>');
        $(pager).closest('.pagination-select').find('.page-total').html('จาก 1 หน้า')
        $(pageInfo).html('รายการที่ '+ (numItems < perPage ? numItems : perPage) +' - '+ numItems +' จาก ' + (numItems) + ' รายการ')
    } else{
        $(pager).html(option);
        $(pager).closest('.pagination-select').find('.page-total').html('จาก ' + numPages + ' หน้า')
        $(pageInfo).html('รายการที่ 1 - '+ (numItems < perPage ? numItems : perPage) +' จาก ' + (numItems) + ' รายการ')
    }
    

    // var lastItem = curr == 0 ? 1 : curr ;
    // $(pageInfo).html('รายการที่ 1 - '+ lastItem +' จาก ' + numItems + ' รายการ')

    // pager.find('li.previouse a').addClass('active');
    // pager.children().eq(1).addClass("active");
    children.hide();
    children.slice(0, perPage).show();

    $(pager).change(function () {
        var clickedPage = Number($(this).find('option:selected').val());
        goTo(clickedPage, perPage);
    })
    // pager.find('li.num-page a').click(function () {
    //     var clickedPage = $(this).text().valueOf() - 1;
    //     goTo(clickedPage, perPage);
    //     return false;
    // });
    // pager.find('li.previous a').click(function () {
    //     var li = $(this).closest('li.previous');
    //     if (li.attr('disabled') === 'disabled') { return false };
    //     previous();
    //     return false;
    // });
    // pager.find('li.next a').click(function () {
    //     var li = $(this).closest('li.next');
    //     if (li.attr('disabled') === 'disabled') { return false };
    //     next();
    //     return false;
    // });

    function previous() {
        var goToPage = parseInt(pager.data("curr")) - 1;
        goTo(goToPage);
    }

    function next() {
        goToPage = parseInt(pager.data("curr")) + 1;
        goTo(goToPage);
    }

    function goTo(page) {
        var startAt = page * perPage,
            endOn = startAt + perPage,
            firstItem = startAt > numItems ? numItems : 1 + startAt; 
            lastItem = endOn > numItems ? numItems : endOn;
        children.css('display', 'none').slice(startAt, endOn).show();
        
        $(pageInfo).html('รายการที่ ' + (firstItem) + ' - ' + (lastItem) + ' จาก ' + numItems + ' รายการ')

        // if (page >= 1) {
        //     pager.find('li.previous').removeClass('disabled').removeAttr('disabled');

        // }
        // else {
        //     pager.find('li.previous').addClass('disabled').attr('disabled', true);
        // }

        // if (page < (numPages - 1)) {
        //     pager.find('li.next').removeClass('disabled').removeAttr('disabled');
        // }
        // else {
        //     pager.find('li.next').addClass('disabled').attr('disabled', true);
        // }


        pager.data("curr", page);
        pager.children().removeClass("active");
        pager.children().eq(page + 1).addClass("active");

    }
};