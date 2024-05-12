from flask import Blueprint, request, jsonify
from controller.goals import get_goals, evaluate_goals,suggested_goal, get_goals_suggestion, suggest_word
from services.auth import token_required


# Define blueprints
hello_blueprint = Blueprint('get_hello', __name__)
get_goals_blueprint = Blueprint('get_goals', __name__)
evaluate_goals_blueprint = Blueprint('evaluate_goals', __name__)
suggest_blueprint = Blueprint('suggested_goal', __name__)
predict_blueprint = Blueprint('get_goals_suggestion', __name__)
suggest_word_blueprint = Blueprint('suggest_word', __name__)

# Route for a simple hello world
@hello_blueprint.route('/', methods=['GET'])
def hello():
    return 'Hello, World!'

# Routes for getting goals
@get_goals_blueprint.route('/goals', methods=['POST'])
@token_required
def ask_goals():
    data = request.json
    # question = data.get('question')
    goals = data.get('goals')
    role = data.get('role')
    type = data.get('type')
    skills = data.get('skills')
    # dueDate = data.get('duedate')
    # print(dueDate)
    if goals:
        response = get_goals(goals,role,type,skills)
        return jsonify({'response': response}), 200
    else:
        return jsonify({'error': 'Question not provided'}), 400
    
# Routes for evaluating goals
@evaluate_goals_blueprint.route('/smart-goals', methods=['POST'])
@token_required
def ask_smart_goals():
    data = request.json
    goals = data.get('goals')
    if goals:
        response = evaluate_goals(goals)
        return jsonify({'response': response}), 200
    else:
        return jsonify({'error': 'Question not provided'}), 400
    
@suggest_blueprint.route('/suggest-goal', methods=['POST'])
@token_required
def suggest_goal():
    data = request.json
    goals = data.get('goals')
    if goals:
        response = suggested_goal(goals)  # Await the coroutine
        return {'response': response}, 200
    else:
        return jsonify({'error': 'Question not provided'}), 400
    
@predict_blueprint.route('/complete-goal', methods=['POST'])
@token_required
def suggest_goal():
    data = request.json
    goals = data.get('goals')
    if goals:
        response = get_goals_suggestion(goals)  # Await the coroutine
        return {'response': response}, 200
    else:
        return jsonify({'error': 'Question not provided'}), 400
    
@suggest_word_blueprint.route('/word', methods=['POST'])
@token_required
def suggest_word_now():
    data = request.json
    word = data.get('word')
    if word:
        response = suggest_word(word)  # Await the coroutine
        return {'response': response}, 200
    else:
        return jsonify({'error': 'Question not provided'}), 400