$(document).ready(function(){
	var obj = [
		{
			'country_name': '中国',
			'languages': [
				'簡体中文'
			],
			'flag': 'flag-icon-cn'
		},
		{
			'country_name': '台灣',
			'languages': [
				'繁體中文'
			],
			'flag': 'flag-icon-tw'
		},
		{
			'country_name': '日本国',
			'languages': [
				'日本語'
			],
			'flag': 'flag-icon-jp'
		},
		{
			'country_name': 'UK',
			'languages': [
				'English'
			],
			'flag': 'flag-icon-um'
		},
		{
			'country_name': 'Vietnam',
			'languages': [
				'Tiếng Việt'
			],
			'flag': 'flag-icon-vn'
		},
		{
			'country_name': 'Indonesia',
			'languages': [
				'Bahasa'
			],
			'flag': 'flag-icon-id'
		},
		{
			'country_name': 'Malaysia',
			'languages': [
				'English',
				'中文'
			],
			'flag': 'flag-icon-my'
		},
		{
			'country_name': 'ไทย',
			'languages': [
				'ภาษาไทย'
			],
			'flag': 'flag-icon-th'
		},
		{
			'country_name': 'India',
			'languages': [
				'हिन्दी'
			],
			'flag': 'flag-icon-in'
		}
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
