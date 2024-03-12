// Update the scroll position on the page
window.addEventListener('scroll', e => {
	// Set the CSS variable '--scrollTop' to the current scrollY position
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`)
})
// Register the ScrollTrigger plugin and ScrollSmoother
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
// Create a new ScrollSmoother instance
ScrollSmoother.create({
	// Define the wrapper element
	wrapper: '.wrapper',
	// Define the content element
	content: '.content'
})