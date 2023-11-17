import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";

const Topbar = () => {
  const { isConnected } = useAccount();
  return (
    <>
      <div className="w-full flex justify-between items-center px-6  xxlg:px-56 h-[130px] border-b border-[#1a1a1a] overflow-hidden">
        <div className="">
          {/* <span className="text-[#E8E8E8] font-PPNeueMachina-PlainLight">
              Connect Wallet
            </span> */}
          <ConnectKitButton.Custom>
            {({
              isConnected,
              isConnecting,
              show,
              hide,
              address,
              ensName,
              chain,
            }) => {
              // Note: If your app doesn't use authentication, you
              // can remove all 'authenticationStatus' checks
              // const ready = mounted && authenticationStatus !== "loading";
              // const connected =
              //   ready &&
              //   account &&
              //   chain &&
              //   (!authenticationStatus ||
              //     authenticationStatus === "authenticated");
              return (
                <div
                  className="flex border-gray-600 rounded-sm border px-5 py-3 items-center cursor-pointer justify-center h-full relative group overflow-hidden"
                  onClick={show}
                >
                  <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-full h-[300px] opacity-0 group-hover:opacity-100 bg-gradient3  transition-all duration-500" />
                  <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-full h-[300px] opacity-0 group-hover:opacity-100 bg-gradient4  transition-all duration-500" />
                  <span className="text-[#E8E8E8] font-PPNeueMachina-PlainLight">
                    Connect Wallet
                  </span>
                </div>
              );
            }}
          </ConnectKitButton.Custom>
        </div>
      </div>
    </>
  );
};

export default Topbar;
