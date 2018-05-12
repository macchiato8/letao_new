$(function(){

/*
* 表单校验功能
* 给表单配置 name 属性
* 1.用户名不能为空，长度为2-6位
* 2.密码不能为空，长度为6-12位
*
* */
  $('#form').bootstrapValidator({

    // 指定校验时的图标显示，默认是bootstrap风格
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },

    // 指定校验字段
    fields: {
      //校验用户名，对应name表单的name属性
      username: {
        validators: {
          //不能为空
          notEmpty: {
            message: '用户名不能为空'
          },
          //长度校验
          stringLength: {
            min: 2,
            max: 6,
            message: '用户名长度必须在2到6之间'
          },
          callback: {
            message: "用户名不存在"
          }

        }
      },


      password: {
        validators: {
          //不能为空
          notEmpty: {
            message: '密码不能为空'
          },
          //长度校验
          stringLength: {
            min: 6,
            max: 12,
            message: '密码长度必须在6到12之间'
          },

          callback: {
            message: "用户名不存在"
          }
        }
      }
    }
  });

  /*
  * 基本登录功能
  *1.ajax进行登录请求
  * 2.表单校验插件，在提交时校验
  *
  * */

  //校验成功时调用
  $('#form').on("success.form.bv",function (e) {


    //阻止默认的提交
    e.preventDefault();
    console.log($('#form').serialize());

    //通过 ajax 提交

    $.ajax({
      type:"post",
      url:"/employee/employeeLogin",
      dataType:"json",
      data: $('#form').serialize(),
      success: function (info) {
        //根据响应回来的数据，进行判断
        console.log(info);
        if ( info.success ) {
          location.href = "index.html";
        }
        
        if ( info.error === 1001) {
          $('#form').data("bootstrapValidator").updateStatus("password","INVALID","callback");
          
        }
        
        if (info.error === 1000) {
          $('#form').data("bootstrapValidator").updateStatus("username","INVALID","callback");
        }
        
        
      }
    })
    
  });

  /*
  * 3. 实现重置功能
  *
  * */
  $('[type="reset"]').click(function () {
    
    
    $('#form').data("bootstrapValidator").resetForm(true);
    
  })


})

