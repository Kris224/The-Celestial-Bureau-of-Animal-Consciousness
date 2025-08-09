<img width="3188" height="1202" alt="frame (3)" src="https://github.com/user-attachments/assets/517ad8e9-ad22-457d-9538-a9e62d137cd7" />

# The Celestial Bureau of Animal Consciousness 🎯

## Basic Details
### Team Name: Cypher

### Team Members
- Team Lead: Jyotsna Menon - NSS College of Engineering
- Member 2: Harikrishnan A - NSS College of Engineering

### Project Description
Welcome to **The Ministry of Absurd Inventions**, a digital hub for AI-powered pet applications. Our flagship department, **The Celestial Bureau of Consciousness**, processes, analyzes, and interprets your pet's dreams. All data is processed using our proprietary, needlessly complex **Base 44** computational framework to ensure maximum inefficiency and bureaucratic purity.

### The Problem (that doesn't exist)
For generations, pet dreams have been processed using chaotic, non-standard numeral systems (like the laughably simplistic Base 10). This anarchy in data representation makes proper, secure archiving impossible. The lack of a unified, overly complicated data standard represents a monumental failure in domestic administration. How can we trust dream data that isn't even encoded properly?

### The Solution (that nobody asked for)
Our revolutionary system converts all pet-related subconscious data into the Ministry-mandated **Base 44** format. This ensures every dream, from the simplest squirrel chase to the most profound existential nap, is encoded with purpose. By submitting a photo, our AI-powered clerks will assign a Base 44 case number (e.g., `CASE FILE #G7K-R2_9`), generate a **Dream Interpretation Report (Form 109-ZZZ)**, and provide a monotonous audio reading for your permanent records.

## Technical Details
### Technologies/Components Used
For Software:
- **Languages:**  JavaScript
- **Core Logic:** A custom **`Base44-py`** library for all numeral system conversions and calculations.
- **Frontend:** Next.js, Tailwind CSS, with custom components to render and parse Base 44 numerals.
- **Backend:** Flask. All internal logic, case file numbering, and data processing are handled exclusively in Base 44.
- **AI/ML:** OpenAI GPT-4, Pillow, gTTS.
- **Database & Storage:** PostgreSQL, Cloudinary.
- **Tools:** Git, VS Code.

### Implementation
For Software:
Home Page
<img width="2131" height="1237" alt="Screenshot 2025-08-09 061515" src="https://github.com/user-attachments/assets/e60c18d8-2cbf-469e-83e0-570dedae6932" />
Dream
<img width="2121" height="1243" alt="Screenshot 2025-08-09 062018" src="https://github.com/user-attachments/assets/dec8b336-ed84-4f16-a30f-517d0b02b9d3" />

<img width="2125" height="1218" alt="Screenshot 2025-08-09 062103" src="https://github.com/user-attachments/assets/16d98059-cf65-4cf4-9833-13b6fe842a35" />

# Installation
```
1. Clone the repository:
   bash
   git clone https://github.com/Kris224/The-Celestial-Bureau-of-Animal-Consciousness.git


2.  Install backend dependencies (includes our custom `Base44-py` library):
  ```bash
    cd backend
    pip install -r requirements.txt
    ```
3.  Install frontend dependencies:
    ```bash
    cd ../frontend
    npm install
    ```

# Run

1.  Start the backend server (from the `backend` directory):
    ```bash
    flask run
    ```
2.  Start the frontend development server (from the `frontend` directory):
    ```bash
    npm run dev
    ```
3.  Open your browser and navigate to `http://localhost:3000`.
```

# Screenshots (Add at least 3)
Home Page
<img width="2131" height="1237" alt="Screenshot 2025-08-09 061515" src="https://github.com/user-attachments/assets/e60c18d8-2cbf-469e-83e0-570dedae6932" />
Dream
<img width="2121" height="1243" alt="Screenshot 2025-08-09 062018" src="https://github.com/user-attachments/assets/dec8b336-ed84-4f16-a30f-517d0b02b9d3" />

<img width="2125" height="1218" alt="Screenshot 2025-08-09 062103" src="https://github.com/user-attachments/assets/16d98059-cf65-4cf4-9833-13b6fe842a35" />
Match
<img width="2123" height="1210" alt="Screenshot 2025-08-09 062246" src="https://github.com/user-attachments/assets/25785308-5256-4700-b270-0cd803c0dc39" />

<img width="2122" height="1222" alt="Screenshot 2025-08-09 062708" src="https://github.com/user-attachments/assets/6ed210f3-3e7c-4b80-9f3d-2be82c2dfba1" />

<img width="2125" height="1203" alt="Screenshot 2025-08-09 062726" src="https://github.com/user-attachments/assets/ee93824b-f625-4c18-9272-bdb67af83bea" />

<img width="2119" height="1212" alt="Screenshot 2025-08-09 062428" src="https://github.com/user-attachments/assets/1a7f2ff4-32d9-4edb-a339-60a6ea8c7354" />

<img width="2093" height="1205" alt="Screenshot 2025-08-09 062446" src="https://github.com/user-attachments/assets/73e3ff4a-0b9f-4b94-b9c6-7db40ab103b0" />

<img width="2100" height="1165" alt="Screenshot 2025-08-09 062402" src="https://github.com/user-attachments/assets/eccfa9fa-2394-464e-977e-e4eb5838190e" />

# Diagrams

```mermaid
graph TD
    A[User] -- Uploads Photo & Name --> B(Frontend - Next.js);
    B -- API Request --> C(Backend - Flask);
    C -- Converts data to/from Base 44 --> C1(Base44-py Module);
    C -- Generates Prompt --> D(OpenAI GPT-4 API);
    D -- Returns Dream Analysis --> C;
    C -- Generates Audio --> E(gTTS);
    E -- Returns Audio File --> C;
    C -- Sends Report & Audio URL --> B;
    B -- Displays Report w/ Base 44 Numerals --> A;
```
# Build Photos

<img width="2122" height="1222" alt="Screenshot 2025-08-09 062708" src="https://github.com/user-attachments/assets/6ed210f3-3e7c-4b80-9f3d-2be82c2dfba1" />

<img width="2125" height="1203" alt="Screenshot 2025-08-09 062726" src="https://github.com/user-attachments/assets/ee93824b-f625-4c18-9272-bdb67af83bea" />

<img width="2119" height="1212" alt="Screenshot 2025-08-09 062428" src="https://github.com/user-attachments/assets/1a7f2ff4-32d9-4edb-a339-60a6ea8c7354" />

<img width="2093" height="1205" alt="Screenshot 2025-08-09 062446" src="https://github.com/user-attachments/assets/73e3ff4a-0b9f-4b94-b9c6-7db40ab103b0" />

<img width="2100" height="1165" alt="Screenshot 2025-08-09 062402" src="https://github.com/user-attachments/assets/eccfa9fa-2394-464e-977e-e4eb5838190e" />


### Project Demo

# Video
https://youtu.be/h8zpCod3HMc

# Additional Demos
  https://app--the-celestial-bureau-of-animal-cons-99e4c2a4.base44.app/
## Team Contributions

  - **Jyotsna Menon**: Team Lead; developed the `Base44-py` core library and implemented all Base 44 backend logic in Flask; AI integration.
  - **Harikrishnan A**: Frontend Development; created the custom Next.js components to correctly display and handle Base 44 data; UI/UX and styling.

-----

Made with ❤️ and unnecessary complexity at TinkerHub Useless Projects

```
```
