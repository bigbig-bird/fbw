Meteor.publish('posts', function() {
   console.log('publish posts...');
   console.log('posts count:'+Posts.find().count());
   return Posts.find();
});
