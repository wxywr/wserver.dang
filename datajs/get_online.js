/**
 * Created by hyly on 2017/4/19.
 */
var _data={}; //默认定义
var body = {};
window.onload=function(){
    var videos = [];
    for(var i=0;i<_data.data.children.length;i++){
        var child = _data.data.children[i];
        for(var j=0;j<child.children.length;j++){
            videos.push(child.children[j])
        }
    }
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
            "second":_data.second,
            "videos":videos
        },
        methods: {
            clicktest:function(id,mod,skin,linkUrl){
                if(linkUrl && linkUrl != ""){
                    location.href = url
                }else{
                    location.href = "HomeServlet?id="+id+"&mod="+mod+"&skin="+skin
                }

            },
            showVideo:function(html){
                jQuery('.alert').show().html(html);
                jQuery('.err').show();
                jQuery('.gray').show();
                jQuery('.v-list').show();
            },
            closeVideo:function(){
                 jQuery('.alert').hide().html('');
                 jQuery('.err').hide();
                 jQuery('.gray').hide();
            }
        }
    });

    var swiper = new Swiper('.swiper-container', {
        // pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 3,
        slidesPerColumn: 2,
        paginationClickable: true,
        spaceBetween: 30
    });
};
