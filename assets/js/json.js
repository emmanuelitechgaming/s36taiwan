$(document).ready(function(){
	var obj = [
		{
	    "country_name": "Australia",
	    "languages": [
	      "English"
	    ],
	    "flag" : "flag-icon-au"
	  },

	  {
	    "country_name": "Mexico",
	    "languages": [
	      "Méjico",
	      "English"
	    ],
	    "flag" : "flag-icon-mx"
	  },

	  {
	    "country_name": "Việt Nam",
	    "languages": [
	      "Việt Nam",
	      "English"
	    ],
	    "flag" : "flag-icon-vn"
	  },
	  {
	    "country_name": "Brazil",
	    "languages": [
	      "Brazil",
	      "English"
	    ],
	    "flag" : "flag-icon-br"
	  },
		{
			"country_name": "New Zealand",
			"languages": [
				"Aotearoa",
				"English"
			],
			"flag": "flag-icon-nz"
		},
		{
			"country_name": "ไทย",
			"languages": [
				"ประเทศไทย",
				"English"
			],
			"flag": "flag-icon-th"
		},
		{
			"country_name": "Indonesia",
			"languages": [
				"Indonesia",
				"English"
			],
			"flag": "flag-icon-id"
		},
		{
			"country_name": "Philippines",
			"languages": [
				"Filipino",
				"English"
			],
			"flag": "flag-icon-ph"
		},
		{
			"country_name": "대한민국",
			"languages": [
				"대한민국",
				"English"
			],
			"flag": "flag-icon-kr"
		},
		{
			"country_name": "香港特別行政區",
			"languages": [
				"香港",
				"English"
			],
			"flag": "flag-icon-hk"
		},
		{
			"country_name": "Malaysia",
			"languages": [
				"Malaysia",
				"English"
			],
			"flag": "flag-icon-my"
		},
		{
			"country_name": "Singapore",
			"languages": [
				"香港",
				"English"
			],
			"flag": "flag-icon-sg"
		},
		{
			"country_name": "台灣",
			"languages": [
				"香港",
				"English"
			],
			"flag": "flag-icon-tw"
		},
		{
			"country_name": "日本",
			"languages": [
				"日本",
				"English"
			],
			"flag": "flag-icon-jp"
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
	})
});
