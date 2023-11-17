import { useAccount } from "wagmi";

const Footer = () => {
  const { isConnected } = useAccount();
  return (
    <>
      <div className="relative z-[2] flex justify-between items-center px-56 h-[165px] bg-[#111111] shadow-lg1">
      </div>
    </>
  );
};

export default Footer;
