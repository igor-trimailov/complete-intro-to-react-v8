import { Component } from "react";
import { HOST } from "../const";

class Carousel extends Component {
    state = {
        active: 0,
    };

    static defaultProps = {
        images: [`${HOST}/pets/none.jpg`],
    };

    handleIndexClick = (e) => {
        this.setState({
            active: +e.target.dataset.index,
        });
    };

    render() {
        const { active } = this.state;
        const { images } = this.props;

        return (
            <div className="mt-1 flex items-center justify-around">
                <img src={images[active]} alt="animal hero" />
                <div className="w-50">
                    {images.map((photo, index) => (
                        // eslint-disable-next-line
                        <img
                            className="m-4 inline-block h-full w-full cursor-pointer rounded-full border border-gray-200"
                            src={photo}
                            key={photo}
                            alt="animal thumbnail"
                            onClick={this.handleIndexClick}
                            data-index={index}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Carousel;
