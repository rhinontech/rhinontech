from flask import Blueprint, request, jsonify
from controller.support import chat_support
from services.auth import token_required

chat_support_blueprint = Blueprint('chat_support', __name__)

@chat_support_blueprint.route('/chat', methods=['POST'])
@token_required
def chat_assistant():
    data = request.json
    question = data.get('question')
    if question:
        response = chat_support(question)  # Await the coroutine
        return jsonify({'response': response}), 200
    else:
        return jsonify({'error': 'Question not provided'}), 400