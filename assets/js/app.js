$(document).ready(function() {
	var timeLineArray = {};
	$('.container').on('click', timeLineArray, function(event) {
		if (event.data.elem && !$(event.data.elem).is(this)) {
			$('#hide_tm').trigger('click');
		} else if (event.data.elem && event.data.elem.is(this)) {
			return false;
		}
		event.data.elem = parent;
		event.data.tm = showContent(this);
	});

	$('#hide_tm').click(function() {
		if (timeLineArray.elem) {
			timeLineArray.tm.timeScale(1.5).reverse();
			timeLineArray.elem = undefined;
		}
	});
});

function showContent(parent) {
	var elementStack = [];
	$(parent).find('.card-holder').each(function(index, elem) {
		elementStack.unshift(elem);
	});

	var t1 = new TimelineLite({paused: true});
	for (var i=0, len=elementStack.length; i<len; i++) {
		t1.to(elementStack[i], 0.5, {css: {'marginLeft': (len - i - 1) * 25, rotation: (len - i - 1) * 2}}, i * 0.2)
		.to(elementStack[i], 0.1, {css: {'marginLeft': (len - i - 1) * 30, rotation: 0}});
	}
	t1.play();
	return t1;
}