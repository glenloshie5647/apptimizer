/*
File name: ComplexCode.js
Description: This code demonstrates a complex implementation of a social media platform.
*/

// Variables
let users = [];
let posts = [];

// User Class
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.friends = [];
    this.posts = [];
  }

  addFriend(user) {
    if (!this.friends.includes(user)) {
      this.friends.push(user);
      user.addFriend(this);
    }
  }

  createPost(content) {
    const post = new Post(this, content);
    this.posts.push(post);
    posts.push(post);
  }

  getNewsFeed() {
    const friendsPosts = this.friends.flatMap((friend) => friend.posts);
    return [...this.posts, ...friendsPosts].sort((a, b) => b.createdAt - a.createdAt);
  }
}

// Post Class
class Post {
  constructor(user, content) {
    this.user = user;
    this.content = content;
    this.createdAt = new Date();
    this.likes = 0;
  }

  like() {
    this.likes++;
  }
}

// Create users
const john = new User("John Doe", 25, "john@example.com");
const sarah = new User("Sarah Smith", 28, "sarah@example.com");

// Add friends
john.addFriend(sarah);

// Create posts
john.createPost("Hello, everyone!");
sarah.createPost("Hey, it's Sarah!");

// Like posts
john.posts[0].like();

// Output news feed
console.log("John's News Feed:", john.getNewsFeed());

// Output total number of likes
console.log("Total Likes:", posts.reduce((total, post) => total + post.likes, 0));

// Additional user actions, interactions, and complex features can be added below...
// ...

// End of code.