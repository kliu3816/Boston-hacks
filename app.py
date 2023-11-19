from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/greet/<name>', methods=['GET'])
def greet(name):
    # Generate a greeting message
    greeting = f"Hello, {name}!"

    # Return the response as JSON
    return jsonify({'greeting': greeting})

if __name__ == '__main__':
    app.run(debug=True)