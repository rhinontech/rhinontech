from flask import Blueprint, request, jsonify
from controller.actions import get_actions_based_on_goals
from controller.actions import get_actions
from services.auth import token_required


actions_based_on_goals_blueprint = Blueprint('get_actions_based_on_goals', __name__)
actions_blueprint = Blueprint('get_actions', __name__)

# Routes for getting actions
@actions_based_on_goals_blueprint.route('/actions', methods=['POST'])
@token_required
def ask_actions_based_on_goals():
    data = request.json
    goal = data.get('goal')
    action = data.get('action')
    if goal:
        response = get_actions_based_on_goals(goal, action)  # Await the coroutine
        return jsonify({'response': response}), 200
    else:
        return jsonify({'error': 'Question not provided'}), 400
    
# Routes for getting actions
@actions_blueprint.route('/get-actions', methods=['POST'])
@token_required
def ask_actions():
    data = request.json
    goal = data.get('goal')
    action = data.get('action')
    if goal == "" or goal != 'UNKNOWN':
        response = get_actions_based_on_goals(goal, action)  # Await the coroutine
        print("get_actions_based_on_goals")
        return jsonify({'response': response}), 200
    elif goal == 'UNKNOWN':
        response = get_actions(action)  # Await the coroutine
        print("get_actions")
        return jsonify({'response': response}), 200
    else:
        return jsonify({'error': 'Question not provided'}), 400