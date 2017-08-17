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
            showWei:function(path){
                if(!jQuery('.wxjz').is(":hidden")){
                    jQuery('.wxjz').hide();
                }
                if(jQuery('.wei-left').is(":hidden")){
                    jQuery('.wei-left').show();
                }
                if(jQuery('.wei-right').is(":hidden")){
                    jQuery('.wei-right').show();
                }
                if(jQuery('div .white').is(":hidden")){
                    jQuery('div .white').show();
                    jQuery('div .white').html('<iframe style="width: 1153px;height: 912px;" src="' + path +'"></iframe>');
                }
            },
            showOther:function(path){
                jQuery('div .white').html('<iframe style="width: 1153px;height: 912px;" src="' + path +'"></iframe>');
            },
            showDangJian:function(el){
                console.log(el.target.parentNode);
                jQuery('.fc').show();
                jQuery('.fc-bai').show();
                jQuery('.fcc').show();
            },
            showList:function(){
                jQuery('.djfc-list').show();
                jQuery('.keji').show(); 
            },
            showMap:function(){
                jQuery('.map-list').show();
                jQuery('.map-bai').show(); 
            },
            showDangjianCont:function(html){
                jQuery('.datu').show().html(html);
                jQuery('.all').show();
                jQuery('.cuo').show();
            },
            close:function(){
                jQuery('.all').hide();
                jQuery('.cuo').hide();
                jQuery('.datu').html('').hide();
            }
        }
    });
    var m=0;
    jQuery('.fc-two').click(function(){
        var index = jQuery(this).index();
        m=index;
        tabs();
    });
    function tabs(){
        jQuery('.fc-two').eq(m).css({'color':'#cc0100','fontWeight':'bold','border':'2px dashed #ccc','borderWidth':'2px 0'}).siblings().css({'color':'#333','fontWeight':'normal','border':'none'});
        jQuery('.fc-bai .four').eq(m).css('display','block').siblings().css('display','none');
    }
    jQuery('.five .five-d').click(function(){
        jQuery('.fc').css('display','block');
        jQuery('.fc .li').css({'color':'#cc0100','fontWeight':'bold','border':'2px dashed #ccc','borderWidth':'2px 0'});
        jQuery('.fc-bai').css('display','block');
        jQuery('.fc-bai .vitality').css('display','block').siblings().css('display','none');

    });
};
