jQuery.fn.myswitch = function() {
    return this.each(function() {
       var mypid = jQuery(this).data("pid");
       var state = $(this).data("state")
       $('[data-pid="'+ mypid +'"]').toggleClass("classopen");
       if (state == "hide") {
           $(this).text("收起");
           $(this).data("state","show");
       }else{
           $(this).text("更多");
           $(this).data("state","hide");
       }
       });
    };