.PHONY: test
test: node_modules
	NODE_ENV=test node_modules/.bin/mocha test/suite

.PHONY: coverage
coverage: node_modules
	NODE_ENV=test node_modules/.bin/nyc node_modules/.bin/mocha test/suite
	node_modules/.bin/nyc report --reporter=html

.PHONY: open-coverage
open-coverage:
	open coverage/index.html

.PHONY: lint
lint: node_modules
	node_modules/.bin/standard --fix
	node_modules/.bin/eslint . --ext .js --ext .jsx

.PHONY: build
build: node_modules
	node_modules/.bin/webpack --debug

.PHONY: dist
dist: node_modules
	node_modules/.bin/webpack -p

.PHONY: serve
serve: node_modules
	node_modules/.bin/webpack-dev-server --host 0.0.0.0

node_modules: yarn.lock
	yarn install
	@touch $@

yarn.lock: package.json
	yarn upgrade
	@touch $@
