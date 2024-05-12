from flask import Blueprint, jsonify
import gradio as gr

# Define the Gradio function and interface
def greet(name):
    return f"Hello {name}!"

interface = gr.Interface(fn=greet, inputs="text", outputs="text")
interface.launch(share=False)
gradio_url = interface.local_url

# Define blueprint
hello_blueprint_gradio = Blueprint('gradio_route', __name__)

@hello_blueprint_gradio.route('/gradio')
def gradio_route():
    return f'<iframe src="{gradio_url}" width="100%" height="500"></iframe>'
