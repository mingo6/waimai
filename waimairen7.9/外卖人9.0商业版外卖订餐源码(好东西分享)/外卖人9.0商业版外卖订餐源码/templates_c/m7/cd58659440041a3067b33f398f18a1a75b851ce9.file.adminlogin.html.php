<?php /* Smarty version Smarty-3.1.10, created on 2019-05-10 20:36:16
         compiled from "D:\wwwroot\demo.52jscn.com\templates\m7\member\adminlogin.html" */ ?>
<?php /*%%SmartyHeaderCode:105585cd57040262389-62181929%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'cd58659440041a3067b33f398f18a1a75b851ce9' => 
    array (
      0 => 'D:\\wwwroot\\demo.52jscn.com\\templates\\m7\\member\\adminlogin.html',
      1 => 1542165782,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '105585cd57040262389-62181929',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'siteurl' => 0,
    'tempdir' => 0,
    'adminlogo' => 0,
    'companyname' => 0,
    'siteutl' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.10',
  'unifunc' => 'content_5cd5704035b365_28908295',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5cd5704035b365_28908295')) {function content_5cd5704035b365_28908295($_smarty_tpl) {?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>后台管理登录</title>
<script src="<?php echo $_smarty_tpl->tpl_vars['siteurl']->value;?>
/templates/<?php echo $_smarty_tpl->tpl_vars['tempdir']->value;?>
/public/js/jquery.js" type="text/javascript" language="javascript"></script>
<link rel="stylesheet" type="text/css" href="<?php echo $_smarty_tpl->tpl_vars['siteurl']->value;?>
/templates/<?php echo $_smarty_tpl->tpl_vars['tempdir']->value;?>
/public/css/register.css"> 
</head>
<body>

<div class="content">
	<div class="content_head">
		<div class="head_back">
			<div class="head_content">
				<img src="<?php echo $_smarty_tpl->tpl_vars['adminlogo']->value;?>
"/ style='width:257px;height:51px;'>
			</div>
		</div>
	</div>
	<div class="content_middle">
		<div class='signup_container'>
			<div id="signup_forms" class="signup_forms clearfix">
					<form class="signup_form_form" id="signup_form" method="post" action="" >
							<div class="form_row first_row">
								<label for="signup_email">用户名/手机号</label><div  id="signup_name_tip"></div>
								<input type="text" name="signup_name" placeholder="用户名/手机号" id="signup_name" data-required="required" >
							</div>
							<div class="form_row">
								<label for="signup_password">输入密码</label><div  id="signup_password_tip"></div>
								<input type="password" name="signup_password" placeholder="输入密码" id="signup_password" data-required="required" >
								<input type="hidden" id="cookiename" value="0" name="cookiename">
							</div>
							<div class="form_row">
								<label for="signup_code">输入验证码</label><div  id="signup_code_tip"></div>
								<input type="code" name="signup_code" placeholder="输入验证码" id="signup_code" data-required="required" style="width:218px;">
								<a href="javascript:getcode(this);"><img src="<?php echo FUNC_function(array('type'=>'url','link'=>"/site/getCaptcha"),$_smarty_tpl);?>
" id="captchaimg" /></a>
							</div>
							
				   </form>
			</div>

			<div class="login-btn-set"> <a href='javascript:loginin();' class='login-btn'>登录</a></div>		   
		</div>
	</div>
	<div class="content_bottom">
		 <p class='copyright'>版权所有.333 <?php echo $_smarty_tpl->tpl_vars['companyname']->value;?>
 </p>
	</div>
</div>

</body>

<script type="text/javascript">
var siteurl = '<?php echo $_smarty_tpl->tpl_vars['siteutl']->value;?>
';
function getcode(obj){
	var tempurl = siteurl+'/index.php?ctrl=site&action=getCaptcha&random=@random@';
	  tempurl = tempurl.replace('@random@', 1+Math.round(Math.random()*1000)); 
	  $('#captchaimg').attr('src',tempurl); 
}
$(function(){
$("#signup_name").keyup(function(){
        if(event.keyCode == 13){
           loginin();
        }
    });
$("#signup_password").keyup(function(){
        if(event.keyCode == 13){
           loginin();
        }
    });
$("#signup_code").keyup(function(){
        if(event.keyCode == 13){
           loginin();
        }
    });
    $('.rem').click(function(){
        $(this).toggleClass('selected');
        if($("#cookiename").val()==1){
            $("#cookiename").val(0);
        }else{
            $("#cookiename").val(1);
        }
    })
    $('#signup_name').focus(function(){
    	$('#signup_name_tip').removeClass();
     })
     $('#signup_password').focus(function(){
    	$('#signup_password_tip').removeClass();
     })
    $('#signup_select').click(function(){
        $('.form_row ul').show();
        event.cancelBubble = true;
    })

    $('#d').click(function(){
        $('.form_row ul').toggle();
        event.cancelBubble = true;
    })

    $('body').click(function(){
        $('.form_row ul').hide();
    })

    $('.form_row li').click(function(){
        var v  = $(this).text();
        $('#signup_select').val(v);
        $('.form_row ul').hide();
    })  
})
function loginin()
{
	var url = '<?php echo FUNC_function(array('type'=>'url','link'=>"/member/adminlogin/datatype/json"),$_smarty_tpl);?>
';
	 $.ajax({
     type: 'post',
     async:false,
     data:$('#signup_form').serialize(),
     url: url.replace('@random@', 1+Math.round(Math.random()*1000)),
     dataType: 'json',success: function(content) {
     	//alert(content.msg);
     	//signup_name_tip
     	if(content.error == false){
     		 window.location.href='<?php echo FUNC_function(array('type'=>'url','link'=>"/adminpage/system/module/index"),$_smarty_tpl);?>
';
     		//diasucces('操作成功','');
     	}else{
     		if(content.error == true){
				alert(content.msg);
     			$('#'+content.msg).addClass('tip error');
     		}else{
     			alert(content);
     		}
     	}
      // alert(content);
		},
    error: function(content) {
    	diaerror('数据获取失败');
	  }
   });
}
</script>

</html><?php }} ?>