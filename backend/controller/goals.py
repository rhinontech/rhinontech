from openai import OpenAI
import json
import os
import pickle
from dotenv import load_dotenv
# import pandas as pd
# import torch
# from transformers import GPT2LMHeadModel, GPT2Tokenizer

# Load environment variables from .env file
load_dotenv() 

# Now you can use the API key
client = OpenAI(api_key = os.getenv("OPENAI_API_KEY"))

# # Load the GPT-2 model
# model = GPT2LMHeadModel.from_pretrained("gpt2")

# # Load the trained model
# with open(os.path.join(current_dir, 'gpt2_model.pkl'), 'rb') as f:
#     model.load_state_dict(torch.load(f))
#     tokenizer = GPT2Tokenizer.from_pretrained("gpt2")

# Get the directory of the current script
current_dir = os.path.dirname(os.path.abspath(__file__))

def modal_path(path):
    return os.path.abspath(os.path.join(current_dir, '..', 'resources', 'models', path))

# Load the trained model
with open(modal_path('model.pkl'), 'rb') as f:
    keyword_model = pickle.load(f)

# Load the CountVectorizer
with open(modal_path('vectorizer.pkl'), 'rb') as f:
    vectorizer = pickle.load(f)

with open(modal_path('keyword_matching_model.pkl'), 'rb') as f:
    matching_keyword = pickle.load(f)

# Function to find closest matching keyword
def find_closest_matching_keyword(input_text, df):
    max_match = 0
    closest_keyword = None
    for col in df.columns:
        for keyword in df[col]:
            match_len = 0
            while match_len < len(input_text) and match_len < len(keyword) and input_text[match_len] == keyword[match_len]:
                match_len += 1
            if match_len == len(input_text) and match_len > max_match:
                max_match = match_len
                closest_keyword = keyword
    return closest_keyword

get_goals_response_format = {
    "Goals": [
       {
            "Goal 1": "[Create a full Goal with SMART details(concentrate on one skill at a time, try to make the goal based on the skills, role and type.)]",
       },
       {
            "Goal 2": "[Create a full Goal with SMART details(concentrate on one skill at a time, try to make the goal based on the skills, role and type.)]",
       },
       {
            "Goal 3": "[Create a full Goal with SMART details(concentrate on one skill at a time, try to make the goal based on the skills, role and type.)]",
       }
    ]
}

get_goals_suggestion_format = {
    "next_words": "[Please give us the next 4-5 words only.(try to keep words as user is writing a goal)]"
}

evaluate_goal_response_format = {
    "data": [
       {
            "key": "specific",
            "value": "[True/False]"
       },
       {
            "key": "measurable",
            "value": "[True/False]"
       },
       {
            "key": "achievable",
            "value": "[True/False]"
       },
       {
            "key": "relevant",
            "value": "[True/False]"
       },
       {
            "key": "time_bouund",
            "value": "[True/False]"
       }
    ],
    "isSmart": "[True/False. (Please analyze very strictly)]",
    "isSmartRating": "[please give a percentage of being smart out of 100%. (Please analyze very strictly)]",
    "feedback": "[very weak, weak, moderate, strong, very strong. (Please analyze very strictly)]"
}



roles_levels = {
    "Individual contributor": "Professionals are usually individuals, who follow standard work routines",
    "Managing Team": "Individuals are Managers, who must have command of procedures & systems and manage individual contributors",
    "Managing Managers": "Professionals are Managers of Managers, who have thorough understanding of their work principles of their line of functions/business",
    "Managing Function": "Professionals are functional managers, who are experts and manage a large set of teams to deliver results in the field of their profession",
    "Managing Business": "Professionals are Business managers, who manage multiple functions and are competent in running a small and mid-size organization or Unit P&L of a large business",
    "Managing Enterprise": "Professionals are CEOs and Group CXOs, who manage multiple business managers and are experts in running large-size organizations or conglomerate"
}

def get_goals(goal, role, type, skills):
    response = client.chat.completions.create(
        model="gpt-3.5-turbo-0125",
        response_format={ "type": "json_object" },
        messages= [
                {"role": "system", "content": f"You are a uExcelerate coaching platform's assistant AI coach. I will ask you a goal and you will enhance it. Please give me a better SMART Goal keeping these roles in mind, and according to the roles, to achieve it in the output JSON format. \n\n{json.dumps(roles_levels, indent=4)} "},
                {"role": "user", "content": f"This is my Goal = \"{goal}\".\n\nThis is my Industry Role = \"{role}\".\n\nThis is my Industry Type = \"{type}\".\n\nThese are my skills = \"{skills}\".\n\nPlease provide a SMART Goal based on role, type, and skills. The SMART Goal should be specific, measurable, achievable, relevant, and time-bound. Please provide the SMART Goal in the following format:\n\n{json.dumps(get_goals_response_format, indent=4)}"}
            ]
    )
    response_json = json.loads(response.choices[0].message.content)
    
    return response_json

def evaluate_goals(user_input):
    response = client.chat.completions.create(
        model="gpt-3.5-turbo-0125",
        response_format={ "type": "json_object" },
        messages= [
            {"role": "system", "content": "You are a uExcelerate coaching platform's assistant AI coach. I will ask you a goal and you will evaluate if the goal is SMART or not."},
            {"role": "user", "content": f"This is my Goal = \"{user_input}\". Can you please check if this goal is a SMART or not. Please give me in this below format \n\n{json.dumps(evaluate_goal_response_format, indent=4)} json"}
        ]
    )
    response_json = json.loads(response.choices[0].message.content)
    
    return response_json

def suggested_goal(keyword):
    new_keywords_vec = vectorizer.transform([keyword])
    probabilities = keyword_model.predict_proba(new_keywords_vec)[0]  # Predict probabilities for each class
    top_predicted_indices = probabilities.argsort()[-5:][::-1]  # Get the indices of top 5 predicted classes
    top_predicted_goals = keyword_model.classes_[top_predicted_indices].tolist()
    return top_predicted_goals

def get_goals_suggestion(user_input):
    response = client.chat.completions.create(
        model="gpt-3.5-turbo-0125",
        response_format={"type": "json_object"},
        messages=[
            {"role": "system", "content": "You are a uExcelerate coaching platform's auto completion bot. You will be given an incomplete statement, just give us the next 4-5 words."},
            {"role": "user", "content": f"This is my incomplete title = \"{user_input}\". Please predict the next 4-5 words, to complete a goal. Please give me in this below format \n\n{json.dumps(get_goals_suggestion_format, indent=4)} json"}
        ]
    )
    response_json = response.choices[0].message.content
    return response_json

def suggest_word(word):
    closest_matching_keyword = find_closest_matching_keyword(word, matching_keyword)
    return closest_matching_keyword