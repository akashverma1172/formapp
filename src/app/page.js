'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

import Header from '@/core/header/Header';
import Body from '@/core/body/Body';

export default function App(){
  const addRef = useRef(); 


  return(
    <div className='min-h-screen mx-auto flex flex-col'>
      <Header />
      <Body />
    </div>
  );
}