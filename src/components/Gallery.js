import React, { Component } from 'react';

class Gallery extends Component {
    render() { 
        return (
            <div>{
                this.props.items.map((item, index) =>{ 
                    let { title,imageLinks, authors, infoLink, description } = item.volumeInfo;
                    return(
                        <div className='itemstyle'>
                            <a key={index} 
                                className="book" 
                                href={infoLink}
                                target='_blank'
                                >
                                <img src={imageLinks !== undefined ? imageLinks.thumbnail : ""} 
                                    alt="book"
                                    className="book-img"
                                />
                                <div className="book-text">
                                    {title}
                                </div> 
                            </a>
                            <div>
                                <h4>Author</h4>
                                {authors}
                            </div>
                            <div className="hide">
                                    {description}
                            </div>
                        </div>
                    )
                })
                }
            </div>
        );
    }
}
 
export default Gallery;