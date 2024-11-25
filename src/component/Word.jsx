import { useState } from "react";

function Word({ item }) {
    const [wo, setWo] = useState(item);

    const [isShow, setIsShow] = useState(false);
    const toggleShow = () => {
        setIsShow(!isShow)
    }

    const [isChked, setIsChked] = useState(item.isDone)
    const toggleChked = () => {
        // fetch(`http://localhost:3010/words?id=${item.id}`)
        fetch(`http://localhost:3010/words/${item.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                ...item,
                isDone: !isChked
            })
        })
            .then(res => {
                if (res.ok) {
                    setIsChked(!isChked)
                    setIsShow(false)
                }
            })
            .catch(err => console.log("Error : ", err))
    }

    function del() {
        if (window.confirm('정말 삭제할까요?')) {
            fetch(`http://localhost:3010/words/${item.id}`, {
                method: 'DELETE'
            })
                .then(res => {
                    if (res.ok) {
                        // 상태를 초기화
                        setWo({ id: 0 })
                    }
                })
                .catch(err => console.log("Error : ", err))
        }
    }
    // id 가 0 이면 null을 리턴한다.
    if (wo.id === 0) {
        return null;
    }
    return (
        <tr className={isChked && 'off'}>
            <td><input type="checkbox" checked={isChked} onClick={toggleChked} /></td>
            <td>{item.eng}</td>
            <td>{isShow && item.kor}</td>
            <td>
                <button onClick={toggleShow}>
                    뜻 {isShow ? '숨기기' : '보기'}</button>
                <button onClick={del} className='btn_del'>삭제</button>
            </td>
        </tr>
    );
}

export default Word;