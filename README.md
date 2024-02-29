# Next.js 13 App Directory Supported JWT

An example of how we can integrate JWT token authentication to any Next.js 13 app which uses app directory feature.

## Installation:

1. `git clone https://github.com/mehmetpekcan/nextjs-13-jwt-auth-example.git`

2. `cd nextjs-13-jwt-auth-example`

3. `npm install` or `yarn`



## Usage

1. Copy `.env.example` to `.env` or `.env.local`

2. Generate a Random JWT Secret Key: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`

3. Add generated hash code to `NEXT_PUBLIC_JWT_SECRET_KEY` in `.env` file

4. `npm run dev` or `yarn dev`

5. Go to login page and use `admin` for userName and password.

