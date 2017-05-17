/**
 * Created by hyly on 2017/4/19.
 */
var _data={}; //默认定义
var body = {};
window.onload=function(){
    getFaceImgs();

    var title = new Vue({
        el:"#title",
        data:{
            "contName":_data.data.contName
        }
    });
    body = new Vue({
        el:"#body",
        data:{
            "modId": _data.modId,
            "mod": _data.mod,
            "data":_data.data,
            "req_ip":_data.req_ip,
            "req_mac":_data.req_mac,
            "req_head":_data.req_head,
            "sync_gx_index_downFiles":_data.configs.sync_gx_index_downFiles?eval("("+_data.configs.sync_gx_index_downFiles+")"):"",
            "phoneFlag":_data.phoneFlag,
            "modName":_data.modName,
            "skin":_data.skin,
            "second":_data.second
        },
        methods: {
            clicktest:function(id,mod,skin,linkUrl){
                if(linkUrl && linkUrl != ""){
                    location.href = url
                }else{
                    location.href = "HomeServlet?id="+id+"&mod="+mod+"&skin="+skin
                }
            }
        }
    });

    //var v = document.querySelector('.view');
    //var un = document.querySelector('.p-left .under-b');
    //var err = document.querySelector('.view .no');
    //un.onclick = function () {
    //    v.style.display = 'block';
    //    jQuery("#NetVideoX1").hide();
    //};
    //err.onclick = function () {
    //    v.style.display = 'none';
    //    jQuery("#NetVideoX1").show();
    //};

    //点击切换拍照、重拍
    //var n = 0;
    //var ua = document.querySelector('.l-under .under-a');
    //ua.onclick=function(){
    //    if(this.style.backgroundPosition=='155px -95px'){
    //        this.style.backgroundPosition='155px 15px';
    //        n=1;
    //    }else{
    //        this.style.backgroundPosition='155px -95px';
    //        n=0;
    //    }
    //};

    // 点击楼层切换颜色
    // var p = document.querySelectorAll('.view p');
    // for (var i = 0; i < p.length; i++) {
    //     p[i].index = i;
    //     p[i].onclick = function () {
    //         for (var j = 0; j < p.length; j++) {
    //             p[j].style.color = '#333';
    //         }
    //         this.style.color = '#0199fd';
    //     }
    // }
    setTimeout(function(){start()},2000);
};
