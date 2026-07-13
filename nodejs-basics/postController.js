const posts = [
    {id:1, title: 'Seoul itinerary' },
    {id:2, title: 'Cafes in Seongsu' }
];

const getPosts = () => posts;

export const getPostLength = () => posts.length;

export default getPosts;

// method 2: 

// export const getPosts = () => posts;
//index: import {getPosts} from './postController.js';

//method 3: 
// export {getPosts};
//index: import {getPosts} from './postController.js';

//same index for the two methods


