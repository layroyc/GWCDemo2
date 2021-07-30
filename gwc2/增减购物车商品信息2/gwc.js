//全选  全不选
function checkAll(data) {
    var isTrue = $(data).prop('checked')
    var checkDom = $("table tr td input")
    if (isTrue) {
        $.each(checkDom, function (index, value) {
            $(this).prop('checked', true);
        })
    } else {
        $.each(checkDom, function (index, value) {
            $(this).prop('checked', false);
        })
    }
}





//减号
function sign(btn) {
    //获取按钮的哥哥的值(数量)
    var amount = $(btn).next().val();
    if (amount >= 2) {
        //数量-1，再写回文本框
        $(btn).next().val(--amount);
        //获取金额
        //var price = $(btn).parent().prev().html();

        //计算金额，再写入按钮的父亲的弟弟内
        var ccc = $(btn).parent().prev().html("￥"+amount * 32.9+"元");

    }
}
function signs(btn) {
    var amount = $(btn).next().val();
    if (amount >= 2) {
        $(btn).next().val(--amount);
        var ccc = $(btn).parent().prev().html("￥"+amount * 3339+"元");
    }
}

//加号
function plus(btn) {
    //获取按钮的哥哥的值(数量)
    var amount = $(btn).prev().val();
    
    //数量+1，再写回文本框
    $(btn).prev().val(++amount);
   
    
    //计算金额，再写入按钮的父亲的弟弟内
     $(btn).parent().prev().html("￥"+amount * 32.9+"元");
  
    
}
function pluss(btn) {
    var amount = $(btn).prev().val();
    $(btn).prev().val(++amount);
     $(btn).parent().prev().html("￥"+amount * 3339+"元");
}




$(function () {
    //删除
    $(".del").click(function () {
        $(this).parent().parent().remove();
    })

    //批量删除
    $("#delBash").click(function () {
        $("table tr td input:checked").each(function (index, value) {
            $(this).parent().parent().remove();
        })
    })

    //添加
    $("#add").click(function() {
        var yi=$('.tr_0 td:eq(3) input').val()
        var er=$('#tr2 td:eq(3) input').val()
        if(yi==er){
                    add1()
                    }
                    if(yi>er){
                        add2()
                    }else{
                        add1()
                    }

    })

})


function add1(){
    var yi=$('.tr_0 td:eq(3) input').val()
    var plus=$('.tr_0 td:eq(3) img').prev().val(++yi)
   var pp=$(plus).parent().prev().html('￥' + amount*32.9 + '元')
}
function add2(){
    var yi=$('#tr2 td:eq(3) input').val()
    var plus=$('#tr2 td:eq(3) img').prev().val(++yi)
   var pp=$(plus).parent().prev().html('￥' + amount*3339 + '元')
}



