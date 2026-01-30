.PHONY: all clean build build-go build-ui build-ui-windows generate-proto install-deps install-deps-go install-deps-ui test test-go run dev help

# Default target
all: build

# Help target
help:
	@echo "Backrest Build System"
	@echo "====================="
	@echo ""
	@echo "Main targets:"
	@echo "  all                - Build everything (default)"
	@echo "  build              - Build the complete application (UI + Go backend)"
	@echo "  run                - Run the application (builds if needed, Unix/Linux/macOS only)"
	@echo "  dev                - Start development servers (UI dev server)"
	@echo ""
	@echo "Component builds:"
	@echo "  build-go           - Build the Go backend only"
	@echo "  build-ui           - Build the web UI (Unix)"
	@echo "  build-ui-windows   - Build the web UI (Windows)"
	@echo ""
	@echo "Code generation:"
	@echo "  generate-proto     - Generate protobuf files (requires buf/protoc tools)"
	@echo ""
	@echo "Dependencies:"
	@echo "  install-deps       - Install all dependencies (Go + UI)"
	@echo "  install-deps-go    - Install Go dependencies"
	@echo "  install-deps-ui    - Install UI dependencies (pnpm)"
	@echo ""
	@echo "Testing:"
	@echo "  test               - Run all tests"
	@echo "  test-go            - Run Go tests only"
	@echo ""
	@echo "Cleanup:"
	@echo "  clean              - Clean build artifacts"
	@echo ""
	@echo "Note: Generated protobuf files (gen/go/, webui/gen/ts/) are not tracked in git."
	@echo "      They are automatically generated when running 'make build' or 'make all'."
	@echo "      Run 'make generate-proto' manually if you only want to regenerate proto files."

# Install all dependencies
install-deps: install-deps-go install-deps-ui

# Install Go dependencies
install-deps-go:
	go mod download

# Install UI dependencies
install-deps-ui:
	cd webui && pnpm install

# Generate protobuf files (requires buf and protoc tools)
generate-proto:
	cd proto && buf generate

# Build web UI for Unix
build-ui:
	cd webui && pnpm run build

# Build web UI for Windows
build-ui-windows:
	cd webui && pnpm run build-windows

# Build Go backend (requires UI build artifacts to embed)
build-go: build-ui
	cd cmd/backrest && go build -tags=sqlite3_dotlk .

# Build everything
build: generate-proto build-go

# Run tests
test: test-go

# Run Go tests
test-go:
	go test ./... -tags=sqlite3_dotlk

# Run the application (Unix/Linux/macOS)
run: build
	./cmd/backrest/backrest

# Start development mode (UI dev server)
dev:
	cd webui && pnpm run start

# Clean build artifacts
clean:
	cd webui && pnpm run clean
	rm -f cmd/backrest/backrest
	rm -f backrest
