export default (req, res) => {
    res.status(200).json([
        {
            "id": "1",
            "image": "/images/banner.png",
            "title": "Speak the Language of Intimacy",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla, augue sit amet tincidunt tincidunt, augue turpis suscipit sapien, ac semper purus elit ut nibh.",
            "linkHref": "/product",
            "linkTxt": "Shop Now",
            "status": true
        },
        {
            "id": "2",
            "image": "/images/banner.png",
            "title": "Speak the Language of Intimacy",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla, augue sit amet tincidunt tincidunt, augue turpis suscipit sapien, ac semper purus elit ut nibh.",
            "linkHref": "/product",
            "linkTxt": "Shop Now",
            "status": true
        }
    ])
}