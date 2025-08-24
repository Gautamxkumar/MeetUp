
<div align="center">
  <img src="https://i.ibb.co/YFVKFXDf/Meetup.png" alt="MeetUp Logo" width="120"/>
</div>

<div align="center">

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
<div class="tech-stack">
  <div class="tech-item">
    <img src="https://i.ibb.co/ZzGVRbG8/node.png" alt="Node.js" />
    <span>NODE.JS</span>
  </div>
  <div class="tech-item">
    <img src="https://i.ibb.co/gbrb97JB/express.png" alt="Express.js" />
    <span>EXPRESS.JS</span>
  </div>
  <div class="tech-item">
    <img src="https://i.ibb.co/wZt5dzR0/mongo.jpg" alt="MongoDB" />
    <span>MONGODB</span>
  </div>
  <div class="tech-item">
    <img src="https://i.ibb.co/70c56rT/jwt.png" alt="JWT" />
    <span>JWT</span>
  </div>
  <div class="tech-item">
    <img src="https://i.ibb.co/MD0B7Qw6/stream.jpg" alt="Stream Chat API" />
    <span>STREAM API</span>
  </div>
  <div class="tech-item">
    <img src="https://i.ibb.co/1J4xFhFn/env.png" alt="dotenv" />
    <span>DOTENV</span>
  </div>
  <div class="tech-item">
    <img src="https://i.ibb.co/FqyMMhsM/cookie-parser.png" alt="cookie-parser" />
    <span>COOKIE-PARSER</span>
  </div>
  <div class="tech-item">
    <img src="https://i.ibb.co/HLwLd3NF/axios.jpg" alt="Axios" />
    <span>AXIOS</span>
  </div>
  <div class="tech-item">
    <img src="https://i.ibb.co/fVFHRjTj/api.png" alt="API" />
    <span>API</span>
  </div>
</div>

### Frontend:
<div class="tech-stack">
  <div class="tech-item">
    <img src="https://i.ibb.co/VYGNzyGG/react.png" alt="React" />
    <span>REACT</span>
  </div>
</div>

<style>
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* space between items */
  align-items: center;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px; /* uniform width for all */
}

.tech-item img {
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 8px; /* optional rounded corners */
  box-shadow: 0 1px 4px rgba(0,0,0,0.2);
  margin-bottom: 5px;
}

.tech-item span {
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
}
</style>

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

1. ![Screenshot 1](https://i.ibb.co/pBSfpq1J/Screenshot-2025-06-30-102803.png)  
   **Frame 1:** Login dashboard with user authentication and quick access to main features.

2. ![Screenshot 2](https://i.ibb.co/TBxXjjdr/Screenshot-2025-06-30-102812.png)  
   **Frame 2:** Login dashboard with user authentication and quick access to main features.

3. ![Screenshot 3](https://i.ibb.co/DPnt6qvw/Screenshot-2025-06-30-102818.png)  
   **Frame 3:** Login dashboard with email, password, and Sign In button.

4. ![Screenshot 4](https://i.ibb.co/zWm0vTj9/Screenshot-2025-06-30-102852.png)  
   **Frame 4:** MeetUp home dashboard with navigation, events, and profile.

5. ![Screenshot 5](https://i.ibb.co/nMS7Gyd5/Screenshot-2025-06-30-102907.png)  
   **Frame 5:** Friend’s profile with settings options.

6. ![Screenshot 6](https://i.ibb.co/TqpFXr3s/Screenshot-2025-06-30-102921.png)  
   **Frame 6:** Chat page with messages and input box.

7. ![Screenshot 7](https://i.ibb.co/XkY12spK/Screenshot-2025-06-30-102932.png)  
   **Frame 7:** Typing.

8. ![Screenshot 8](https://i.ibb.co/TxGFQ99D/Screenshot-2025-06-30-102936.png)  
   **Frame 8:** Chat page with link sharing and video call.

9. ![Screenshot 9](https://i.ibb.co/6R3tctHB/Screenshot-2025-06-30-102958.png)  
   **Frame 9:** Notification prompting to open camera.

10. ![Screenshot 10](https://i.ibb.co/G3k37L1z/Screenshot-2025-06-30-103006.png)  
    **Frame 10:** Video call UI with camera on, emoji, screen share, record, end call, and profile pic.

11. ![Screenshot 11](https://i.ibb.co/20n2XF4Q/Screenshot-2025-06-30-103017.png)  
    **Frame 11:** Home screen with Explore for new learners or friends.

12. ![Screenshot 12](https://i.ibb.co/NgB7HYtD/Screenshot-2025-06-30-103033.png)  
    **Frame 12:** Friend request notification alert.

13. ![Screenshot 13](https://i.ibb.co/MDy4yfF5/Screenshot-2025-06-30-103038.png)  
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

