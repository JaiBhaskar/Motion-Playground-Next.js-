import Loading from "./components/loading";
import Bounce from "./components/bounce";
import { Basics } from "./components/basics";
import { Simple } from "./components/simple";
import { Submit } from "./components/submit";
import { FeaturesList } from "./components/FeaturesList";
import DraggeableCard from "./components/draggeableCard";
import { AnimatePresenceDemo } from "./components/animatepresencedemo";
import {CollapsibleList} from "./components/collapsibleList";
import { LiveBadge } from "./components/liveBadge";

export default function Page() {
    return (
        <main className="flex flex-col items-center my-2 gap-3">
            <Loading />
            <Bounce />
            <Basics />
            <Simple />
            <Submit>Submit</Submit>
            <Submit stiffness={200} damping={2}>CLICK ON THIS AD ;)</Submit>
            <FeaturesList />
            <DraggeableCard />
            <AnimatePresenceDemo />
            <CollapsibleList />
            <LiveBadge />
        </main>
    );
}
