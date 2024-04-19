import Image from "next/image";
import { Header } from "./components/Header";
import { AvailableBalance } from "./components/AvailableBalance";
import SmallSquare from "./layouts/SmallSquare";
import { BudgetMontly } from "./components/BudgetMontly";
import SavingGoal from "./components/SavingGoal";
import Income from "./components/Income";
import Expense from "./components/Expense";
import Footer from "./components/Footer";
import FotoorNav from "./asset/FotoorNav";

export default function Home() {
  return (
    <main className="flex min-h-screen  bg-slate-100 flex-col pb-20 ">
      <SmallSquare bgColor="bg-transparent">
        <Header />
      </SmallSquare>
      <SmallSquare bgColor="bg-primary" textColor="text-slate-100">
        <AvailableBalance />
      </SmallSquare>
      <SmallSquare bgColor="bg-primary" textColor="text-slate-100">
        <BudgetMontly />
      </SmallSquare>
      <SmallSquare bgColor="bg-white" shadow={true}>
        <SavingGoal />
      </SmallSquare>
      <div className="flex  justify-between ">
        <div className=" flex-1">
          <SmallSquare bgColor="bg-secondary" shadow={true}>
            <Income />
          </SmallSquare>
        </div>
        <div className=" flex-1 ">
          <SmallSquare bgColor="bg-third" shadow={true}>
            <Expense />
          </SmallSquare>
        </div>
      </div>
      <Footer />
    </main>
  );
}
