$(document).ready(function(){
	var controller = new ScrollMagic.Controller();
	// Scene 1 - pin the second section
	var pinScene01 = new ScrollMagic.Scene({
	    triggerElement: '#slide01',
	    triggerHook: 0,//좌표
	    duration: '100%'//지속되는 y축 길이
	})
	.setPin('#slide01 .pin-wrapper')//어떤 지점 고정
	// .addIndicators()
	.addTo(controller);

	// Scene 2 - pin the second section
	var pinScene02 = new ScrollMagic.Scene({
	    triggerElement: '#slide01',
	    triggerHook: 0,
	    duration: '200%'
	})
	.setPin('#slide02 .pin-wrapper')
	// .addIndicators()
	.addTo(controller);

	// Scene 3 - pin the second section
	var pinScene03 = new ScrollMagic.Scene({
	    triggerElement: '#slide02',
	    triggerHook: 0,
	    duration: '200%'
	})
	.setPin('#slide03 .pin-wrapper')
	.addIndicators()
	.addTo(controller);

	// Scene 4 - pin the second section
	var pinScene04 = new ScrollMagic.Scene({
	    triggerElement: '#slide03',
	    triggerHook: 0,
	    duration: '100%'
	})
	.setPin('#slide04 .pin-wrapper')
	.addIndicators()
	.addTo(controller);
});
