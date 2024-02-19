deploy:
	@npm run predeploy
	@npm run deploy
.PHONY: deploy

test-a:
	dig www.danielhofferbert.com +noall +answer -t A
	dig www.danielhofferbert.com +noall +answer -t AAAA
.PHONY: test-a