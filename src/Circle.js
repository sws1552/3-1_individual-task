import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";


const Circle = (props) => {

    let history = useHistory();
    const my_week = props.week;

    let num = Array.from({length:5}, (v, i) => i);
    
    
    return (
        <>
            <h1>내  일주일은?</h1>
            {my_week.map((item, i) => {
                const randomNum = Math.floor(Math.random() * 5) + 1;
                
                return (
                    <Wrap key={i}>
                        <Week>{item}</Week>
                        {num.map((v, j) => {
                            
                            return <MiniCircle key={j} style={{backgroundColor: randomNum <= j ? "#D3D3D3" : "orange" }}></MiniCircle>
                        })}

                        <Triangle onClick={() => {
                            history.push({
                                pathname: "/grade",
                                state: {week: item}
                            });
                        }}></Triangle>
                    </Wrap>
                )
            })}
        </>
    )
}

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin : 20px;
    .orangeCircle {
        background-color: orange;
    }
`;

const Week = styled.p`
    font-weight: 700;
`;

const MiniCircle = styled.div`
    background-color: #D3D3D3;
    width:30px;
    height:30px;
    border-radius:30px;
    margin-left: 10px;
`;

const Triangle = styled.div`
    margin-left: 10px;
    appearance: none;
    background-color: transparent;
    border-color: transparent purple;
    width: 0px;
    height: 0px;
    border-top-width: 1rem;
    border-top-style: solid;
    border-bottom-width: 1rem;
    border-bottom-style: solid;
    border-left-width: 1.6rem;
    border-left-style: solid;
    color: rgb(255, 255, 255);
    cursor: pointer;
`;


export default Circle;