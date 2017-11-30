FROM alpine:3.6

RUN apk update && \
    apk add perl perl-lingua-translit

ADD input.txt /tmp

RUN translit -t "Common DEU" -i /tmp/input.txt

CMD /bin/sh
