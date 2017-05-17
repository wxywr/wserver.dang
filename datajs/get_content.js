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
                if(!$('.wxjz').is(":hidden")){
                    $('.wxjz').hide();
                }
                if($('.wei-left').is(":hidden")){
                    $('.wei-left').show();
                }
                if($('.wei-right').is(":hidden")){
                    $('.wei-right').show();
                }
                if($('div .white').is(":hidden")){
                    $('div .white').show();
                    $('div .white').html('<iframe style="width: 1153px;height: 912px;" src="' + path +'"></iframe>');
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

    // 我要参与
    jQuery('.join-content .slide-a').click(function(){
        jQuery('.join-alert').css('display','block');
        jQuery('.join-wro').css('display','block');
        jQuery('.join-pic').css('display','block');
        jQuery('.join-pic .j-a').css('display','block').siblings().css('display','none');
    });

    jQuery('.join-wro').click(function(){
        jQuery('.join-alert').css('display','none');
        jQuery('.join-wro').css('display','none');
        jQuery('.join-pic').css('display','none');

    });
    jQuery('.join-content .slide-b').click(function(){
        jQuery('.join-alert').css('display','block');
        jQuery('.join-wro').css('display','block');
        jQuery('.join-pic').css('display','block');
        jQuery('.join-pic .j-b').css('display','block').siblings().css('display','none');
    });
    jQuery('.join-content .slide-c').click(function(){
        jQuery('.join-alert').css('display','block');
        jQuery('.join-wro').css('display','block');
        jQuery('.join-pic').css('display','block');
        jQuery('.join-pic .j-c').css('display','block').siblings().css('display','none');
    });
    jQuery('.join-content .slide-d').click(function(){
        jQuery('.join-alert').css('display','block');
        jQuery('.join-wro').css('display','block');
        jQuery('.join-pic').css('display','block');
        jQuery('.join-pic .j-d').css('display','block').siblings().css('display','none');
    });
    jQuery('.join-content .slide-e').click(function(){
        jQuery('.join-alert').css('display','block');
        jQuery('.join-wro').css('display','block');
        jQuery('.join-pic').css('display','block');
        jQuery('.join-pic .j-e').css('display','block').siblings().css('display','none');
    });
    jQuery('.join-content .slide-f').click(function(){
        jQuery('.join-alert').css('display','block');
        jQuery('.join-wro').css('display','block');
        jQuery('.join-pic').css('display','block');
        jQuery('.join-pic .j-f').css('display','block').siblings().css('display','none');
    });
    jQuery('.join-content .slide-g').click(function(){
        jQuery('.join-alert').css('display','block');
        jQuery('.join-wro').css('display','block');
        jQuery('.join-pic').css('display','block');
        jQuery('.join-pic .j-g').css('display','block').siblings().css('display','none');
    });
    jQuery('.join-content .slide-h').click(function(){
        jQuery('.join-alert').css('display','block');
        jQuery('.join-wro').css('display','block');
        jQuery('.join-pic').css('display','block');
        jQuery('.join-pic .j-h').css('display','block').siblings().css('display','none');
    });
    jQuery('.join-content .slide-i').click(function(){
        jQuery('.join-alert').css('display','block');
        jQuery('.join-wro').css('display','block');
        jQuery('.join-pic').css('display','block');
        jQuery('.join-pic .j-i').css('display','block').siblings().css('display','none');
    });
    jQuery('.join-content .slide-j').click(function(){
        jQuery('.join-alert').css('display','block');
        jQuery('.join-wro').css('display','block');
        jQuery('.join-pic').css('display','block');
        jQuery('.join-pic .j-j').css('display','block').siblings().css('display','none');
    });
    jQuery('.join-content .slide-k').click(function(){
        jQuery('.join-alert').css('display','block');
        jQuery('.join-wro').css('display','block');
        jQuery('.join-pic').css('display','block');
        jQuery('.join-pic .j-k').css('display','block').siblings().css('display','none');
    });
    jQuery('.join-content .slide-l').click(function(){
        jQuery('.join-alert').css('display','block');
        jQuery('.join-wro').css('display','block');
        jQuery('.join-pic').css('display','block');
        jQuery('.join-pic .j-l').css('display','block').siblings().css('display','none');
    });
};
