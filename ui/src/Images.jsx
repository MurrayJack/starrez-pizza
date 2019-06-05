import * as React from "react";
import ImageGallery from 'react-image-gallery';

class Images extends React.Component {

    render() {

        const images = [
            {
                original: './1.jpg',
                thumbnail: './1.jpg',
            }
        ]

        return (
            <ImageGallery items={images} />
        );
    }
}

export default Images;