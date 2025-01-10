from flask import Flask, request, jsonify, render_template
import heapq

app = Flask(__name__)

tasks = []

@app.route('/')
def index():
    return render_template('index.html')  

@app.route('/add_task', methods=['POST'])
def add_task():
    try:
        task = request.json
        if 'name' not in task or 'deadline' not in task:
            return jsonify({"error": "Missing task name or deadline"}), 400

        try:
            deadline = int(task['deadline'])
        except ValueError:
            return jsonify({"error": "Deadline must be an integer"}), 400
        
        heapq.heappush(tasks, (deadline, task['name']))
        return jsonify({"message": "Task added successfully!"}), 201
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/get_schedule', methods=['GET'])
def get_schedule():
    schedule = sorted(tasks)  
    return jsonify({"schedule": schedule}), 200

if __name__ == '__main__':
    app.run(debug=True)
