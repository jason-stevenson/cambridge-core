$( document ).ready(function() {

	// EOC
 	// ================================================================
	$('.eoc').wrapInner('<div class="page-content"></div>');


	// Download button
	$('.eoc .download a').html('<div class="icon-doc-solid"></div><div>Download</div>');


	// Panels
	$('.square-panel .download a').html('<div class="icon-doc-solid"></div><div>Download</div>');


	// Lighbox / Modal
	// ================================================================
	$('<span class="icon-search"></span>').insertAfter('figure a[data-reveal-id] img');

});