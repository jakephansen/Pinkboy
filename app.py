import os
from flask import Flask, jsonify, request
from flask_cors import CORS
from werkzeug.utils import secure_filename


# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
CORS(app)
UPLOAD_FOLDER = '/uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# sanity check route
@app.route('/commish', methods=['GET', 'POST'])
def add_commission():
    response_object = {'status': 'success'}
    if request.method == "GET":
        print("still workin")
        return jsonify('Please upload photo that you wish to be created by PinkboyEB')
    if request.method == "POST":
        cur_path = "/Users/jacobhansen/Documents/Pinkboy"
        cur_path += "/uploads/"
        print(cur_path)
        print("POSTTTTT")
        uploaded = request.files['file']
        filename = secure_filename(uploaded.filename)
        save_path = cur_path + filename
        uploaded.save(save_path)
        return jsonify(response_object)

if __name__ == '__main__':
    app.run()
