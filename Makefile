start:
	cd frontend && npm run build &
	cd backend && go run main.go

stop:
	pkill -f "vite" && pkill -f "go run main.go"
