from flask import Flask,request,jsonify
import jwt
from functools import wraps
from dotenv import load_dotenv
import os
import logging

load_dotenv()

flask_app=Flask(__name__)
flask_app.config['SECRET_KEY'] = os.getenv("jwtSecret")

logger_file = os.getenv("LOGGER_FILE")
logger_format =  os.getenv("LOGGER_FORMAT")

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        authData = None
        token = request.headers.get('Authorization')
        logging.debug("Received token:" + token)
        if not token:
            return jsonify({'message' : 'Token is missing!'}), 403
        if 'Bearer' in token.split(" "):
            token = token.replace("Bearer ", "")
            # print("After Bearer removed ==> ",token)

        try: 
            authData = jwt.decode(token, flask_app.config['SECRET_KEY'], algorithms='HS256')
            logging.debug("Decoded authData:{0}".format(authData))
            userId = int(authData['userId'])

            logging.debug("Decoded userId:{0}".format(userId))
            if(userId < 0):
                return jsonify({'message' : 'Token is invalid!'}), 403
        except OSError as err:
            logging.error("OS error: {0}".format(err))
            return jsonify({'message' : 'Token is invalid!'}), 403

        logging.debug("Return authData:", jsonify(authData))
        return f(*args, **kwargs)

    return decorated

