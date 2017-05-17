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
            // showChildren:function(){
            //     console.log('clicked');
            //     jQuery('.seven').show();
            //     jQuery('.read-s').show();
            // },
            showBook:function(uri){
                jQuery('.aler').show();
                jQuery('.er').show();
                jQuery('.meng').show();
               jQuery('.aler').html('<iframe style="width: 1615px;border: none;height: 912px;" src="'+uri+'"></iframe>');
            },
            closeBook:function(){
                jQuery('.aler').hide();
                jQuery('.er').hide();
                jQuery('.meng').hide();
                jQuery('.aler').html('');
            }
        }
    });


    var s=0;
    jQuery('.seven .lei').click(function(){
        var index = jQuery(this).index();
        s=index;
        tabss();
    });
    function tabss(){
        jQuery('.seven .lei').eq(s).css('color','#cc0100').siblings().css('color','#333');
        jQuery('.read-s .container').eq(s).css('display','block').siblings().css('display','none');
    }

    var swipers = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 4,
        spaceBetween: 50,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
    // 我爱阅读
    jQuery('.read .slide-a').click(function(){
        jQuery('.read-s').css('display','block');
        jQuery('.seven').css('display','block');
        jQuery('.read-s .du-a').css('display','block').siblings().css('display','none');
        jQuery('.seven .lei-a').css({'color':'#cc0100'});
    })
    jQuery('.read .slide-b').click(function(){
        jQuery('.read-s').css('display','block');
        jQuery('.seven').css('display','block');
        jQuery('.read-s .du-b').css('display','block').siblings().css('display','none');
        jQuery('.seven .lei-b').css({'color':'#cc0100'});
    })
    jQuery('.read .slide-c').click(function(){
        jQuery('.read-s').css('display','block');
        jQuery('.seven').css('display','block');
        jQuery('.read-s .du-c').css('display','block').siblings().css('display','none');
        jQuery('.seven .lei-c').css({'color':'#cc0100'});
    })
    jQuery('.read .slide-d').click(function(){
        jQuery('.read-s').css('display','block');
        jQuery('.seven').css('display','block');
        jQuery('.read-s .du-d').css('display','block').siblings().css('display','none');
        jQuery('.seven .lei-d').css({'color':'#cc0100'});
    })
    jQuery('.read .slide-e').click(function(){
        jQuery('.read-s').css('display','block');
        jQuery('.seven').css('display','block');
        jQuery('.read-s .du-e').css('display','block').siblings().css('display','none');
        jQuery('.seven .lei-e').css({'color':'#cc0100'});
    })
    jQuery('.read .slide-f').click(function(){
        jQuery('.read-s').css('display','block');
        jQuery('.seven').css('display','block');
        jQuery('.read-s .du-f').css('display','block').siblings().css('display','none');
        jQuery('.seven .lei-f').css({'color':'#cc0100'});
    })
    jQuery('.read .slide-g').click(function(){
        jQuery('.read-s').css('display','block');
        jQuery('.seven').css('display','block');
        jQuery('.read-s .du-g').css('display','block').siblings().css('display','none');
        jQuery('.seven .lei-g').css({'color':'#cc0100'});
    })
    jQuery('.read .slide-h').click(function(){
        jQuery('.read-s').css('display','block');
        jQuery('.seven').css('display','block');
        jQuery('.read-s .du-h').css('display','block').siblings().css('display','none');
        jQuery('.seven .lei-h').css({'color':'#cc0100'});
    })
};
