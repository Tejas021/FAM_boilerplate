from ast import dump
from flask import Flask, request
from flask_cors import CORS
from bson.json_util import dumps
import json
from pymongo import MongoClient




app = Flask(__name__)

client = MongoClient("mongodb+srv://admin:admin123@cluster0.7qxt2.mongodb.net/musicfy?retryWrites=true&w=majority")
db=client.NewDb


CORS(app)

@app.route("/createtodos",methods=["POST"])
def create():
    data=json.loads(request.data)
    dcobj =  db.Users.insert_one(
        {
            "title":data["title"],
            
            "completed":False,
            

        }
    )
    print(dcobj)
    return dumps({"title":data["title"],
            
            "completed":False,
            })

@app.route("/gettodos")
def gettodos():
    users=db.Users.find()
    return dumps(users)




@app.route("/")
def index():
    return "home"





if(__name__=="main"):
     app.run(debug=True)