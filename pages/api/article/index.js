export default (req, res) => {
    res.status(200).json([
        {
            "id": "1",
            "title": "Article 1",
            "alias": "article-1",
            "image": "/images/article.jpg",
            "imageDetail": ["/images/article.jpg", "/images/article.jpg"],
            "publishDate": "05/05/2021",
            "category": "1",
            "MainInfo": "abc",
            "Description": "",
            "status": true
        },
        {
            "id": "2",
            "title": "Article 2",
            "alias": "article-2",
            "image": "/images/article.jpg",
            "imageDetail": ["/images/article.jpg", "/images/article.jpg"],
            "publishDate": "06/05/2021",
            "category": "1",
            "MainInfo": "abc",
            "Description": "",
            "status": true
        }
    ])
}