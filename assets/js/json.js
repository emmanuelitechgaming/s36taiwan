$(document).ready(function(){
	var obj = [
		{
	    "country_name": "中國",
	    "languages": [
	      "CNY"
	    ],
	    "flag" : "flag-icon-cn"
	  },

	  {
	    "country_name": "印度",
	    "languages": [
	      "INR"
	    ],
	    "flag" : "flag-icon-in"
	  },

	  {
	    "country_name": "印尼",
	    "languages": [
	      "IDR"
	    ],
	    "flag" : "flag-icon-id"
	  },
	  {
	    "country_name": "日本",
	    "languages": [
	      "JPY"
	    ],
	    "flag" : "flag-icon-jp"
	  },
		{
			"country_name": "馬來西亞",
			"languages": [
				"MYR"
			],
			"flag": "flag-icon-my"
		},
		{
			"country_name": "台灣",
			"languages": [
				"TWD"
			],
			"flag": "flag-icon-tw"
		},
		{
			"country_name": "泰國",
			"languages": [
				"THP"
			],
			"flag": "flag-icon-th"
		},
		{
			"country_name": "越南",
			"languages": [
				"VND"
			],
			"flag": "flag-icon-vn"
		}
	];

	$(obj).each(function(k,v){
		$('#drop')
			.append('<div class="language-picker"><div class="grey" id="country'+k+'" data-value="'+k+'"><span class="flag-icon '+v.flag+'"></span>'+ v.country_name + '<span class="language"></span></div></div>');

		$('#drop2ul')
			.append('<li><a href="#" id="country2'+ k +'" data-value="'+ k +'"><span class="flag-icon '+v.flag+'"> </span> '+ v.country_name +'<span class="languages"></span></a></li>');
	});

	$('#drop .grey').each(function(){
		var divNum = $(this).attr('data-value');
		$(obj[divNum].languages).each(function(k,v){
			$('#country'+divNum+'>.language').append("<span class='language-span' style='margin:0 10px;'> "+ v +"</span>");
		})
	});

	$('#drop2 li a').each(function(){
		var divNum = $(this).attr('data-value');
		$(obj[divNum].languages).each(function(k,v){
			console.log(k+' '+v);
			$('#country2'+divNum+' .languages').append('<span class="m-languages">'+ v +'</span>');
		})
	});

	$('.language-span').hover(function() {
		console.log($(this));
		$(this).css('color', '#fba601');
	}, function() {
		$(this).css('color', '#fff');
	});

	$('.grey').hover(function() {
		$(this).css('border-bottom','1px solid #fba601');
	}, function() {
		$(this).css('border-bottom','1px solid #e3e3e3');
	});
});
