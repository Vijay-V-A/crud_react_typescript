import { FC } from "react";
const Loader: FC = () => {
  return (
    <div className="flex items-center justify-centr  py-6 md:justify-center md:space-x-10 mx-auto max-w-7xl px-4 sm:px-6">
      <div
        className="
spinner-border
animate-spin
inline-block
w-8
h-8
border-4
rounded-full
text-green-500
"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
