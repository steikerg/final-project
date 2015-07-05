//*****************************************************************
// Site-info - JSON object
//*****************************************************************
var siteInfo = {
    "pageTitle": "Portfolio - G Steiker",
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
        "title": "Appify",
        "url": "https://github.com",
        "longTitle": "Appify Application",
        "modalImage": "http://lorempixel.com/g/360/220/sports",
        "modalAltText": "Appify Screenshot",
        "description": "This was my second project in this HTML and CSS class. I learned a lot about HTML and CSS."
        },
      {
        "screenshot": "http://placebear.com/360/220",
        "alt": "Sunflower Screenshot",
        "title": "Sunflower",
        "url": "https://github.com",
        "longTitle": "Sunflower Smoke Shop",
        "modalImage": "http://placebear.com/360/220",
        "modalAltText": "Sunflower Screenshot",
        "description": "Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.<p><p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
        },
      {
        "screenshot": "images/Screenprint-FinalProject.png",
        "alt": "Steiker Portfolio Screenshot",
        "title": "Portfolio",
        "url": "https://github.com/steikerg",
        "longTitle": "Gene Steiker Portfolio",
        "modalImage": "images/Screenprint-FinalProject.png",
        "modalAltText": "Gene Steiker Portfolio Screenshot",
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
var HTMLtitle = '<title>%data%</title>'

var halfBaked = '';
var HTMLcontactItem = '<li class="flex-item"><span class="text-muted">%label%</span><span class="text-padding">%data%</span></li>'
var HTMLmainImage = '<img class="img-responsive" src="%data%" alt="%alt%">'

var HTMLproject = '<div class="col-md-4 bottom-padding"><img class="img-responsive center-image" src="%image%" alt="%alt%" data-toggle="modal" data-target="#modProject%project-no%"><h3 class="text-uppercase">%title%</h3><a href="%url%" target=_blank">%url-name%</a></div>'
var HTMLmodal = '<div class="modal fade" id="modProject%projectNumber%" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content modal-background modal-margins"><div class="modal-header modalBorder"><h3 class="modal-title text-uppercase text-center" id="myModalLabel">%title%</h3></div><div class="modal-body modal-text"><img class="img-responsive modal-image-padding center-image" src="%image%" alt="%alt%"><div>%description%</div></div><div class="modal-footer modalBorder"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>'

