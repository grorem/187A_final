/***********************************************************************************************************************
DOCUMENT: includes/javascript.js
DEVELOPED BY: Ryan Stemkoski
COMPANY: Zipline Interactive
EMAIL: ryan@gozipline.com
PHONE: 509-321-2849
DATE: 3/26/2009
UPDATED: 3/25/2010
DESCRIPTION: This is the JavaScript required to create the accordion style menu.  Requires jQuery library
NOTE: Because of a bug in jQuery with IE8 we had to add an IE stylesheet hack to get the system to work in all browsers. I hate hacks but had no choice :(.
************************************************************************************************************************/
$(document).ready(function() {
	 
	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton1').mouseover(function() {
	

		//REMOVE THE ON CLASS FROM ALL BUTTONS
		
		
		$('.accordionButton2').removeClass('on');
		$('.accordionButton3').removeClass('on');
		$('.accordionButton4').removeClass('on');
		  
		//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	 	
		$('.accordionContent2').slideUp('normal');
		$('.accordionContent3').slideUp('normal');
		$('.accordionContent4').slideUp('normal');
   
		//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
		if($(this).next().is(':hidden') == true) {
			
			//ADD THE ON CLASS TO THE BUTTON
			$(this).addClass('on');
			  
			//OPEN THE SLIDE
			$(this).next().slideDown('normal');
		 } 
		  
	 });
	 
	 //ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton2').mouseover(function() {
	

		//REMOVE THE ON CLASS FROM ALL BUTTONS
		
		$('.accordionButton1').removeClass('on');
		
		$('.accordionButton3').removeClass('on');
		$('.accordionButton4').removeClass('on');
		  
		//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	 	$('.accordionContent1').slideUp('normal');
		
		$('.accordionContent3').slideUp('normal');
		$('.accordionContent4').slideUp('normal');
   
		//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
		if($(this).next().is(':hidden') == true) {
			
			//ADD THE ON CLASS TO THE BUTTON
			$(this).addClass('on');
			  
			//OPEN THE SLIDE
			$(this).next().slideDown('normal');
		 } 
		  
	 });
	 
	 //ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton3').mouseover(function() {
	

		//REMOVE THE ON CLASS FROM ALL BUTTONS
		
		  $('.accordionButton1').removeClass('on');
		$('.accordionButton2').removeClass('on');
		
		$('.accordionButton4').removeClass('on');
		//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	 	$('.accordionContent1').slideUp('normal');
		$('.accordionContent2').slideUp('normal');
		
		$('.accordionContent4').slideUp('normal');
   
		//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
		if($(this).next().is(':hidden') == true) {
			
			//ADD THE ON CLASS TO THE BUTTON
			$(this).addClass('on');
			  
			//OPEN THE SLIDE
			$(this).next().slideDown('normal');
		 } 
		  
	 });
	 
	 //ACCORDION BUTTON ACTION (ON mouseover DO THE FOLLOWING)
	$('.accordionButton4').mouseover(function() {
	

		//REMOVE THE ON CLASS FROM ALL BUTTONS
		$('.accordionButton1').removeClass('on');
		$('.accordionButton2').removeClass('on');
		$('.accordionButton3').removeClass('on');
		
		
		  
		//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	 	$('.accordionContent1').slideUp('normal');
		$('.accordionContent2').slideUp('normal');
		$('.accordionContent3').slideUp('normal');
		
   
		//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
		if($(this).next().is(':hidden') == true) {
			
			//ADD THE ON CLASS TO THE BUTTON
			$(this).addClass('on');
			  
			//OPEN THE SLIDE
			$(this).next().slideDown('normal');
		 } 
		  
	 });
	  
	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton1').mouseover(function() {
		$(this).addClass('over');
		
		
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	/*** END REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	
	/********************************************************************************************************************
	CLOSES ALL S ON PAGE LOAD
	********************************************************************************************************************/	
	$('.accordionContent1').hide();
	$('.accordionContent2').hide();
	$('.accordionContent3').hide();
	$('.accordionContent4').hide();

});
