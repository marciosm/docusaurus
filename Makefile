

generate-api-docs: clean-api-docs
	yarn docusaurus gen-api-docs all

clean-api-docs:
	yarn docusaurus clean-api-docs all

clean:
	yarn run clear

run-dev:
	yarn start

build:
	yarn run build

run: build
	yarn run serve