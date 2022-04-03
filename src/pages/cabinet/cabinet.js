import React, {useState, useEffect} from 'react';
import {useAuth} from "../../config/config";
import request from "../../config/request";

function Cabinet() {
    const currentUser = useAuth();
    const [Lesson, setLesson] = useState([]);

    useEffect(()=> {
        getLesson();
    }, []);

    function getLesson() {
        request.call("react_1-lesson").then(res => {
            setLesson(res);
        })
    }

    return (
        <div>
            <div className="cabinet">
                <div className="left-box">
                    <h4> {currentUser.displayName} </h4>
                    <h2> React.js darslari </h2>
                    <div className={'lessons'}>
                        {
                            Lesson.sort((a, b)=> {
                                return a.id - b.id;
                            }).map((item, index)=> <p key={index}>
                                <b> {item.id} </b>
                                {item.lesson}
                            </p>)
                        }
                    </div>
                </div>
                <div className="right-box">

                </div>
            </div>
        </div>
    );
}

export default Cabinet;