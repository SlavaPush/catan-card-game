import React from "react";
import { useSelector } from "react-redux";
import PlayerStepInfo from "../PlayerStepInfo.js";
import BtnNextStep from "../BtnNextStep/index.js";
import Chat from "../Chat/Chat.js";

export default function SidebarCounter({ urlPl2 }) {
    // const step = useSelector(state => state.cards.step)
    const namePlayer1 = useSelector(state => state.cards.player1.name)
    const namePlayer2 = useSelector(state => state.cards.player2.name)
    const pointsPlayer1 = useSelector(state => state.cards.player1.points)
    const pointsPlayer2 = useSelector(state => state.cards.player2.points)
    const playerNowName = useSelector(state => state.cards[state.cards.playerNow].name)

    return (
        <>

            <PlayerStepInfo {...{
                playerNowName,
                namePlayer1,
                namePlayer2,
                pointsPlayer1,
                pointsPlayer2
            }} />
            <Chat />
            <BtnNextStep />
        </>
    )
}
