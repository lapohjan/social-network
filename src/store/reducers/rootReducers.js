const currentTime = new Date();

const initialState = {
    posts: [
    {id: 'first', title: '1. sample title', content: '1. sample content', time: currentTime},
    {id: 'second', title: '2. sample title', content: '2. sample content', time: currentTime},
    {id: 'third', title: '3. sample title', content: '3. sample content', time: currentTime},
    {id: 'fourth', title: '4. sample title', content: '4. sample content', time: currentTime},
    {id: 'fifth', title: '5. sample title', content: '5. sample content', time: currentTime},
    {id: 'sixth', title: '6. sample title', content: '6. sample content', time: currentTime}
    ]
};

const rootReducers = (state = initialState, action) => {
    return state;
}

export default rootReducers;