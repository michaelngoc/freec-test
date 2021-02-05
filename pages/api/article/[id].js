export default (req, res) => {
    res.status(200).json(
        {
            "id": "1",
            "title": "Article 1",
            "alias": "article-1",
            "image": "/images/tempt/article.jpg",
            "imageDetail": ["/images/tempt/article.jpg", "/images/tempt/article.jpg"],
            "publishDate": "05/05/2021",
            "category": "1",
            "MainInfo": "abc",
            "Description": "",
            "status": true
        }
    )
}