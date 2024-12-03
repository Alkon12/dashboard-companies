import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { CardSummary } from "./components/CardSumary";
import { BookOpenCheck, Icon, UsersRound, Waypoints } from "lucide-react";
import { LastCustomers } from "./components/LastCustomers/LastCustomers";

const dataCardsSummary = [
  {
    Icon:UsersRound,
    total:"12.450",
    average:15,
    title:"Companies created",
    tooltipText:"See all of the companies created" 
  },
  {
    Icon:Waypoints,
    total:"86.5%",
    average:80,
    title:"Total Revenue",
    tooltipText:"See all of the summary"
  },
  {
    Icon:BookOpenCheck,
    total:"363,95",
    average:30,
    title:"Bounce Rate",
    tooltipText:"See all of the bounce rate"
  },
]

export default function Home() {
  return (
   <div>
      <h1 className="text-2xl mb-4">dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">   
        {dataCardsSummary.map(({Icon, total, average, title, tooltipText}) => (
         <CardSummary
          key={title}
          icon={Icon}
          total={total}
            average={average}
            title={title}
            tooltipText={tooltipText}
          />
        ))}              
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 md:gap-x-10 mt-12">
        <LastCustomers/>
        <p>Sales Distributors</p>
      </div> 
   </div> 
  );
}
