from flask import Flask
from flask_cors import CORS
from routes.goal_routes import get_goals_blueprint,evaluate_goals_blueprint, hello_blueprint, suggest_blueprint,predict_blueprint, suggest_word_blueprint
from routes.action_routes import actions_blueprint, actions_based_on_goals_blueprint
from routes.support_routes import chat_support_blueprint
# from gradioUI.gradio import hello_blueprint_gradio
app = Flask(__name__)



# Apply CORS to all routes
CORS(app)

app.register_blueprint(hello_blueprint)
app.register_blueprint(get_goals_blueprint)
app.register_blueprint(evaluate_goals_blueprint)
app.register_blueprint(suggest_blueprint)
app.register_blueprint(predict_blueprint)
app.register_blueprint(suggest_word_blueprint)
app.register_blueprint(actions_blueprint)
app.register_blueprint(actions_based_on_goals_blueprint)
app.register_blueprint(chat_support_blueprint)
# app.register_blueprint(hello_blueprint_gradio)

if __name__ == '__main__':
    app.run(debug=True, port=5002)


