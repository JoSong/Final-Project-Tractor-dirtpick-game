
$(document).ready(function() {

  var score = 0;

  var movebg = function() {
  	
  	$('.tractor').css('background-position', '-=0.4px');
  };
  setInterval(movebg, 0.2);

  $('#green').on('click',function(e){

    

      $(this).animate({
      left: '+=30px',
    });


      
     var computerDistance=$('#blue').position().left;
     var playerDistance=$('#green').position().left;

      var position = computerDistance-playerDistance;

      
      if(position<20){

        $('#mark').addClass('info').text("winning...");
        $('#position').addClass('info').text("1");
      }
      else{
        $('#mark').text("Hurrrrry!");
        $('#position').text("2");
      }

    var dirtDistance= $('.dirt').position().left;
    var playerDistance=$('#green').position().left;

    var distance=dirtDistance-playerDistance;

  	if( distance<=30)
      {
        
          $('.start').fadeIn(400).fadeOut(600);
          $('.animation').delay(500).fadeIn(500).fadeOut(500);
          $('.load').delay(300).fadeIn(400).fadeOut(400);
          $('#motion').addClass('text').text("Loading...");
          $('.finish').delay(400).fadeIn(500).fadeOut(600);
          
          $('.dirt').hide(400)
           
            .animate({
                left: '+=200px',
           },function(){
              score += 50;
              $(this).show(900);
              $('#loaded').fadeIn(400).text(score);
                $('.pick').css({left: '+=150px'});
           });
          
       
       
      };      
          
        
      var raceTrack= $('.tractor').width()-$('#green').width();
      var computerDistance =$('#blue').position().left;
      var runningDistance = $('#green').position().left;

       
      if (raceTrack <=runningDistance)
          {
                
              $('#green').stop();
              $('.dirt').stop();
              $('.animation').stop();
              $('#mark').html("Finished!");
              $('#blue').css("-webkit-animation", "paused");
              

  }
  if (computerDistance>=raceTrack)
  {

    console.log(computerDistance);
    $('#green').stop();
    $('#mark').text("Sorry!");
    $('#blue').position({left: 0,});
  }

    });

});

