deploy:
	@npm run build
	@npm run deploy
.PHONY: deploy

build:
	@npm run build
.PHONY: build

test-a:
	dig www.danielhofferbert.com +noall +answer -t A
	dig www.danielhofferbert.com +noall +answer -t AAAA
.PHONY: test-a