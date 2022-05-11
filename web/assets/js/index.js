$(function(){
    getUserinfo()
    var layer = layui.layer

    // 点击按钮，实现退出功能
    $('#btnLogout').on('click', function() {
      // 提示用户是否确认退出
      layer.confirm('确定退出登录?', { icon: 3, title: '提示' }, function(index) {
        //do something
        // 1. 清空本地存储中的 token
        localStorage.removeItem('token')
        // 2. 重新跳转到登录页面
        location.href = '/web/login.html'
  
        // 关闭 confirm 询问框
        layer.close(index)
      })
    })
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

