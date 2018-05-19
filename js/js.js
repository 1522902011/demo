/**
 * Created by Administrator on 2018/5/19.
 */
$(function(){

$('#cjzh').click(function(){
    var xm=$('#xm').val();
    var mm1=$('#mm1').val();
    var mm2=$('#mm2').val();

    var zzbds=  /^[A-Za-z0-9]+$/;


    if( xm==='' || mm1===''  || mm2===''){
        alert('不能为空请输入字母或数字');
    }else{
        if(zzbds.test(xm) && xm.length>=6 && mm1.length<=12){
            if(zzbds.test(mm1) && mm1.length>=6 && mm1.length<=12){
                if(mm1===mm2){
                    localStorage.setItem('xm-aaa',xm);
                    localStorage.setItem('mm-123',mm2);
                    $('#xm').val('');
                    $('#mm1').val('');
                    $('#mm2').val('');
                    alert('注册成功');
                }else{
                    alert('密码两次要一样')
                }
            }else{
                alert('密码要数字和字母6-12之间')
            }
        }else{
            alert('帐号要数字和字母6-12之间')
        }
    }


    $('#in1').click(function(){
        $('#in1').val('');

    });
    $('#in2').click(function(){
        $('#in2').val('');

    });






});







    /*    $('#in1').click(function(){
     $('#in1').val('');
     });
     $('#in2').click(function(){
     $('#in2').val('');
     });
     $('#in4').click(function(){
     $('#in2').val('···');
     $('#in1').val('Name@Email');
     });*/































});
