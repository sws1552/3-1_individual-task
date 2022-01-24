import React, { useState } from "react";
import styled from "styled-components";
import {useLocation, useHistory} from "react-router-dom";


const Grade = () => {
    
    const location = useLocation();
    const history = useHistory();
    const [clicked, setClicked] = useState([false,false,false,false,false]);
    const week = location.state.week;
    let num = Array.from({length:5}, (v, i) => i);

    const handleClick = (index) => {
        let clickStates = [...clicked];
        for(let i = 0; i<5; i++)  {
            clickStates[i] = i <= index ? true : false;
        }

        setClicked(clickStates);
    };

    React.useEffect(() => {
        sendReview();
    }, [clicked]);

    const sendReview = () => {
        let score = clicked.filter(Boolean).length;
    }

    
    
    return (
        <Container>
            <h1><Week>{week}요일</Week> 평점 남기기</h1>
            <Wrap>
            {num.map((v, i) => {
                return <MiniCircle key={i} className={clicked[v] && 'orangeCircle'} onClick={() => {
                    handleClick(v);
                }}></MiniCircle>
            })}
            </Wrap>
            <Btn onClick={() => {
                history.push({
                    pathname: "/",
                });
            }}>평점 남기기</Btn>
        </Container>
    )
}

const Container = styled.div`
    padding: 10px;

    .orangeCircle {
        background-color: orange;
    }
`;

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Week = styled.span`
    background-color:orange;
    color:white;
    border-radius:10px;
`;

const MiniCircle = styled.div`
    background-color: #D3D3D3;
    width:30px;
    height:30px;
    border-radius:30px;
    margin-left: 10px;
    cursor: pointer;
`;

const Btn = styled.div`
    width:80%;    
    background-color: purple;
    color: white;
    text-align: center;
    padding: 10px;
    border-radius: 10px;
    margin: 20px auto;
    cursor: pointer;
`;

export default Grade;

