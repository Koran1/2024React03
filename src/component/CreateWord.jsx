import React, { useRef } from 'react';
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

function CreateWord() {
    const days = useFetch('http://localhost:3010/days')
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    const history = useNavigate();

    function onSubmit(e) {
        // 기본 새로고침 기능 막아줌
        e.preventDefault();

        fetch('http://localhost:3010/words/', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                day: dayRef.current.value,
                eng: engRef.current.value,
                kor: korRef.current.value,
                isDone: false
            })
        }).then(res => {
            if (res.ok) {
                alert('단어 추가 완료되었습니다')
                history(`/day/${dayRef.current.value}`)
            }
        }).catch(err => console.error("Error : " + err))
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='input_area'>
                <label htmlFor='engInput'>Eng</label>
                <input type='text' placeholder='computer' id='engInput' ref={engRef} />
            </div>
            <div className='input_area'>
                <label htmlFor='korInput'>Kor</label>
                <input type='text' placeholder='컴퓨터' id='korInput' ref={korRef} />
            </div>
            <div className='input_area'>
                <label htmlFor='dayInput'>Day</label>
                <select ref={dayRef}>
                    {days && days.map(item => {
                        return <option key={item.id} value={item.day}>{item.day}</option>
                    })}
                </select>
            </div>
            <button type='submit'>저장</button>
        </form>
    );
}

export default CreateWord;