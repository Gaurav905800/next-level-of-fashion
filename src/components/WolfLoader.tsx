import { Wolf } from "iconoir-react";
import React from "react";

const WolfLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      <style>{`
        @keyframes blackWhiteBlink {
          0%, 100% { 
            opacity: 1;
            filter: brightness(1);
          }
          50% { 
            opacity: 0;
            filter: brightness(0);
          }
        }
        .full-blink {
          animation: blackWhiteBlink 0.333333s ease-in-out infinite;
        }
      `}</style>

      {/* Full Black to White Blinking Wolf Icon */}
      <div className="full-blink">
        <Wolf width={150} height={150} color="white" strokeWidth={1.2} />
      </div>

      {/* Brand name */}
      <div className="absolute bottom-8 text-white/50 text-xs tracking-widest">
        NEXT LEVEL OF FASHION
      </div>
    </div>
  );
};

export default WolfLoader;
