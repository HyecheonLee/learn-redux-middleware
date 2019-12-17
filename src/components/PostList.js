import React from 'react';
import {Link} from "react-router-dom";


function PostList({posts}) {
	return (
		posts.map(post => <ul>
			<Link to={`/${post.id}`} key={post.id}>{post.title}</Link>
		</ul>));
}

export default PostList;