import React, {useEffect, useState} from 'react'
import Axios from 'axios';
import Api from './Api';
import Container from './Container';
import AdviceId from './AdviceId';






const AdviceContainer = () => {

    const [advice, setAdvice] = useState('');
    const [id, setId] = useState('');


    const getAdvice = () => {
        Axios.get(Api)
        .then((response) => {
            setAdvice(response.data.slip.advice)
            setId(response.data.slip.id)
        })
        .catch((err) => {
            throw err
        });
    }

    useEffect (() => {
        getAdvice();
    }, [])


  return (
    <Container>
        
        <AdviceId> ADVICE #{id}</AdviceId>

        <div className='advice'>"{advice}"</div>

        <span className='divider'>
            <svg viewBox='0 0 444 16' xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                    <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/>
                    <g transform="translate(212)" fill="#CEE3E9">
                        <rect width="6" height="16" rx="3"/>
                        <rect x="14" width="6" height="16" rx="3"/>
                    </g>
                </g>
            </svg>
        </span>

        <button onClick={getAdvice} className='dice'>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/>
            </svg>
        </button>

    </Container>
  )
}

export default AdviceContainer