

(function($) {
    
    var slide1 = function(ele,options) {
        var $ele = $(ele);
        
        var setting = {        		
            speed: 1000,            
            interval: 2000,            
        };
       
        $.extend(true, setting, options);        
        var states = [            
            { $zIndex: 2, width: 204, height: 150, top: 27.5, left:0, $opacity: 0.7 },
            { $zIndex: 3, width: 293, height: 205, top: 0, left:125, $opacity: 1 },
            { $zIndex: 1, width: 204, height: 150, top: 27.5, left: 350, $opacity: 0.7 },            
        ];
        var $lis = $ele.find('li');
        var timer = null;       
        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        /*$ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });*/
        move();
        autoPlay();

        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }        
        function next() {         
            states.unshift(states.pop());
            move();
        }
        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }   
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide1(ele,options);
        });
        return this;
    }
})(jQuery);


$(document).ready(
    function(){
        //navbar open close
        $(".toggler-nav").click(function(){
            $(".navbar-nav").toggleClass("nav-open")
        })
        //dropdown open close        
       $(document).click(function(){
           if(event.target.id!="Portfolio"){
               $(".dropdown-menu").removeClass("menu-show")
           }
           else{
            var id=$(".dropdown").attr("id")
            $("#"+id+" .dropdown-menu").toggleClass("menu-show")
           }
       })

       

        
       
    }
)

