export = `
o---PROJECT_NAME # {pn}
o---------COMMON 
o---------COMMON ## Getting Started
o---------COMMON 
o---------COMMON ## Prerequisites
o---------COMMON 
o---------COMMON * Access to a database (MySQL or MongoDB)
o---------COMMON * Enter all environment variables in \`[project-path]/.env\` (This file is hidden by default). Example:
o---------COMMON 
o---------COMMON \`\`\`
o---------COMMON # Server options
o---------COMMON SERVER_HOST=localhost
o---------COMMON SERVER_PORT=3000
o---------COMMON 
o------------JWT # Authentication options
o------------JWT JWT_SECRET=teehee
o------------JWT 
o----------MYSQL # Database credentials
o----------MYSQL DATABASE_HOST=localhost
o----------MYSQL DATABASE_PORT=3306
o----------MYSQL DATABASE_NAME=top_secret
o----------MYSQL DATABASE_USER=admin
o----------MYSQL DATABASE_PASS=password
o---------COMMON \`\`\`
o---------COMMON 
o---------COMMON ### Starting server
o---------COMMON 
o---------COMMON Install packages:
o---------COMMON \`npm update --save\`
o---------COMMON 
o---------COMMON Migrate database:
o---------COMMON \`npm run migrate\`
o---------COMMON 
o---------COMMON Seed database:
o---------COMMON \`npm run seed\`
o---------COMMON 
o---------COMMON Start server:
o---------COMMON \`npm start\`
o---------COMMON 
o---------COMMON ### Running tests
o---------COMMON 
o---------COMMON Install development packages:
o---------COMMON \`npm update --save-dev\`
o---------COMMON 
o---------COMMON Run tests:
o---------COMMON \`npm test\`
o---------COMMON 
o---------COMMON ## Notes
o---------COMMON 
o---------COMMON * Do not share the contents of your \`.env\` file.
o---------COMMON * \`npm update\` will install the latest versions of your stack packages and it can cause npm version conflicts.
`
