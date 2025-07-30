# Tower of Hanoi - DSA College Assignment

A web-based implementation of the classic **Tower of Hanoi** puzzle game, built as a Data Structures and Algorithms (DSA) college assignment project.

## 📋 Project Overview

The Tower of Hanoi is a mathematical puzzle consisting of three rods and a number of disks of different sizes. The objective is to move all disks from the source rod to the destination rod, following these rules:
- Only one disk can be moved at a time
- Each move consists of taking the upper disk from one stack and placing it on top of another stack
- No disk may be placed on top of a smaller disk

## 🚀 Features

- **Interactive Web Interface**: Drag-and-drop functionality for moving disks
- **Real-time Game State**: Visual representation of all three rods and disks
- **Game Rules Validation**: Prevents invalid moves according to Tower of Hanoi rules
- **Customizable Disk Count**: Start games with different numbers of disks
- **Reset Functionality**: Restart the game at any time
- **Responsive Design**: Works on both desktop and mobile devices

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** with TypeScript
- **Tailwind CSS** for styling
- **Axios** for API communication
- **React Router DOM** for navigation

### Backend
- **Flask 3.0.0** (Python web framework)
- **Flask-CORS** for cross-origin requests
- **Python 3.10.11**

## 📁 Project Structure

```
DSA-Project/
├── backend/
│   ├── main.py                 # Flask API server
│   ├── requirements.txt        # Python dependencies
│   └── requirements-django.txt # Alternative Django setup
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Game.tsx       # Main game component
│   │   │   ├── About.tsx      # About page
│   │   │   └── About-new.tsx  # Updated about page
│   │   ├── App.tsx            # Main app component
│   │   └── index.tsx          # Entry point
│   ├── public/
│   ├── package.json           # Node.js dependencies
│   └── tailwind.config.js     # Tailwind configuration
└── README.md                  # Project documentation
```

## 🔧 Installation & Setup

### Prerequisites
- **Python 3.10+** installed
- **Node.js 16+** and npm installed
- **Git** for version control

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create and activate virtual environment (recommended):**
   ```bash
   # Using conda
   conda create -n dsa-env python=3.10
   conda activate dsa-env
   
   # OR using venv
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Flask server:**
   ```bash
   python main.py
   ```
   
   The backend server will start on `http://localhost:8000`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install Node.js dependencies:**
   ```bash
   npm install
   ```

3. **Start the React development server:**
   ```bash
   npm start
   ```
   
   The frontend will start on `http://localhost:3000`

## 🎮 How to Play

1. **Start the Game**: Open your browser and navigate to `http://localhost:3000`
2. **Set Disk Count**: Choose the number of disks you want to play with
3. **Move Disks**: Click and drag disks from one rod to another
4. **Follow the Rules**: 
   - Only move one disk at a time
   - Cannot place a larger disk on a smaller one
5. **Win Condition**: Move all disks from the leftmost rod (A) to the rightmost rod (C)

## 🔌 API Endpoints

The Flask backend provides the following REST API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/`      | Health check - returns server status |
| GET    | `/state` | Get current game state |
| POST   | `/reset` | Reset game with specified number of disks |
| POST   | `/move`  | Move a disk from one rod to another |

### API Request Examples

**Reset Game:**
```json
POST /reset
{
    "disks": 3
}
```

**Move Disk:**
```json
POST /move
{
    "from_rod": "A",
    "to_rod": "B"
}
```

## 🧮 Algorithm & Data Structures Used

This project demonstrates several key DSA concepts:

1. **Stack Data Structure**: Each rod is implemented as a stack (LIFO - Last In, First Out)
2. **Array/List Operations**: Managing disk positions and movements
3. **Recursion Concept**: The Tower of Hanoi problem is classically solved using recursion
4. **State Management**: Tracking game state across moves
5. **Input Validation**: Ensuring moves follow game rules

## 📚 Learning Objectives

This college assignment project covers:

- **Data Structures**: Understanding and implementing stack operations
- **Algorithm Design**: Problem-solving using systematic approaches
- **Web Development**: Full-stack application development
- **API Design**: RESTful API creation and consumption
- **Version Control**: Git workflow and project management
- **Software Architecture**: Separation of concerns between frontend and backend

## 🐛 Troubleshooting

### Common Issues

1. **Backend won't start**: 
   - Ensure Python 3.10+ is installed
   - Check if all dependencies are installed: `pip install -r requirements.txt`
   - Verify no other service is running on port 8000

2. **Frontend can't connect to backend**:
   - Ensure backend is running on `http://localhost:8000`
   - Check CORS settings in `main.py`
   - Verify frontend is making requests to correct URL

3. **Installation Issues**:
   - For pydantic-core build errors, use Python 3.10 instead of 3.13
   - Use conda environment for better dependency management

## 👨‍🎓 Author

**Viraj Gavade**  
*Computer Science Student*  
*DSA Assignment Project*

## 📄 License

This project is created for educational purposes as part of a college assignment.

## 🙏 Acknowledgments

- **Tower of Hanoi**: Classic mathematical puzzle
- **Flask Documentation**: For backend implementation guidance
- **React Documentation**: For frontend development
- **College DSA Course**: For project requirements and learning objectives

---

*This project was created as part of a Data Structures and Algorithms course assignment to demonstrate understanding of stack data structures and algorithm implementation.*
