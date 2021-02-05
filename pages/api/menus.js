export default (req, res) => {
    res.status(200).json([
        {
            "id": "1",
            "name": "Home",
            "alias": "/",
            "parent": "0",
            "status": true
        },
        {
            "id": "2",
            "name": "About Us",
            "alias": "/about",
            "parent": "0",
            "status": true
        },
        {
            "id": "3",
            "name": "Contact Us",
            "alias": "/contact",
            "parent": "0",
            "status": true
        }
    ])
}