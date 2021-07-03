$('.filter__item').click(function(event) {
	var i=$(this).data('filter');
	if (i==1) {
		$('.works__column').show();	
	}else{
		$('.works__column').hide();	
		$('.works__column.d-'+i).show();	
	}
	$('.filter__item').removeClass('active');
	$(this).addClass('active')
	return false;
});