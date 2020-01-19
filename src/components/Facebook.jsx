import React from 'react';

export const Facebook = () => {
  return (
    <div
      className="fb-share-button"
      data-href="https://hotel-a7493.firebaseapp.com/"
      data-layout="button_count"
      data-size="large"
    >
      <a
        target="_blank"
        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fhotel-a7493.firebaseapp.com%2F&amp;src=sdkpreparse"
        className="fb-xfbml-parse-ignore"
      ></a>
    </div>
  );
};
