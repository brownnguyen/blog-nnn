import React, { Component } from 'react';
import './HomeBlog.scss';
import imgblog from '../../images/img-blog-2.jpg';
import { NavLink } from 'react-router-dom';
export default class HomeBlog extends Component {
    render() {
        return (
            <section className="mainBlog">
                <div className="img-blog">
                    <img src={imgblog} alt="blog" />
                </div>
                <div className="box">
                    <div className="blog-content">
                    <h3 className="title">
                        BLOG
                    </h3>
                    <p className="text">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                    <NavLink to="/blog" className="btn-seeMore">
                        SEE MORE
                    </NavLink>
                    </div>
                </div>
            </section>
        )
    }
}
