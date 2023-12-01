'use client';

import {useState, useEffect, useRef} from 'react';


export default function Header(){
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')

    return(
        <div className='bg-green-500'>
            Head
        </div>
    );
}