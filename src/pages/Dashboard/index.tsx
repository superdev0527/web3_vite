import { useAccount } from "wagmi";
import RewardPart from "./RewardPart";
import PoolPart from "./PoolPart";
import SeatPart from "./SeatPart";
import RoundPart from "./RoundPart";
import RoamTPart from "./RoamTPart";
import PillarsPart from "./PillarsPart";
import RoamDPart from "./RoamDPart";
import CardsPart from "./CardsPart";
import StrategicPart from "./StrategicPart";

const Dashboard = () => {
  const { isConnected } = useAccount();
  return (
    <>
      <StrategicPart />
      <CardsPart />
      <RoamDPart />
      <PillarsPart />
      <RoamTPart />
      <RoundPart />
      <SeatPart />
      <PoolPart />
      <RewardPart />
    </>
  );
};

export default Dashboard;
