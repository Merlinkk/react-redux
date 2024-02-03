    import React,{useState, useEffect} from 'react'
    import reducer from './Reducer'
    import { useSelector } from 'react-redux'
    import { Provider } from 'react-redux';
    import { createStore,  } from 'redux'
    import { incrementLike, decrementLike } from './Actions'

    const store = createStore(reducer)

    function LikeCounter() {

        // display like workaround using useState and subscribe
        const [likes, setLikes] = useState(store.getState().likes);

            store.subscribe(() => {
            setLikes(store.getState().likes);
          });

        // []

        function like(){
            store.dispatch(incrementLike())
            console.log(store.getState().likes)
        }

        function dislike(){
            store.dispatch(decrementLike())
            console.log(store.getState().likes)
        }   

    return (
        <>
        
        <div style={{
            padding:'10px',
            border:'1px solid lime',
            margin:'10px',
            fontSize:'20px',
            borderRadius:'10px',
        }}>{likes}</div>
        
        <div>
            <button 
            style={{
                padding:'10px',
                margin:'10px',
                fontSize:'20px',
                backgroundColor:'lime',
                color:'black'
            }}
            onClick={like}>
                Like
            </button>
            <button 
            style={{
                padding:'10px',
                margin:'10px',
                fontSize:'20px',
                backgroundColor:'red',
                color:'white'
            }}
            onClick={dislike}>
                Dislike
            </button>
        </div>
        </>
    )
    }

    export default LikeCounter