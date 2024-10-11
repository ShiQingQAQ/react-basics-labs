import React from 'react';

const Task = (props) => {
    // 根据优先级返回不同的样式
    const getPriorityStyle = (level) => {
        if (props.done) {
            return { backgroundColor: 'lightgrey', color: 'black' }; // 完成的任务显示为灰色
        }

        switch (level) {
            case 'Low':
                return { backgroundColor: '#d4edda', color: '#155724' };  // 低优先级：浅绿色背景
            case 'Medium':
                return { backgroundColor: '#fff3cd', color: '#856404' }; // 中等优先级：浅黄色背景
            case 'High':
                return { backgroundColor: '#f8d7da', color: '#721c24' }; // 高优先级：浅红色背景
            default:
                return { backgroundColor: '#5bb4c4', color: '#ffffff' };   // 默认：蓝色背景
        }
    };

    return (
        <div className="card" 
             style={getPriorityStyle(props.level)}> {/* 应用样式 */}
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
            <p className='priority-level'>{props.level}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    );
};

export default Task;