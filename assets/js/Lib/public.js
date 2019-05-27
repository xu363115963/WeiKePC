(function($) { 
   // 登录
   $("body").on('click','#login',function(){
        $(".login,.mask").toggle();
    });
   $("body").on('click','.mask',function(){
        $(".mask,.login,.passwordContet").hide();
    });
   $("body").on('click','.close',function(){
        $(".mask,.login,.passwordContet").hide();
    });
    // 替换图标
    $(".loginContent").on('click','.icons_weixin',function(){
      var me =$(this);
      me.toggleClass ("icons_wep");
      $(".body_form").toggle();
    });
    //注册
    $("body").on('click','#register',function(){
        $(".register_woppaer,.mask").toggle();
    });
    // 找回密码
    $("body").on('click','#forget',function(){
        $(".login").hide();
        $(".passwordContet,.maskbox").toggle();
    });
    $("body").on('click','.maskbox',function(){
        $(".maskbox,.passwordContet").hide();
    });
   //course
   $(".course ul li").hover(function(){
      $(this).children("ol").show()
      }, function(){
      $(this).children("ol").hide()
   });
   //topber
   $(".topber ul li").hover(function(){
      $(this).children("dl,.submenushow").show()
      }, function(){
      $(this).children("dl,.submenushow").hide()
   });
   //topCont
    $(".topCont ul li").hover(function(){
      $(this).children(".submenu").show()
      }, function(){
      $(this).children(".submenu").hide()
   });
   // banner   
    $(".shuffling").slide({ 
        titCell:".num li", 
        mainCell:".pic",
        effect:"left",
        autoPlay:true,
        trigger:"click"
    });
    //news
    $(".news").slide({ 
      mainCell:"ul",
      autoPlay:true,
      effect:"leftMarquee",
      interTime:50,vis:6
    });
    //learning
    $(".learning").on('click','a',function(){
       $(".learning a").removeClass("active");
         $(this).toggleClass("active");
    });
    //subjects
    $(".subjects").on('click','a',function(){
       $(".subjects a").removeClass("active");
        $(this).toggleClass("active");
    });
    //school
    $(".school").on('click','a',function(){
       $(".school a").removeClass("active");
         $(this).toggleClass("active");
    });
    //switchover
    $(".switchover").slide({ 
      titCell:".bd li",
      mainCell:".hd",
      delayTime:0,
      trigger:"click"
    });
    //点击下拉
    $(".nav p").click(function(){
      var ul=$(".new");
      if(ul.css("display")=="none"){
        ul.slideDown();
      }else{
        ul.slideUp();
      }
    });
  
    $(".set").click(function(){
      var _name = $(this).attr("name");
      if( $("[name="+_name+"]").length > 1 ){
        $("[name="+_name+"]").removeClass("select");
        $(this).addClass("select");
      } else {
        if( $(this).hasClass("select") ){
          $(this).removeClass("select");
        } else {
          $(this).addClass("select");
        }
      }
    });
  
    $(".nav li").click(function(){
      var li=$(this).text();
      $(".nav p").html(li);
      $(".new").hide();
      $("p").removeClass("select") ;   
    });
    //返回顶部按钮
    function topCont(){
          if($(document).scrollTop()>50){
              $(".topCont").css({
                  'display':'block',
              });
          } else {
              $(".topCont").css('display','none');
          }
          setTimeout(topCont);
      }     
      topCont();
      $(".gotop").click( function(){
        var speed=800;//滑动的速度
          $('body,html').animate({ scrollTop: 0 }, speed);
          return false;
      })
})(jQuery);
//点击切换到登录
function aling(){
    //alert('11');
    $(".register_woppaer").hide();
    $(".login,.mask").show();
}
//点击切换到注册
function zhuse(){
  $(".login").hide();
  $(".register_woppaer,.mask").show();
}