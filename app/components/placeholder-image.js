import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',

  classNameBindings: [
    'rounded:img-rounded',
    'centered:center-block',
    'circle:img-circle',
    'thumbnail:img-thumbnail'
  ],

  attributeBindings: [
    'w:width',
    'h:height',
    'url:src',
    'alt'
  ],

  xsmall: 20,
  small: 50,
  medium: 150,
  large: 250,
  xlarge: 500,


  typeworkLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6BAMAAAB6wkcOAAAAHlBMVEU/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8RLl7PAAAACXRSTlMAQE2QrODl5ugIN0RyAAAAtUlEQVR42u3dMRGAMBAAwccBKkAAOIgGZqjpaPGABiZuadPS5Cn2DKyEi6nmdcSZqD9RM6PT6XQ6nU6n0+l0Op1Op3/Sy9K2dtbHaBvodDqdTqfT6XQ6nU6n0+l0Op1Op9PpdDqdTqfT6XQ6nf4r/d7a9s56t+h0Op1Op9PpdDqdTqfT6XQ6nU6n0+l0Op1Op9PpdDqdTqfT6XQ6nU6n0+l0Op1Op9PpdDqdTqcn67lH5jlRv14zAEBWshvDNAAAAABJRU5ErkJggg==",

  // style
    // change ratio of width vs height
      // square
      // landscape
      // portrait
  //check original ratio of image
    //do some smart stuff

  // Width & Height
  w: function() {
    var width = this.get("width");

    if (width) {
      if (this.get(width)) {
        return this.get(width);
      } else {
        return width;
      }
    } else {
      return this.get("small");
    }
  }.property("width"),

  h: function() {
    var height = this.get("height");

    if (height) {
      if (this.get(height)) {
        return this.get(height);
      } else {
        return height;
      }
    } else {
      return this.get("small");
    }
  }.property("height"),

  alt: function() {
    return "" + this.get("w") + "x" + this.get("h");
  }.property("w", "h"),

  // Styles
  rounded: function() {
    return this.get('styleKeywords').indexOf("rounded") > -1;
  }.property('styleKeywords'),

  centered: function() {
    return this.get('styleKeywords').indexOf("centered") > -1;
  }.property('styleKeywords'),

  circle: function() {
    return this.get('styleKeywords').indexOf("circle") > -1;
  }.property('styleKeywords'),

  thumbnail: function() {
    return this.get('styleKeywords').indexOf("thumbnail") > -1;
  }.property('styleKeywords'),

  styleKeywords: function() {
    var style = this.get("style") || "";
    var keywords = style.split(" ");
    return keywords.map(function(keyword) {
      return keyword.toLowerCase();
    });
  }.property('style'),

  // Image url & type
  url: function() {
    var type = this.get("type");

    if (type === "avatar") {
      this.get("avatar");
    } else if(type) {
      this.get("image_for_type");
    } else {
      this.get("random_image");
    }

    return this.get("typeworkLogo");
  }.property("type"),

  avatar: function() {
    $.getJSON('http://uifaces.com/api/v1/random').then(function(json) {
      this.set("url",json.image_urls.epic);
    }.bind(this));
  }.property("type"),

  image_for_type: function() {
    var proxy = 'https://jsonp.nodejitsu.com/?callback=?&url=';
    var url = proxy + 'http://www.splashbase.co/api/v1/images/search?query=' + this.get("type");
    $.getJSON(url).then(function(json) {
      var arr = json.images;
      var img = arr[Math.floor(Math.random()*arr.length)];
      this.set("url",img.large_url);
    }.bind(this));
  }.property("type"),

  random_image: function() {
    var proxy = 'https://jsonp.nodejitsu.com/?callback=?&url=';
    var url = proxy + 'http://www.splashbase.co/api/v1/images/random';
    $.getJSON(url).then(function(json) {
      this.set("url",json.large_url || json.url);
    }.bind(this));
  }.property("type"),
});
