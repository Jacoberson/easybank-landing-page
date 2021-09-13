import React from "react";
import currencyImage from "../images/image-currency.jpg";
import restaurantImage from "../images/image-restaurant.jpg";
import planeImage from "../images/image-plane.jpg";
import confettiImage from "../images/image-confetti.jpg";

const LatestArticles = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <div className="w-10/12 my-14">
        <h2 className="text-large text-center leading-37 tracking-tight-57 mb-8">
          Latest Articles
        </h2>
        <img src={currencyImage} alt="currency" className="m-auto pb-6" />
        <div className="w-10/12">
          <p className="text-smallest text-neutral-grayish-blue leading-18 tracking-tight-16 pb-2">
            By Claire Robinson
          </p>
          <h3 className="text-subheading leading-20 tracking-tight-29 pb-2">
            Receive money in any currency with no fees
          </h3>
          <p className="text-smaller text-neutral-grayish-blue leading-18 tracking-tight-20 pb-12">
            The world is getting smaller and we're becoming more mobile. So why
            should you be forced to only receive money in a single ...
          </p>
        </div>
        <img src={restaurantImage} alt="restaurant" className="m-auto pb-6" />
        <div>
          <p className="text-smallest text-neutral-grayish-blue leading-18 tracking-tight-16 pb-2">
            By Wilson Hutton
          </p>
          <h3 className="text-subheading leading-20 tracking-tight-29 pb-2">
            Treat yourself without worrying about money
          </h3>
          <p className="text-smaller text-neutral-grayish-blue leading-18 tracking-tight-20 pb-12">
            Our simple budgeting feature allows you to separate out your
            spending and set realistic limits each month. That means you ...
          </p>
        </div>
        <img src={planeImage} alt="plane" className="m-auto pb-6" />
        <div className="w-11/12">
          <p className="text-smallest text-neutral-grayish-blue leading-18 tracking-tight-16 pb-2">
            By Wilson Hutton
          </p>
          <h3 className="text-subheading leading-20 tracking-tight-29 pb-2">
            Take your Easybank card wherever you go
          </h3>
          <p className="text-smaller text-neutral-grayish-blue leading-18 tracking-tight-20 pb-12">
            We want you to enjoy your travels. This is why we don't charge any
            fees on purchases while you're abroad. We'll even show you ...
          </p>
        </div>
        <img src={confettiImage} alt="confetti" className="m-auto pb-6" />
        <div>
          <p className="text-smallest text-neutral-grayish-blue leading-18 tracking-tight-16 pb-2">
            By Claire Robinson
          </p>
          <h3 className="text-subheading leading-20 tracking-tight-29 pb-2">
            Our invite-only Beta accounts are now live!
          </h3>
          <p className="text-smaller text-neutral-grayish-blue leading-18 tracking-tight-20 pb-12">
            After a lot of hard work by the whole team, we're excited to launch
            our closed beta. It's easy to request an invite through the site ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LatestArticles;
