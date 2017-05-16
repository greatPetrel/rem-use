function touch() {
    $('body').bind('touchstart', function() {});
}
//下拉菜单控制
function downMenu() {
    var clickNum = 0;
    $(document).on('click', '#btn-menu', function() {
        if (clickNum === 0) {
            var $this = $(this);
            $(this).addClass('active');
            $('#menu-list').removeClass('dis-none');
            $('.mask-layer').removeClass('dis-none').on('click', function() {
                $this.removeClass('active');
                $('#menu-list').addClass('dis-none');
                $(this).addClass('dis-none');
                clickNum = 0;
            });
            clickNum = 1;
        } else {
            $(this).removeClass('active');
            $('#menu-list').addClass('dis-none');
            $('.mask-layer').addClass('dis-none');
            clickNum = 0;
        }
    });
}

//筛选菜单按钮组控制
function btnListCtrl() {
    $('#btn-list').on('click', 'a', function() {
        $(this).addClass('active').siblings('a').removeClass('active');
    });
}

function moveTop($input,moveVal,$moveEle) {
    $($input).focus(function() {
        $($moveEle).css({
            'position': 'absolute',
            'left': '0',
            'right': '0',
            'top': moveVal
        });
    }).blur(function() {
        $($moveEle).css('position','static');
    });
}

var controllers = {
    login: function() {

    },
    index: function() {
        //首页轮播图
        var mySwiper = new Swiper('.swiper-container', {
            loop: true,
            pagination: '.swiper-pagination',
        });
        //首页新闻资讯切换
        var $newsBox = $('#news-info');
        $newsBox.find('.link-text').each(function() {
            var index = $(this).index();
            $(this).on('click', function() {
                $(this).addClass('active').siblings('a').removeClass('active');
                $newsBox.find('.main-box-content').eq(index).removeClass('dis-none').siblings('.main-box-content').addClass('dis-none');
            });
        });
        //下拉菜单
    },
    //通知公告
    notice: function() {
        //下拉菜单
    },
    //特派员风采
    style: function() {
        btnListCtrl();
    },
    //特派员基地
    base: function() {
        btnListCtrl();
    },
    //产品推荐
    recommend: function() {

    },
    //消息中心
    msg: function() {

    },
    //个人主页
    personal: function() {

    },
    //专家答疑
    expertsask: function() {

    },
    //专家回复
    expertsreply: function() {
        $('#reply-box').focus(function() {
            if ($(this).val() === '回复内容') {
                $(this).val('');
            }
        }).blur(function() {
            if ($(this).val() === '') {
                $(this).val('回复内容');
            }
        });
        // $('#reply-box').focus(function() {
        //     $('.reply-box').css({
        //         'position': 'fixed',
        //         'top': '2.6rem',
        //         'left': '0',
        //         'right': '0',
        //         'margin-top': '0',
        //         'z-index': '9999999',
        //         'background': '#fff'
        //     });
        //     $('#btn-reply').css('margin-top', '0').on('click', function() {
        //         $('.reply-box').add($(this)).attr('style', '');
        //         $('.mask-layer').addClass('dis-none');
        //     });
        //     $('.mask-layer').removeClass('dis-none').on('click', function() {
        //         $('.reply-box').add('#btn-reply').attr('style', '');
        //         $(this).addClass('dis-none');
        //     });
        //     $('#btn-menu').on('click', function() {
        //         $('.reply-box').add('#btn-reply').attr('style', '');
        //         $('.mask-layer').addClass('dis-none');
        //     });
        // });
    },
    //我要留言
    editmsg: function() {
        $("#msgTo").picker({
            toolbarTemplate: '<header class="bar bar-nav">\
  <button class="button button-link pull-right close-picker">确定</button>\
  <h1 class="title">请选择特派员</h1>\
  </header>',
            cols: [{
                textAlign: 'center',
                values: ['iPhone 4', 'iPhone 4S', 'iPhone 5', 'iPhone 5S', 'iPhone 6', 'iPhone 6 Plus', 'iPad 2', 'iPad Retina', 'iPad Air', 'iPad mini', 'iPad mini 2', 'iPad mini 3']
            }]
        });
        $("#youSix").picker({
            toolbarTemplate: '<header class="bar bar-nav">\
  <button class="button button-link pull-right close-picker">确定</button>\
  <h1 class="title">请选择您的性别</h1>\
  </header>',
            cols: [{
                textAlign: 'center',
                values: ['男', '女']
            }]
        });
        // moveTop('#msg-content','-9rem','.msg-list');
        // moveTop('#msg-theme','-8rem','.msg-list');
        // moveTop('#msg-address','-7rem','.msg-list');
        // moveTop('#msg-phone','-6rem','.msg-list');
    }
};


$(document).ready(function() {
    downMenu();
    $(document).on('pageInit', function(event) {
        touch();
        if ($('#login').hasClass('page-current')) {
            controllers.login();
        } else if ($('#index').hasClass('page-current')) {
            controllers.index();
        } else if ($('#notice').hasClass('page-current')) {
            controllers.notice();
        } else if ($('#style').hasClass('page-current')) {
            controllers.style();
        } else if ($('#base').hasClass('page-current')) {
            controllers.base();
        } else if ($('#recommend').hasClass('page-current')) {
            controllers.recommend();
        } else if ($('#msg').hasClass('page-current')) {
            controllers.msg();
        } else if ($('#personal').hasClass('page-current')) {
            controllers.personal();
        } else if ($('#expertsask').hasClass('page-current')) {
            controllers.expertsask();
        } else if ($('#expertsreply').hasClass('page-current')) {
            controllers.expertsreply();
        } else if ($('#editmsg').hasClass('page-current')) {
            controllers.editmsg();
        }
    });
    $.init();
});
