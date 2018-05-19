/**
 * Created by Administrator on 2018/5/19.
 */
$(function(){



    $('#in3').click(function(){
        var in1=$('#in1').val();
        var in2=$('#in2').val();

        if(in1==='' || in2===''){
            alert('帐号和密吗不能为空')
        }else{
            var key1=localStorage.getItem('xm-aaa');
            var key2=localStorage.getItem('mm-123');
            if(in1===key1){

                if(in2===key2){
                    alert('登陆成功');
                    window.location.href='http://www.baidu.com';
                    window.open('http://www.baidu.com');
                }else{
                    alert('密码错误')
                }
            }else{
                alert('帐号不存在')
            }
        }


    });












});