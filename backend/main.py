from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000", "http://localhost:3001"])

# Global game state
game_state = {
    "A": [],
    "B": [],
    "C": []
}

@app.route("/")
def root():
    return {"message": "Server is running"}

@app.route("/reset", methods=["POST"])
def reset_game():
    data = request.get_json()
    disks = data.get("disks")
    
    if not disks or not isinstance(disks, int) or disks <= 0:
        return jsonify({"error": "Invalid number of disks"}), 400
    
    # Reset game state: A gets disks from N to 1, B and C are empty
    game_state["A"] = list(range(disks, 0, -1))  # [N, N-1, ..., 2, 1]
    game_state["B"] = []
    game_state["C"] = []
    
    return jsonify(game_state)

@app.route("/state", methods=["GET"])
def get_state():
    return jsonify(game_state)

@app.route("/move", methods=["POST"])
def move_disk():
    data = request.get_json()
    from_rod = data.get("from_rod", "").upper()
    to_rod = data.get("to_rod", "").upper()
    
    # Validate rod names
    if from_rod not in game_state or to_rod not in game_state:
        return jsonify({"error": "Invalid rod name. Use A, B, or C."}), 400
    
    # Check if source rod is not empty
    if not game_state[from_rod]:
        return jsonify({"error": "Source rod is empty."}), 400
    
    # Get the disk to move (top disk from source rod)
    disk_to_move = game_state[from_rod][-1]
    
    # Check if we can place the disk on the destination rod
    if game_state[to_rod] and game_state[to_rod][-1] < disk_to_move:
        return jsonify({"error": "Cannot place a larger disk on a smaller disk."}), 400
    
    # Perform the move
    game_state[from_rod].pop()
    game_state[to_rod].append(disk_to_move)
    
    return jsonify(game_state)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8000)
