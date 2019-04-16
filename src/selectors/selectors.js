export default (posts, { title = '', searchby = 'title' }) => {
    return posts.filter((post) => {
        if(searchby === 'title') {
            const titleMatch = post.title.toLowerCase().includes(title.toLowerCase().trim());
            return titleMatch;
        } else if (searchby === 'author') {
            const authorMatch = post.name.toLowerCase().includes(title.toLowerCase().trim());
            return authorMatch;
        }
    })
};