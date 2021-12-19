$("#Weekly").addClass("light");
$(".interval").click(function(){
      
    var interval=$(this)[0].innerHTML;
    
    switch (interval) {
        case "Daily":
            $("#Monthly").removeClass("light");
            $("#Weekly").removeClass("light");
            get_current_daily();
            get_Yesterday_daily();
            $("#Daily").addClass("light");
            break;
        case "Weekly" :
            $("#Daily").removeClass("light");
            $("#Monthly").removeClass("light");
            get_current_Weekly();
            get_last_week_Weekly();
            $("#Weekly").addClass("light");
            break;
        case "Monthly": 
               $("#Weekly").removeClass("light");
               $("#Daily").removeClass("light");
               get_current_Monthly();
               get_last_Month();
               $("#Monthly").addClass("light");
            break;

            default: 
            alert ("nothing work loser");
            break;
                 

    }
    
});


function get_current_daily() {
    $.getJSON("data.json", function(data){
        var content = "";
        var timeframes="";

        for ( var i=0 ; i<6 ;i++){
            timeframes=data[i].title;
            content=data[i].timeframes.daily.current; 
            $('#Current-'+timeframes).html(content);
        }
    
      });
}


function get_Yesterday_daily() {
    $.getJSON("data.json", function(data){
        var content = "";
        var timeframes="";
        for ( var i=0 ; i<6 ;i++){
        timeframes=data[i].title;  
        content=data[i].timeframes.daily.previous;
        $('.Last-'+timeframes).html("Yesterday - "+content+"hrs");
        }
    
      });
}

function get_last_week_Weekly() {
    $.getJSON("data.json", function(data){
        var content = "";
        var timeframes="";
        for ( var i=0 ; i<6 ;i++){
        timeframes=data[i].title;  
        content=data[i].timeframes.weekly.previous;
        $('.Last-'+timeframes).html("last week - "+content+"hrs");
        }
    
      });
}

function get_current_Weekly() {
    $.getJSON("data.json", function(data){
        var content = "";
        var timeframes="";
        for ( var i=0 ; i<6 ;i++){
            timeframes=data[i].title;
            content=data[i].timeframes.weekly.current; 
            $('#Current-'+timeframes).html(content);
        }
    
      });
}


function get_last_Month() {
    $.getJSON("data.json", function(data){
        var content = "";
        var timeframes="";
        for ( var i=0 ; i<6 ;i++){
        timeframes=data[i].title;  
        content=data[i].timeframes.monthly.previous;
        $('.Last-'+timeframes).html("Last Month - "+content+"hrs");
        }
    
      });
}

function get_current_Monthly() {
    $.getJSON("data.json", function(data){
        var content = "";
        var timeframes="";
        for ( var i=0 ; i<6 ;i++){
            timeframes=data[i].title;
            content=data[i].timeframes.monthly.current; 
            $('#Current-'+timeframes).html(content);
        }
    
      });
}



