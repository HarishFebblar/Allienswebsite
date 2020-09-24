
exports.loginpageHandler = function(req,res){
    req.session.destroy();
    console.log("Login page");
    res.render('loginpage.ejs', {});
}

exports.landingpageHandler = function(req,res){
     console.log("processing GET request for landing page. req param" + req.query.nm);

     var person ;
     if(req.session.username){
         console.log("User Name already in session. It is " + req.session.username);
         person = req.session.username;
        
     }
     else{
         person = req.query.nm;
         req.session.username = person;
         console.log("User name does not exist in Session. hence storing it in session store" + person);
     }

     res.render('landingpage.ejs',{welcomeMessage: person});
}

exports.cityPageHandler = function(req,res){
    var interestValue = req.body.interest;
    var cityNameValue, taglineValue;
    console.log("recived interest value as " + interestValue);

    if(interestValue === 'history'){
        cityNameValue = 'Hyderabad';
        taglineValue='  City of Pearls and the City of Nizams' ;
    }else if( interestValue === 'fashion'){
        cityNameValue = 'Banglaore';
        taglineValue= 'Silicon Valley of India';
    }else if(interestValue ==='finance'){
        cityNameValue ='Mumbai';
        taglineValue= 'Business Capital of India';
    }

    res.render('city.ejs', { cityName: cityNameValue,
                              tagline: taglineValue,
                            person: req.session.userName});


}