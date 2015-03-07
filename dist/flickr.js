System.register(["aurelia-http-client"], function (_export) {
  var HttpClient, _createClass, _classCallCheck, url, Flickr;

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json";
      Flickr = _export("Flickr", (function () {
        function Flickr(http) {
          _classCallCheck(this, Flickr);

          this.heading = "Flickr";
          this.images = [];
          this.http = http;
        }

        _createClass(Flickr, {
          activate: {
            value: function activate() {
              var _this = this;

              return this.http.jsonp(url).then(function (response) {
                _this.images = response.content.items;
              });
            }
          },
          canDeactivate: {
            value: function canDeactivate() {
              return confirm("Are you sure you want to leave?");
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [HttpClient];
            }
          }
        });

        return Flickr;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsaWNrci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsVUFBVSxpQ0FFZCxHQUFHLEVBRU0sTUFBTTs7OztBQUpYLGdCQUFVLHNCQUFWLFVBQVU7Ozs7Ozs7OztBQUVkLFNBQUcsR0FBRyw2RkFBNkY7QUFFMUYsWUFBTTtBQUVOLGlCQUZBLE1BQU0sQ0FFTCxJQUFJLEVBQUM7Z0NBRk4sTUFBTTs7QUFHZixjQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztBQUN4QixjQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNqQixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjs7cUJBTlUsTUFBTTtBQVFqQixrQkFBUTttQkFBQSxvQkFBRTs7O0FBQ1IscUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQzNDLHNCQUFLLE1BQU0sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztlQUN0QyxDQUFDLENBQUM7YUFDSjs7QUFFRCx1QkFBYTttQkFBQSx5QkFBRTtBQUNiLHFCQUFPLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO2FBQ25EOzs7QUFmTSxnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7YUFBRTs7OztlQUQ3QixNQUFNIiwiZmlsZSI6ImZsaWNrci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9