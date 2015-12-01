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

test:
	@${MOCHA_PATH} ${ARGS}

lint:
	@${JSHINT_PATH} . --config .jshintrc

build-dev:
	@${GULP_PATH} build-dev

rebuild-dev:
	@rm -rf f2e/build && ${GULP_PATH} build-dev

.PHONY: test
