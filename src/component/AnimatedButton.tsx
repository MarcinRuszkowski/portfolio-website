import React from "react";
import { AnimatedSubscribeButton } from "./ui/animated-subscribe-button";

type AnimatedButtonProps = {
  elemBefore: { text: string; icon: React.ReactNode };
  elemAfter: { text: string; icon: React.ReactNode };
};

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  elemBefore,
  elemAfter,
}) => {
  return (
    <AnimatedSubscribeButton className="rounded-lg px-3 py-1 bg-primary  text-lg text-secondary font-medium mt-6 self-center w-36">
      <span className="group inline-flex items-center">
        {elemBefore.text}
        <div className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1">
          {elemBefore.icon}
        </div>
      </span>
      <span className="group inline-flex items-center">
        <div className="mr-2 size-4">{elemAfter.icon}</div>
        {elemAfter.text}
      </span>
    </AnimatedSubscribeButton>
  );
};
