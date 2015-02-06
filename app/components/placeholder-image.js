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

  // style
    // change ratio of width vs height
      // square
      // landscape
      // portrait
  //check original ratio of image
    //do some smart stuff

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
    return this.get('styleKeywords').indexOf("rounded") > -1;
  }.property('styleKeywords'),

  centered: function() {
    return this.get('styleKeywords').indexOf("center") > -1;
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

  url: function() {
    var type = this.get("type");
    if (type === "avatar") {
      $.getJSON('http://uifaces.com/api/v1/random').then(function(json) {
        this.set("url",json.image_urls.epic);
      }.bind(this));
    } else if(type) {
      $.getJSON('http://www.splashbase.co/api/v1/images/search?query=' + type).then(function(json) {
        console.log("images for query (" + type + "): " + json);
        this.set("url",json);
      }.bind(this));
    } else {
      $.getJSON('http://www.splashbase.co/api/v1/images/random').then(function(json) {
        console.log("random image: " + json);
        this.set("url",json.large_url);
      }.bind(this));
    }

     return unsplash[Math.floor(Math.random()*unsplash.length)].url;
  }.property("type")
});

var unsplash = [{
  id: 1,
  url: "https://ununsplash.imgix.net/photo-1422479516648-9b1f0b6e8da8?q=75&fm=jpg&s=c5f2b3df2a4c71532b3b354b8766503c",
  keywords: ["office"]
}, {
  id: 2,
  url: "https://ununsplash.imgix.net/photo-1415302199888-384f752645d0?q=75&fm=jpg&s=823bdcc1b7ad955f5180efd352561016",
  keywords: ["city"]
}, {
  id: 3,
  url: "https://ununsplash.imgix.net/reserve/r0r252VR6WqPRsxngGUE_telefoon%20politie.jpg?q=75&fm=jpg&s=30a261ce928af70d4f9a3fe0cf394bc3",
  keywords: ["city"]
}, {
  id: 4,
  url: "https://unsplash.imgix.net/photo-1414005987108-a6d06de8769f?q=75&fm=jpg&s=b37798a9dbd0c8884af2261b518970e3",
  keywords: ["bridge"]
}, {
  id: 5,
  url: "https://ununsplash.imgix.net/photo-1413896235942-39c2eb7cd584?q=75&fm=jpg&s=82734c02c2c6a780dc31f24c54077dd6",
  keywords: ["bridge"]
}, {
  id: 6,
  url: "https://ununsplash.imgix.net/uploads/14127101912749510b8ed/82743738?q=75&fm=jpg&s=2150993787c74416103059d6ebac09f5",
  keywords: ["bridge"]
}, {
  id: 7,
  url: "https://unsplash.imgix.net/photo-1416184008836-5486f3e2cf58?q=75&fm=jpg&s=1168eb53b941d6e992595864a3771f7a",
  keywords: ["bridge"]
}, {
  id: 8,
  url: "https://ununsplash.imgix.net/photo-1413912623716-e6c688db0383?q=75&fm=jpg&s=2777ec88322e8725978f0fa956735021",
  keywords: ["buildings", "architecture"]
}, {
  id: 9,
  url: "https://unsplash.imgix.net/reserve/nTr1589kTgyXCOdStCGm_MikaRuusunen.jpg?q=75&fm=jpg&s=ebc5195bf9546b2a2f21d8df6fd40fe1",
  keywords: ["buildings", "architecture"]
}, {
  id: 10,
  url: "https://ununsplash.imgix.net/reserve/yzu1CGEoRQ6IE7yj8rc9_IMG_8812%20copy.jpg?q=75&fm=jpg&s=8dbbf6d023b5f6cdbef2f585074feaae",
  keywords: ["buildings", "architecture"]
}, {
  id: 11,
  url: "https://ununsplash.imgix.net/reserve/r0r252VR6WqPRsxngGUE_telefoon%20politie.jpg?q=75&fm=jpg&s=30a261ce928af70d4f9a3fe0cf394bc3",
  keywords: ["macro"]
}, {
  id: 12,
  url: "https://ununsplash.imgix.net/reserve/TxbDzeAhRmCwa6DDrbOQ_kazan-big.jpg?q=75&fm=jpg&s=01c1d06b45220391463a24a148be620f",
  keywords: ["industry"]
}, {
  id: 13,
  url: "https://ununsplash.imgix.net/reserve/yzu1CGEoRQ6IE7yj8rc9_IMG_8812%20copy.jpg?q=75&fm=jpg&s=8dbbf6d023b5f6cdbef2f585074feaae",
  keywords: ["industry"]
}, {
  id: 14,
  url: "https://unsplash.imgix.net/photo-1418226970361-9f1f7227d638?q=75&fm=jpg&s=4a5f190c7499eff6f7c77d88d8abf57e",
  keywords: ["nature", "animals"]
}, {
  id: 15,
  url: "https://unsplash.imgix.net/photo-1417444900330-dc44c79af021?q=75&fm=jpg&s=691e51ea2e210a16c23294a029752141",
  keywords: ["nature"]
}, {
  id: 16,
  url: "https://ununsplash.imgix.net/photo-1413913619092-816734eed3a7?q=75&fm=jpg&s=7653dd05ea22b7546a416b360b9d3bdd",
  keywords: ["nature"]
}, {
  id: 17,
  url: "https://unsplash.imgix.net/uploads/1413386993023a925afb4/4e769802?q=75&fm=jpg&s=84dfb097d39ff1600cdd32be44813650",
  keywords: ["nature", "animals"]
}, {
  id: 18,
  url: "https://ununsplash.imgix.net/uploads/14132599381062b4d4ede/3b6f33f2?q=75&fm=jpg&s=ada04fb565c23d9c0a3c17c4ca55213d",
  keywords: ["nature"]
}, {
  id: 19,
  url: "https://ununsplash.imgix.net/uploads/141202616623001715bb7/c1b3b9b0?q=75&fm=jpg&s=07faf9fb6409579bda59881970b284d1",
  keywords: ["nature"]
}, {
  id: 20,
  url: "https://unsplash.imgix.net/reserve/URG2BbWQQ9SAcqLuTOLp_BP7A9947.jpg?q=75&fm=jpg&s=604dc379bd8749d90ca2b9c8ec270f63",
  keywords: ["nature"]
}, {
  id: 21,
  url: "https://ununsplash.imgix.net/reserve/e66NHyUFQx6lNahLbW6g_IMG_2536_2.jpg?q=75&fm=jpg&s=0defcec221eb9aa0b686b9d78ac0053c",
  keywords: ["nature"]
}];
