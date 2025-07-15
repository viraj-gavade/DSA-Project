from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict

app = FastAPI()

# Global game state
game_state: Dict[str, List[int]] = {
    "A": [],
    "B": [],
    "C": []
}

# Pydantic models
class ResetRequest(BaseModel):
    disks: int

class MoveRequest(BaseModel):
    from_rod: str
    to_rod: str

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Server is running"}

@app.post("/reset")
async def reset_game(request: ResetRequest):
    # Reset game state: A gets disks from N to 1, B and C are empty
    game_state["A"] = list(range(request.disks, 0, -1))  # [N, N-1, ..., 2, 1]
    game_state["B"] = []
    game_state["C"] = []
    
    return game_state

@app.get("/state")
async def get_state():
    return game_state

@app.post("/move")
async def move_disk(request: MoveRequest):
    from_rod = request.from_rod.upper()
    to_rod = request.to_rod.upper()
    
    # Validate rod names
    if from_rod not in game_state or to_rod not in game_state:
        raise HTTPException(status_code=400, detail="Invalid rod name. Use A, B, or C.")
    
    # Check if source rod is not empty
    if not game_state[from_rod]:
        raise HTTPException(status_code=400, detail="Source rod is empty.")
    
    # Get the disk to move (top disk from source rod)
    disk_to_move = game_state[from_rod][-1]
    
    # Check if we can place the disk on the destination rod
    if game_state[to_rod] and game_state[to_rod][-1] < disk_to_move:
        raise HTTPException(status_code=400, detail="Cannot place a larger disk on a smaller disk.")
    
    # Perform the move
    game_state[from_rod].pop()
    game_state[to_rod].append(disk_to_move)
    
    return game_state
