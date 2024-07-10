import React, { useEffect, useState } from 'react';
import { like, likeFilled } from '../constants/icons';
import { Link } from 'react-router-dom';

const ProductCard = ({ data }) => {
  const [isLiked, setIsLiked] = useState(data.isLiked);

  const tagText = () => {
    if (data.isNew) {
      // setTagColor('#28A12D');
      return 'New';
    }

    if (!data.quantity) {
      // setTagColor('#010A18');
      return 'Sold Out';
    }

    if (data.unitsSold > 200) {
      // setTagColor('#052E70');
      return 'Top';
    }

    if (data.isDiscount) {
      // setTagColor('#BE3838');
      const discountDiff = data.price - data.discountPrice;
      const discountPercent = (discountDiff / data.price) * 100;
      return `${Math.round(discountPercent)}%`;
    }
  };

  const tagColor = () => {
    if (data.isNew) {
      return '#28A12D';
    }

    if (!data.quantity) {
      return '#010A18';
    }

    if (data.unitsSold > 200) {
      return '#052E70';
    }

    if (data.isDiscount) {
      return '#BE3838';
    }
  };

  return (
    <div className="aspect-square w-full bg-white relative shadow-md flex-col px-2 py-4">
    <Link to={`/products/${data.slug}`}>
      <img
        className="relative z-10 w-full aspect-square object-contain"
        src={data.sourceUrl}
        alt={data.title}
      />
    </Link>
      <div className="relative z-10 flex flex-col">
        <div className="flex justify-between">
          <p className="text-[#5F5F60] text-sm leading-[23.27px] secondary-font font-normal">
            {data.title}
          </p>
          <p className="secondary-font leading-[27px] font-bold text-base text-[#3D3D3D]">
            ${data.price.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between">
          <span className="text-[#6A96CA] cursor-pointer text-xs font-normal leading-[17.34px] tertiary-font">
            Read more...
          </span>
          {data.isDiscount ? (
            <p className="font-bold leading-5 text-xs secondary-font text-[#C1C1C1] discount relative">
              <span className="absolute h-[0.5px] w-[71px] top-[50%] translate-y-1/2 right-0 bg-[#A1A1A1]"></span>
              ${data.discountPrice.toFixed(2)}
            </p>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="absolute w-full h-[216px] bg-[#f4f4f4] top-0 left-0 z-0">
        {' '}
      </div>
      <img
        onClick={() => setIsLiked(!isLiked)}
        className="cursor-pointer z-20 absolute top-[185px] w-6 h-6 right-2"
        src={isLiked ? likeFilled : like}
        alt="like-button"
      />
      <div
        className={`absolute top-[8px] left-[6px] z-10 uppercase secondary-font w-[54.91px] h-[17.82px] flex justify-center items-center font-medium text-[10px] leading-[16.62px] text-white`}
        style={{ backgroundColor: tagColor() }}
      >
        {tagText()}
      </div>
    </div>
  );
};

export default ProductCard;
