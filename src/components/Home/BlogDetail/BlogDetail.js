import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
// import Blogs from '../Blogs/Blogs';
import BlogPost from '../BlogPost/BlogPost';
import wilson from '../../../images/wilson.png';
import hero from '../../../images/chair.png';

const BlogDetail = () => {

    const blogData = [
        {
            title: 'Check at least a doctor in a year for your teeth',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author: 'Dr. Cudi',
            authorImg: wilson,
            date: '23 April 2019'
        },
        {
            title: 'Two time brush in a day can keep you healthy',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author: 'Dr. Sinthia',
            authorImg: wilson,
            date: '23 April 2019'
        },
        {
            title: 'The tooth cancer is taking a challenge',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author: 'Dr. Cudi',
            authorImg: wilson,
            date: '23 April 2019'
        },
    ]


    return (
        <div>
            <Navbar></Navbar>
            <div className="blogs pt-3">
                <div className="mt-5">
                    <div className="text-center bg-light py-5">
                        <h1>Blog</h1>
                        <h1>From Our Blog News</h1>
                    </div>
                    <div className="text-center mt-5">

                    </div>
                    <div className="card-group container">

                        {
                            blogData.map(blog => <BlogPost blog={blog} key={blog.title} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;