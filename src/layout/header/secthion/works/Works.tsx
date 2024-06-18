import React, {useState} from "react";
import {SecthionTitle} from "../../../../components/SecthionTitle";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "./../../../../assets/images/lesson-1.png";
import timerImg from "./../../../../assets/images/lesson-2.png";
import {Container} from "../../../../components/Container";
import {TabMenu, TabsStatusType} from './tabMenu/TabMenu';
import {S} from './Works_Styles'

// const tabsItems = ["ALL", "Landing Page", "React", "spa"];

const tabsItems: Array<{ status: "all" | "landing" | "react" | "spa", title: string }> = [
    {
        title: "ALL",
        status: "all"
    },
    {
        title: "Landing Page",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "spa",
        status: "spa"
    },
]

const worksData = [
    {
        title: "Social Network",
        src: socialImg,
        text: "Summertime,white Porche Carrera is milky I'm on the grind let my " +
            "paper stack when I'm filthy It's funny how niggas get the screw facin' at me Anyhow, " +
            "they aint got the heart to get at me I'll get down, Southside's the hood that I come from",
        type: "spa"
    },
    {
        title: "Timer",
        src: timerImg,
        text: "So I don't cruise to nobody hood without my gun You know the kid ain't gon' " +
            "fall for all that bullshit Try and stick me, I'ma let off a full clip It ain't " +
            "my fault you done fucked up your re-up",
        type: "react"
    },

]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filtredWorks = worksData

    if (currentFilterStatus === "landing") {
        filtredWorks = worksData.filter(work => work.type === "landing")
    }
    if (currentFilterStatus === "react") {
        filtredWorks = worksData.filter(work => work.type === "react")
    }
    if (currentFilterStatus === "spa") {
        filtredWorks = worksData.filter(work => work.type === "spa")
    }

    function changeFilterStatus (value: TabsStatusType ) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id={"works"}>
            <Container>
                <SecthionTitle>My Works</SecthionTitle>
                <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus}
                currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    {filtredWorks.map((w) => {
                        return <Work title={w.title}
                                     src={w.src}
                                     text={w.text}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

