jQuery(function(){
	jQuery('.round li').eq(0).css('background','#3d3b37').siblings().css('background','#c9c9c9');
	jQuery('.hots p').eq(0).css('color','#cc0100').siblings().css('color','#333');
	// jQuery('.seven .lei').eq(0).css('color','#cc0100').siblings().css('color','#333');
	// jQuery('.fc .fc-two').eq(0).css({'color':'#cc0100','fontWeight':'bold','border':'2px dashed #ccc','borderWidth':'2px 0'}).siblings().css({'color':'#333','fontWeight':'normal','border':'none'});
	jQuery('.fcc div').eq(0).css('color','#cc0100').siblings().css('color','#333');
	jQuery('.fc-three').eq(0).css('color','#cc0100').siblings().css('color','#333');
	jQuery('.jzhi').eq(0).css('color','#cc0100').siblings().css('color','#333');
	jQuery('.yilin').eq(0).css('color','#cc0100').siblings().css('color','#333');
	jQuery('.chuang').eq(0).css('color','#cc0100').siblings().css('color','#333');
	// jQuery('.djfc-list .lists').eq(0).css('color','#cc0100').siblings().css('color','#333');
	jQuery('.mapp').eq(0).css('color','#cc0100').siblings().css('color','#333');

	var n=0;
	jQuery('.fc-three').click(function(){
		var index = jQuery(this).index();
		n=index;
		tab();
	});
	function tab(){
		jQuery('.fc-three').eq(n).css('color','#cc0100').siblings().css('color','#333');
		jQuery('.pic .picture').eq(n).css('display','block').siblings().css('display','none');
	}

	var y=0;
	jQuery('.jzhi').click(function(){
		var index = jQuery(this).index();
		y=index;
		tabsss();
	});
	function tabsss(){
		jQuery('.jzhi').eq(y).css('color','#cc0100').siblings().css('color','#333');
		jQuery('.wu').eq(y).css('display','block').siblings().css('display','none');
	}

	var z=0;
	jQuery('.yilin').click(function(){
		var index = jQuery(this).index();
		z=index;
		tabssss();
	});
	function tabssss(){
		jQuery('.yilin').eq(z).css('color','#cc0100').siblings().css('color','#333');
		jQuery('.ling').eq(z).css('display','block').siblings().css('display','none');
	}

	var p=0;
	jQuery('.chuang').click(function(){
		var index = jQuery(this).index();
		p=index;
		tabssssa();
	});
	function tabssssa(){
		jQuery('.chuang').eq(p).css('color','#cc0100').siblings().css('color','#333');
		jQuery('.nine').eq(p).css('display','block').siblings().css('display','none');
	}

	// 党建服务
	// jQuery('.feng .feng-a').click(function(){
	// 	jQuery('.keji').css('display','block');
	// 	jQuery('.djfc-list').css('display','block');
	// 	jQuery('.djfc-a').css({'color':'#cc0100'});
	// })
	// jQuery('.feng .feng-b').click(function(){
	// 	jQuery('.keji').css('display','block');
	// 	jQuery('.djfc-list').css('display','block');
	// 	jQuery('.djfc-b').css({'color':'#cc0100'});
	// 	jQuery('.keji .b').css('display','block').siblings().css('display','none');
	// })
	// jQuery('.feng .feng-c').click(function(){
	// 	jQuery('.keji').css('display','block');
	// 	jQuery('.djfc-list').css('display','block');
	// 	jQuery('.djfc-c').css({'color':'#cc0100'});
	// 	jQuery('.keji .c').css('display','block').siblings().css('display','none');
	// })
	// jQuery('.feng .feng-d').click(function(){
	// 	jQuery('.keji').css('display','block');
	// 	jQuery('.djfc-list').css('display','block');
	// 	jQuery('.djfc-d').css({'color':'#cc0100'});
	// 	jQuery('.keji .d').css('display','block').siblings().css('display','none');
	// })
	

	// 党建风采
	jQuery('.five .five-a').click(function(){
		jQuery('.fc').css('display','block');
		jQuery('.fc-bai').css('display','block');
		jQuery('.fc .ge').css({'color':'#cc0100','fontWeight':'bold','border':'2px dashed #ccc','borderWidth':'2px 0'});
		
	});
	jQuery('.five .five-b').click(function(){
		jQuery('.fc').css('display','block');
		jQuery('.fc .he').css({'color':'#cc0100','fontWeight':'bold','border':'2px dashed #ccc','borderWidth':'2px 0'});
		jQuery('.fc-bai').css('display','block');
		jQuery('.fc-bai .fuse').css('display','block').siblings().css('display','none');
		
	});
	jQuery('.five .five-c').click(function(){
		jQuery('.fc').css('display','block');
		jQuery('.fc .yy').css({'color':'#cc0100','fontWeight':'bold','border':'2px dashed #ccc','borderWidth':'2px 0'});
		jQuery('.fc-bai').css('display','block');
		jQuery('.fc-bai .guide').css('display','block').siblings().css('display','none');
		
	});
	
	jQuery('.view .close-img').click(function(){
		jQuery('.tan').css('display','none');
	});

	// jQuery('.bg-img div').click(function(){
	// 	jQuery(this).css('border','3px solid red').siblings().css('border','none');
	// })

	// 小人
	jQuery('.view .yi').click(function(){
		jQuery('.view .people').animate({left:'200px'},1000);
		jQuery('.view .one').css({'color':'#0199FD'}).siblings().css('color','#333');
	})
	jQuery('.view .tu').click(function(){
		jQuery('.view .people').animate({left:'830px'},1000);
		jQuery('.view .two').css({'color':'#0199FD'}).siblings().css('color','#333');
	})
	jQuery('.view .sa').click(function(){
		jQuery('.view .people').animate({left:'1450px'},1000);
		jQuery('.view .three').css({'color':'#0199FD'}).siblings().css('color','#333');
	})

	//创智坊社区睦邻中心
	//----------1F
	jQuery('.floor-aa').click(function(){
		setTimeout(function(){
			jQuery('.tan').css('display','block');
			jQuery('.see-j').css('display','block').siblings().css('display','none');
		},1000)
	});
	jQuery('.floor-ab').click(function(){
		setTimeout(function(){
			jQuery('.tan').css('display','block');
			jQuery('.see-i').css('display','block').siblings().css('display','none');
		},1000)
	});
	jQuery('.floor-ac').click(function(){
		setTimeout(function(){
			jQuery('.tan').css('display','block');
			jQuery('.see-k').css('display','block').siblings().css('display','none');
		},1000)
	});
	jQuery('.floor-ad').click(function(){
		setTimeout(function(){
			jQuery('.tan').css('display','block');
			jQuery('.see-b').css('display','block').siblings().css('display','none');
		},1000)
	});
	jQuery('.floor-ae').click(function(){
		setTimeout(function(){
			jQuery('.tan').css('display','block');
			jQuery('.see-d').css('display','block').siblings().css('display','none');
		},1000)
	});
	//----------2F
	jQuery('.floor-ba').click(function(){
		setTimeout(function(){
			jQuery('.tan').css('display','block');
			jQuery('.see-c').css('display','block').siblings().css('display','none');
		},1000)
	});
	jQuery('.floor-bb').click(function(){
		setTimeout(function(){
			jQuery('.tan').css('display','block');
			jQuery('.see-e').css('display','block').siblings().css('display','none');
		},1000)
	});
	jQuery('.floor-bc').click(function(){
		setTimeout(function(){
			jQuery('.tan').css('display','block');
			jQuery('.see-p').css('display','block').siblings().css('display','none');
		},1000)
	});
	jQuery('.floor-be').click(function(){
		setTimeout(function(){
			jQuery('.tan').css('display','block');
			jQuery('.see-a').css('display','block').siblings().css('display','none');
		},1000)
	});
	jQuery('.floor-bg').click(function(){
		setTimeout(function(){
			jQuery('.tan').css('display','block');
			jQuery('.see-f').css('display','block').siblings().css('display','none');
		},1000)
	});
	//----------3F
	jQuery('.floor-ca').click(function(){
		setTimeout(function(){
			jQuery('.tan').css('display','block');
			jQuery('.see-n').css('display','block').siblings().css('display','none');
		},1000)
	});
	jQuery('.floor-cb').click(function(){
		setTimeout(function(){
			jQuery('.tan').css('display','block');
			jQuery('.see-o').css('display','block').siblings().css('display','none');
		},1000)
	});
	jQuery('.floor-cc').click(function(){
		setTimeout(function(){
			jQuery('.tan').css('display','block');
			jQuery('.see-g').css('display','block').siblings().css('display','none');
		},1000)
	});
	jQuery('.floor-cd').click(function(){
		setTimeout(function(){
			jQuery('.tan').css('display','block');
			jQuery('.see-h').css('display','block').siblings().css('display','none');
		},1000)
	});
	jQuery('.floor-ce').click(function(){
		setTimeout(function(){
			jQuery('.tan').css('display','block');
			jQuery('.see-m').css('display','block').siblings().css('display','none');
		},1000)
	});

	//感知拍照欢迎词
	jQuery('.welcome').animate({'right':'1146px'},8000);

	setInterval(function(){
        jQuery('.welcome').fadeOut();
    },9000);

});