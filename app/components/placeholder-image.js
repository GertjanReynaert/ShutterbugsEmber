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
  small: 64,
  medium: 150,
  large: 250,
  xlarge: 500,

  default_url: "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",

  // kind
    //landscape
    //animals
    //plants
    //avatar
    //...

  // style
    // change ratio of width vs height
      // square
      // landscape
      // portrait

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

  rounded: function() {
    var style = this.get("style") || "";
    var keywords = style.split(" ");
    keywords = keywords.map(function(keyword) {
      return keyword.toLowerCase();
    });
    return keywords.indexOf("rounded") > -1;
  }.property('style'),

  centered: function() {
    var style = this.get("style") || "";
    var keywords = style.split(" ");
    keywords = keywords.map(function(keyword) {
      return keyword.toLowerCase();
    });
    return keywords.indexOf("center") > -1;
  }.property('style'),

  circle: function() {
    var style = this.get("style") || "";
    var keywords = style.split(" ");
    keywords = keywords.map(function(keyword) {
      return keyword.toLowerCase();
    });
    return keywords.indexOf("circle") > -1;
  }.property('style'),

  thumbnail: function() {
    var style = this.get("style") || "";
    var keywords = style.split(" ");
    keywords = keywords.map(function(keyword) {
      return keyword.toLowerCase();
    });
    return keywords.indexOf("thumbnail") > -1;
  }.property('style'),

  url: function() {
    if (this.get("type") === "avatar") {
      $.getJSON('http://uifaces.com/api/v1/random').then(function(json) {
        this.set("url",json.image_urls.epic);
      }.bind(this));
    }

    return this.get("default_url");
  }.property("type")
});
