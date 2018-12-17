# Makefile
# Greg Graham - Orillian Solutions
#
XELATEX=/usr/local/texlive/2016/bin/x86_64-darwin/xelatex

all:
	$(XELATEX) -output-directory ./output src/front.tex
	$(XELATEX) -output-directory ./output src/back.tex

.PHONY: clean

clean:
	rm ./output/*
