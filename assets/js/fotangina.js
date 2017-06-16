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

		];

		$(obj).each(function(k,v){
			$('#drop')
				.append('<div class="container"><div class="grey" id="country'+k+'" data-value="'+k+'"><span class="flag-icon '+v.flag+'"></span>'+ v.country_name + '<span class="language"></span></div></div>');
		});

		$('div.grey').each(function(){
			console.log($(this).attr('data-value'));

			var divNum = $(this).attr('data-value');

			$(obj[divNum].languages).each(function(k,v){
				$('#country'+divNum+'>.language').append('<span style="margin:0 10px;"> '+ v +'</span>');
			})

		});



	});
