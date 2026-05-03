import { useEffect, useState } from 'react';

export const UseEffect = () => {
    useEffect(() => {
        const id = setInterval(() => {
            // do something
            console.log("do something");
        }, 100);
        // return () => clearInterval(id); ← cleanup 빠뜨리면
        return () => clearInterval(id); // 컴포넌트 사라질 때 타이머 해제
    }, []);
}