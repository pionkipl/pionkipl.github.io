$(document).ready(function(){
    
   $('.my-name').shuffleLetters('', {
        step: 4,
        fps: 5
    }); 

    
    $(window).scroll(function(event) {  
        $(".about-me").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
              el.addClass("bounceInLeft"); 
            };         
        });  
    });

    $(window).scroll(function(event) {  
        $(".about-me-img").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
              el.addClass("bounceInRight"); 
            };         
        });  
    });

    $(window).scroll(function(event) {  
        $(".skillsset").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
              el.addClass("bounceInLeft"); 
            };         
        });  
    });
    $(window).scroll(function(event) {  
        $(".experience").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
              el.addClass("bounceInRight"); 
            };         
        });  
    });

    $(window).scroll(function(event) {  
        $(".portfolio1").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
              el.addClass("fadeInDown"); 
            };         
        });  
    });

    $(window).scroll(function(event) {          
        $(".portfolio2").each(function(i, el) {
            var el = $(el);            
            if (el.visible(true)) {               
                el.addClass("fadeInDown"); 
            };         
        });  
    });
    $(window).scroll(function(event) {          
        $(".portfolio3").each(function(i, el) {
            var el = $(el);            
            if (el.visible(true)) {               
                el.addClass("fadeInDown"); 
            };         
        });  
    }); 
    $(window).scroll(function(event) {          
        $(".contact").each(function(i, el) {
            var el = $(el);            
            if (el.visible(true)) {               
                el.addClass("fadeInUp"); 
            };         
        });  
    });   

    
});

class StickyNavigation {
    
    constructor() {
        this.currentId = null;
        this.currentTab = null;
        this.tabContainerHeight = 70;
        let self = this;
        $('.et-hero-tab').click(function() { 
            self.onTabClick(event, $(this)); 
        });
        $(window).scroll(() => { this.onScroll(); });
        $(window).resize(() => { this.onResize(); });
    }
    
    onTabClick(event, element) {
        event.preventDefault();
        let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 50;
        $('html, body').animate({ scrollTop: scrollTop }, 900);
    }
    
    onScroll() {
        this.checkTabContainerPosition();
    this.findCurrentTabSelector();
    }
    
    onResize() {
        if(this.currentId) {
            this.setSliderCss();
        }
    }
    
    checkTabContainerPosition() {
        let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
        if($(window).scrollTop() > offset) {
            $('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
        } 
        else {
            $('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
        }
    }
    
    findCurrentTabSelector(element) {
        let newCurrentId;
        let newCurrentTab;
        let self = this;
        $('.et-hero-tab').each(function() {
            let id = $(this).attr('href');
            let offsetTop = $(id).offset().top - self.tabContainerHeight;
            let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
            if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
                newCurrentId = id;
                newCurrentTab = $(this);
            }
        });
        if(this.currentId != newCurrentId || this.currentId === null) {
            this.currentId = newCurrentId;
            this.currentTab = newCurrentTab;
            this.setSliderCss();
        }
    }
    
    setSliderCss() {
        let width = 0;
        let left = 0;
        if(this.currentTab) {
            width = this.currentTab.css('width');
            left = this.currentTab.offset().left;
        }
        $('.et-hero-tab-slider').css('width', width);
        $('.et-hero-tab-slider').css('left', left);
    }
    
}

new StickyNavigation();





(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);
