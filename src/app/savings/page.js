import SavingsContainer from "@/components/savings/SavingsContainer";
import { CardContainer } from "@/components/layout/CardContainer";

export default function showSavings() {
  return (
    <>
      <h2 className="text-3xl mb-8 my-8 font-bold">My Savings</h2>
      

      <SavingsContainer />
    </>
  );
}
