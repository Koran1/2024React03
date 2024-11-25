import React from 'react';
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

function CreateDays() {
    const day = useFetch('http://localhost:3010/days')
    const history = useNavigate();
    function addDay() {
        fetch(`http://localhost:3010/days`, {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                day: day && day.length + 1,
            })
        }).then(res => {
            if (res.ok) {
                alert('날짜 추가 완료되었습니다')
                history('/')
            }
        }).catch(err => console.error("Error : " + err))
    }

    return (
        <div>
            <h2>현재 일수 : {day && day.length}일</h2>
            <button onClick={addDay}>날짜 추가</button>

        </div>
    );
}

export default CreateDays;