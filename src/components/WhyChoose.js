import React from "react";
import bankingLogo from "../images/icon-online.svg";
import budgetingLogo from "../images/icon-budgeting.svg";
import onboardingLogo from "../images/icon-onboarding.svg";
import apiLogo from "../images/icon-api.svg";

const WhyChoose = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center pt-6 bg-neutral-light-grayish-blue">
      <div className="w-10/12 mb-14">
        <h2 className="text-large text-center leading-47 tracking-tighter">
          Why choose Easybank?
        </h2>
        <p className="text-small text-neutral-grayish-blue text-center leading-25 tracking-tight-23">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="w-10/12 mb-12">
        <img src={bankingLogo} alt="banking logo" className="m-auto" />
        <h3 className="text-medium text-center leading-28 tracking-tight-36 mt-6 mb-4">
          Online Banking
        </h3>
        <p className="text-small text-neutral-grayish-blue text-center leading-25 tracking-tight-23">
          Our modern web and mobile applications allow you to keep track of your
          finances wherever you are in the world.
        </p>
      </div>
      <div className="w-10/12 mb-12">
        <img src={budgetingLogo} alt="budgeting logo" className="m-auto" />
        <h3 className="text-medium text-center leading-28 tracking-tight-36 mt-6 mb-4">
          Simple Budgeting
        </h3>
        <p className="text-small text-neutral-grayish-blue text-center leading-25 tracking-tight-23">
          See exactly where your money goes each month. Receive notifications
          when you're close to your hitting limits.
        </p>
      </div>
      <div className="w-10/12 mb-12">
        <img src={onboardingLogo} alt="onboarding logo" className="m-auto" />
        <h3 className="text-medium text-center leading-28 tracking-tight-36 mt-6 mb-4">
          Fast Onboarding
        </h3>
        <p className="text-small text-neutral-grayish-blue text-center leading-25 tracking-tight-23">
          We don't do branches. Open your account in minutes online and start
          taking control of your finances right away.
        </p>
      </div>
      <div className="w-10/12 mb-12">
        <img src={apiLogo} alt="open API logo" className="m-auto" />
        <h3 className="text-medium text-center leading-28 tracking-tight-36 mt-6 mb-4">
          Open API
        </h3>
        <p className="text-small text-neutral-grayish-blue text-center leading-25 tracking-tight-23">
          Manage your savings, investments, pension, and much more from one
          account. Tracking your money has never been easier.
        </p>
      </div>
    </div>
  );
};

export default WhyChoose;
