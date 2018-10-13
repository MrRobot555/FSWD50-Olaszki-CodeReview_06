var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Locations = /** @class */ (function () {
    function Locations(name, city, ZIP, street, timage) {
        this.name = name;
        this.city = city;
        this.ZIP = ZIP;
        this.street = street;
        this.timage = timage;
    }
    Locations.prototype.loc_render = function () {
        return "<div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n                <div class=\"blog-entry\">\n                  <div class=\"blog-img\"> <img src=\"" + this.timage + "\" class=\"img-responsive\"> </div>\n                  <div class=\"desc\">\n                    <h3>" + this.name + "</h3>\n                    <p>Address: " + (this.ZIP + " " + this.city) + "\n                    " + this.street + "</p></div>\n                </div>\n              </div>";
    };
    return Locations;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(name, city, ZIP, street, timage, phone, type, webaddress) {
        var _this = _super.call(this, name, city, ZIP, street, timage) || this;
        _this.phone = phone;
        _this.type = type;
        _this.webaddress = webaddress;
        return _this;
    }
    Restaurant.prototype.res_render = function () {
        return "<div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n                <div class=\"blog-entry\">\n                  <div class=\"blog-img\"> <img src=\"" + this.timage + "\" class=\"img-responsive\"> </div>\n                  <div class=\"desc\">\n                    <h3>" + this.name + "</h3>\n                    <p>Address: " + (this.ZIP + " " + this.city) + "\n                    Phone: " + this.phone + "\n                    Type: " + this.type + "\n                    Web: " + this.webaddress + "</p></div>\n                </div>\n              </div>";
    };
    return Restaurant;
}(Locations));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, city, ZIP, street, timage, date, time, price) {
        var _this = _super.call(this, name, city, ZIP, street, timage) || this;
        _this.date = date;
        _this.time = time;
        _this.price = price;
        return _this;
    }
    Events.prototype.ev_render = function () {
        return "<div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n                <div class=\"blog-entry\">\n                  <div class=\"blog-img\"> <img src=\"" + this.timage + "\" class=\"img-responsive\"> </div>\n                  <div class=\"desc\">\n                    <h3>" + this.name + "</h3>\n                    <p>Address: " + (this.ZIP + " " + this.city) + "\n                    Date: " + this.date + "\n                    Time: " + this.time + "\n                    Ticket price: \u20AC " + this.price + "</p></div>\n                </div>\n              </div>";
    };
    return Events;
}(Locations));
var Location1 = new Locations("St. Charles Church", "Vienna", "1010", "Karlsplatz 1", "./images/loc1.jpg");
var Location2 = new Locations("Zoo Vienna", "Vienna", "1130", "Maxingstraße 13b", "./images/loc2.jpg");
var Restaurant1 = new Restaurant("Lemon Leaf Thai Restaurant", "Vienna", "1050", "Kettenbrückengasse 19", "./images/res1.png", "+43(1)5812308", "Thai Food", "http://www.lemonleaf.at");
var Restaurant2 = new Restaurant("SIXTA", "Vienna", "1050", "Schönbrunner Straße 21", "./images/res2.png", "+43(1)5852856l / +43(1)5852856", "Austrian Food", "http://www.sixta-restaurant.at/");
var Event1 = new Events("Kris Kristofferson", "Vienna", "1150", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "./images/event1.jpg", "Fr., 15.11.2018.", "20:00", "58,5");
var Event2 = new Events("Lenny Kravitz", "Vienna", "1150", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "./images/event2.jpg", "Sat., 09.12.2019.", "19:30", "47,80");
var dataarray = [Location1, Location2, Restaurant1, Restaurant2, Event1, Event2];
/* var loc1out:string = Location1.loc_render();
$("#locationtarget").append(loc1out); */
function locheader(title) {
    var headerout = "<div class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\" data-animate-effect=\"fadeInLeft\" data-section=\"" + title + "\">\n                      <span class=\"heading-meta\">My favorite places</span>\n                      <h2 class=\"colorlib-heading\">" + title + "</h2>\n                      </div>";
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
