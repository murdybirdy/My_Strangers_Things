import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Profile = ({ myMessages, setCurrentPost, posts, token, setToken }) => {

  async function getPost(postId) {
    const postToView = posts.filter(post => post._id === postId);
    setCurrentPost(postToView[0]);
  }

  function logout() {
    setToken('');
    window.localStorage.removeItem("token");
  }

  const messages = myMessages.data.messages;
   return (
    <section className="messages">
      <nav id="navbar">
        { !token
          ? window.location.href="/"
          : <React.Fragment>
              <Link to="/createPost">Create Listing</Link>
              <Link to="/">Back to Listings</Link>
              <Link to="/" onClick={logout}>Logout</Link>
            </React.Fragment>
        }
        </nav>
      <h2>My Messages</h2>
      {
        messages.map((message, index) => {
          return (
            <div
              key={index}
              className="message"
            >
              <h3>From: {message.fromUser.username}</h3>
              { message.content ? <h4>Message: {message.content}</h4> : null}
              <Link to="/viewPost" onClick={() => getPost(message.post._id)}>VIEW MY POST: {message.post.title}</Link>
            </div>
          )
        })
      }
    </section>
   )
}

export default Profile;