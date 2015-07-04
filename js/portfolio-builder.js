//*****************************************************************
// Site-info - JSON object
//*****************************************************************
var siteInfo = {
    "logo" : "images/orange.png",
    "name" : "Gene Steiker",
    "role" : "Web Developer",
    "mainImage" : "http://lorempixel.com/g/1400/600/sports",
    "mainImageAltText" : "Sports Image",
	"contactInfo": [
        {
            "label": "email",
            "value": "gene.steiker@gmail.com"
        },
        {
            "label": "github",
            "value": "steikerg"
        },
        {
            "label": "phone",
            "value": "973 876-2345"
        },
                {
            "label": "location",
            "value": "Caldwell, NJ"
        }
    ]
  }

//*****************************************************************
// Projects - JSON object
//*****************************************************************
var projects = {
    "project": [
      {
        "screenshot": "http://lorempixel.com/g/360/220/sports",
        "alt": "Appify Screenshot",
        "short-title": "Appify",
        "long-title": "Appify Application",
        "modal-image": "http://lorempixel.com/g/360/220/sports",
        "description": "This was my second project in this HTML and CSS class. I learned a lot about HTML and CSS."
        },
      {
        "screenshot": "http://placebear.com/360/220",
        "alt": "Sunflower Screenshot",
        "title": "Sunflower",
        "long-title": "Sunflower Smoke Shop",
        "modal-image": "http://placebear.com/360/220",
        "description": "Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.<p><p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
        },
      {
        "screenshot": "images/Screenprint-FinalProject.png",
        "alt": "Steiker Portfolio Screenshot",
        "title": "Portfolio",
        "long-title": "Gene Steiker Portfolio",
        "modal-image": "images/Screenprint-FinalProject.png",
        "description": "Does this thumbnail look familiar? It's the web page you are visiting right now. Originally developed for a class, I refined the page and put it into use. This page was built using the Bootstrap library. It is populated with information stored in JSON data objects."
        }      
    ]
}


//*****************************************************************
// Formatting variables for adding data to portfolio
//*****************************************************************
var HTMLheaderName = '<h1 class="text-thin title-super text-loud">%data%</h1>';
var HTMLheaderRole = '<h4>%data%</h4>';
var HTMLlogo = '<img class="title-logo" src="%data%" alt="GDS logo" >'

var halfBaked = '';
var HTMLcontactItem = '<li class="flex-item"><span class="text-muted">%label%</span><span class="text-padding">%data%</span></li>'
var HTMLmainImage = '<img class="img-responsive" src="%data%" alt="%alt%">'





