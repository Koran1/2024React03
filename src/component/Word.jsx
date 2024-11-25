import { useState } from "react";

function Word({ item }) {
    const [isShow, setIsShow] = useState(false);
    const toggleShow = () => {
        setIsShow(!isShow)
    }

    const [isChked, setIsChked] = useState(item.isDone)
    const toggleChked = () => {
        setIsChked(!isChked)
        setIsShow(false)
    }
    return (
        <tr className={isChked && 'off'}>
            <td><input type="checkbox" checked={isChked} onClick={toggleChked} /></td>
            <td>{item.eng}</td>
            <td>{isShow && item.kor}</td>
            <td>
                <button onClick={toggleShow}>
                    뜻 {isShow ? '숨기기' : '보기'}</button>
                <button className='btn_del'>삭제</button>
            </td>
        </tr>
    );
}

export default Word;