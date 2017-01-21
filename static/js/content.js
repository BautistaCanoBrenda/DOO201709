function loadContent(dataContent) { 
	$.ajax({
			url: '../lessons/' + dataContent + '/index.html',
			type: 'get',
			dataType: 'html',
			async: false,
			success: function(html) {
				$('section').empty().html(html);
			}
        });
}

$(function() {
	$('.content-table a').on('click', function() {
		var dataContent = $(this).data('content');
		loadContent(dataContent);
	});

	loadContent('references');
});
