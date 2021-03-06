import Ember from 'ember';


export default Ember.Route.extend({
 model: function(params) {
   var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=0613f3c5dde44d699a1a8c7adb2e6ed7&zip=' + params.zip;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     var legislators = [];
     responseJSON.results.forEach(function(legislator) {
       legislators.push(legislator);
     });
     return legislators;
   });

  //  let url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=0613f3c5dde44d699a1a8c7adb2e6ed7&zip=90041';
  //  return Ember.$.getJSON(url).then((responseJSON) => {
  //    let legislators = Ember.A();
  //    responseJSON.results.forEach((legislator) => {
  //      legislators.pushObject(Ember.Object.create(legislator));
  //    });
  //    return legislators;
  //  });
  //
 }
});
