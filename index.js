

function watchSubmit() {
  $('.js-about-link').click(event => 
  {
  	deactivateAllTabs();
  	hideAllSections();
   
    
    $('.js-about-link').addClass("active");

    
    $('.about-section').show(0);
    
  
  });

  $('.js-contact-link').click(event => 
  {
    
	deactivateAllTabs();
  	hideAllSections();
    $('.js-contact-link').addClass("active");

    
   
    $('.contact-section').show(0);

    
  });

  $('.js-portfolio-link').click(event => 
  {
    deactivateAllTabs();
    hideAllSections();
   
    
    $('.js-portfolio-link').addClass("active");

    
    $('.project-section').show(0);
    
  
  });

  $('.js-budget-browse').click(event => 
  {
    deactivateAllTabs();
  	hideAllSections();

    
    $('.js-portfolio-link').addClass("active");
     $('.js-budget-browse').addClass("active");

    

    $('.budget-browse-section').show(0);
 


  });

  $('.js-hooisit').click(event => 
  {
    deactivateAllTabs();
  	hideAllSections();

   
    $('.js-portfolio-link').addClass("active");
   
     $('.js-hooisit').addClass("active");
    
   
    $('.hooisit-section').show(0);
   


  });

  $('.js-unicart').click(event => 
  {
  	deactivateAllTabs();
  	hideAllSections();
    $('.js-portfolio-link').addClass("active");
    $('.js-unicart').addClass("active");
   
    $('.unicart-section').show(0);


  });

}

function deactivateAllTabs(){
	$('.js-contact-link').removeClass("active");
    $('.js-portfolio-link').removeClass("active");
    $('.js-about-link').removeClass("active");

    $('.js-budget-browse').removeClass("active");
    $('.js-hooisit').removeClass("active");
    $('.js-unicart').removeClass("active");
}

function hideAllSections(){
	$('.about-section').hide(0);
    $('.contact-section').hide(0);

    $('.budget-browse-section').hide(0);
    $('.hooisit-section').hide(0);
    $('.unicart-section').hide(0);
}


function activateDefaultTab(){
	
    deactivateAllTabs();
  	hideAllSections();
   
    $('.js-portfolio-link').addClass("active");
    
    $('.project-section').show(0);
}


activateDefaultTab();
//$(watchHover);
$(watchSubmit);