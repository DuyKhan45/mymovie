import "./video.css"

const Video = ({ src }) => {
    return (
        <div className="video-tap">
            <iframe
                className="video-tap-main"
                src={src}
                frameBorder="0"
                allowFullScreen
            />
        </div>
    );
};

export default Video;