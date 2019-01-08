import React, {Component} from 'react';
const imgPlaceholder = "https://via.placeholder.com/300x200.png?text=Visit+Meesho.com";
class PostCard extends Component {
  render() {
    console.log(this.props)
    const {data} = this.props.subReddit;
    return (
      
        <div className="card">
          <div className="image">
          {data.thumbnail !== 'self' ? 
            <img src={data.thumbnail} alt={data.author} width="100%"/>:
            <img src={imgPlaceholder} alt="placeholder" width="100%"/>
            }
          </div>
          <div className="text">
            <div>Author: <span>{data.author}</span></div>  
            <div>Author's fullName: <span>{data.author_fullname}</span></div>  
            <div>subscribers: <span>{data.subreddit_subscribers}</span></div>  
            <div>created on: <span>{new Date(data.created*1000).toDateString()}</span></div>  
            <p>Categories: [ {data.content_categories && data.content_categories.map(ele => <span>{ele}</span>)}]</p>
          </div>
        </div>
    )
  }
}

export default PostCard;
