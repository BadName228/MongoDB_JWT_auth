const { secret } = require("../config");

module.exports = function(roles) {
    return function(req, res, next) {
        if (req.method !== 'OPTIONS') {
            next();
        }
    
        try {
            const token = req.headers.autorization.split(" ")[1];
            if (!token) {
                return res.status(400).json({message: "Пользователь не авторизоваен"});
            }
            const {roles: userRoles} = jwt.verify(token, secret);
            let hasRole = false;
            userRoles.foreEach((role) => {
                if (roles.includes(role)) {
                    hasRole = true;
                }
            })
            if (!hasRole) {
                return res.status(400).json({message: "У вас нету доступа"});
            }
            next();
        } catch (error) {
            console.log(error);
            return res.status(400).json({message: "Пользователь не авторизоваен"});
        }
    }
}