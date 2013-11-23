REPORTER=dot

serve: node_modules
	@node_modules/serve/bin/serve -Sloj

test: node_modules
	@sed 's/abs-svg-path/.\//' < Readme.md | node_modules/jsmd/bin/jsmd

node_modules: *.json
	@packin install -Re\
		--meta deps.json,package.json,component.json \
		--folder node_modules

.PHONY: serve test