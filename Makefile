REGISTRY=https://registry.npm.taobao.org
DISTURL=https://npm.taobao.org/dist
MOCHA_PATH=./node_modules/.bin/_mocha
JSHINT_PATH=./node_modules/.bin/jsxhint
GULP_PATH=./node_modules/.bin/gulp

install:
	@npm install \
		--registry=$(REGISTRY) \
		--disturl=$(DISTURL)

clean:
	@rm -rf node_modules

clean-dev:
	@rm -rf f2e/dev && echo "Cleaned."

test:
	@NODE_ENV=test ${MOCHA_PATH} ${ARGS}

lint:
	@${JSHINT_PATH} . --config .jshintrc

dev:
	@${GULP_PATH} dev

watch:
	@${GULP_PATH} watch

.PHONY: test clean-dev
