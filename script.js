function newStyle() {
    let newColor = '';
    let newFont = ''; 
    let x = Math.floor(Math.random()*7); 
    switch (x){
      case 0:
        newColor = 'violet';
        newFont = 'Poppins'; 
        break;
      case 1: 
        newColor = 'blue';
        newFont = 'Poppins'; 
        break;
      case 2:
        newColor = 'cream';
        newFont = 'Poppins';
        break; 
      case 3:
        newColor= 'purple';
        newFont = 'Poppins';
        break
      case 4:
        newColor = 'cyan';
        newFont = 'Poppins'; 
        break;
      case 5:
          newColor = 'maroon';
          newFont = 'Poppins';
          break;
      case 6: 
          newColor = 'pink';
          newFont = 'Poppins';
          break;
    }
    var elem = document.getElementById('logo');
    elem.style.color = newColor;
    elem.style.fontFamily = newFont; 
  }

  let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.70,
    fill: {gradient: ["#520192", "#3A0068 "]}
  }
  $(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2))+"%");
  });
  $(".Py .bar").circleProgress({
    value: 0.50,
  });
  $(".Ui .bar").circleProgress({
    value: 0.80,
  });