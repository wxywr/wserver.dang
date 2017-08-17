/**
 * Created by hyly on 2017/4/19.
 */
var _data={}; //默认定义
var body = {};
window.onload=function(){
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
            },
            showChildren:function(){
                console.log('clicked');
                jQuery('.seven').show();
                jQuery('.read-s').show();
            },
            showBook:function(uri,me){
                jQuery('.keji').html('<iframe style="width: 1392px;border: none;height: 912px;" src="'+uri+'"></iframe>');
                me.target.style.color="#cc0100";
                var p = me.target.parentNode.children;
                for(var i =0,pl= p.length;i<pl;i++) {
                    if(p[i] !== me.target){
                        p[i].style.color="#333";
                    }
                }
            },
            closeBook:function(){
                jQuery('.aler').hide().html('');
                jQuery('.er').hide();
                jQuery('.meng').hide();
            },
            showList:function(){
                jQuery('.djfc-list').show();
                jQuery('.keji').show().html('<iframe style="width: 1392px;border: none;height: 912px;" src="data-01/books/dangjianfuwu/djfwsc01/index.html"></iframe>');
            }
        }
    });
};
