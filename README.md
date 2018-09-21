# MoGo
WebDev Challange #35 - MoGo


## To do:
- fix underline in menu item - done // getBoundingClientRect changed to offsetLeft (probably unnecessary - error was because of style/js loading order)
- fix width of underline at start / width 40 should be 46 / - done //  js was loading before css. Adding window.onload into DOMContentLoaded fixed the problem
- underline moves depending on section - done // using offsetHeight, value of the end of the page is provided, that allows to trigger contact underline
- padding in subscribe - done // added prefixes to handle all browsers //
- lower resolution of pictures - done
- make css for scroll for ff and ie
- sliders - done // one function supports all sliders ;)
- overlay for pictures hover - done 
- mobile version - done
- add autoprefixer - done 
- W3C Validation - done 
- in section "story about us" add counter for digits - done // starts when top of the section appears on screen
- add alt's to img - done 
- added "use strict" to script.js - done
- added simple preloader - done
- developers.google.com/speed/docs/insights/ - done
- add loop into sliders and drag event
- convert sliders to be draggable
- make iphone to slide in while on screen
- change section "SOME OF OUR WORK" from grid to flex to support layout on IE, Safari etc...
- Minifying files - done
- add babel - done
- make it look good on iphone in safari and chrome - done

- note for future projects - use more img instead of background-image of div's, it will allow to put alt on img (accessibility))
