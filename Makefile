install: 
	cd frontend && npm install
	cd backend && go mod tidy

start:
	brew services start redis &
	cd frontend && npm run build &
	cd backend && go run main.go


stop:
	pkill -f "vite" && pkill -f "go run main.go" &
	brew services stop redis