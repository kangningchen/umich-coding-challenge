from flask import Flask, render_template, request, jsonify
import model

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/sum', methods=['POST'])
def sum():
    string = request.form['string']
    if string:
        s = model.find_sum(string)
        return jsonify({'sum': s})
    return jsonify({'error': 'Hmm...it doesn\'t seem that you gave me a string to work with'})

if __name__ == '__main__':
    app.run(debug=False)