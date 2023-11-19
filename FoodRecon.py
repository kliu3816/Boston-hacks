import requests
import json
import base64
import os
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/api/foodrecog/', methods = ['GET'])

    
def foodrecog():
    

    def get_image_base64_encoding(image_path: str) -> str:
        """
        Function to return the base64 string representation of an image
        """
        with open(image_path, 'rb') as file:
            image_data = file.read()
        image_extension = os.path.splitext(image_path)[1]
        base64_encoded = base64.b64encode(image_data).decode('utf-8')
        return f"data:image/{image_extension[1:]};base64,{base64_encoded}"


    def asticaAPI(endpoint, payload, timeout):
        response = requests.post(endpoint, data=json.dumps(payload), timeout=timeout, headers={ 'Content-Type': 'application/json', })
        if response.status_code == 200:
            return response.json()
        else:
            return {'status': 'error', 'error': 'Failed to connect to the API.'}


    # API configurations
    asticaAPI_key = 'A21F919D-9B3A-420E-8F67-04403D45F90108CDD797-FB57-4E71-94FD-69817372133C'  # visit https://astica.ai
    asticaAPI_timeout = 25 # in seconds. "gpt" or "gpt_detailed" require increased timeouts
    asticaAPI_endpoint = 'https://vision.astica.ai/describe'
    asticaAPI_modelVersion = '2.1_full' # '1.0_full', '2.0_full', or '2.1_full'


    asticaAPI_input = get_image_base64_encoding(r"c:\Users\adenl\Downloads\Homemade-Mozzarella-Sticks-Recipe-1-of-1.jpg")  # use base64 image input (slower)


    # vision parameters:  https://astica.ai/vision/documentation/#parameters
    asticaAPI_visionParams = 'gpt,describe,objects,faces'  # comma separated, defaults to "all". 
    asticaAPI_gpt_prompt = '' # only used if visionParams includes "gpt" or "gpt_detailed"
    asticaAPI_prompt_length = '90' # number of words in GPT response

    # Define payload dictionary
    asticaAPI_payload = {
        'tkn': asticaAPI_key,
        'modelVersion': asticaAPI_modelVersion,
        'visionParams': asticaAPI_visionParams,
        'input': asticaAPI_input,
    }
    # call API function and store result

    asticaAPI_result = asticaAPI(asticaAPI_endpoint, asticaAPI_payload, asticaAPI_timeout)

    # print API output
    return json.dumps(asticaAPI_result, indent=4)


if __name__ == '__main__':
    app.run(debug=True)




