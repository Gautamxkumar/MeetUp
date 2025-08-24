
<center>
<div align="center">
  <img src="https://i.ibb.co/YFVKFXDf/Meetup.png" alt="MeetUp Logo" width="120"/>
</div>



# **MeetUp 🎥💬**



MeetUp is a **real-time video and chat communities platform** allowing users to **connect, collaborate, and practice new skills through real-time chat, video calls, screen sharing, and interactive conversations**.  

It’s like **Google Meet + Discord** with additional improvements for seamless communication.


---

## 🚀 Features

- 🔑 **User Authentication** – Secure login & registration with JWT and bcrypt.  
- 💬 **Real-time Chat** – Powered by **Stream Chat API** with private & group messaging.  
- 🎥 **Video Streaming** – Join video rooms with peers and enjoy smooth streaming.  
- 🌐 **Cross-Origin Support** – Handled via CORS for frontend-backend integration.  
- 🗄️ **Database Integration** – User & chat data stored in MongoDB.  
- 🔄 **Auto-reload Development** – Using Nodemon for backend development.  

---

## 🛠️ Tech Stack

### Backend:

| Node.js | Express.js | MongoDB | JWT | Stream API |
|---------|------------|---------|-----|------------|
| <img src="https://i.ibb.co/ZzGVRbG8/node.png" width="50"/> | <img src="https://i.ibb.co/gbrb97JB/express.png" width="50"/> | <img src="https://i.ibb.co/wZt5dzR0/mongo.jpg" width="50"/> | <img src="https://i.ibb.co/70c56rT/jwt.png" width="50"/> | <img src="https://i.ibb.co/MD0B7Qw6/stream.jpg" width="50"/> |

| dotenv | cookie-parser | Axios | API |
|--------|---------------|-------|-----|
| <img src="https://i.ibb.co/1J4xFhFn/env.png" width="50"/> | <img src="https://i.ibb.co/FqyMMhsM/cookie-parser.png" width="50"/> | <img src="https://i.ibb.co/HLwLd3NF/axios.jpg" width="50"/> | <img src="https://i.ibb.co/fVFHRjTj/api.png" width="50"/> |

### Frontend:

| React |
|-------|
| <img src="https://i.ibb.co/VYGNzyGG/react.png" width="50"/> |


---

## 📂 Project Structure

# MeetUp Project Structure

- [ ] MeetUp/  
    - [ ] backend/  # ⚙️ Express + MongoDB backend  
        - Runs at: **http://localhost:5000** (default)  
    - [ ] frontend/ # 🎨 React frontend  
        - Build handled by: **npm run build**  
    - [ ] package.json  # 📦 Root scripts for build/start  
    - [ ] README.md  # 📖 Documentation  




---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js >= 16
- MongoDB installed locally or use **MongoDB Atlas**
- Stream Chat API key

### Steps
```bash
# Clone the repo
git clone https://github.com/Gautamxkumar/MeetUp.git
cd MeetUp

# Install dependencies
npm run build

# Start the backend server
npm start

```

# 🔑 Environment Variables

Create a **`.env`** file inside **`/backend`** with the following content:

```env
PORT=5000  
MONGO_URI=your_mongodb_uri  
JWT_SECRET=your_secret_key  
STREAM_API_KEY=your_stream_key  
STREAM_API_SECRET=your_stream_secret  
```

# 📸 Screenshots

Below are screenshots of the app with frame pointers for clarity:

1. <img src="https://i.ibb.co/pBSfpq1J/Screenshot-2025-06-30-102803.png" width="300"/>  

    **Frame 1:** Login dashboard with user authentication and quick access to main features.

3. <img src="https://i.ibb.co/TBxXjjdr/Screenshot-2025-06-30-102812.png" width="300"/>  

    **Frame 2:** Login dashboard with user authentication and quick access to main features.

5. <img src="https://i.ibb.co/DPnt6qvw/Screenshot-2025-06-30-102818.png" width="300"/>  

    **Frame 3:** Login dashboard with email, password, and Sign In button.

7. <img src="https://i.ibb.co/zWm0vTj9/Screenshot-2025-06-30-102852.png" width="300"/>  

    **Frame 4:** MeetUp home dashboard with navigation, events, and profile.

9. <img src="https://i.ibb.co/nMS7Gyd5/Screenshot-2025-06-30-102907.png" width="300"/>  
 
   **Frame 5:** Friend’s profile with settings options.

10. <img src="https://i.ibb.co/TqpFXr3s/Screenshot-2025-06-30-102921.png" width="300"/>  
 
   **Frame 6:** Chat page with messages and input box.

11. <img src="https://i.ibb.co/XkY12spK/Screenshot-2025-06-30-102932.png" width="300"/>  
 
   **Frame 7:** Typing.

12. <img src="https://i.ibb.co/TxGFQ99D/Screenshot-2025-06-30-102936.png" width="300"/>  
 
   **Frame 8:** Chat page with link sharing and video call.

13. <img src="https://i.ibb.co/6R3tctHB/Screenshot-2025-06-30-102958.png" width="300"/>  
  
   **Frame 9:** Notification prompting to open camera.

14. <img src="https://i.ibb.co/G3k37L1z/Screenshot-2025-06-30-103006.png" width="300"/>  

    **Frame 10:** Video call UI with camera on, emoji, screen share, record, end call, and profile pic.

15. <img src="https://i.ibb.co/20n2XF4Q/Screenshot-2025-06-30-103017.png" width="300"/>  
  
    **Frame 11:** Home screen with Explore for new learners or friends.

16. <img src="https://i.ibb.co/NgB7HYtD/Screenshot-2025-06-30-103033.png" width="300"/>  

    **Frame 12:** Friend request notification alert.

17. <img src="https://i.ibb.co/MDy4yfF5/Screenshot-2025-06-30-103038.png" width="300"/>  
  
    **Frame 13:** Theme change dropdown menu.






# 👨‍💻 Development Scripts

## 📦 Install Dependencies
- **Backend**
```bash
npm install --prefix backend
```

- **Frontend**
```bash
npm install --prefix frontend
```

## 🏗️ Build Frontend
```bash
npm run build --prefix frontend
```

## 🚀 Run Backend (with nodemon in dev)
```bash
npm run start --prefix backend
```
# 🗺️ Roadmap

## ✅ Current Progress
- [x] Backend setup with **Express & MongoDB**  
- [x] **JWT authentication** & secure login  
- [x] **Stream Chat API** integration  
- [x] **Video call** room creation  
- [x] **Frontend integration** with backend  

## 🎯 Future Goals
- [ ] **Mobile app** (React Native)  
- [ ] **AI-based meeting transcription & summaries**  
- [ ] **AI-powered meeting highlights & action items**  
- [ ] **Real-time language translation in meetings**  
- [ ] **Smart agenda & scheduling assistant**  
- [ ] **AI-driven participant engagement analytics**  



---




## Contact Us

# 📇 Contact Me - Gautam Kumar

---

## 👤 Personal Information
- **Name:** Gautam Kumar  
- **Degree:** B.Tech  
- **Branch:** Electronics and Communication Engineering  
- **Institute:** National Institute Of Technology, Patna  

---

## 💼 Contact Details

- **Email (Personal):** siddharthgtm236@gmail.com  
- **Email (College):** gautamk.ug22.ec@nitp.ac.in  

---

## 🌐 Online Profiles
- **GitHub:** [GitHub Profile](https://github.com/Gautamxkumar)  
- **LinkedIn:** [LinkedIn Profile](https://www.linkedin.com/in/gautam-kumar-7b83332a0/)  

---

## 💡 Notes
This file can be used to quickly access all contact details in one place. Keep it private or share selectively.  

