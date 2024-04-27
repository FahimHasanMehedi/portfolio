import React from "react";

const CardWithHover = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="glass-effect rounded-sm transition-all duration-300">
      {children}
    </div>
  );
};

export default CardWithHover;
