deploy:
	@npm run predeploy
	@npm run deploy
.PHONY: deploy

test-a:
	dig danielhofferbert.com +noall +answer -t A
.PHONY: test-a