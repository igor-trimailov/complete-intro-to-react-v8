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
            <div className="carousel">
                <img src={images[active]} alt="animal hero" />
                <div className="carousel-smaller">
                    {images.map((photo, index) => (
                        // eslint-disable-next-line
                        <img
                            src={photo}
                            key={photo}
                            className={index === active ? "active" : ""}
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
