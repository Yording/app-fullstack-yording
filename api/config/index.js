'use strict'

module.exports = {
    port: process.env.PORT || 3000,
    db: {
        name: "app-fullstack-yording",
        url: process.env.MONGODB || "mongodb://localhost/app-fullstack-yording"
    }
}