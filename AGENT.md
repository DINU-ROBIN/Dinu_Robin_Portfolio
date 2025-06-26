# Agent Configuration

## Build/Test/Lint Commands
- **Frontend dev**: `cd Portfolio && npm run dev` (Vite React app)
- **Frontend build**: `cd Portfolio && npm run build`
- **Frontend lint**: `cd Portfolio && npm run lint` (ESLint)
- **Backend server**: `cd backend && python manage.py runserver` (Django)
- **Backend migrations**: `cd backend && python manage.py migrate`
- **Backend tests**: `cd backend && python manage.py test`

## Architecture
- **Frontend**: React + Vite + TypeScript + TailwindCSS in `/Portfolio`
- **Backend**: Django REST API in `/backend` with SQLite database
- **Key modules**: Portfolio, Posts, Contact, Resume apps
- **Static files**: `/Portfolio/public`, `/backend/media`

## Code Style
- **React**: Functional components with hooks, JSX files
- **Imports**: ES6 modules, relative paths preferred
- **Styling**: TailwindCSS classes, no CSS modules
- **Variables**: camelCase for JS, snake_case for Python
- **Files**: kebab-case for components, PascalCase for React components
- **Error handling**: Try/catch blocks, proper HTTP status codes
- **TypeScript**: Enabled in frontend with strict mode
