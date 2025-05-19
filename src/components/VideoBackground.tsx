
import React from "react";

const VideoBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Video element - source will be set when the user uploads their video */}
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
