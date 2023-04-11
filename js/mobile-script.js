$(document).ready(function() {
    var deviceWidth = $(window).width();
    var deviceHeight = $(window).height();
    if ( deviceWidth > "767") {
        $('#about-section').waypoint(function(direction) {
            if( direction == "down") {
                $('html').addClass('wishingScroll');
            } else {
                $('html').removeClass('wishingScroll'); 
            }
        }, {
            offset: "50%"
        });
        $('#events-section').waypoint(function(direction) {
            if( direction == "down") {
                $('html').addClass('eventsScroll');
                $('html').removeClass('wishingScroll'); 
            } else {
                $('html').addClass('wishingScroll'); 
                $('html').removeClass('eventsScroll'); 
            }
        }, {
            offset: "50%"
        });
        $('#sponsor-section').waypoint(function(direction) {
            if( direction == "down") {
                $('html').addClass('sponsorScroll'); 
                $('html').removeClass('eventsScroll'); 
            } else {
                $('html').addClass('eventsScroll');
                $('html').removeClass('sponsorScroll'); 
            }
        }, {
            offset: "50%"
        });
        $('#team-section').waypoint(function(direction) {
            if( direction == "down") {
                $('html').addClass('teamScroll');
                $('html').removeClass('sponsorScroll'); 
            } else {
                $('html').addClass('sponsorScroll'); 
                $('html').removeClass('teamScroll'); 
            }
        }, {
            offset: "50%"
        });
    }
    if ( deviceWidth <= "767") {
        $('#msg-1').waypoint(function(direction) {
            if( direction == "down") {
                $('#msg-1').addClass('mobileEffect'); 
            } else {
                $('#msg-1').removeClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#msg-2').waypoint(function(direction) {
            if( direction == "down") {
                $('#msg-2').addClass('mobileEffect');
                $('#msg-1').removeClass('mobileEffect'); 
            } else {
                $('#msg-2').removeClass('mobileEffect'); 
                $('#msg-1').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#msg-3').waypoint(function(direction) {
            if( direction == "down") {
                $('#msg-3').addClass('mobileEffect');
                $('#msg-2').removeClass('mobileEffect'); 
            } else {
                $('#msg-3').removeClass('mobileEffect'); 
                $('#msg-2').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#msg-4').waypoint(function(direction) {
            if( direction == "down") {
                $('#msg-4').addClass('mobileEffect');
                $('#msg-3').removeClass('mobileEffect'); 
            } else {
                $('#msg-4').removeClass('mobileEffect'); 
                $('#msg-3').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#msg-5').waypoint(function(direction) {
            if( direction == "down") {
                $('#msg-5').addClass('mobileEffect');
                $('#msg-4').removeClass('mobileEffect'); 
            } else {
                $('#msg-5').removeClass('mobileEffect'); 
                $('#msg-4').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#msg-6').waypoint(function(direction) {
            if( direction == "down") {
                $('#msg-6').addClass('mobileEffect');
                $('#msg-5').removeClass('mobileEffect'); 
            } else {
                $('#msg-6').removeClass('mobileEffect'); 
                $('#msg-5').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#msg-7').waypoint(function(direction) {
            if( direction == "down") {
                $('#msg-7').addClass('mobileEffect'); 
                $('#msg-6').removeClass('mobileEffect');
            } else {
                $('#msg-7').removeClass('mobileEffect'); 
                $('#msg-6').addClass('mobileEffect');  
            }
        }, {
            offset: "50%"
        });
        $('#msg-8').waypoint(function(direction) {
            if( direction == "down") {
                $('#msg-8').addClass('mobileEffect');
                $('#msg-7').removeClass('mobileEffect'); 
            } else {
                $('#msg-8').removeClass('mobileEffect'); 
                $('#msg-7').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#msg-9').waypoint(function(direction) {
            if( direction == "down") {
                $('#msg-9').addClass('mobileEffect');
                $('#msg-8').removeClass('mobileEffect'); 
            } else {
                $('#msg-9').removeClass('mobileEffect'); 
                $('#msg-8').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        
        $('#msg-10').waypoint(function(direction) {
            if( direction == "down") {
                $('#msg-10').addClass('mobileEffect');
                $('#msg-9').removeClass('mobileEffect'); 
            } else {
                $('#msg-10').removeClass('mobileEffect'); 
                $('#msg-9').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        
        $('#sponsor-section').waypoint(function(direction) {
            if( direction == "down") {
                $('#msg-10').removeClass('mobileEffect'); 
            } else {
                $('#msg-10').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        
        $('.class-item').removeClass('hover');
        $('.ftco-feature-1').removeClass('hover');
    } else { 
        $('.class-item').addClass('hover');
        $('.ftco-feature-1').addClass('hover');
    };
});