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
            <div className="mt-1 flex h-96 items-center justify-around">
                <img
                    className="max-w-9/20 max-h-96"
                    src={images[active]}
                    alt="animal hero"
                />
                <div className="w-1/2">
                    {images.map((photo, index) => (
                        // eslint-disable-next-line
                        <img
                            className={`m-4 inline-block h-24 w-24 cursor-pointer rounded-full border-2 border-gray-200 ${index === active ? "opacity-50" : ""}`}
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
