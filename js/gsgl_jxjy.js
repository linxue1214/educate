/**
 * Created by dell on 2019/7/30.
 */
function datetime() {
    //创建日期时间对象
    var datetime = new Date();
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1;
    var day = datetime.getDate();
    var week = datetime.getDay();

    switch (week) {
        case 0:
            var week = '星期日';
            break;
        case 1:
            var week = '星期一';
            break;
        case 2:
            var week = '星期二';
            break;
        case 3:
            var week = '星期三';
            break;
        case 4:
            var week = '星期四';
            break;
        case 5:
            var week = '星期五';
            break;
        case 6:
            var week = '星期六';
            break;
    }
    var now =  year + "年" + month + "月" + day + "日" + " " + week;
    $(".gsgl-head-left p").text(now);//这里是往p标签中添加
}
setInterval(datetime, 1000);

$(function(){
    a=$(".gsglxy .gsgl .gsgl-nav .menu li");
    $(a).hover(function (){
        $(this).css({backgroundColor:"blue"})
    });
    $(a).mouseleave (function(){
        $(this).css({backgroundColor:""})
    })
});
$(function(){
    //detInterval(function(){},1000)
    setInterval("fun_pic()",2500)
    setInterval("fun_link()",2500)
});
function fun_pic() {
    var v1 = $(".gsglxy .gsgl .gsgl-content .gsgl-content-left .wrap .box .text");//要隐藏的图片
    var v2;//要显示的图片
    if (v1.next().length == 0) {
        v2 = $(".gsglxy .gsgl .gsgl-content .gsgl-content-left .wrap .box img:first");
    }
    else{
        v2=v1.next();
    }
    var i=v2.index();
    v1.animate({opacity: "0"}, 1000,function(){
        v1.removeClass("text")
    });
    v2.animate({opacity: "1"}, 1000, function(){
        v2.addClass("text")
    });
    $(".gsglxy .gsgl .gsgl-content .gsgl-content-left .wrap ul li").css({backgroundColor:"gainsboro"});
    $(".gsglxy .gsgl .gsgl-content .gsgl-content-left .wrap ul li").eq(i).css({backgroundColor:"orange"}
    )
}
function fun_link(){
    var v3 = $(".link .link1");//要隐藏的链接
    var v4;//要显示的链接
    if (v3.next().length == 0) {
        v4 = $(".link p:first");
    }
    else{
        v4=v3.next();
    }
    var i=v4.index();
    v3.animate({opacity: "0"}, 1000,function(){
        v3.removeClass("link1")
    });
    v4.animate({opacity: "1"}, 1000, function(){
        v4.addClass("link1")
    });

}


//继续教育
$(function(){
    c=$(".jxjyxy .jxjy-header .jxjy-nav .menu li");
    $(c).hover(function (){
        $(this).css({backgroundColor:"#680034"})
    });
    $(c).mouseleave (function(){
        $(this).css({backgroundColor:""})
    })
})


$(function(){
    var a=$(".jxjyxy .jxjy .jxjy-content .jxjy-content-footer .wrap .item .box");
    var b=$(".jxjyxy .jxjy .jxjy-content .jxjy-content-footer .wrap .left");
    var c=$(".jxjyxy .jxjy .jxjy-content .jxjy-content-footer .wrap .right")
    $(".jxjyxy .jxjy .jxjy-content .jxjy-content-footer .wrap .item .box ul li img").hover(function(){
        $(this).css({border:"2px solid #680034"})
    })
    $(".jxjyxy .jxjy .jxjy-content .jxjy-content-footer .wrap .item .box ul li img").mouseleave (function(){
        $(this).css({border:"2px solid white"})
    })
    b.click(function(){
        var w=$(".jxjyxy .jxjy .jxjy-content .jxjy-content-footer .wrap .item .box ul li img").eq(0).width();
        var l=$(".jxjyxy .jxjy .jxjy-content .jxjy-content-footer .wrap .item").scrollLeft()
        $(".jxjyxy .jxjy .jxjy-content .jxjy-content-footer .wrap .item").scrollLeft(l-w-20)
    })
    c.click(function(){
        var w=$(".jxjyxy .jxjy .jxjy-content .jxjy-content-footer .wrap .item .box ul li img").eq(0).width();
        var l=$(".jxjyxy .jxjy .jxjy-content .jxjy-content-footer .wrap .item").scrollLeft()
        $(".jxjyxy .jxjy .jxjy-content .jxjy-content-footer .wrap .item").scrollLeft(l+w+20)
    })


});


//学院概况
$(function(){
    $(".jxjyxy-xygk-content ul li").click(function(){
        $(this).css({backgroundColor:"white",color:"black"}).addClass("jxjyxy-xygk-content-text").siblings().css({backgroundColor:"",color:""}).removeClass("jxjyxy-xygk-content-text");
        var i = $(this).index();
        $(".jxjyxy-xygk-content .right div").eq(i).css('display','block').addClass('show').siblings().css('display','none');

        $(".jxjy-nav .cxygk").click(function(){
            $(".jxjyxy-xygk-content .control1").css({display:"block"}).siblings('.right').find('.show').eq(i).hide();
            $(".jxjyxy-xygk-content .right div").css({display:"none"})
        })
    })
    $(".jxjy-nav .menu li ul .con1").click(function(){
        $(".jxjyxy-xygk-content .control1").css({display:"none"})
        $(".jxjyxy-xygk-content .right .con11").css({display:"block"}).siblings('.right').find('.show').eq(i).hide();
        $(".jxjyxy-xygk-content .right div").css({display:"none"})
    })

});









