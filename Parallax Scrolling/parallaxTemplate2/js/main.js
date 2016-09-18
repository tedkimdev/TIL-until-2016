$(document).ready(function(){

	TweenMax.set('.part3', {y: -572});

	// TweenMax.set(['.parts h2, .parts p'], {autoAlpha: 0});

	var bodyToStart = TweenMax.to('.part3', 1, {y: 0, ease:Linear.easeNone/*, paused: true*/});//element, duration, y,,,velo


	// Start ScrollMagic

	var controller = new ScrollMagic.Controller();

	var bodyToStartScene = new ScrollMagic.Scene({

		triggerElement: '.part1',
		triggerHook: 1,
		offset: 287,
		duration: 572
	})
		.setTween(bodyToStart)
		// .addIndicators()
		.addTo(controller);

	// TweenMax.set('.part4', {y: 289});
	// TweenMax.set('.part5', {y: 120});
	TweenMax.set('.part6', {y: -846});
	TweenMax.set('.part4', {y: -557}); /* 289 - 846 */
	TweenMax.set('.part5', {y: -726}); /* 120 - 846 */

	// Start ScrollMagic
	// Start Part 6
	var p6ToStart = TweenMax.to('.part6', 1, {y: 0, ease:Linear.easeNone});
	
	var p6ToStartScene = new ScrollMagic.Scene({
		triggerElement: '.part1',
		triggerHook: 1,
		offset: 1250,
		duration: 846
	})
		.setTween(p6ToStart)
		// .addIndicators()
		.addTo(controller);

	// Start Part 5
	var p5ToStart = TweenMax.to('.part5', 1, {y: 0, ease:Linear.easeNone});
	
	var p6ToStartScene = new ScrollMagic.Scene({
		triggerElement: '.part1',
		triggerHook: 1,
		offset: 1250,
		duration: 726
	})
		.setTween(p5ToStart)
		// .addIndicators()
		.addTo(controller);

	// Start Part 4
	var p4ToStart = TweenMax.to('.part4', 1, {y: 0, ease:Linear.easeNone});
	
	var p6ToStartScene = new ScrollMagic.Scene({
		triggerElement: '.part1',
		triggerHook: 1,
		offset: 1250,
		duration: 557
	})
		.setTween(p4ToStart)
		// .addIndicators()
		.addTo(controller);


	$('.parts li').each(function() {
		var scene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 0.55
		})
			.setClassToggle(this, 'fade-in')
			.addTo(controller);
	})
});
