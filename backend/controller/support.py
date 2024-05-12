from openai import OpenAI
import time
import logging
import json

# Initialize the OpenAI client

# Create the assistant
assistant = client.beta.assistants.create(
    name="Support Assistant",
    instructions="You are a uExcelerate coaching platform's assistant AI coach. You will help users to get started, or to navigate around the platform",
    tools=[{"type": "code_interpreter"}],
    model="gpt-3.5-turbo-1106"
)

# Start a thread
thread = client.beta.threads.create()
thread_id = thread.id

# get_goals_response_format = {
#     "title": "[make is more accurate or correct the sentence]",
#     "description": "[Provide a brief description of this title]",
#     "steps": "[Provide 5 steps to complete it.(each step should be small, like i need in 3-4 words only)]",
# }

def wait_for_run_completion(thread_id, run_id, sleep_interval=5):
    while True:
        try:
            run = client.beta.threads.runs.retrieve(thread_id=thread_id, run_id=run_id)
            if run.completed_at:
                elapsed_time = run.completed_at - run.created_at
                formatted_elapsed_time = time.strftime(
                    "%H:%M:%S", time.gmtime(elapsed_time)
                )
                print(f"Run completed in {formatted_elapsed_time}")
                logging.info(f"Run completed in {formatted_elapsed_time}")
                # Get messages here once Run is completed!
                messages = client.beta.threads.messages.list(thread_id=thread_id)
                last_message = messages.data[0]
                response = last_message.content[0].text.value
                print(f"Assistant Response: {response}")
                break
        except Exception as e:
            logging.error(f"An error occurred while retrieving the run: {e}")
            break
        logging.info("Waiting for run to complete...")
        time.sleep(sleep_interval)

# Define a function to interact with the assistant
def chat_support(user_input):
    client.beta.threads.messages.create(
        thread_id=thread_id,
        role="user",
        content=user_input
        # content = f"This is my goal = \"{user_input}\", Please give me in this below format \n\n{json.dumps(get_goals_response_format, indent=4)}"
    )

    run = client.beta.threads.runs.create(
        thread_id=thread.id,
        assistant_id=assistant.id,
    )

    wait_for_run_completion(thread_id, run.id)

    # Retrieve and return assistant's response
    messages = client.beta.threads.messages.list(thread_id=thread_id)
    assistant_response = ""
    for message in reversed(messages.data):
        assistant_response = message.content[0].text.value

    return assistant_response