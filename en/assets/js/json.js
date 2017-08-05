$(document).ready(function(){
	var obj = [
		{
	    "country_name": "中國",
	    "languages": [
	      "简体"
				
	    ],
	    "flag" : "flag-icon-cn"
	  },
		{
			"country_name": "台灣",
			"languages": [
				"繁体"
			],
			"flag": "flag-icon-tw"
		},
		{
			"country_name": "越南",
			"languages": [
				"VND"
			],
			"flag": "flag-icon-vn"
		},
		{
	    "country_name": "印尼",
	    "languages": [
	      "IDR"
	    ],
	    "flag" : "flag-icon-id"
	  },
		{
			"country_name": "馬來西亞",
			"languages": [
				"MYR"
			],
			"flag": "flag-icon-my"
		},
		{
			"country_name": "泰國",
			"languages": [
				"THP"
			],
			"flag": "flag-icon-th"
		},
		{
	    "country_name": "日本",
	    "languages": [
	      "JPY"
	    ],
	    "flag" : "flag-icon-jp"
	  },
	  {
	    "country_name": "印度",
	    "languages": [
	      "INR"
	    ],
	    "flag" : "flag-icon-in"
	  },
		{
	    "country_name": "美國",
	    "languages": [
	      "EN"
	    ],
	    "flag" : "flag-icon-um"
	  },
	];

	$(obj).each(function(k,v){
		$('#drop')
			.append('<div class="language-picker"><div class="grey" id="country'+k+'" data-value="'+k+'"><span class="flag-icon '+v.flag+'"></span><span class="cntry">'+ v.country_name + '</span><span class="language"></span></div></div>');

		$('#drop2ul')
			.append('<li><a href="javascript:void(0)" id="country2'+ k +'" data-value="'+ k +'"><span class="flag-icon '+v.flag+'"> </span> '+ v.country_name +'<span class="languages"></span></a></li>');
	});

	$('#drop .grey').each(function(){
		var divNum = $(this).attr('data-value');
		$(obj[divNum].languages).each(function(k,v){
			$('#country'+divNum+'>.language').append("<span class='language-span' style='margin-left: 25px; white-space: nowrap'> "+ v +"</span>");
		})
	});

	$('#drop2 li a').each(function(){
		var divNum = $(this).attr('data-value');
		$(obj[divNum].languages).each(function(k,v){
			console.log(k+' '+v);
			$('#country2'+divNum+' .languages').append('<span class="m-languages">'+ v +'</span>');
		})
	});

	// $('.grey').hover(function() {
	// 	$(this).css('color','#fba601');
	// }, function() {
	// 	$(this).css('color','#fff');
	// });

	$('.language-span, .cntry').hover(function() {
		$(this).css('color','#fba601');
	}, function() {
		$(this).css('color','#fff');
	})
});
