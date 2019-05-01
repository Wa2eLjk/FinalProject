$(document).ready(function(){

    $('#submit').on('click',function(){
        var userName = $('#userName')
        var userPass = $('#password')
        
        console.log(userName);
        console.log(userPass);
        if(userName.val() === 'Wa2eL')
        {
            localStorage.setItem('users',userName.val())
            
            $('.container').empty();
            addHome();
        }
        else{
            userName.val('')
            userPass.val('')
            alert('Wrong Combination')
            console.log('Wrong Combination')
        };

    })
///background image Usplash
$.ajax({
    method:'GET',
    url:'https://api.unsplash.com/photos/random/?client_id=e8c13f5bc317e9c1bffc9222640e67f3626fbc46389edb5f116382906d844184',
    success: function(resultImg){

        var img = resultImg.urls.regular
        $('body').css('background-image', 'url( '+ img + ')');

    },
    error: function(error){
        console.log(error)
    }
    
})
//weather
var WeatherTemp ='';
$.ajax({
    method:'GET',
    url:'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&APPID=0a62dca5b77aed56d8a14642d633ed24',
    success: function(resultWeather){
         WeatherTemp = resultWeather.main.temp
        console.log(WeatherTemp)
        
    },
    error: function(error){
        console.log(error)
    }
    
})
// music
var Artist = '';
var ArtistLogo ='';
$.ajax({
    method:'GET',
    url:'https://www.theaudiodb.com/api/v1/json/1/search.php?s=boney_m',
    success: function(resultArtist){
        console.log(resultArtist.artists[0].strArtist)
        Artist = resultArtist.artists[0].strArtist
         ArtistLogo = resultArtist.artists[0].strArtistThumb
        console.log(Artist)
        console.log(ArtistLogo)
        
    },
    error: function(error){
        console.log(error)
    }
    
})
//news
var newsVari = '';
$.ajax({
    method:'GET',
    url:'https://newsapi.org/v2/top-headlines?country=US&apiKey=4327f94f8f6649e9ae558dbf1d65a06b',
    success: function(resultNews){
        
        var newsTitle = resultNews.articles[0].title
        newsVari = newsTitle;
        
        // console.log(newsTitle)
        
        
    },
    error: function(error){
        console.log(error)
    }
    
})

//food
var foodName = '';
var foodCategory ='';
var foodArea = '';
var foodPic ='';
var foodInst = '';
var Youtube='';
            $.ajax({
                    method:'GET',
                    url:'https://www.themealdb.com/api/json/v1/1/random.php',
                    success: function(resultFood){
                        
                         foodName = resultFood.meals[0].strMeal;
                         foodCategory = resultFood.meals[0].strCategory;
                         foodArea = resultFood.meals[0].strArea;
                         foodPic = resultFood.meals[0].strMealThumb;
                         foodInst = resultFood.meals[0].strInstructions;
                         Youtube = resultFood.meals[0].strYoutube;

                        console.log(foodName)
                        console.log(foodCategory)
                        console.log(foodArea)
                        console.log(foodPic)
                        console.log(foodInst)

                        
                        
                    },
                    error: function(error){
                        console.log(error)
                    }
                    
                })


function addHome(){
        $('h1').html('Hi '+ localStorage.getItem('users'));
        // console.log(localStorage.getItem('users'));
        // $('body').prepend($('<div>').attr('id','nav').addClass('navbar'))
        // // $('#nav')
        // $('<img>').appendTo('#nav')
        // $('<a>').addClass('active').html('hi').appendTo('#nav')
        // var logoDiv = $('<div>').attr('id','logo');
        // $(logoDiv).appendTo('#nav')
        $('.container').css({'width': '80%' , 'height': '400px', 'margin': '0 auto' , 'display': 'flex', 'justify-content': 'space-around','background-color': 'ghostwhite'})
        var foodHeader =$('<h3>').html('Todays challenge is to make '+ foodName)
        $(foodHeader).appendTo('.container')
        var unList = $('<ul>').appendTo('.container')
        var foodattrCate =$('<li></li>').html('The Category :'+foodCategory).css('width','240px')
        $(foodattrCate).appendTo(unList)
        var foodattrAre =$('<li></li>').html('The Area : '+foodArea).css('width','240px')
        $(foodattrAre).appendTo(unList)
        var imgDiv = $('<div>').addClass('pic').appendTo('.container')
        var foodattrPic =$('<img></img>').attr('src',foodPic).css('width','240px')
        var instButton =$('<button>').attr('id','InstBtn').css('width','240px')
        var YoutubeButton =$('<button>').html('Youtube').attr('id','youBtn').css('width','240px')
        $(foodattrPic).appendTo(imgDiv)
        $(instButton).appendTo('.container')
        $(YoutubeButton).appendTo('.container')
         
        var instrucModal =$('<div>').addClass('modal').attr('id','PopUp')
        $(instrucModal).appendTo('.container')
        //foodInst
        $('<p>').attr('id','pID').text(foodInst).appendTo('#PopUp');
         
        $('<a>').attr({'rel':'modal:open','href':'#PopUp'}).text('instructions').appendTo('#InstBtn')

        

        // console.log(newsVari )

        $('<div>').addClass('footer').appendTo('body')
        $('<p>').html(newsVari).attr('id','newsTag').appendTo('.footer')
        $('<p>').html(Artist).attr('id','musicTag').appendTo('.footer')
        $('<img>').attr('src',ArtistLogo).attr('id','musiclogo').appendTo('.footer')

        $('<div>').addClass('Weather').appendTo('body')
        $('<p>').html(WeatherTemp+' C').attr('id','temp').appendTo('.Weather')

        $('#youBtn').on('click', function(){

            var win = window.open(Youtube);
            console.log(Youtube)
        if (win) {
    //Browser has allowed it to be opened
        win.focus();
    } else {
    //Browser has blocked it
    alert('Please allow popups for this website');
    }
    })
      

        
    }
        
 
    





















})