//5.登录拦截分析

if(location.href.indexOf("login.html") === -1) {

  $.ajax({

    type : "get",
    url: "/employee/checkRootLogin",
    dataType:"json",
    success: function (info) {
      console.log(info);
      if(info.error === 400){
        location.href = "login.html";
      }
    }
  })
}


// 禁用进度条
NProgress.configure({ showSpinner:false });

$(document).ajaxStart(function() {
  NProgress.start();
});

$(document).ajaxStop(function () {
    setTimeout(function () {
      NProgress.done();
    },500);
});











$(function(){
  
  //1.公共的二级菜单切换功能
  $('.category').click(function() {
    $('.lt_aside .child').stop().slideToggle();
  });
  
//  2.点击菜单按钮，进行切换菜单(左侧边栏隐藏后侧边栏拉宽)
  $('.icon_menu').click(function() {
    $('.lt_aside').toggleClass('hidemenu');
   // 当菜单隐藏时
   $('.lt_topbar').toggleClass("hidemenu");
   $('.lt_main').toggleClass("hidemenu");
  });
  
  
//  3.显示模态框
  
  $('.icon_logout').click(function () {
      $('#logoutModal').modal('show');
  });
  
//  4.退出模态框
  $('#logoutBtn').click(function() {
    $.ajax({
      type:"get",
      url:"/employee/employeeLogout",
      dataType:"json",
      success: function(info) {
        // console.log(info);
        if(info.success){
          location.href = "login.html";
        }
      }
    })
  });

})