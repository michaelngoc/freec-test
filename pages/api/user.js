export default (req, res) => {
    const params = JSON.parse(req.body);

    const userList = [
        {
            "id": "1",
            "username": "admin",
            "password": "admin",
            "fullname": "Admin",
            "status": true
        }
    ];

    const data = userList.filter((item) => {
        let result = false;

        if (item.username == params.username && item.password == params.password) {
            result = true;
        }

        return result;
    });

    res.status(200).json(data);
}