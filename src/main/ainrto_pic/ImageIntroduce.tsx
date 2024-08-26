import './ImageIntroduce.css';
import photo1 from './pic/20240610_111632.jpg';
import photo2 from './pic/20240610_125329.jpg';
import photo3 from './pic/20240610_125607.jpg';
import photo4 from './pic/20240610_메뉴간판.jpg';
import photo5 from './pic/20240619_외부간판.jpg';
import photo6 from './pic/20240710_172726.jpg';
import photo7 from './pic/20240710_185942.jpg';
import photo8 from './pic/20240716_사무실.jpg';
import React, { useState } from "react";
import ImageGallery from "react-image-gallery";

interface item {
  original: string,
  thumbnail: string,
  originalWidth ?: number,
  originalHeight ?: number,
  thumbnailWidth ?: number,
  thumbnailHeight ?: number,
  content?: string,
}

const ImageIntroduce: React.FC = () => {
  return <ImageGallery items={itemData} showFullscreenButton={false} showPlayButton={false} showNav={false} />
}

export default ImageIntroduce;

const itemData: item[] = [
    {
      original: photo1,
      thumbnail: photo1,
      originalWidth : 400,
      originalHeight : 300,
      thumbnailWidth : 40,
      thumbnailHeight : 40,
      content: "설명",
    },
    {
      original: photo2,
      thumbnail: photo2,
      originalWidth : 400,
      originalHeight : 300,
      thumbnailWidth : 40,
      thumbnailHeight : 40,
      content: "설명",
    },
    {
      original: photo3,
      thumbnail: photo3,
      originalWidth : 400,
      originalHeight : 300,
      thumbnailWidth : 40,
      thumbnailHeight : 40,
      content: "설명",
    },
    {
      original: photo4,
      thumbnail: photo4,
      originalWidth : 400,
      originalHeight : 300,
      thumbnailWidth : 40,
      thumbnailHeight : 40,
      content: "설명",
    },
    {
      original: photo5,
      thumbnail: photo5,
      originalWidth : 400,
      originalHeight : 300,
      thumbnailWidth : 40,
      thumbnailHeight : 40,
      content: "설명",
    },
    {
      original: photo6,
      thumbnail: photo6,
      originalWidth : 400,
      originalHeight : 300,
      thumbnailWidth : 40,
      thumbnailHeight : 40,
      content: "설명",
    },
    {
      original: photo7,
      thumbnail: photo7,
      originalWidth : 400,
      originalHeight : 300,
      thumbnailWidth : 40,
      thumbnailHeight : 40,
      content: "설명",
    },
    {
      original: photo8,
      thumbnail: photo8,
      originalWidth : 400,
      originalHeight : 300,
      thumbnailWidth : 40,
      thumbnailHeight : 40,
      content: "설명",
    },
  ];