import React from 'react';
import dummy from '../db/data.json'
import { Link } from 'react-router-dom';

function DayList() {
    return (
        <ul className='list_day'>
            {dummy.days.map(item => {
                return <li key={item.id}>
                    <Link to={`/day/${item.day}`} >
                        Day {item.day}
                    </Link>
                </li>
            })}
        </ul >
    );
}

export default DayList;