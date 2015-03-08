# Fade-in-Elements-Scroll
A jquery plugin to fade in elements on scroll

<h2>Description</h2>

This jquery plugin allows you to fade in elements as you scroll down the page. 

<h2>Demo</h2>
- No options:
http://jsfiddle.net/john23/p4xre4up/7/

- fadeDuration set to 1000 and fadePosition set to 25:
http://jsfiddle.net/john23/e8wfk0gn/3/

<h2>Options</h2>

There are two options: "fadeDuration" and "fadePosition" which you can pass into the fadeInElements function.  Fadeduration, like the name suggests, is just the time it takes your elements to fade in (ms).  Fadeposition allows you to adjust when your elements fade in as you scroll down the page.  It is given in a percentage of the window inner height.  For instance, if you pass in "25" the elements will begin to fade in when they hit 25% of the window height from the bottom of the screen.  All elements that are to fade in need their css opacity set to "0". 

<h2>Usage</h2>

<h3>Script tag</h3>
Include a script tag in your HTML to reference the plugin:

```
<script src = "fadeInElements.js"></script>

```


<h3> Javascript: </h3>

Basic usage:

```
$('yourElements').fadeInElements();

```
options:

```
$('yourElements').fadeInElements({
	fadeDuration: 5000,
 	fadePosition: 25
});

```

<h3> CSS: </h3>

```
yourelements {
  opacity: 0;
}

```




