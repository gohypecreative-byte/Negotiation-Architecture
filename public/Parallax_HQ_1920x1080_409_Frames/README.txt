PARALLAX FRAME SEQUENCE

Source: 1008 (1).mp4
Resolution: 1920 x 1080 (original, 16:9)
Frame rate: 30 fps
Frames: 409, frame_0001.webp through frame_0409.webp
Encoding: WebP quality 95, no resizing or frame skipping

WEBSITE INTEGRATION
Place the frames in your website public assets folder.
Map scroll progress 0..1 to frame index Math.round(progress * 408).
Preload the initial frames and load the remaining sequence progressively.
Draw only fully loaded images; keep the last drawn frame while the next loads.
Set canvas backing width/height to CSS size multiplied by devicePixelRatio,
then scale the drawing context by devicePixelRatio. Reset scaling on resize.
Preserve the 16:9 aspect ratio. Use contain if the full image must stay visible.
Avoid CSS blur filters, low-resolution canvas buffers, and excessive enlargement.
These frames preserve source quality. Blur already in the video is still present.
