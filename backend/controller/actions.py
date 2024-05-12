from openai import OpenAI
import json
import os
import pickle
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv() 

# Now you can use the API key
client = OpenAI(api_key = os.getenv("OPENAI_API_KEY"))

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

get_action_response_format = {
  "actions": [
    "Provide 3 concise action steps to complete the task.(9-10 words)",
    "Provide 3 concise action steps to complete the task.(9-10 words)",
    "Provide 3 concise action steps to complete the task.(9-10 words)"
  ]
}

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

def get_actions_based_on_goals(user_input, actions):
    response = client.chat.completions.create(
        model="gpt-3.5-turbo-0125",
        response_format={"type": "json_object"},
        messages=[
            {"role": "system", "content": "You are a uExcelerate coaching platform's assistant AI coach. i will ask you a goal and you will give back 5 action to achieve it in output JSON."},
            {"role": "user", "content": f"This is my goal title = \"{user_input}\". This is my action title = \"{actions}\". Please generate 3 actions only. Please give me in this below format \n\n{json.dumps(get_action_response_format, indent=4)} json"}
        ]
    )
    response_json = response.choices[0].message.content
    return response_json

def get_actions(actions):
    response = client.chat.completions.create(
        model="gpt-3.5-turbo-0125",
        response_format={"type": "json_object"},
        messages=[
            {"role": "system", "content": "You are a uExcelerate coaching platform's assistant AI coach. You will give back 5 any action to achieve it according to leadership in output JSON."},
            {"role": "user", "content": f"This is my action title = \"{actions}\".Please generate 3 actions only. Please give me in this below format \n\n{json.dumps(get_action_response_format, indent=4)} json"}
        ]
    )
    response_json = response.choices[0].message.content
    return response_json



# # Create the assistant
# assistant = client.beta.assistants.create(
#     name="Action Generator",
#     instructions="I will ask you to generate Action Titles, Based on my given goals.",
#     tools=[{"type": "code_interpreter"}],
#     model="gpt-3.5-turbo-1106"
# )

# # Start a thread
# thread = client.beta.threads.create()
# thread_id = thread.id

# def wait_for_run_completion(thread_id, run_id, sleep_interval=5):
#     """
#     Waits for a run to complete and prints the elapsed time.:param client: The OpenAI client object.
#     :param thread_id: The ID of the thread.
#     :param run_id: The ID of the run.
#     :param sleep_interval: Time in seconds to wait between checks.
#     """
#     while True:
#         try:
#             run = client.beta.threads.runs.retrieve(thread_id=thread_id, run_id=run_id)
#             if run.completed_at:
#                 elapsed_time = run.completed_at - run.created_at
#                 formatted_elapsed_time = time.strftime(
#                     "%H:%M:%S", time.gmtime(elapsed_time)
#                 )
#                 print(f"Run completed in {formatted_elapsed_time}")
#                 logging.info(f"Run completed in {formatted_elapsed_time}")
#                 # Get messages here once Run is completed!
#                 messages = client.beta.threads.messages.list(thread_id=thread_id)
#                 last_message = messages.data[0]
#                 response = last_message.content[0].text.value
#                 print(f"Assistant Response: {response}")
#                 break
#         except Exception as e:
#             logging.error(f"An error occurred while retrieving the run: {e}")
#             break
#         logging.info("Waiting for run to complete...")
#         time.sleep(sleep_interval)

# # Define a function to interact with the assistant
# def get_goals_suggestion(user_input):
#     client.beta.threads.messages.create(
#         thread_id=thread_id,
#         role="user",
#         content=user_input
#     )

#     run = client.beta.threads.runs.create(
#         thread_id=thread.id,
#         assistant_id=assistant.id,
#     )

#     wait_for_run_completion(thread_id, run.id)

#     # Retrieve and return assistant's response
#     messages = client.beta.threads.messages.list(thread_id=thread_id)
#     assistant_response = ""
#     for message in reversed(messages.data):
#         assistant_response = message.content[0].text.value

#     return assistant_response
