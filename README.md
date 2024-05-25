# ML Prompt - AI Prompt Sharing Application

The ML Prompt is a web-based platform where users can create, read, update, and delete AI prompts. The application uses MongoDB as the primary database for storing user data and prompts, and NextAuth for handling user authentication.

## Tech Stack

-   Next.js
-   MongoDB
-   NextAuth
-   Tailwind CSS

## Features

👉 **Modern Design with Glassmorphism Trend Style**: A modern and visually appealing design, incorporating the glassmorphism trend style for a sleek and contemporary appearance.

👉 **Discover and Share AI Prompts**: Allow users to discover AI prompts shared by the community and create their own prompts to share with the world.

👉 **Edit and Delete Created Prompts**: Users have the ability to edit their created prompts at any time and delete them when needed.

👉 **Profile Page**: Each user gets a dedicated profile page showcasing all the prompts they've created, providing an overview of their contributions.

👉 **View Other People's Profiles**: Users can explore the profiles of other creators to view the prompts they've shared, fostering a sense of community.

👉 **Copy to Clipboard**: Implement a convenient "Copy to Clipboard" functionality for users to easily copy the AI prompts for their use.

👉 **Search Prompts by Specific Tag**: Allow users to search for prompts based on specific tags, making it easier to find prompts related to specific topics.

👉 **Google Authentication using NextAuth**: Enable secure Google authentication using NextAuth, ensuring a streamlined and trustworthy login experience.

👉 **Responsive Website**: Develop a fully responsive website to ensure optimal user experience across various devices, from desktops to smartphones

and many more, including code architecture and reusability

## Quickstart

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

-   [Git](https://git-scm.com/)
-   [Node.js](https://nodejs.org/en)
-   [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/mazharvai007/ml_prompt.git
cd ml_prompt
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=
GOOGLE_ID=
GOOGLE_CLIENT_SECRET=
MONGODB_URI=
```

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on these corresponding websites from [Google Cloud Console](https://console.cloud.google.com/welcome?rapt=AEjHL4MBaLLneW6OfAHf_zgms1eWZFw1wdy0_KIC4uh1nEqh2m4ojOvrXNlzJ4h7CZTkpiWgcsoHbUvS-FMdCP7WIkaVlPAeU7cnVR6Y0wJHeLMOtU6KAzA&project=promptopia-385410), [Cryptpool](https://www.cryptool.org/en/cto/openssl) (for random Auth Secret), and [MongoDB](https://www.mongodb.com/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Summery

The AI Prompt Sharing Application offers a robust and scalable solution for users to share and manage AI prompts. With a secure authentication system, efficient data management, and a user-friendly interface, it aims to foster a collaborative community for AI enthusiasts and developers.
