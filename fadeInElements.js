//You can pass two options - "fadeDuration and fadePosition".  Fadeposition lets you trigger the fade higher up the page....it's given in percents of the window height. 
// make sure to set the opacity of the .triggerFade class to "0" in your css.
// usage $('.triggerFade').fadeInElements();
// $('yourElements').fadeInElements({
// 		fadeDuration: 5000,
//  	fadePosition: 25
// });
//fade position doesn't work quite right

(function ( $ ) {
	var fadeInElementsObject =  {
		alreadyFaded: [],
		//when scroll position hits bottom only trigger fadeAll once
		fadeAllTriggered: "no",
	};

    $.fn.fadeInElements = function(options) {
    	//default settings
    	var settings = $.extend({
            fadeDuration: 2000,
            fadePosition: 0
        }, options );
    	var elements = this;
        var fadeElements = {
        	//fadePosition changes the start of when an element will fade in
        	fadePosition: (window.innerHeight) * (settings.fadePosition / 100 ),
			//length of fade
			fadeTime: settings.fadeDuration,
			//elements to fade in
			elementsToFadeIn: elements,
			initialLength: elements.length,
			fadeStuff: function() {
				//gets the max value from alreadyFaded and subtracts that from initialLength.  Use this to fadein elements at the bottom of the page when scrolled to bottom and using the 'fadePosition' option
				var elemsNotFadedInLength = (this.initialLength) - (Math.max.apply(null, fadeInElementsObject.alreadyFaded));
				
				//current element to look for distance from top of document
				var currentElement;
				//distance from top of element to top of document
				var distanceToTop;
				//scroll position
				var scrollPosition;
				//if all of the fadein elements aren't showing yet check for them on scroll..otherwise bypass this to save computing
				if (fadeInElementsObject.alreadyFaded.length < this.initialLength) {
					console.log('testing testing 1');
					//for loop to go through all of elements and see if they are within view
					for (var i = 0; i < this.initialLength; i++) {
						//if you have already shown element continue on 
						if (fadeInElementsObject.alreadyFaded.indexOf(i) > -1) continue;
						//grab the first element in array
						currentElement = this.elementsToFadeIn.eq(i);
						//get distance from top of element to top of document
						distanceToTop = currentElement.offset().top;
						//current scroll position
						scrollPosition = $(window).scrollTop();
						//if scroll position is greater than distance to top fadein element
						if (distanceToTop < scrollPosition + window.innerHeight - this.fadePosition) {
							currentElement.fadeTo(this.fadeTime, 1);
							fadeInElementsObject.alreadyFaded.push(i);
						}//end if
					}//end for	
				}//end if
			}//end fadestuff function
		};//end fadeelements Object
		fadeElements.fadeStuff();
    };//end fadeinelements function
}( jQuery ));