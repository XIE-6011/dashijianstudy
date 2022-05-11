$(function() {     
    $.ajax({
        method: 'get',
            url:'/my/article/getqu',
            
            //请求头
         headers:{
        Authorization:localStorage.getItem('token')||''
    },
        success: function(res) {
                if (res.status !== 0) {
            return layer.msg('获取题目信息失败！')
            }
layui.use('table', function(){
var table = layui.table;

//第一个实例
table.render({
    elem: '#demo'
    ,height: 500
    ,width: 1000
    ,limits:[1,2,3,4,5,6,7,8,9]
    ,data:res.data //数据接口
    ,page: true //开启分页
    ,cols: [[ //表头
            {field: 'question_id', title: 'ID', width:80, sort: true, fixed: 'left'}
            ,{field: 'question_type', title: '题型', width:80}
            ,{field: 'question_course', title: '课程', width:80, sort: true}
            ,{field: 'question_name', title: '题目', width:80} 
            ,{field: 'question_opa', title: '选项a', width: 177}
            ,{field: 'question_opb', title: '选项b', width: 80, sort: true}
            ,{field: 'question_opc', title: '选项c', width: 80, sort: true}
            ,{field: 'question_opd', title: '选项d', width: 80}
            ,{field: 'question_opright', title: '正确答案', width: 135, sort: true}
    ]]
});

});      
}
})
        
 })