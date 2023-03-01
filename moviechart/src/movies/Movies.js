import React, { useState } from 'react';
import './style.css';
import movie from '../assets/api/movie.json' //json형식 데이터를 불러올때는 풀네임 적어줘야 함
import MovieView from './MovieView';
import MovieList from './MovieList';
import Modal from './Modal';
 
const Movies = () => {
 
    //data에 useState 기본값으로 movie파일에 있는 데이터를 넣어줌
    const [data,setData] = useState(movie)
    //movieInfo에 0번째 인덱스 데이터를 기본값으로 설정
    const [movieInfo,setMovieInfo] = useState(data[0])
 
    //isShow는 기본으로 false로 지정 / onOpen / Close 함수에 따라 값이 달라짐
    const [isShow,setIsShow] = useState(false)
 
    const onOver = (id) => {
        const num = data.findIndex(item=>item.rank===id)
        setMovieInfo(data[num])       
    }
 
    //open은 view한테 보낸다
    const onOpen = () => {
        setIsShow(true)
    }
 
    //close는 modal한테 보낸다.
    const onClose = () => {
        setIsShow(false)
    }
 
    return (
        <>
        <div className='gallery'>
            <MovieView movieInfo={movieInfo} onOpen={onOpen}/>
            <MovieList data={data} onOver={onOver}/>
        </div>
        {/* isShow가 true일 때만 보여라 */}
        {
            isShow && <Modal onClose={onClose} movieInfo={movieInfo}/>
        }
        </>
    );
};
 
export default Movies;