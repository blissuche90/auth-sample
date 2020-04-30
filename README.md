# auth Sample using Node js


# To Use:
Requires: node and mongoDB

1. clone this repository
2. cd auth_sample
3. npm install
4. npm run dev


# SMAPLE ENV:
JWT_SECRET=addjsonwebtokensecretherelikeQuiscustodietipsoscustodes

MONGO_LOCAL_CONN_URL=mongodb://127.0.0.1:27017

MONGO_DB_NAME=auth-test-andela

NODE_ENV=development


# ENDPOINTS:


1. api/v1/users [POST]   [Used For Registration Purposes]
2. api/v1/users [GET]    [Retrieve all user's for Admin previliedges]
3. api/v1/login [POST]    [For Login purposes]

4. api/v1/next [GET]    [Retrieve next index integer]

# Reasons:

api/v1 extension is used to allow versioning of api endpoint purposes.



