class Locations {
  name:string;
  city:string;
  ZIP:number;
  street:string;
  timage:string;
 
 constructor(name, city, ZIP, street, timage) {
  this.name = name;
 	this.city = city;
 	this.ZIP = ZIP;
 	this.street = street;
  this.timage = timage;
 }


   loc_render(){
   		return `<div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                <div class="blog-entry">
                  <div class="blog-img"> <img src="${this.timage}" class="img-responsive"> </div>
                  <div class="desc">
                    <h3>${this.name}</h3>
                    <p>Address: ${this.ZIP+" "+this.city}
                    ${this.street}</p></div>
                </div>
              </div>`;
   }


}

class Restaurant extends Locations {

phone:string;
type:string;
webaddress:string;


  constructor(name, city, ZIP, street, timage, phone, type, webaddress) {
  super(name, city, ZIP, street, timage);
  this.phone = phone;
  this.type = type;
  this.webaddress = webaddress;
}

   res_render() {
       return `<div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                <div class="blog-entry">
                  <div class="blog-img"> <img src="${this.timage}" class="img-responsive"> </div>
                  <div class="desc">
                    <h3>${this.name}</h3>
                    <p>Address: ${this.ZIP+" "+this.city}
                    Phone: ${this.phone}
                    Type: ${this.type}
                    Web: ${this.webaddress}</p></div>
                </div>
              </div>`;
   }

}


class Events extends Locations {
date:string;
time:string;
price:number;


constructor(name, city, ZIP, street, timage, date, time, price) {
  super(name, city, ZIP, street, timage);
  this.date = date;
  this.time = time;
  this.price = price;
}

   ev_render() {
       return `<div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                <div class="blog-entry">
                  <div class="blog-img"> <img src="${this.timage}" class="img-responsive"> </div>
                  <div class="desc">
                    <h3>${this.name}</h3>
                    <p>Address: ${this.ZIP+" "+this.city}
                    Date: ${this.date}
                    Time: ${this.time}
                    Ticket price: € ${this.price}</p></div>
                </div>
              </div>`;
   }

}


  let Location1 = new Locations("St. Charles Church","Vienna","1010","Karlsplatz 1","./images/loc1.jpg");
  let Location2 = new Locations("Zoo Vienna","Vienna","1130","Maxingstraße 13b","./images/loc2.jpg");

  let Restaurant1 = new Restaurant("Lemon Leaf Thai Restaurant", "Vienna", "1050", "Kettenbrückengasse 19", "./images/res1.png", "+43(1)5812308", "Thai Food", "http://www.lemonleaf.at");
  let Restaurant2 = new Restaurant("SIXTA", "Vienna", "1050", "Schönbrunner Straße 21", "./images/res2.png", "+43(1)5852856l / +43(1)5852856", "Austrian Food", "http://www.sixta-restaurant.at/");

  let Event1 = new Events("Kris Kristofferson","Vienna","1150","Wiener Stadthalle, Halle F, Roland Rainer Platz 1","./images/event1.jpg","Fr., 15.11.2018.","20:00","58,5");
  let Event2 = new Events("Lenny Kravitz","Vienna","1150","Wiener Stadthalle - Halle D, Roland Rainer Platz 1","./images/event2.jpg","Sat., 09.12.2019.","19:30","47,80");

  let dataarray:any[] = [Location1, Location2, Restaurant1, Restaurant2, Event1, Event2];



  /* var loc1out:string = Location1.loc_render();
  $("#locationtarget").append(loc1out); */

  function locheader(title:string) {
    var headerout:string = `<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft" data-section="${title}">
                      <span class="heading-meta">My favorite places</span>
                      <h2 class="colorlib-heading">${title}</h2>
                      </div>`;
     $("#locationtarget").append(headerout);
  }


 /* dataarray.forEach((indexnum:any) => {
      $("#locationtarget").append(indexnum.loc_render());
  }); */


  locheader("Locations"); /*putting out header for places */

  for (var i = 0; i < 2; ++i) {
      $("#locationtarget").append(dataarray[i].loc_render());
  }

  locheader("Restaurants"); /*putting out header for places */

  for (var i = 2; i < 4; ++i) {
      $("#locationtarget").append(dataarray[i].res_render());
  }

  locheader("Events"); /*putting out header for places */

  for (var i = 4; i < 6; ++i) {
      $("#locationtarget").append(dataarray[i].ev_render());
  }
