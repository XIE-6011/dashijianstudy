$(function(){
    getUserinfo()
})
 //获取用户信息
 function getUserinfo(){
 $.ajax({
     method:'get',
     url:'/my/userinfo',
     //请求头
     headers:{
         Authorization:localStorage.getItem('token')||''
     },
     success:function(res){
         console.log(res)
         if(res.status!==0){
             return layui.layer.msg('获取用户信息失败')
         }

         randerAvatar(res.data)
     }
 })
 }

 function randerAvatar(user){
     $('#welcom').html('欢迎&nbsp;'+ user.student_name)
 }

